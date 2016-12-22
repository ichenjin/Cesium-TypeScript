var viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});
var imageMaterial = new Cesium.Material({
    fabric: {
        type: "Image",
        uniforms: {
            image: "../../content/checkerboard.jpg",
            alpha: 1
        },
        components: {
            diffuse: 'texture2D(image, materialInput.st).rgb',
            alpha: 'texture2D(image, materialInput.st).a * alpha'
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
var rect = Cesium.Rectangle.fromDegrees(116.5, 39.9, 116.51, 39.91);
var geoRect = new Cesium.RectangleGeometry({
    rectangle: rect,
});
var geo = Cesium.RectangleGeometry.createGeometry(geoRect);
var instance = new Cesium.GeometryInstance({
    geometry: geo,
});
var primitive = new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.EllipsoidSurfaceAppearance({
        material: imageMaterial,
    })
});
viewer.scene.primitives.add(primitive);
var center = Cesium.Rectangle.center(rect);
viewer.camera.lookAt(Cesium.Cartesian3.fromRadians(center.longitude, center.latitude), new Cesium.Cartesian3(0, 0, 2000));
//# sourceMappingURL=Earth.js.map