let viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
    }),
    baseLayerPicker: false
});

let layers = viewer.imageryLayers;
let blackMarble = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({
    url: 'https://cesiumjs.org/blackmarble',
    credit: 'Black Marble imagery courtesy NASA Earth Observatory',
    flipXY: true // Only old gdal2tile.py generated tilesets need this flag.
}));
blackMarble.alpha = 0.5;
blackMarble.brightness = 2.0;

layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
    url: '../../Cesium/Widgets/Images/Cesium_Logo_overlay.png',
    rectangle: Cesium.Rectangle.fromDegrees(-75.0, 28.0, -67.0, 29.75)
}));
