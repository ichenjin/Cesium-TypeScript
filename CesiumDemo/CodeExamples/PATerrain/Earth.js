var viewer = new Cesium.Viewer("cesiumContainer");
// Load PA terrain
var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/v1/tilesets/PAMAP/tiles',
    requestWaterMask: true,
    requestVertexNormals: true
});
viewer.terrainProvider = cesiumTerrainProviderMeshes;
// Add PA locations
Sandcastle.addToolbarMenu([{
        text: 'Pinnacle',
        onselect: function () {
            viewer.scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromRadians(-1.3324415110874286, 0.6954224325279967, 236.6770689945084),
                orientation: {
                    heading: Cesium.Math.toRadians(310),
                    pitch: Cesium.Math.toRadians(-15),
                    roll: 0.0
                }
            });
        }
    }, {
        text: 'Mount Nittany',
        onselect: function () {
            viewer.scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromRadians(-1.358985133937573, 0.7123252393978314, 451.05748252867375),
                orientation: {
                    heading: Cesium.Math.toRadians(85),
                    pitch: Cesium.Math.toRadians(0),
                    roll: 0.0
                }
            });
        }
    }, {
        text: 'Horseshoe Curve',
        onselect: function () {
            viewer.scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromRadians(-1.3700147546199826, 0.706808606166025, 993.7916313325215),
                orientation: {
                    heading: Cesium.Math.toRadians(90),
                    pitch: Cesium.Math.toRadians(-15),
                    roll: 0.0
                }
            });
        }
    }, {
        text: 'Jim Thorpe',
        onselect: function () {
            viewer.scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromRadians(-1.3218297501066052, 0.713358272291525, 240.87968743408845),
                orientation: {
                    heading: Cesium.Math.toRadians(200),
                    pitch: Cesium.Math.toRadians(-5),
                    roll: 0.0
                }
            });
        }
    }, {
        text: 'Grand Canyon of PA',
        onselect: function () {
            viewer.scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromRadians(-1.349379633251472, 0.720297672225785, 656.268309953562),
                orientation: {
                    heading: Cesium.Math.toRadians(200),
                    pitch: Cesium.Math.toRadians(-5),
                    roll: 0.0
                }
            });
        }
    }]);
//# sourceMappingURL=Earth.js.map