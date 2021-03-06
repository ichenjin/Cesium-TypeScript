//Set the random seed for reproducible random colors.
Cesium.Math.setRandomNumberSeed(1234);
var viewer = new Cesium.Viewer('cesiumContainer', { infoBox: false });
var entities = viewer.entities;
//Create Entity "folders" to allow us to turn on/off entities as a group.
var spheres = entities.add(new Cesium.Entity());
var boxes = entities.add(new Cesium.Entity());
var ellipsoids = entities.add(new Cesium.Entity());
//Create the entities and assign each entity's parent to the group to which it belongs.
for (var i = 0; i < 5; ++i) {
    var height = 100000.0 + (200000.0 * i);
    entities.add({
        parent: boxes,
        position: Cesium.Cartesian3.fromDegrees(-106.0, 45.0, height),
        box: {
            dimensions: new Cesium.Cartesian3(90000.0, 90000.0, 90000.0),
            material: Cesium.Color.fromRandom({ alpha: 1.0 })
        }
    });
    entities.add({
        parent: ellipsoids,
        position: Cesium.Cartesian3.fromDegrees(-102.0, 45.0, height),
        ellipsoid: {
            radii: new Cesium.Cartesian3(45000.0, 45000.0, 90000.0),
            material: Cesium.Color.fromRandom({ alpha: 1.0 })
        }
    });
    entities.add({
        parent: spheres,
        position: Cesium.Cartesian3.fromDegrees(-98.0, 45.0, height),
        ellipsoid: {
            radii: new Cesium.Cartesian3(67500.0, 67500.0, 67500.0),
            material: Cesium.Color.fromRandom({ alpha: 1.0 })
        }
    });
}
viewer.zoomTo(viewer.entities);
Sandcastle.addToolbarButton('Toggle Boxes', function () {
    boxes.show = !boxes.show;
});
Sandcastle.addToolbarButton('Toggle Ellipsoids', function () {
    ellipsoids.show = !ellipsoids.show;
});
Sandcastle.addToolbarButton('Toggle Spheres', function () {
    spheres.show = !spheres.show;
});
//# sourceMappingURL=Earth.js.map