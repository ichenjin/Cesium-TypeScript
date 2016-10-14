﻿let viewer = new Cesium.Viewer('cesiumContainer');

let redLine = viewer.entities.add({
    name: 'Red line on the surface',
    polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray([-75, 35,
        -125, 35]),
        width: 5,
        material: Cesium.Color.RED
    }
});

let glowingLine = viewer.entities.add({
    name: 'Glowing blue line on the surface',
    polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray([-75, 37,
        -125, 37]),
        width: 10,
        material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.2,
            color: Cesium.Color.BLUE
        })
    }
});

let orangeOutlined = viewer.entities.add({
    name: 'Orange line with black outline at height and following the surface',
    polyline: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([-75, 39, 250000,
        -125, 39, 250000]),
        width: 5,
        material: new Cesium.PolylineOutlineMaterialProperty({
            color: Cesium.Color.ORANGE,
            outlineWidth: 2,
            outlineColor: Cesium.Color.BLACK
        })
    }
});

let purpleArrow = viewer.entities.add({
    name: 'Purple straight arrow at height',
    polyline: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([-75, 43, 500000,
        -125, 43, 500000]),
        width: 10,
        followSurface: false, 
        material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
    }
});

viewer.zoomTo(viewer.entities);
