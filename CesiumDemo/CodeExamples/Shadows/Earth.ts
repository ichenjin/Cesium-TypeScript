﻿let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shadows: true,
    terrainShadows: Cesium.ShadowMode.ENABLED
});

viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});

let shadowMap = viewer.shadowMap;
shadowMap.maximumDistance = 10000.0;

let cesiumAir = viewer.entities.add({
    name: 'Cesium Air',
    height: 20.0,
    model: {
        uri: '../../SampleData/models/CesiumAir/Cesium_Air.glb'
    }
});

let groundVehicle = viewer.entities.add({
    name: 'Ground Vehicle',
    height: 0.0,
    model: {
        uri: '../../SampleData/models/CesiumGround/Cesium_Ground.glb'
    }
});

let cesiumMan = viewer.entities.add({
    name: 'Cesium Man',
    height: 0.0,
    model: {
        uri: '../../SampleData/models/CesiumMan/Cesium_Man.glb'
    }
});

let woodTower = viewer.entities.add({
    name: 'Wood Tower',
    height: 0.0,
    model: {
        uri: '../../SampleData/models/WoodTower/Wood_Tower.gltf'
    }
});

let simpleCity = viewer.entities.add({
    name: 'Simple City',
    height: 0.0,
    model: {
        uri: '../../SampleData/models/ShadowTester/Shadow_Tester_4.gltf'
    }
});

let boxEntity = viewer.entities.add({
    name: 'Box',
    height: 10.0,
    box: {
        dimensions: new Cesium.Cartesian3(10.0, 10.0, 10.0),
        material: Cesium.Color.RED,
        shadows: Cesium.ShadowMode.ENABLED
    }
});

let checkerMaterial = new Cesium.CheckerboardMaterialProperty({
    evenColor: Cesium.Color.RED.withAlpha(0.5),
    oddColor: Cesium.Color.RED.withAlpha(0.0),
    repeat: new Cesium.Cartesian2(5.0, 10.0)
});

let checkerEntity = viewer.entities.add({
    name: 'Checkered Box',
    height: 10.0,
    box: {
        dimensions: new Cesium.Cartesian3(10.0, 10.0, 10.0),
        material: checkerMaterial,
        outline: true,
        outlineColor: Cesium.Color.RED,
        shadows: Cesium.ShadowMode.ENABLED
    }
});

let sphereEntity = viewer.entities.add({
    name: 'Sphere',
    height: 20.0,
    ellipsoid: {
        radii: new Cesium.Cartesian3(15.0, 15.0, 15.0),
        material: Cesium.Color.BLUE.withAlpha(0.5),
        slicePartitions: 24,
        stackPartitions: 36,
        shadows: Cesium.ShadowMode.ENABLED
    }
});

let locations = {
    Exton: {
        longitude: -1.31968,
        latitude: 0.698874,
        height: 74.14210186070714,
        date: 2457522.154792
    },
    HalfDome: {
        longitude: -2.086267733294987,
        latitude: 0.6587491773830219,
        height: 2640.716312584986,
        date: 2457507.247512
    },
    Everest: {
        longitude: 1.517132688,
        latitude: 0.4884844964,
        height: 8773.17824498951,
        date: 2457507.620845
    },
    PinnaclePA: {
        longitude: -1.3324415110874286,
        latitude: 0.6954224325279967,
        height: 179.14276256241743,
        date: 2457523.041620
    },
    SenecaRocks: {
        longitude: -1.3851775172879768,
        latitude: 0.6778211831093554,
        height: 682.5893300695776,
        date: 2457522.097512
    },
    Space: {
        longitude: -1.31968,
        latitude: 0.698874,
        height: 2000000.0,
        date: 2457522.154792
    }
};

let i;
let entities = viewer.entities.values;
let entitiesLength = entities.length;

function setLocation(location) {
    let longitude = location.longitude;
    let latitude = location.latitude;
    let height = location.height;

    for (i = 0; i < entitiesLength; ++i) {
        let entity = entities[i];
        entity.position = new Cesium.ConstantPositionProperty(Cesium.Cartesian3.fromRadians(longitude, latitude, height + entity["height"]));
    }

    viewer.clock.currentTime = new Cesium.JulianDate(location.date);
    viewer.clock.multiplier = 1.0;
}

function setLocationFunction(location) {
    return function () {
        setLocation(location);
    };
}

let locationToolbarOptions = [];
for (let locationName in locations) {
    if (locations.hasOwnProperty(locationName)) {
        let location = locations[locationName];
        locationToolbarOptions.push({
            text: locationName,
            onselect: setLocationFunction(location)
        });
    }
}

Sandcastle.addToolbarMenu(locationToolbarOptions);

function setEntity(entity) {
    for (i = 0; i < entitiesLength; ++i) {
        entities[i].show = false;
    }
    entity.show = true;
    viewer.trackedEntity = entity;
}

function setEntityFunction(entity) {
    return function () {
        setEntity(entity);
    };
}

let entityToolbarOptions = [];
for (i = 0; i < entitiesLength; ++i) {
    let entity = entities[i];
    entityToolbarOptions.push({
        text: entity.name,
        onselect: setEntityFunction(entity)
    });
}

Sandcastle.addToolbarMenu(entityToolbarOptions);

Sandcastle.addToolbarButton('Toggle Shadows', function () {
    viewer.shadows = !viewer.shadows;
});

let entityShadows: Cesium.ShadowMode = Cesium.ShadowMode.ENABLED;
Sandcastle.addToolbarButton('Toggle Entity Shadows', function () {
    entityShadows = (entityShadows === Cesium.ShadowMode.ENABLED) ? Cesium.ShadowMode.DISABLED : Cesium.ShadowMode.ENABLED;
    for (i = 0; i < entitiesLength; ++i) {
        let entity = entities[i];
        let visual = entity.model || entity.box || entity.ellipsoid;
        visual.shadows = new Cesium.ConstantProperty(entityShadows);
    }
});

Sandcastle.addToolbarButton('Toggle Terrain Shadows', function () {
    viewer.terrainShadows = (viewer.terrainShadows === Cesium.ShadowMode.ENABLED) ? Cesium.ShadowMode.DISABLED : Cesium.ShadowMode.ENABLED;
});

Sandcastle.addToolbarButton('Soft Shadows', function () {
    shadowMap.softShadows = !shadowMap.softShadows;
});

Sandcastle.addToolbarMenu([{
    text: 'Size : 2048',
    onselect: function () {
        shadowMap.size = 2048;
    }
}, {
    text: 'Size : 1024',
    onselect: function () {
        shadowMap.size = 1024;
    }
}, {
    text: 'Size : 512',
    onselect: function () {
        shadowMap.size = 512;
    }
}, {
    text: 'Size : 256',
    onselect: function () {
        shadowMap.size = 256;
    }
}]);

setLocation(locations.Exton);
setEntity(cesiumAir);

