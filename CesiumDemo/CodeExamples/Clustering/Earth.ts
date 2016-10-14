let viewer = new Cesium.Viewer("cesiumContainer");

let options = {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas
};
let dataSourcePromise = viewer.dataSources.add(Cesium.KmlDataSource.load('../../SampleData/kml/facilities/facilities.kml', options));
dataSourcePromise.then(function (dataSource) {
    let pixelRange = 15;
    let minimumClusterSize = 3;
    let enabled = true;

    dataSource.clustering.enabled = enabled;
    dataSource.clustering.pixelRange = pixelRange;
    dataSource.clustering.minimumClusterSize = minimumClusterSize;

    let removeListener;

    let pinBuilder = new Cesium.PinBuilder();
    let pin50 = pinBuilder.fromText('50+', Cesium.Color.RED, 48).toDataURL();
    let pin40 = pinBuilder.fromText('40+', Cesium.Color.ORANGE, 48).toDataURL();
    let pin30 = pinBuilder.fromText('30+', Cesium.Color.YELLOW, 48).toDataURL();
    let pin20 = pinBuilder.fromText('20+', Cesium.Color.GREEN, 48).toDataURL();
    let pin10 = pinBuilder.fromText('10+', Cesium.Color.BLUE, 48).toDataURL();

    let singleDigitPins = new Array(8);
    for (let i = 0; i < singleDigitPins.length; ++i) {
        singleDigitPins[i] = pinBuilder.fromText('' + (i + 2), Cesium.Color.VIOLET, 48).toDataURL();
    }

    function customStyle() {
        if (Cesium.defined(removeListener)) {
            removeListener();
            removeListener = undefined;
        } else {
            removeListener = dataSource.clustering.clusterEvent.addEventListener(function (clusteredEntities, cluster) {
                cluster.label.show = false;
                cluster.billboard.show = true;
                cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

                if (clusteredEntities.length >= 50) {
                    cluster.billboard.image = pin50;
                } else if (clusteredEntities.length >= 40) {
                    cluster.billboard.image = pin40;
                } else if (clusteredEntities.length >= 30) {
                    cluster.billboard.image = pin30;
                } else if (clusteredEntities.length >= 20) {
                    cluster.billboard.image = pin20;
                } else if (clusteredEntities.length >= 10) {
                    cluster.billboard.image = pin10;
                } else {
                    cluster.billboard.image = singleDigitPins[clusteredEntities.length - 2];
                }
            });
        }

        // force a re-cluster with the new styling
        let pixelRange = dataSource.clustering.pixelRange;
        dataSource.clustering.pixelRange = 0;
        dataSource.clustering.pixelRange = pixelRange;
    }

    // start with custom style
    customStyle();

    let viewModel = {
        pixelRange: pixelRange,
        minimumClusterSize: minimumClusterSize,
        enabled: enabled,
        customStyle: true
    };
    Cesium.knockout.track(viewModel);

    let toolbar = document.getElementById('toolbar');
    Cesium.knockout.applyBindings(viewModel, toolbar);

    function subscribeParameter(name) {
        Cesium.knockout.getObservable(viewModel, name).subscribe(
            function (newValue) {
                dataSource.clustering[name] = newValue;
            }
        );
    }

    subscribeParameter('pixelRange');
    subscribeParameter('minimumClusterSize');
    subscribeParameter('enabled');
    Cesium.knockout.getObservable(viewModel, 'customStyle').subscribe(customStyle);

    let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (movement) {
        let pickedLabel = <Cesium.Label>viewer.scene.pick(movement.position);
        if (Cesium.defined(pickedLabel)) {
            if (Cesium.isArray(pickedLabel.id)) {
                let ids = pickedLabel.id as Array<any>;
                for (let i = 0; i < ids.length; ++i) {
                    ids[i].label.fillColor = Cesium.Color.RED;
                }
            }
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
});
