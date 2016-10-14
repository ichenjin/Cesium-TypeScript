﻿let viewer = new Cesium.Viewer("cesiumContainer");

let scene = viewer.scene;
let globe = scene.globe;
globe.depthTestAgainstTerrain = true;

let cesiumTerrainProviderHeightmaps = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});

viewer.terrainProvider = cesiumTerrainProviderHeightmaps;

//Add Cesium Inspector
viewer.extend(Cesium.viewerCesiumInspectorMixin);

//Add Primitives   
scene.primitives.add(new Cesium.Primitive({
    geometryInstances: new Cesium.GeometryInstance({
        geometry: Cesium.BoxGeometry.fromDimensions({
            vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
        }),
        modelMatrix: Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-105.0, 45.0)),
            new Cesium.Cartesian3(0.0, 0.0, 250000), new Cesium.Matrix4()),
        attributes: {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
        }
    }),
    appearance: new Cesium.PerInstanceColorAppearance({
        closed: true
    })
}));

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.RectangleGeometry({
            rectangle: Cesium.Rectangle.fromDegrees(-100.0, 30.0, -93.0, 37.0),
            height: 100000,
            vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
        }),
        attributes: {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.BLUE)
        }
    }),
    appearance: new Cesium.PerInstanceColorAppearance()
}));

let billboards = new Cesium.BillboardCollection();
scene.primitives.add(billboards);
billboards.add({
    position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 150000),
    image: '../images/Cesium_Logo_overlay.png'
});

