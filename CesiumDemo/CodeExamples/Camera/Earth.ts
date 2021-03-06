﻿let viewer = new Cesium.Viewer("cesiumContainer");

let scene = viewer.scene;
let clock = viewer.clock;

function flyToSanDiego() {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
    });
}

function flyToHeadingPitchRoll() {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.22, 46.12, 5000.0),
        orientation: {
            heading: Cesium.Math.toRadians(20.0),
            pitch: Cesium.Math.toRadians(-35.0),
            roll: 0.0
        }
    });
}

function flyToLocation() {

    // Create callback for browser's geolocation
    function fly(position) {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 1000.0)
        });
    }

    // Ask browser for location, and fly there.
    navigator.geolocation.getCurrentPosition(fly);
}

function viewRectangle() {

    let west = -77.0;
    let south = 38.0;
    let east = -72.0;
    let north = 42.0;

    let rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);
    viewer.camera.setView({
        destination: rectangle
    });

    // Show the rectangle.  Not required; just for show.
    viewer.entities.add({
        rectangle: {
            coordinates: rectangle,
            fill: false,
            outline: true,
            outlineColor: Cesium.Color.WHITE
        }
    });
}

function flyToRectangle() {

    let west = -90.0;
    let south = 38.0;
    let east = -87.0;
    let north = 40.0;
    let rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);

    viewer.camera.flyTo({
        destination: rectangle
    });

    // Show the rectangle.  Not required; just for show.
    viewer.entities.add({
        rectangle: {
            coordinates: rectangle,
            fill: false,
            outline: true,
            outlineColor: Cesium.Color.WHITE
        }
    });
}

function setReferenceFrame() {

    let center = Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883);
    let transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);

    // View in east-north-up frame
    let camera = viewer.camera;
    camera.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
    camera.lookAtTransform(transform, new Cesium.Cartesian3(-120000.0, -120000.0, 120000.0));

    // Show reference frame.  Not required.
    scene.primitives.add(new Cesium.DebugModelMatrixPrimitive({
        modelMatrix: transform,
        length: 100000.0
    }));
}

function setHeadingPitchRoll() {

    let camera = viewer.camera;
    camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-75.5847, 40.0397, 1000.0),
        orientation: {
            heading: -Cesium.Math.PI_OVER_TWO,
            pitch: -Cesium.Math.PI_OVER_FOUR,
            roll: 0.0
        }
    });
}

function icrf(scene, time) {
    if (scene.mode !== Cesium.SceneMode.SCENE3D) {
        return;
    }

    let icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(time);
    if (Cesium.defined(icrfToFixed)) {
        let camera = viewer.camera;
        let offset = Cesium.Cartesian3.clone(camera.position);
        let transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed);
        camera.lookAtTransform(transform, offset);
    }
}

function viewInICRF() {

    viewer.camera.flyHome(0);

    clock.multiplier = 3 * 60 * 60;
    scene.preRender.addEventListener(icrf);
    scene.globe.enableLighting = true;
}

let viewChanged = document.getElementById('viewChanged');

let removeStart;
let removeEnd;

function cameraEvents() {

    let camera = viewer.camera;
    removeStart = camera.moveStart.addEventListener(function () {
        viewChanged.style.display = 'block';
    });
    removeEnd = camera.moveEnd.addEventListener(function () {
        viewChanged.style.display = 'none';
    });
}

let removeChanged;

function cameraChanges() {

    let i = 0;
    removeChanged = viewer.camera.changed.addEventListener(function (percentage) {
        ++i;
        console.log('camera changed: ' + i + ', ' + percentage);
    });
}

function flyInACity() {

    let camera = scene.camera;
    camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-73.98580932617188, 40.74843406689482, 363.34038727246224),
        complete: function () {
            setTimeout(function () {
                camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(-73.98585975679403, 40.75759944127251, 186.50838555841779),
                    orientation: {
                        heading: Cesium.Math.toRadians(200.0),
                        pitch: Cesium.Math.toRadians(-50.0)
                    },
                    easingFunction: Cesium.EasingFunction.LINEAR_NONE
                });
            }, 1000);
        }
    });
}

Sandcastle.addToolbarMenu([{
    text: 'Camera Options'
}, {
        text: 'Fly in a city',
        onselect: function () {
            flyInACity();
            //Sandcastle.highlight(flyInACity);
        }
    }, {
        text: 'Fly to San Diego',
        onselect: function () {
            flyToSanDiego();
            //Sandcastle.highlight(flyToSanDiego);
        }
    }, {
        text: 'Fly to Location with heading, pitch and roll',
        onselect: function () {
            flyToHeadingPitchRoll();
            //Sandcastle.highlight(flyToHeadingPitchRoll);
        }
    }, {
        text: 'Fly to My Location',
        onselect: function () {
            flyToLocation();
            //Sandcastle.highlight(flyToLocation);
        }
    }, {
        text: 'Fly to Rectangle',
        onselect: function () {
            flyToRectangle();
            //Sandcastle.highlight(flyToRectangle);
        }
    }, {
        text: 'View a Rectangle',
        onselect: function () {
            viewRectangle();
            //Sandcastle.highlight(viewRectangle);
        }
    }, {
        text: 'Set camera reference frame',
        onselect: function () {
            setReferenceFrame();
            //Sandcastle.highlight(setReferenceFrame);
        }
    }, {
        text: 'Set camera with heading, pitch, and roll',
        onselect: function () {
            setHeadingPitchRoll();
            //Sandcastle.highlight(setHeadingPitchRoll);
        }
    }, {
        text: 'View in ICRF',
        onselect: function () {
            viewInICRF();
            //Sandcastle.highlight(viewInICRF);
        }
    }, {
        text: 'Move events',
        onselect: function () {
            cameraEvents();
            //Sandcastle.highlight(cameraEvents);
        }
    }, {
        text: 'Camera changed event',
        onselect: function () {
            cameraChanges();
            //Sandcastle.highlight(cameraChanges);
        }
    }]);

Sandcastle.reset = function () {
    viewer.entities.removeAll();
    scene.primitives.removeAll();
    //scene.tweens.removeAll();

    if (Cesium.defined(removeStart)) {
        removeStart();
        removeEnd();

        viewChanged.style.display = 'none';

        removeStart = undefined;
        removeEnd = undefined;
    }

    if (Cesium.defined(removeChanged)) {
        removeChanged();
        removeChanged = undefined;
    }

    viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

    clock.multiplier = 1.0;
    scene.preRender.removeEventListener(icrf);
    scene.globe.enableLighting = false;
};

scene.morphComplete.addEventListener(function () {
    Sandcastle.reset();
});
