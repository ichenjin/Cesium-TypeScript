﻿let viewer = new Cesium.Viewer('cesiumContainer');

let redRectangle = viewer.entities.add({
    name: 'Red translucent rectangle with outline',
    rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(-110.0, 20.0, -80.0, 25.0),
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.RED
    }
});

let greenRectangle = viewer.entities.add({
    name: 'Green translucent, rotated, and extruded rectangle at height with outline',
    rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(-100.0, 30.0, -90.0, 40.0),
        material: Cesium.Color.GREEN.withAlpha(0.5),
        rotation: Cesium.Math.toRadians(45),
        extrudedHeight: 300000.0,
        height: 100000.0,
        outline: true,
        outlineColor: Cesium.Color.GREEN
    }
});

viewer.zoomTo(viewer.entities);
