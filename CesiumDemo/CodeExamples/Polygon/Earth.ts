﻿let viewer = new Cesium.Viewer('cesiumContainer');

let redPolygon = viewer.entities.add({
    name: 'Red polygon on surface',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([-115.0, 37.0,
        -115.0, 32.0,
        -107.0, 33.0,
        -102.0, 31.0,
        -102.0, 35.0]),
        material: Cesium.Color.RED
    }
});

let greenPolygon = viewer.entities.add({
    name: 'Green extruded polygon',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0,
        -100.0, 42.0,
        -104.0, 40.0]),
        extrudedHeight: 500000.0,
        material: Cesium.Color.fromAlpha(Cesium.Color.GREEN, 0.5),
        closeTop: false,
        closeBottom: false,
    }
});

let orangePolygon = viewer.entities.add({
    name: 'Orange polygon with per-position heights and outline',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([-108.0, 25.0, 100000,
        -100.0, 25.0, 100000,
        -100.0, 30.0, 100000,
        -108.0, 30.0, 300000]),
        extrudedHeight: 0,
        perPositionHeight: true,
        material: Cesium.Color.ORANGE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});

let bluePolygon = viewer.entities.add({
    name: 'Blue polygon with holes and outline',
    polygon: {
        hierarchy: {
            positions: Cesium.Cartesian3.fromDegreesArray([-99.0, 30.0,
            -85.0, 30.0,
            -85.0, 40.0,
            -99.0, 40.0]),
            holes: [{
                positions: Cesium.Cartesian3.fromDegreesArray([
                    -97.0, 31.0,
                    -97.0, 39.0,
                    -87.0, 39.0,
                    -87.0, 31.0
                ]),
                holes: [{
                    positions: Cesium.Cartesian3.fromDegreesArray([
                        -95.0, 33.0,
                        -89.0, 33.0,
                        -89.0, 37.0,
                        -95.0, 37.0
                    ]),
                    holes: [{
                        positions: Cesium.Cartesian3.fromDegreesArray([
                            -93.0, 34.0,
                            -91.0, 34.0,
                            -91.0, 36.0,
                            -93.0, 36.0
                        ])
                    }]
                }]
            }]
        },
        material: Cesium.Color.BLUE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});

viewer.zoomTo(viewer.entities);
