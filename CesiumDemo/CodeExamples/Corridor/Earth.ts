﻿let viewer = new Cesium.Viewer("cesiumContainer");

var redCorridor = viewer.entities.add({
    name: 'Red corridor on surface with rounded corners and outline',
    corridor: {
        positions: Cesium.Cartesian3.fromDegreesArray([
            -100.0, 40.0,
            -105.0, 40.0,
            -105.0, 35.0
        ]),
        width: 200000.0,
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.RED
    }
});

var greenCorridor = viewer.entities.add({
    name: 'Green corridor at height with mitered corners',
    corridor: {
        positions: Cesium.Cartesian3.fromDegreesArray([
            -90.0, 40.0,
            -95.0, 40.0,
            -95.0, 35.0
        ]),
        height: 100000.0,
        width: 200000.0,
        cornerType: Cesium.CornerType.MITERED,
        material: Cesium.Color.GREEN
    }
});

var blueCorridor = viewer.entities.add({
    name: 'Blue extruded corridor with beveled corners and outline',
    corridor: {
        positions: Cesium.Cartesian3.fromDegreesArray([
            -80.0, 40.0,
            -85.0, 40.0,
            -85.0, 35.0
        ]),
        height: 200000.0,
        extrudedHeight: 100000.0,
        width: 200000.0,
        cornerType: Cesium.CornerType.BEVELED,
        material: Cesium.Color.BLUE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLUE
    }
});

viewer.zoomTo(viewer.entities);
