let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true
});

let entities = viewer.entities;

let stripeMaterial = new Cesium.StripeMaterialProperty({
    evenColor: Cesium.Color.WHITE.withAlpha(0.5),
    oddColor: Cesium.Color.BLUE.withAlpha(0.5),
    repeat: 5.0
});

let rect = new Cesium.RectangleGraphics({
    coordinates: Cesium.Rectangle.fromDegrees(-92.0, 20.0, -86.0, 27.0),
    outline: true,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 4,
    stRotation: Cesium.Math.toRadians(45),
    rotation: Cesium.Math.toRadians(45),
    material: stripeMaterial
});

let entity = entities.add({
    rectangle: rect
});

