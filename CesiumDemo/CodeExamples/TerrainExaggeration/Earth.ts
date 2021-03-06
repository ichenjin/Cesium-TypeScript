﻿let viewer = new Cesium.Viewer('cesiumContainer', {
    terrainExaggeration: 2.0
});

let cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});
viewer.terrainProvider = cesiumTerrainProviderMeshes;


Sandcastle.addToolbarMenu([{
    text: 'Mount Everest',
    onselect: function () {
        viewer.camera.setView({
            destination: new Cesium.Cartesian3(277096.634865404, 5647834.481964232, 2985563.7039122293),
            orientation: {
                heading: 4.731089976107251,
                pitch: -0.32003481981370063
            }
        });
    }
}, {
    text: 'Half Dome',
    onselect: function () {
        viewer.camera.setView({
            destination: new Cesium.Cartesian3(-2497565.707296549, -4393815.215148996, 3886033.5140598584),
            orientation: {
                heading: 1.6690385899673323,
                pitch: -0.32086751043096884
            }
        });
    }
}, {
    text: 'San Francisco Bay',
    onselect: function () {
        viewer.camera.setView({
            destination: new Cesium.Cartesian3(-2696570.092794883, -4276051.411224011, 3887257.288168422),
            orientation: {
                heading: 5.193128432412409,
                pitch: -0.3996479673257727
            }
        });
        let target = new Cesium.Cartesian3(-2708814.85583248, -4254159.450845907, 3891403.9457429945);
        let offset = new Cesium.Cartesian3(70642.66030209465, -31661.517948317807, 35505.179997143336);
        viewer.camera.lookAt(target, offset);
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
}], 'zoomButtons');
