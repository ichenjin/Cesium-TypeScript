﻿let viewer = new Cesium.Viewer("cesiumContainer");

let blueBox = viewer.entities.add({
    name: 'Blue box',
    position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
    box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        material: Cesium.Color.BLUE
    }
});

let redBox = viewer.entities.add({
    name: 'Red box with black outline',
    position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
    box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});

let outlineOnly = viewer.entities.add({
    name: 'Yellow box outline',
    position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 300000.0),
    box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.YELLOW
    }
});

viewer.zoomTo(viewer.entities);
