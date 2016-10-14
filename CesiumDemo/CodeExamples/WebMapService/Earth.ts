let viewer = new Cesium.Viewer('cesiumContainer');

// Add a WMS imagery layer
let imageryLayers = viewer.imageryLayers;
imageryLayers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
    //url: 'https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
    url: 'http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
    layers: 'Hydrography:bores',
    parameters: {
        transparent: true,
        format: 'image/png'
    }
}));

// Start off looking at Australia.
viewer.camera.setView({
    destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
});