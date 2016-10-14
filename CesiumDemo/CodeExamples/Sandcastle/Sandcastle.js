var Sandcastle = (function () {
    function Sandcastle() {
    }
    return Sandcastle;
}());
var Sandcastle;
(function (Sandcastle) {
    var _toolbarElem;
    function invoke(func) {
        if (Sandcastle.reset)
            Sandcastle.reset();
        if (func)
            func();
    }
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
        button.addEventListener("click", function () { return invoke(onclick); });
    }
    Sandcastle.addToolbarButton = addToolbarButton;
    function addDefaultToolbarButton(text, onclick, containerId) {
        addToolbarButton(text, onclick, containerId);
        onclick();
    }
    Sandcastle.addDefaultToolbarButton = addDefaultToolbarButton;
    function addToolbarMenu(options, containerId) {
        var select = document.createElement("select");
        select.className = "cesium-button";
        if (containerId) {
            var container = document.getElementById(containerId);
            container.appendChild(select);
        }
        else {
            getToolBar().appendChild(select);
        }
        options.forEach(function (item) {
            var option = document.createElement("option");
            option.text = item.text;
            option.value = item.value;
            select.add(option);
        });
        select.addEventListener("change", function () {
            var optionsItem = options[select.selectedIndex];
            invoke(optionsItem.onselect);
        });
        if (options[0].onselect)
            options[0].onselect();
    }
    Sandcastle.addToolbarMenu = addToolbarMenu;
    function highlight(args) {
    }
    Sandcastle.highlight = highlight;
    function declare(args) {
    }
    Sandcastle.declare = declare;
})(Sandcastle || (Sandcastle = {}));
//# sourceMappingURL=Sandcastle.js.map