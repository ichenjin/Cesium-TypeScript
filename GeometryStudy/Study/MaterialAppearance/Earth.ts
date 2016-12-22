let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});

let imageMaterial = new Cesium.Material({
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

let colorMaterial = new Cesium.Material({
    translucent: true,
    fabric: {
        type: "Color",
        uniforms: {
            color: new Cesium.Color(0, 1, 0, 0.5)
        },
   }
})

let rect = Cesium.Rectangle.fromDegrees(116.5, 39.9, 116.51, 39.91);

let geoRect = new Cesium.RectangleGeometry({
    rectangle: rect,
    //height: 1000000,
});

let geo = Cesium.RectangleGeometry.createGeometry(geoRect);

let instance = new Cesium.GeometryInstance({
    geometry: geo,
});

let primitive = new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.EllipsoidSurfaceAppearance({
        material: imageMaterial,
    })
});

viewer.scene.primitives.add(primitive);

let center = Cesium.Rectangle.center(rect);

viewer.camera.lookAt(Cesium.Cartesian3.fromRadians(center.longitude, center.latitude), new Cesium.Cartesian3(0, 0, 2000));
