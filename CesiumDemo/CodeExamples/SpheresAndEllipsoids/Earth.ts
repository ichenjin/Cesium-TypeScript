﻿let viewer = new Cesium.Viewer('cesiumContainer');

let blueEllipsoid = viewer.entities.add({
    name: 'Blue ellipsoid',
    position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
    ellipsoid: {
        radii: new Cesium.Cartesian3(200000.0, 200000.0, 300000.0),
        material: Cesium.Color.BLUE
    }
});

let redSphere = viewer.entities.add({
    name: 'Red sphere with black outline',
    position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
    ellipsoid: {
        radii: new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});

let outlineOnly = viewer.entities.add({
    name: 'Yellow ellipsoid outline',
    position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 300000.0),
    ellipsoid: {
        radii: new Cesium.Cartesian3(200000.0, 200000.0, 300000.0),
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.YELLOW,
        slicePartitions: 24,
        stackPartitions: 36
    }
});

viewer.zoomTo(viewer.entities);
