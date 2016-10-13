let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});

function createModel(url, height) {
    viewer.entities.removeAll();

    let position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, height);
    let heading = Cesium.Math.toRadians(135);
    let pitch = 0;
    let roll = 0;
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(position, heading, pitch, roll);

    let entity = viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
            uri: url,
            minimumPixelSize: 128,
            maximumScale: 20000
        }
    });
    viewer.trackedEntity = entity;
}

let options = [{
    text: 'Aircraft',
    onselect: function () {
        createModel('../../SampleData/models/CesiumAir/Cesium_Air.glb', 5000.0);
    }
}, {
    text: 'Ground vehicle',
    onselect: function () {
        createModel('../../SampleData/models/CesiumGround/Cesium_Ground.glb', 0);
    }
}, {
    text: 'Hot Air Balloon',
    onselect: function () {
        createModel('../../SampleData/models/CesiumBalloon/CesiumBalloon.glb', 1000.0);
    }
}, {
    text: 'Milk truck',
    onselect: function () {
        createModel('../../SampleData/models/CesiumMilkTruck/CesiumMilkTruck-kmc.glb', 0);
    }
}, {
    text: 'Skinned character',
    onselect: function () {
        createModel('../../SampleData/models/CesiumMan/Cesium_Man.glb', 0);
    }
}];

Sandcastle.addToolbarMenu(options);
