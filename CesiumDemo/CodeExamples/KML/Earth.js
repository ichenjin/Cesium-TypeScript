var viewer = new Cesium.Viewer('cesiumContainer');
var options = {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas
};
Sandcastle.addToolbarMenu([{
        text: 'KML - Global Science Facilities',
        onselect: function () {
            viewer.camera.flyHome(0);
            viewer.dataSources.add(Cesium.KmlDataSource.load('../../SampleData/kml/facilities/facilities.kml', options));
        }
    }, {
        text: 'KMZ with embedded data - GDP per capita',
        onselect: function () {
            viewer.camera.flyHome(0);
            viewer.dataSources.add(Cesium.KmlDataSource.load('../../SampleData/kml/gdpPerCapita2008.kmz', options));
        }
    }, {
        text: 'gx KML extensions - Bike Ride',
        onselect: function () {
            viewer.dataSources.add(Cesium.KmlDataSource.load('../../SampleData/kml/bikeRide.kml', options)).then(function (dataSource) {
                viewer.clock.shouldAnimate = false;
                var rider = dataSource.entities.getById('tour');
                viewer.flyTo(rider).then(function () {
                    viewer.trackedEntity = rider;
                    viewer.selectedEntity = viewer.trackedEntity;
                    viewer.clock.multiplier = 30;
                    viewer.clock.shouldAnimate = true;
                });
            });
        }
    }]);
Sandcastle.reset = function () {
    viewer.dataSources.removeAll();
    viewer.clock.clockRange = Cesium.ClockRange.UNBOUNDED;
    viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK;
};
//# sourceMappingURL=Earth.js.map