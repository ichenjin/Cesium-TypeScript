var viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});
var centerLon = 116.5;
var centerLat = 39.9;
var height = 1000;
var offset = 0.001;
var polygon = new Cesium.PolygonGeometry({
    polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray([
        centerLon + offset, centerLat + offset,
        centerLon - offset, centerLat + offset,
        centerLon - offset, centerLat - offset,
        centerLon + offset, centerLat - offset,
    ])),
});
var geometry = Cesium.PolygonGeometry.createGeometry(polygon);
var instance = new Cesium.GeometryInstance({
    geometry: geometry,
});
var imageMaterial = new Cesium.Material({
    fabric: {
        type: "Image",
        uniforms: {
            image: "../../content/checkerboard.jpg",
            alpha: 0.5
        },
        components: {
            alpha: "texture2D(image, materialInput.st).a * alpha",
        }
    }
});
var colorMaterial = new Cesium.Material({
    translucent: true,
    fabric: {
        type: "Color",
        uniforms: {
            color: new Cesium.Color(0, 1, 0, 0.5)
        },
    }
});
var primitive = new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.MaterialAppearance({
        material: imageMaterial,
    })
});
viewer.scene.primitives.add(primitive);
viewer.camera.lookAt(Cesium.Cartesian3.fromDegrees(centerLon, centerLat), new Cesium.Cartesian3(0, 0, height * 2));
//# sourceMappingURL=Earth.js.map