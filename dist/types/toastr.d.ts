declare const toastr: (options?: any) => {
    version: string;
    getContainer: (options?: any, create?: any) => any;
    subscribe: (callback: Function) => void;
    success: (message: string, title: string, optionsOverride: any) => HTMLDivElement | undefined;
    warning: (message: string, title: string, optionsOverride: any) => HTMLDivElement | undefined;
    options: any;
    remove: ($toastElement: any) => void;
    clear: ($toastElement: any, clearOptions: any) => void;
    error: (message: string, title: string, optionsOverride: any) => HTMLDivElement | undefined;
    info: (message: string, title: string, optionsOverride: any) => HTMLDivElement | undefined;
};
export default toastr;
