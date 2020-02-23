import addClasses from '../helpers/addClasses';

class ProgressBar {
  private hideEta: number = 0;

  private intervalId: any;

  private maxHideTime: number = 0;

  private previousTimeout: number = 0;

  public toastElement: HTMLDivElement;

  public progressElement: HTMLDivElement;

  public constructor(toastElement: HTMLDivElement, progressClass: string | string[] = '') {
    this.toastElement = toastElement;
    this.progressElement = document.createElement('div');

    addClasses(this.progressElement, progressClass);
    this.toastElement.insertBefore(this.progressElement, this.toastElement.firstChild);
  }

  public update(): void {
    const percentage = (
      (this.hideEta - (new Date().getTime()))
      / this.maxHideTime
    ) * 100;

    this.progressElement.style.width = `${percentage}%`;
  }

  public start() {
    this.reset(this.previousTimeout);

    this.intervalId = setInterval(() => this.update(), 10);
  }

  public resetWidth() {
    this.progressElement.style.width = '0%';
  }

  public stop() {
    this.maxHideTime = 0;
    this.hideEta = 0;
    this.resetWidth();

    clearInterval(this.intervalId);
  }

  public reset(timeout: number) {
    this.previousTimeout = timeout;
    this.maxHideTime = timeout;
    this.hideEta = new Date().getTime() + this.maxHideTime;
  }
}

export default ProgressBar;
