let viewer = new Cesium.Viewer("cesiumContainer");

let cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});
viewer.terrainProvider = cesiumTerrainProviderMeshes;

Sandcastle.addToolbarMenu([{
    //
    // To clamp points or billboards set the heightReference to CLAMP_TO_GROUND or RELATIVE_TO_GROUND
    //
    text: 'Draw Points',
    onselect: function () {
        let e = viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(-122.1958, 46.1915, 1000),
            point: {
                color: Cesium.Color.SKYBLUE,
                pixelSize: 10,
                outlineColor: Cesium.Color.YELLOW,
                outlineWidth: 3,
                heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
            }
        });

        viewer.trackedEntity = e;
    }
}, {
    text: 'Draw Billboard',
    onselect: function () {
        let e = viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(-122.1958, 46.1915),
            billboard: {
                image: '../images/facility.gif',
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
        });

        viewer.trackedEntity = e;
    }
}, {
    //
    // Corridors, polygons and rectangles will be clamped automatically if they are filled with a constant color and
    // has no height or extruded height.
    // NOTE: Setting height to 0 will disable clamping.
    //
    text: 'Draw Corridor',
    onselect: function () {
        let e = viewer.entities.add({
            corridor: {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    -122.19, 46.1914,
                    -122.21, 46.21,
                    -122.23, 46.21
                ]),
                width: 2000.0,
                material: Cesium.Color.GREEN.withAlpha(0.5)
            }
        });

        viewer.zoomTo(e);
    }
}, {
    text: 'Draw Polygon',
    onselect: function () {
        let e = viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: [new Cesium.Cartesian3(-2358138.847340281, -3744072.459541374, 4581158.5714175375),
                    new Cesium.Cartesian3(-2357231.4925370603, -3745103.7886602185, 4580702.9757762635),
                    new Cesium.Cartesian3(-2355912.902205431, -3744249.029778454, 4582402.154378103),
                    new Cesium.Cartesian3(-2357208.0209552636, -3743553.4420488174, 4581961.863286629)]
                },
                material: Cesium.Color.BLUE.withAlpha(0.5)
            }
        });

        viewer.zoomTo(e);
    }
}, {
    text: 'Draw Rectangle',
    onselect: function () {
        let e = viewer.entities.add({
            rectangle: {
                coordinates: Cesium.Rectangle.fromDegrees(-122.3, 46.0, -122.0, 46.3),
                material: Cesium.Color.RED.withAlpha(0.5)
            }
        });

        viewer.zoomTo(e);
    }
}]);

Sandcastle.reset = function () {
    viewer.entities.removeAll();
};

