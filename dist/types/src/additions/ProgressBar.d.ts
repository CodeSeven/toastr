declare class ProgressBar {
    private hideEta;
    private intervalId;
    private maxHideTime;
    private previousTimeout;
    toastElement: HTMLDivElement;
    progressElement: HTMLDivElement;
    constructor(toastElement: HTMLDivElement, progressClass?: string);
    update(): void;
    start(): void;
    resetWidth(): void;
    stop(): void;
    reset(timeout: number): void;
}
export default ProgressBar;
