//Load a GeoJSON file containing simplestyle information.
//To learn more about simplestyle, see https://github.com/mapbox/simplestyle-spec
//In this particular example, the name of each entity is set to its maki icon identifier.
//Clicking on each billboard will show it's identifier in the InfoBox.
var viewer = new Cesium.Viewer('cesiumContainer', {
    sceneMode: Cesium.SceneMode.SCENE2D,
    timeline: false,
    animation: false
});
var dataSource = Cesium.GeoJsonDataSource.load('../../SampleData/simplestyles.geojson');
viewer.dataSources.add(dataSource);
viewer.zoomTo(dataSource);
//# sourceMappingURL=Earth.js.map