﻿let viewer = new Cesium.Viewer('cesiumContainer');

function addPoint() {
    Sandcastle.declare(addPoint);

    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point: {
            pixelSize: 10,
            color: Cesium.Color.YELLOW
        }
    });
}

function setPointProperties() {
    Sandcastle.declare(setPointProperties);

    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point: {
            show: true, // default
            color: Cesium.Color.SKYBLUE, // default: WHITE
            pixelSize: 10, // default: 1
            outlineColor: Cesium.Color.YELLOW, // default: BLACK
            outlineWidth: 3 // default: 0
        }
    });
}

function changePointProperties() {
    Sandcastle.declare(changePointProperties);

    let entity = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 300000.0),
        point: {
            pixelSize: 2
        }
    });

    let point = entity.point;
    point.pixelSize = new Cesium.ConstantProperty(20.0);
    point.color = new Cesium.ConstantProperty(Cesium.Color.YELLOW.withAlpha(0.33));
}

function addMultiplePoints() {
    Sandcastle.declare(addMultiplePoints);

    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point: {
            color: Cesium.Color.RED,
            pixelSize: 8
        }
    });
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-80.50, 35.14),
        point: {
            color: Cesium.Color.BLUE,
            pixelSize: 16
        }
    });
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-80.12, 25.46),
        point: {
            color: Cesium.Color.LIME,
            pixelSize: 32
        }
    });
}

function scaleByDistance() {
    Sandcastle.declare(scaleByDistance);

    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point: {
            // pixelSize will multiply by the scale factor, so in this
            // example the size will range from 20px (near) to 5px (far).
            pixelSize: 10,
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
        }
    });
}

function fadeByDistance() {
    Sandcastle.declare(fadeByDistance);

    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point: {
            pixelSize: 20,
            translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.2)
        }
    });
}

Sandcastle.addToolbarMenu([{
    text: 'Add point',
    onselect: function () {
        addPoint();
        Sandcastle.highlight(addPoint);
    }
}, {
    text: 'Set point properties at creation',
    onselect: function () {
        setPointProperties();
        Sandcastle.highlight(setPointProperties);
    }
}, {
    text: 'Change point properties',
    onselect: function () {
        changePointProperties();
        Sandcastle.highlight(changePointProperties);
    }
}, {
    text: 'Add multiple points',
    onselect: function () {
        addMultiplePoints();
        Sandcastle.highlight(addMultiplePoints);
    }
}, {
    text: 'Scale by viewer distance',
    onselect: function () {
        scaleByDistance();
        Sandcastle.highlight(scaleByDistance);
    }
}, {
    text: 'Fade by viewer distance',
    onselect: function () {
        fadeByDistance();
        Sandcastle.highlight(fadeByDistance);
    }
}]);

Sandcastle.reset = function () {
    viewer.entities.removeAll();
};
