var viewer = new Cesium.Viewer('cesiumContainer', {
    vrButton: true
});
// Click the VR button in the bottom right of the screen to switch to VR mode.
viewer.scene.globe.enableLighting = true;
viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestVertexNormals: true
});
viewer.scene.globe.depthTestAgainstTerrain = true;
// Follow the path of a plane. See the interpolation Sandcastle example.
Cesium.Math.setRandomNumberSeed(3);
var start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
viewer.clock.startTime = start.clone();
viewer.clock.stopTime = stop.clone();
viewer.clock.currentTime = start.clone();
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
viewer.clock.multiplier = 1.0;
function computeCirclularFlight(lon, lat, radius) {
    var property = new Cesium.SampledPositionProperty();
    var startAngle = Cesium.Math.nextRandomNumber() * 360.0;
    var endAngle = startAngle + 360.0;
    var increment = (Cesium.Math.nextRandomNumber() * 2.0 - 1.0) * 10.0 + 45.0;
    for (var i = startAngle; i < endAngle; i += increment) {
        var radians = Cesium.Math.toRadians(i);
        var timeIncrement = i - startAngle;
        var time = Cesium.JulianDate.addSeconds(start, timeIncrement, new Cesium.JulianDate());
        var position = Cesium.Cartesian3.fromDegrees(lon + (radius * 1.5 * Math.cos(radians)), lat + (radius * Math.sin(radians)), Cesium.Math.nextRandomNumber() * 500 + 1750);
        property.addSample(time, position);
    }
    return property;
}
var longitude = -112.110693;
var latitude = 36.0994841;
var radius = 0.03;
var modelURI = '../../SampleData/models/CesiumBalloon/CesiumBalloon.glb';
var entity = viewer.entities.add({
    availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
            start: start,
            stop: stop
        })]),
    position: computeCirclularFlight(longitude, latitude, radius),
    model: {
        uri: modelURI,
        minimumPixelSize: 64
    }
});
entity.position.setInterpolationOptions({
    interpolationDegree: 2,
    interpolationAlgorithm: Cesium.HermitePolynomialApproximation
});
// Set initial camera position and orientation to be when in the model's reference frame.
var camera = viewer.camera;
camera.position = new Cesium.Cartesian3(0.25, 0.0, 0.0);
camera.direction = new Cesium.Cartesian3(1.0, 0.0, 0.0);
camera.up = new Cesium.Cartesian3(0.0, 0.0, 1.0);
camera.right = new Cesium.Cartesian3(0.0, -1.0, 0.0);
viewer.scene.preRender.addEventListener(function (scene, time) {
    var position = entity.position.getValue(time);
    if (!Cesium.defined(position)) {
        return;
    }
    var transform;
    if (!Cesium.defined(entity.orientation)) {
        transform = Cesium.Transforms.eastNorthUpToFixedFrame(position);
    }
    else {
        var orientation_1 = entity.orientation.getValue(time);
        if (!Cesium.defined(orientation_1)) {
            return;
        }
        transform = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(orientation_1), position);
    }
    // Save camera state
    var offset = Cesium.Cartesian3.clone(camera.position);
    var direction = Cesium.Cartesian3.clone(camera.direction);
    var up = Cesium.Cartesian3.clone(camera.up);
    // Set camera to be in model's reference frame.
    camera.lookAtTransform(transform);
    // Reset the camera state to the saved state so it appears fixed in the model's frame.
    Cesium.Cartesian3.clone(offset, camera.position);
    Cesium.Cartesian3.clone(direction, camera.direction);
    Cesium.Cartesian3.clone(up, camera.up);
    Cesium.Cartesian3.cross(direction, up, camera.right);
});
// Add a few more balloons flying with the one the viewer is in.
var numBalloons = 12;
for (var i = 0; i < numBalloons; ++i) {
    var balloonRadius = (Cesium.Math.nextRandomNumber() * 2.0 - 1.0) * 0.01 + radius;
    var balloon = viewer.entities.add({
        availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start: start,
                stop: stop
            })]),
        position: computeCirclularFlight(longitude, latitude, balloonRadius),
        model: {
            uri: modelURI,
            minimumPixelSize: 64
        }
    });
    balloon.position.setInterpolationOptions({
        interpolationDegree: 2,
        interpolationAlgorithm: Cesium.HermitePolynomialApproximation
    });
}
//# sourceMappingURL=Earth.js.map