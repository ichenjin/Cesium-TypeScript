var Sandcastle = (function () {
    function Sandcastle() {
    }
    return Sandcastle;
}());
var Sandcastle;
(function (Sandcastle) {
    var _toolbarElem;
    function getToolBar() {
        if (!_toolbarElem) {
            _toolbarElem = document.getElementById("toolbar");
            if (!_toolbarElem) {
                _toolbarElem = document.createElement("div");
                _toolbarElem.id = "toolbar";
                document.body.appendChild(_toolbarElem);
            }
        }
        return _toolbarElem;
    }
    Sandcastle.getToolBar = getToolBar;
    function addToolbarButton(text, onclick, containerId) {
        var button = document.createElement("button");
        button.innerText = text;
        button.className = "cesium-button";
        if (containerId) {
            var container = document.getElementById(containerId);
            container.appendChild(button);
        }
        else {
            getToolBar().appendChild(button);
        }
        button.addEventListener("click", function () { return onclick(); });
    }
    Sandcastle.addToolbarButton = addToolbarButton;
    function addToolbarMenu(options) {
        var select = document.createElement("select");
        select.className = "cesium-button";
        getToolBar().appendChild(select);
        options.forEach(function (item) {
            var option = document.createElement("option");
            option.text = item.text;
            option.value = item.value;
            select.options.add(option);
        });
        select.addEventListener("change", function () {
            if (Sandcastle.reset)
                Sandcastle.reset();
            var optionsItem = options[select.options.selectedIndex];
            if (optionsItem.onselect)
                optionsItem.onselect();
        });
        if (options[0].onselect)
            options[0].onselect();
    }
    Sandcastle.addToolbarMenu = addToolbarMenu;
})(Sandcastle || (Sandcastle = {}));
//# sourceMappingURL=Sandcastle.js.map