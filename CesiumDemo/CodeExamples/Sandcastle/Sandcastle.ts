class Sandcastle {
    static reset: Function;
}

namespace Sandcastle {

    let _toolbarElem: HTMLDivElement;

    export function getToolBar() {
        if (!_toolbarElem) {
            _toolbarElem = <HTMLDivElement>document.getElementById("toolbar");
            if (!_toolbarElem) {
                _toolbarElem = document.createElement("div");
                _toolbarElem.id = "toolbar";
                document.body.appendChild(_toolbarElem);
            }
        }
        return _toolbarElem;
    }

    export function addToolbarButton(text: string, onclick: Function, containerId?: string) {
        let button = document.createElement("button");
        button.innerText = text;
        button.className = "cesium-button";
        if (containerId) {
            let container = document.getElementById(containerId);
            container.appendChild(button);
        } else {
            getToolBar().appendChild(button);
        }
        button.addEventListener("click", () => onclick());
    }

    export function addToolbarMenu(options: Array<{ text: string, value?: any, onselect?: Function }>) {
        let select = document.createElement("select");
        select.className = "cesium-button";
        getToolBar().appendChild(select);

        options.forEach((item) => {
            let option = document.createElement("option");
            option.text = item.text;
            option.value = item.value;
            select.add(option);
        })

        select.addEventListener("change", () => {
            if (Sandcastle.reset)
                Sandcastle.reset();
            let optionsItem = options[select.selectedIndex];
            if (optionsItem.onselect)
                optionsItem.onselect();
        });

        if (options[0].onselect)
            options[0].onselect();
    }

}

