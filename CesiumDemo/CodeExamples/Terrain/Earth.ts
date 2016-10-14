let viewer = new Cesium.Viewer('cesiumContainer');

let cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});
viewer.terrainProvider = cesiumTerrainProviderMeshes;

// setup alternative terrain providers
let ellipsoidProvider = new Cesium.EllipsoidTerrainProvider();

let vrTheWorldProvider = new Cesium.VRTheWorldTerrainProvider({
    url: 'http://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/',
    credit: 'Terrain data courtesy VT MÄK'
});

Sandcastle.addToolbarMenu([{
    text: 'CesiumTerrainProvider - STK World Terrain',
    onselect: function () {
        viewer.terrainProvider = cesiumTerrainProviderMeshes;
        viewer.scene.globe.enableLighting = true;
    }
}, {
    text: 'CesiumTerrainProvider - STK World Terrain - no effects',
    onselect: function () {
        viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: 'https://assets.agi.com/stk-terrain/world'
        });
    }
}, {
    text: 'CesiumTerrainProvider - STK World Terrain w/ Lighting',
    onselect: function () {
        viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: 'https://assets.agi.com/stk-terrain/world',
            requestVertexNormals: true
        });
        viewer.scene.globe.enableLighting = true;
    }
}, {
    text: 'CesiumTerrainProvider - STK World Terrain w/ Water',
    onselect: function () {
        viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: 'https://assets.agi.com/stk-terrain/world',
            requestWaterMask: true
        });
    }
}, {
    text: 'EllipsoidTerrainProvider',
    onselect: function () {
        viewer.terrainProvider = ellipsoidProvider;
    }
}, {
    text: 'VRTheWorldTerrainProvider',
    onselect: function () {
        viewer.terrainProvider = vrTheWorldProvider;
    }
}], 'terrainMenu');

Sandcastle.addToolbarMenu([{
    text: 'Mount Everest',
    onselect: function () {
        let target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116);
        let offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162);
        viewer.camera.lookAt(target, offset);
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
}, {
    text: 'Half Dome',
    onselect: function () {
        let target = new Cesium.Cartesian3(-2489625.0836225147, -4393941.44443024, 3882535.9454173897);
        let offset = new Cesium.Cartesian3(-6857.40902037546, 412.3284835694358, 2147.5545426812023);
        viewer.camera.lookAt(target, offset);
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
}, {
    text: 'San Francisco Bay',
    onselect: function () {
        let target = new Cesium.Cartesian3(-2708814.85583248, -4254159.450845907, 3891403.9457429945);
        let offset = new Cesium.Cartesian3(70642.66030209465, -31661.517948317807, 35505.179997143336);
        viewer.camera.lookAt(target, offset);
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
}], 'zoomButtons');

let terrainSamplePositions;

function sampleTerrainSuccess() {
    let ellipsoid = Cesium.Ellipsoid.WGS84;

    //By default, Cesium does not obsure geometry
    //behind terrain. Setting this flag enables that.
    viewer.scene.globe.depthTestAgainstTerrain = true;

    viewer.entities.suspendEvents();
    viewer.entities.removeAll();

    for (let i = 0; i < terrainSamplePositions.length; ++i) {
        let position = terrainSamplePositions[i];

        viewer.entities.add({
            name: position.height.toFixed(1),
            position: ellipsoid.cartographicToCartesian(position),
            billboard: {
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                scale: 0.7,
                image: '../images/facility.gif'
            },
            label: {
                text: position.height.toFixed(1),
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                scale: 0.3,
                pixelOffset: new Cesium.Cartesian2(0, -14),
                fillColor: Cesium.Color.RED,
                outlineColor: Cesium.Color.WHITE
            }
        });
    }
    viewer.entities.resumeEvents();
}

Sandcastle.addToolbarButton('Toggle Lighting', function () {
    viewer.scene.globe.enableLighting = !viewer.scene.globe.enableLighting;
}, 'toggleLighting');


Sandcastle.addToolbarButton('Sample Everest Terrain', function () {
    let gridWidth = 41;
    let gridHeight = 41;
    let everestLatitude = Cesium.Math.toRadians(27.988257);
    let everestLongitude = Cesium.Math.toRadians(86.925145);
    let rectangleHalfSize = 0.005;
    let e = new Cesium.Rectangle(everestLongitude - rectangleHalfSize, everestLatitude - rectangleHalfSize, everestLongitude + rectangleHalfSize, everestLatitude + rectangleHalfSize);
    terrainSamplePositions = [];
    for (let y = 0; y < gridHeight; ++y) {
        for (let x = 0; x < gridWidth; ++x) {
            let longitude = Cesium.Math.lerp(e.west, e.east, x / (gridWidth - 1));
            let latitude = Cesium.Math.lerp(e.south, e.north, y / (gridHeight - 1));
            let position = new Cesium.Cartographic(longitude, latitude);
            terrainSamplePositions.push(position);
        }
    }

    Cesium.sampleTerrain(viewer.terrainProvider, 9, terrainSamplePositions).then(sampleTerrainSuccess);
}, 'sampleButtons');

let viewModel = {
    fogEnabled: true, enabled: false
};
Cesium.knockout.track(viewModel);

let toolbarElem = document.getElementById('toolbar');
Cesium.knockout.applyBindings(viewModel, toolbarElem);
Cesium.knockout.getObservable(viewModel, 'fogEnabled').subscribe(function (newValue) {
    viewer.scene.fog.enabled = newValue;
});
viewModel.enabled = viewer.scene.fog.enabled;
