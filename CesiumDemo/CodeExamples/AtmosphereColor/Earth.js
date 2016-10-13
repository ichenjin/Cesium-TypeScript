var viewer = new Cesium.Viewer("cesiumContainer");
var scene = viewer.scene;
var skyAtmosphere = scene.skyAtmosphere;
// The viewModel tracks the state of our mini application.
var viewModel = {
    hueShift: 0.0,
    saturationShift: 0.0,
    brightnessShift: 0.0
};
// Convert the viewModel members into knockout observables.
Cesium.knockout.track(viewModel);
// Bind the viewModel to the DOM elements of the UI that call for it.
var toolbarElem = Sandcastle.getToolBar();
Cesium.knockout.applyBindings(viewModel, toolbarElem);
// Make the skyAtmosphere's HSB parameters subscribers of the viewModel.
function subscribeParameter(name) {
    Cesium.knockout.getObservable(viewModel, name).subscribe(function (newValue) {
        skyAtmosphere[name] = newValue;
    });
}
subscribeParameter('hueShift');
subscribeParameter('saturationShift');
subscribeParameter('brightnessShift');
Sandcastle.addToolbarButton('Toggle Lighting', function () {
    scene.globe.enableLighting = !scene.globe.enableLighting;
}, 'toggleLighting');
Sandcastle.addToolbarButton('Toggle Fog', function () {
    scene.fog.enabled = !scene.fog.enabled;
}, 'toggleFog');
var camera = viewer.camera;
camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-75.5847, 40.0397, 1000.0),
    orientation: {
        heading: -Cesium.Math.PI_OVER_TWO,
        pitch: 0.2,
        roll: 0.0
    }
});
//# sourceMappingURL=Earth.js.map