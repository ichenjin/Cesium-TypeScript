var viewer = new Cesium.Viewer('cesiumContainer');
function addLabel() {
    Sandcastle.declare(addLabel);
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.1641667, 39.9522222),
        label: {
            text: 'Philadelphia'
        }
    });
}
function setFont() {
    Sandcastle.declare(setFont);
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.1641667, 39.9522222),
        label: {
            text: 'Philadelphia',
            font: '24px Helvetica',
            fillColor: Cesium.Color.SKYBLUE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE
        }
    });
}
function setProperties() {
    Sandcastle.declare(setProperties);
    var entity = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.1641667, 39.9522222, 300000.0),
        label: {
            text: 'Philadelphia'
        }
    });
    entity.label.scale = new Cesium.ConstantProperty(2.0);
}
function offsetByDistance() {
    Sandcastle.declare(offsetByDistance);
    var image = new Image();
    image.onload = function () {
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(-75.1641667, 39.9522222),
            billboard: {
                scaleByDistance: new Cesium.NearFarScalar(1.5e2, 5.0, 1.5e7, 0.5),
                image: image
            },
            label: {
                text: 'Label on top of scaling billboard',
                font: '20px sans-serif',
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                pixelOffset: new Cesium.Cartesian2(0.0, -image.height),
                pixelOffsetScaleByDistance: new Cesium.NearFarScalar(1.5e2, 3.0, 1.5e7, 0.5)
            }
        });
    };
    image.src = '../images/facility.gif';
}
function fadeByDistance() {
    Sandcastle.declare(fadeByDistance);
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-73.94, 40.67),
        label: {
            text: 'New York',
            translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0)
        }
    });
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-84.39, 33.75),
        label: {
            text: 'Atlanta',
            translucencyByDistance: new Cesium.NearFarScalar(1.5e5, 1.0, 1.5e7, 0.0)
        }
    });
}
Sandcastle.addToolbarMenu([{
        text: 'Add label',
        onselect: function () {
            addLabel();
            Sandcastle.highlight(addLabel);
        }
    }, {
        text: 'Set font',
        onselect: function () {
            setFont();
            Sandcastle.highlight(setFont);
        }
    }, {
        text: 'Set properties',
        onselect: function () {
            setProperties();
            Sandcastle.highlight(setProperties);
        }
    }, {
        text: 'Offset label by distance',
        onselect: function () {
            offsetByDistance();
            Sandcastle.highlight(offsetByDistance);
        }
    }, {
        text: 'Fade label by distance',
        onselect: function () {
            fadeByDistance();
            Sandcastle.highlight(fadeByDistance);
        }
    }]);
Sandcastle.reset = function () {
    viewer.entities.removeAll();
};
//# sourceMappingURL=Earth.js.map