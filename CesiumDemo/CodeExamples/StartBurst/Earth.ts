﻿let viewer = new Cesium.Viewer('cesiumContainer', {
    selectionIndicator: false
});

// Add labels clustered at the same location
let numBillboards = 30;
for (let i = 0; i < numBillboards; ++i) {
    let position = Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883);
    viewer.entities.add({
        position: position,
        billboard: {
            image: '../images/facility.gif',
            scale: 2.5
        },
        label: {
            text: 'Label' + i,
            show: false
        }
    });
}

let scene = viewer.scene;
let camera = scene.camera;
let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

handler.setInputAction(function (movement) {
    // Star burst on left mouse click.
    starBurst(movement.position);
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

handler.setInputAction(function (movement) {
    // Remove the star burst when the mouse exits the circle or show the label of the billboard the mouse is hovering over.
    updateStarBurst(movement.endPosition);
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

camera.moveStart.addEventListener(function () {
    // Reset the star burst on camera move because the lines from the center
    // because the line end points rely on the screen space positions of the billboards.
    undoStarBurst();
});

// State saved across mouse click and move events
let starBurstState = {
    enabled: false,
    pickedEntities: undefined,
    billboardEyeOffsets: undefined,
    labelEyeOffsets: undefined,
    linePrimitive: undefined,
    radius: undefined,
    center: undefined,
    pixelPadding: 10.0,
    angleStart: 0.0,
    angleEnd: Cesium.Math.PI,
    maxDimension: undefined
};

function offsetBillboard(entity, entityPosition, angle, magnitude, lines, billboardEyeOffsets, labelEyeOffsets) {
    let x = magnitude * Math.cos(angle);
    let y = magnitude * Math.sin(angle);

    let offset = new Cesium.Cartesian2(x, y);

    let drawingBufferWidth = scene.drawingBufferWidth;
    let drawingBufferHeight = scene.drawingBufferHeight;

    let diff = Cesium.Cartesian3.subtract(entityPosition, camera.positionWC, new Cesium.Cartesian3());
    let distance = Cesium.Cartesian3.dot(camera.directionWC, diff);

    let dimensions = camera.frustum.getPixelDimensions(drawingBufferWidth, drawingBufferHeight, distance, new Cesium.Cartesian2());
    Cesium.Cartesian2.multiplyByScalar(offset, Cesium.Cartesian2.maximumComponent(dimensions), offset);

    let labelOffset;
    let billboardOffset = entity.billboard.eyeOffset;

    let eyeOffset = new Cesium.Cartesian3(offset.x, offset.y, 0.0);
    entity.billboard.eyeOffset = eyeOffset;
    if (Cesium.defined(entity.label)) {
        labelOffset = entity.label.eyeOffset;
        entity.label.eyeOffset = new Cesium.Cartesian3(offset.x, offset.y, -10.0);
    }

    let endPoint = Cesium.Matrix4.multiplyByPoint(camera.viewMatrix, entityPosition, new Cesium.Cartesian3());
    Cesium.Cartesian3.add(eyeOffset, endPoint, endPoint);
    Cesium.Matrix4.multiplyByPoint(camera.inverseViewMatrix, endPoint, endPoint);
    lines.push(endPoint);

    billboardEyeOffsets.push(billboardOffset);
    labelEyeOffsets.push(labelOffset);
}

function starBurst(mousePosition) {
    if (Cesium.defined(starBurstState.pickedEntities)) {
        return;
    }

    let pickedObjects = scene.drillPick(mousePosition);
    if (!Cesium.defined(pickedObjects) || pickedObjects.length < 2) {
        return;
    }

    let billboardEntities = [];
    let length = pickedObjects.length;
    let i;

    for (i = 0; i < length; ++i) {
        let pickedObject = pickedObjects[i];
        if (pickedObject.primitive instanceof Cesium.Billboard) {
            billboardEntities.push(pickedObject);
        }
    }

    if (billboardEntities.length === 0) {
        return;
    }

    let pickedEntities = starBurstState.pickedEntities = [];
    let billboardEyeOffsets = starBurstState.billboardEyeOffsets = [];
    let labelEyeOffsets = starBurstState.labelEyeOffsets = [];
    let lines = [];
    starBurstState.maxDimension = Number.NEGATIVE_INFINITY;

    let angleStart = starBurstState.angleStart;
    let angleEnd = starBurstState.angleEnd;

    let angle = angleStart;
    let angleIncrease;
    let magnitude;
    let magIncrease;
    let maxDimension;

    // Drill pick gets all of the entities under the mouse pointer.
    // Find the billboards and set their pixel offsets in a circle pattern.
    length = billboardEntities.length;
    i = 0;
    while (i < length) {
        let object = billboardEntities[i];
        if (pickedEntities.length === 0) {
            starBurstState.center = Cesium.Cartesian3.clone(object.primitive.position);
        }

        if (!Cesium.defined(angleIncrease)) {
            let width = object.primitive.width;
            let height = object.primitive.height;
            maxDimension = Math.max(width, height) * object.primitive.scale + starBurstState.pixelPadding;
            magnitude = maxDimension + maxDimension * 0.5;
            magIncrease = magnitude;
            angleIncrease = maxDimension / magnitude;
        }

        offsetBillboard(object.id, object.primitive.position, angle, magnitude, lines, billboardEyeOffsets, labelEyeOffsets);
        pickedEntities.push(object);

        let reflectedAngle = angleEnd - angle;
        if (i + 1 < length && reflectedAngle - angleIncrease * 0.5 > angle + angleIncrease * 0.5) {
            object = billboardEntities[++i];
            offsetBillboard(object.id, object.primitive.position, reflectedAngle, magnitude, lines, billboardEyeOffsets, labelEyeOffsets);
            pickedEntities.push(object);
        }

        angle += angleIncrease;
        if (reflectedAngle - angleIncrease * 0.5 < angle + angleIncrease * 0.5) {
            magnitude += magIncrease;
            angle = angleStart;
            angleIncrease = maxDimension / magnitude;
        }

        ++i;
    }

    // Add lines from the pick center out to the translated billboard.
    let instances = [];
    length = lines.length;
    for (i = 0; i < length; ++i) {
        let pickedEntity = pickedEntities[i];
        starBurstState.maxDimension = Math.max(pickedEntity.primitive.width, pickedEntity.primitive.height, starBurstState.maxDimension);

        instances.push(new Cesium.GeometryInstance({
            geometry: new Cesium.SimplePolylineGeometry({
                positions: [starBurstState.center, lines[i]],
                followSurface: false,
                granularity: Cesium.Math.PI_OVER_FOUR
            }),
            attributes: {
                color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.WHITE)
            }
        }));
    }

    starBurstState.linePrimitive = scene.primitives.add(new Cesium.Primitive({
        geometryInstances: instances,
        appearance: new Cesium.PerInstanceColorAppearance({
            flat: true,
            translucent: false
        }),
        asynchronous: false
    }));

    viewer.selectedEntity = undefined;
    starBurstState.radius = magnitude + magIncrease;
}

function updateStarBurst(mousePosition) {
    if (!Cesium.defined(starBurstState.pickedEntities)) {
        return;
    }

    if (!starBurstState.enabled) {
        // For some reason we get a mousemove event on click, so
        // do not show a label on the first event.
        starBurstState.enabled = true;
        return;
    }

    // Remove the star burst if the mouse exits the screen space circle.
    // If the mouse is inside the circle, show the label of the billboard the mouse is hovering over.
    let screenPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, starBurstState.center);
    let fromCenter = Cesium.Cartesian2.subtract(mousePosition, screenPosition, new Cesium.Cartesian2());
    let radius = starBurstState.radius;

    if (Cesium.Cartesian2.magnitudeSquared(fromCenter) > radius * radius || fromCenter.y > 3.0 * (starBurstState.maxDimension + starBurstState.pixelPadding)) {
        undoStarBurst();
    } else {
        showLabels(mousePosition);
    }
}

function undoStarBurst() {
    let pickedEntities = starBurstState.pickedEntities;
    if (!Cesium.defined(pickedEntities)) {
        return;
    }

    let billboardEyeOffsets = starBurstState.billboardEyeOffsets;
    let labelEyeOffsets = starBurstState.labelEyeOffsets;

    // Reset billboard and label pixel offsets.
    // Hide overlapping labels.
    for (let i = 0; i < pickedEntities.length; ++i) {
        let entity = pickedEntities[i].id;
        entity.billboard.eyeOffset = billboardEyeOffsets[i];
        if (Cesium.defined(entity.label)) {
            entity.label.eyeOffset = labelEyeOffsets[i];
            entity.label.show = false;
        }
    }

    // Remove lines from the scene.
    // Free resources and reset state.
    scene.primitives.remove(starBurstState.linePrimitive);
    starBurstState.linePrimitive = undefined;
    starBurstState.pickedEntities = undefined;
    starBurstState.billboardEyeOffsets = undefined;
    starBurstState.labelEyeOffsets = undefined;
    starBurstState.radius = undefined;
    starBurstState.enabled = false;
}

let currentObject;

function showLabels(mousePosition) {
    let pickedObjects = scene.drillPick(mousePosition);
    let pickedObject;

    if (Cesium.defined(pickedObjects)) {
        let length = pickedObjects.length;
        for (let i = 0; i < length; ++i) {
            if (pickedObjects[i].primitive instanceof Cesium.Billboard) {
                pickedObject = pickedObjects[i];
                break;
            }
        }
    }

    if (pickedObject !== currentObject) {
        if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id.label)) {
            if (Cesium.defined(currentObject)) {
                currentObject.id.label.show = false;
            }

            currentObject = pickedObject;
            pickedObject.id.label.show = true;
        } else if (Cesium.defined(currentObject)) {
            currentObject.id.label.show = false;
            currentObject = undefined;
        }
    }
}

