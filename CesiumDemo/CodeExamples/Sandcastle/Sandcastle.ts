class Sandcastle {
    static reset: Function;
}

namespace Sandcastle {

    let _toolbarElem: HTMLDivElement;

    function invoke(func: Function) {
        if (Sandcastle.reset)
            Sandcastle.reset(); 
        if (func)
            func();
    }

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
        button.addEventListener("click", () => invoke(onclick));
    }

    export function addDefaultToolbarButton(text: string, onclick: Function, containerId?: string) {
        addToolbarButton(text, onclick, containerId);
        onclick();
    }

    export function addToolbarMenu(options: Array<{ text: string, value?: any, onselect?: Function }>, containerId?: string) {
        let select = document.createElement("select");
        select.className = "cesium-button";

        if (containerId) {
            let container = document.getElementById(containerId);
            container.appendChild(select);
        } else {
            getToolBar().appendChild(select);
        }

        options.forEach((item) => {
            let option = document.createElement("option");
            option.text = item.text;
            option.value = item.value;
            select.add(option);
        })

        select.addEventListener("change", () => {
            let optionsItem = options[select.selectedIndex];
            invoke(optionsItem.onselect);
        });

        if (options[0].onselect)
            options[0].onselect();
    }

    export function highlight(args?) {
    }

    export function declare(args?) {
    }

}

