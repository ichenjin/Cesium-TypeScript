﻿let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});

let centerLon = 116.5;
let centerLat = 39.9;
let height = 1000;
let offset = 0.001;

let polygon = new Cesium.PolygonGeometry({
    polygonHierarchy: new Cesium.PolygonHierarchy(
        Cesium.Cartesian3.fromDegreesArray([
            centerLon + offset, centerLat + offset,
            centerLon - offset, centerLat + offset,
            centerLon - offset, centerLat - offset,
            centerLon + offset, centerLat - offset,
        ])
    ),
    //height: height
});
let geometry = Cesium.PolygonGeometry.createGeometry(polygon);
let instance = new Cesium.GeometryInstance({
    geometry: geometry,
});


let imageMaterial = new Cesium.Material({
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

let colorMaterial = new Cesium.Material({
    translucent: true,
    fabric: {
        type: "Color",
        uniforms: {
            color: new Cesium.Color(0, 1, 0, 0.5)
        },
    }
})

let primitive = new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.MaterialAppearance({
        material: imageMaterial,
    })
});

viewer.scene.primitives.add(primitive);

viewer.camera.lookAt(Cesium.Cartesian3.fromDegrees(centerLon, centerLat), new Cesium.Cartesian3(0, 0, height * 2));
