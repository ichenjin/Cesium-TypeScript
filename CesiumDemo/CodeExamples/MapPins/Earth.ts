let viewer = new Cesium.Viewer('cesiumContainer', {
    timeline: false, animation: false
});

let pinBuilder = new Cesium.PinBuilder();

let bluePin = viewer.entities.add({
    name: 'Blank blue pin',
    position: Cesium.Cartesian3.fromDegrees(-75.170726, 39.9208667),
    billboard: {
        image: pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 188).toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
});

let questionPin = viewer.entities.add({
    name: 'Question mark',
    position: Cesium.Cartesian3.fromDegrees(-75.1698529, 39.9220071),
    billboard: {
        image: pinBuilder.fromText('Cesium', Cesium.Color.BLACK, 256).toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
});

let url = '../../Cesium/Assets/Textures/maki/grocery.png';
let groceryPin = (pinBuilder.fromUrl(url, Cesium.Color.GREEN, 48) as Promise<HTMLCanvasElement>)
    .then(function (canvas) {
        return viewer.entities.add({
            name: 'Grocery store',
            position: Cesium.Cartesian3.fromDegrees(-75.1705217, 39.921786),
            billboard: {
                image: canvas.toDataURL(),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            }
        });
    });

//Create a red pin representing a hospital from the maki icon set.
let hospitalPin = (pinBuilder.fromMakiIconId('hospital', Cesium.Color.RED, 48) as Promise<HTMLCanvasElement>)
    .then(function (canvas) {
        return viewer.entities.add({
            name: 'Hospital',
            position: Cesium.Cartesian3.fromDegrees(-75.1698606, 39.9211275),
            billboard: {
                image: canvas.toDataURL(),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            }
        });
    });

//Since some of the pins are created asynchronously, wait for them all to load before zooming/
Promise.all([
    bluePin,
    questionPin,
    groceryPin,
    hospitalPin
]).then(function (pins) {
    viewer.zoomTo(pins);
});

