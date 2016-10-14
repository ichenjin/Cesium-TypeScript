declare class Sandcastle {
    static reset: Function;
}
declare namespace Sandcastle {
    function getToolBar(): HTMLDivElement;
    function addToolbarButton(text: string, onclick: Function, containerId?: string): void;
    function addDefaultToolbarButton(text: string, onclick: Function, containerId?: string): void;
    function addToolbarMenu(options: Array<{
        text: string;
        value?: any;
        onselect?: Function;
    }>, containerId?: string): void;
    function highlight(args?: any): void;
    function declare(args?: any): void;
}
