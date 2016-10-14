let viewer = new Cesium.Viewer('cesiumContainer', {
    selectionIndicator: false,
    infoBox: false
});

let scene = viewer.scene;
let handler;

Sandcastle.addDefaultToolbarButton('Show Cartographic Position on Mouse Over', function () {
    let entity = viewer.entities.add({
        label: {
            show: false
        }
    });

    // Mouse over the globe to see the cartographic position
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        let cartesian = viewer.camera.pickEllipsoid(movement.endPosition, scene.globe.ellipsoid);
        if (cartesian) {
            let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            let longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
            let latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);

            entity.position = new Cesium.ConstantPositionProperty(cartesian);
            entity.label.show = new Cesium.ConstantProperty(true);
            entity.label.text = new Cesium.ConstantProperty('(' + longitudeString + ', ' + latitudeString + ')');
        } else {
            entity.label.show = new Cesium.ConstantProperty(true);
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});

Sandcastle.addToolbarButton('Pick Entity', function () {
    let entity = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard: {
            image: '../images/Cesium_Logo_overlay.png'
        }
    });

    // If the mouse is over the billboard, change its scale and color
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        let pickedObject = scene.pick(movement.endPosition);
        if (Cesium.defined(pickedObject) && (pickedObject.id === entity)) {
            entity.billboard.scale = new Cesium.ConstantProperty(2.0);
            entity.billboard.color = new Cesium.ConstantProperty(Cesium.Color.YELLOW);
        } else {
            entity.billboard.scale = new Cesium.ConstantProperty(1.0);
            entity.billboard.color = new Cesium.ConstantProperty(Cesium.Color.WHITE);
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});

Sandcastle.addToolbarButton('Drill-Down Picking', function () {
    let pickedEntities = new Cesium.EntityCollection();
    let pickColor = Cesium.Color.YELLOW.withAlpha(0.5);
    function makeProperty(entity: Cesium.Entity, color: Cesium.Color) {
        let colorProperty = new Cesium.CallbackProperty(function (time: Cesium.JulianDate, result: Cesium.Color) {
            if (pickedEntities.contains(entity)) {
                return pickColor.clone(result);
            }
            return color.clone(result);
        }, false);

        entity.polygon.material = new Cesium.ColorMaterialProperty(colorProperty);
    }

    let red = viewer.entities.add({
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([-70.0, 30.0,
            -60.0, 30.0,
            -60.0, 40.0,
            -70.0, 40.0]),
            height: 0
        }
    });
    makeProperty(red, Cesium.Color.RED.withAlpha(0.5));

    let blue = viewer.entities.add({
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([-75.0, 34.0,
            -63.0, 34.0,
            -63.0, 40.0,
            -75.0, 40.0]),
            height: 0
        }
    });
    makeProperty(blue, Cesium.Color.BLUE.withAlpha(0.5));

    let green = viewer.entities.add({
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([-67.0, 36.0,
            -55.0, 36.0,
            -55.0, 30.0,
            -67.0, 30.0]),
            height: 0
        }
    });
    makeProperty(green, Cesium.Color.GREEN.withAlpha(0.5));

    // Move the primitive that the mouse is over to the top.
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        // get an array of all primitives at the mouse position
        let pickedObjects = scene.drillPick(movement.endPosition);
        if (Cesium.defined(pickedObjects)) {
            //Update the collection of picked entities.
            pickedEntities.removeAll();
            for (let i = 0; i < pickedObjects.length; ++i) {
                let entity = pickedObjects[i].id;
                pickedEntities.add(entity);
            }
        }

    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});

Sandcastle.addToolbarButton('Pick position', function () {
    let modelEntity = viewer.entities.add({
        name: 'milktruck',
        position: Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706),
        model: {
            uri: '../../SampleData/models/CesiumMilkTruck/CesiumMilkTruck-kmc.gltf'
        }
    });
    viewer.zoomTo(modelEntity);

    let labelEntity = viewer.entities.add({
        label: {
            show: false,
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT
        }
    });

    // Mouse over the globe to see the cartographic position
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        let foundPosition = false;

        let scene = viewer.scene;
        let pickedObject = scene.pick(movement.endPosition);
        if (scene.pickPositionSupported && Cesium.defined(pickedObject) && pickedObject.id === modelEntity) {
            let cartesian = viewer.scene.pickPosition(movement.endPosition);

            if (Cesium.defined(cartesian)) {
                let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                let longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
                let latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);
                let heightString = cartographic.height.toFixed(2);

                labelEntity.position = new Cesium.ConstantPositionProperty(cartesian);
                labelEntity.label.show = new Cesium.ConstantProperty(true);
                labelEntity.label.text = new Cesium.ConstantProperty('(' + longitudeString + ', ' + latitudeString + ', ' + heightString + ')');

                let camera = scene.camera;
                let offset = new Cesium.Cartesian3(0.0, 0.0,
                    camera.frustum.near * 1.5 - Cesium.Cartesian3.distance(cartesian, camera.position));
                labelEntity.label.eyeOffset = new Cesium.ConstantPositionProperty(offset);

                foundPosition = true;
            }
        }

        if (!foundPosition) {
            labelEntity.label.show = new Cesium.ConstantProperty(false);
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});

Sandcastle.reset = function () {
    viewer.entities.removeAll();
    handler = handler && handler.destroy();
};
