var czml = [{
        "id": "document",
        "name": "Basic CZML billboard and label",
        "version": "1.0"
    }, {
        "id": "some-unique-id",
        "name": "AGI",
        "description": "<p><a href='http://www.agi.com' target='_blank'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>",
        "billboard": {
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
            "scale": 1.5
        },
        "label": {
            "fillColor": {
                "rgba": [0, 255, 255, 255]
            },
            "font": "11pt Lucida Console",
            "horizontalOrigin": "LEFT",
            "outlineColor": {
                "rgba": [0, 0, 0, 255]
            },
            "outlineWidth": 2,
            "pixelOffset": {
                "cartesian2": [12, 0]
            },
            "style": "FILL_AND_OUTLINE",
            "text": "AGI"
        },
        "position": {
            "cartesian": [
                1216361.4096947117, -4736253.175342511, 4081267.4865667094
            ]
        }
    }];
var viewer = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
//# sourceMappingURL=Earth.js.map