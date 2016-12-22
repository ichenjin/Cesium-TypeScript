let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});

let imageMaterial = new Cesium.Material({
    fabric: {
        type: "Image",
        uniforms: {
            image: "../../content/checkerboard.jpg"
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

let geoRect = new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(-92.0, 20.0, -86.0, 27.0),
    height: 1000000,
});

let instance = new Cesium.GeometryInstance({
    geometry: geoRect,
});

let primitive = new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.MaterialAppearance({
        material: imageMaterial,
    })
});

viewer.scene.primitives.add(primitive);
