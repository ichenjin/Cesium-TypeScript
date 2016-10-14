var viewer = new Cesium.Viewer("cesiumContainer");
var imageryLayers = viewer.imageryLayers;
// The viewModel tracks the state of our mini application.
var viewModel = {
    brightness: 0,
    contrast: 0,
    hue: 0,
    saturation: 0,
    gamma: 0
};
// Convert the viewModel members into knockout observables.
Cesium.knockout.track(viewModel);
// Bind the viewModel to the DOM elements of the UI that call for it.
var toolbarElem = document.getElementById('toolbar');
Cesium.knockout.applyBindings(viewModel, toolbarElem);
// Make the active imagery layer a subscriber of the viewModel.
function subscribeLayerParameter(name) {
    Cesium.knockout.getObservable(viewModel, name).subscribe(function (newValue) {
        if (imageryLayers.length > 0) {
            var layer = imageryLayers.get(0);
            layer[name] = newValue;
        }
    });
}
subscribeLayerParameter('brightness');
subscribeLayerParameter('contrast');
subscribeLayerParameter('hue');
subscribeLayerParameter('saturation');
subscribeLayerParameter('gamma');
// Make the viewModel react to base layer changes.
function updateViewModel() {
    if (imageryLayers.length > 0) {
        var layer = imageryLayers.get(0);
        viewModel.brightness = layer.brightness;
        viewModel.contrast = layer.contrast;
        viewModel.hue = layer.hue;
        viewModel.saturation = layer.saturation;
        viewModel.gamma = layer.gamma;
    }
}
imageryLayers.layerAdded.addEventListener(updateViewModel);
imageryLayers.layerRemoved.addEventListener(updateViewModel);
imageryLayers.layerMoved.addEventListener(updateViewModel);
updateViewModel();
//# sourceMappingURL=Earth.js.map