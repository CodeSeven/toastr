import merge from 'lodash/merge';

import { version } from '../package.json';

export type ToastType = {
  info: string;
  error: string;
  warning: string;
  success: string;
};

export type ToastrOptions = {
  tapToDismiss: boolean;
  toastClass: string;
  containerId: string;
  debug: boolean;

  showMethod: 'fadeIn' | 'slideDown' | 'show';
  showDuration: number;
  showEasing: 'swing' | 'linear';
  onShown?: Function;
  hideMethod: 'fadeOut';
  hideDuration: number;
  hideEasing: 'swing';
  onHidden?: Function;
  closeMethod: boolean;
  closeDuration: boolean;
  closeEasing: boolean;
  closeOnHover: boolean;

  extendedTimeOut: number;
  iconClasses: {
    error: string;
    info: string;
    success: string;
    warning: string;
  };
  iconClass: string;
  positionClass: string;
  timeOut: number; // Set timeOut and extendedTimeOut to 0 to make it sticky
  titleClass: string;
  messageClass: string;
  escapeHtml: boolean;
  target: string;
  closeHtml: string;
  closeClass: string;
  newestOnTop: boolean;
  preventDuplicates: boolean;
  progressBar: boolean;
  progressClass: string;
  onclick?: Function;

  onCloseClick?: Function;
  closeButton: boolean;
  rtl: boolean;
}

export type NotifyMap = {
  type: string;
  optionsOverride?: ToastrOptions;
  iconClass: string;
  title: string;
  message: string;
}

class Toastr {
  private listener: any;

  private toastId = 0;

  private previousToast: string | null = null;

  private toastType: ToastType = {
    info: 'info',
    error: 'error',
    warning: 'warning',
    success: 'success',
  };

  private version = version;

  private options: ToastrOptions = {
    tapToDismiss: true,
    toastClass: 'toast',
    containerId: 'toast-container',
    debug: false,

    showMethod: 'fadeIn', // fadeIn, slideDown, and show are built into jQuery
    showDuration: 300,
    showEasing: 'swing', // swing and linear are built into jQuery
    onShown: undefined,
    hideMethod: 'fadeOut',
    hideDuration: 1000,
    hideEasing: 'swing',
    onHidden: undefined,
    closeMethod: false,
    closeDuration: false,
    closeEasing: false,
    closeOnHover: true,

    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning',
    },
    iconClass: 'toast-info',
    positionClass: 'toast-top-right',
    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    escapeHtml: false,
    target: 'body',
    closeHtml: '<button type="button">&times;</button>',
    closeClass: 'toast-close-button',
    newestOnTop: true,
    preventDuplicates: false,
    progressBar: false,
    progressClass: 'toast-progress',
    rtl: false,

    onCloseClick: () => { },
    closeButton: false,
  };

  public $container: HTMLElement = document.createElement('div');

  public constructor(options?: ToastrOptions) {
    this.options = merge({}, this.options, options);

    this.createContainer();
  }

  public createContainer(): HTMLElement {
    this.$container = document.createElement('div');

    this.$container.setAttribute('id', this.options.containerId);
    this.$container.classList.add(this.options.positionClass);

    const target = document.getElementsByTagName(this.options.target);

    if (target && target[0]) {
      target[0].appendChild(this.$container);
    }

    return this.$container;
  }

  public getContainer(options: any = this.options, create: any = null): HTMLElement {
    const $container = document.getElementById(options.containerId);

    if ($container) {
      this.$container = $container;

      return this.$container;
    }

    if (create) {
      this.$container = this.createContainer();
    }

    return this.$container;
  }

  public error(
    message: string,
    title: string,
    optionsOverride?: ToastrOptions,
  ): HTMLElement | null {
    return this.notify({
      type: this.toastType.error,
      iconClass: this.options.iconClasses.error,
      message,
      optionsOverride,
      title,
    });
  }

  public warning(
    message: string,
    title: string,
    optionsOverride?: ToastrOptions,
  ): HTMLElement | null {
    return this.notify({
      type: this.toastType.warning,
      iconClass: this.options.iconClasses.warning,
      message,
      optionsOverride,
      title,
    });
  }

  public success(
    message: string,
    title: string,
    optionsOverride?: ToastrOptions,
  ): HTMLElement | null {
    return this.notify({
      type: this.toastType.success,
      iconClass: this.options.iconClasses.success,
      message,
      optionsOverride,
      title,
    });
  }

  public info(message: string, title: string, optionsOverride?: ToastrOptions): HTMLElement | null {
    return this.notify({
      type: this.toastType.info,
      iconClass: this.options.iconClasses.info,
      message,
      optionsOverride,
      title,
    });
  }

  public subscribe(callback: Function): void {
    this.listener = callback;
  }

  public publish(args: any): void {
    if (!this.listener) {
      return;
    }

    this.listener(args);
  }

  public clear($toastElement?: any, clearOptions?: any) {
    if (!this.$container) {
      this.getContainer(this.options);
    }

    if (!this.clearToast($toastElement, this.options, clearOptions)) {
      this.clearContainer(this.options);
    }
  }

  public remove($toastElement: any) {
    if (!this.$container) {
      this.getContainer(this.options);
    }

    if (!this.$container) {
      return;
    }

    if ($toastElement && $toastElement !== document.activeElement) {
      this.removeToast($toastElement);

      return;
    }

    if (!this.$container.hasChildNodes()) {
      const parentNode = this.$container.parentElement;

      if (parentNode) {
        parentNode.removeChild(this.$container);
      }
    }
  }

  public removeToast($toastElement: any) {
    if (!this.$container) {
      this.getContainer();
    }

    if (!this.$container) {
      return;
    }

    // todo set after visible state
    // as this will be a transition of css
    $toastElement.parentNode.removeChild($toastElement);
    // check if visible
    if ($toastElement.offsetWidth > 0 && $toastElement.offsetHeight > 0) {
      return;
    }

    // todo check if null makes sense
    // $toastElement = null;

    if (!this.$container.hasChildNodes()) {
      if (this.$container.parentNode) {
        this.$container.parentNode.removeChild(this.$container);
      }

      this.previousToast = null;
    }
  }

  private clearContainer(options: any) {
    if (!this.$container) {
      return;
    }

    const toastsToClear = this.$container.childNodes;

    for (let i = toastsToClear.length - 1; i >= 0; i--) {
      this.clearToast(toastsToClear[i], options);
    }
  }

  private clearToast(
    $toastElement: any,
    options: any = this.options,
    clearOptions: any = null,
  ): boolean {
    const force = clearOptions && clearOptions.force ? clearOptions.force : false;
    if ($toastElement && (force || $toastElement !== document.activeElement)) {
      // todo hide effect
      this.removeToast($toastElement);
      // $toastElement[options.hideMethod]({
      //     duration: options.hideDuration,
      //     easing: options.hideEasing,
      //     complete: function () { removeToast($toastElement); }
      // });
      return true;
    }

    return false;
  }

  private notify(map: NotifyMap): HTMLElement | null {
    let iconClass = map.iconClass || this.options.iconClass;

    const shouldExit = (options: any, exitMap: NotifyMap): boolean => {
      if (this.options.preventDuplicates) {
        if (exitMap.message === this.previousToast) {
          return true;
        }

        this.previousToast = exitMap.message;
      }
      return false;
    };

    if (typeof map.optionsOverride !== 'undefined') {
      this.options = merge({}, this.options, map.optionsOverride);
      iconClass = map.optionsOverride.iconClass || iconClass;
    }

    if (shouldExit(this.options, map)) {
      return null;
    }

    this.toastId += 1;

    this.$container = this.getContainer(this.options, true);

    let intervalId: any = null;
    const $toastElement = document.createElement('div');
    const $titleElement = document.createElement('div');
    const $messageElement = document.createElement('div');
    const $progressElement = document.createElement('div');
    const createdElement = document.createElement('div');
    createdElement.innerHTML = this.options.closeHtml.trim();
    const $closeElement: any = createdElement.firstChild;

    const progressBar: any = {
      intervalId: null,
      hideEta: null,
      maxHideTime: null,
    };
    const response: any = {
      toastId: this.toastId,
      state: 'visible',
      startTime: new Date(),
      endTime: undefined,
      options: this.options,
      map,
    };

    const hideToast = (override: any = null): void => {
      // const method = override && this.options.closeMethod !== false
      //   ? this.options.closeMethod
      //   : this.options.hideMethod;

      // const duration = override && this.options.closeDuration !== false
      //   ? this.options.closeDuration
      //   : this.options.hideDuration;

      // const easing = override && this.options.closeEasing !== false
      //   ? this.options.closeEasing
      //   : this.options.hideEasing;

      if ($toastElement === document.activeElement && !override) {
        return;
      }

      clearTimeout(progressBar.intervalId);
      // todo fade out toast
      this.removeToast($toastElement);
      clearTimeout(intervalId);
      if (this.options.onHidden && response.state !== 'hidden') {
        this.options.onHidden();
      }
      response.state = 'hidden';
      response.endTime = new Date();
      this.publish(response);

      // return $toastElement[method]({
      //     duration: duration,
      //     easing: easing,
      // });
    };

    const escapeHtml = (source: any): string => {
      const newSource = source !== null ? source : '';

      return newSource
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    };

    const setAria = (): void => {
      let ariaValue = '';
      switch (map.iconClass) {
        case 'toast-success':
        case 'toast-info':
          ariaValue = 'polite';
          break;
        default:
          ariaValue = 'assertive';
      }
      $toastElement.setAttribute('aria-live', ariaValue);
    };

    const delayedHideToast = (): void => {
      if (this.options.timeOut > 0 || this.options.extendedTimeOut > 0) {
        intervalId = setTimeout(hideToast, this.options.extendedTimeOut);
        progressBar.maxHideTime = this.options.extendedTimeOut;
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
      }
    };

    const stickAround = (): void => {
      clearTimeout(intervalId);
      progressBar.hideEta = 0;
      // todo
      // $toastElement.stop(true, true)[this.options.showMethod](
      //     {duration: this.options.showDuration, easing: this.options.showEasing}
      // );
    };

    const handleEvents = (): void => {
      if (this.options.closeOnHover) {
        $toastElement.addEventListener('mouseenter', stickAround);
        $toastElement.addEventListener('mouseleave', delayedHideToast);
      }

      if (!this.options.onclick && this.options.tapToDismiss) {
        $toastElement.addEventListener('click', hideToast);
      }

      if (this.options.closeButton && $closeElement) {
        $closeElement.addEventListener('click', (event: any) => {
          if (event.stopPropagation) {
            event.stopPropagation();
          } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
            // eslint-disable-next-line no-param-reassign
            event.cancelBubble = true;
          }

          if (this.options.onCloseClick) {
            this.options.onCloseClick(event);
          }

          hideToast(true);
        });
      }

      if (this.options.onclick) {
        $toastElement.addEventListener('click', (event) => {
          // ts needs another check here
          if (this.options.onclick) {
            this.options.onclick(event);
          }

          hideToast();
        });
      }
    };

    const setTitle = (): void => {
      if (map.title) {
        let suffix = map.title;
        if (this.options.escapeHtml) {
          suffix = escapeHtml(map.title);
        }
        $titleElement.innerHTML = suffix;
        $titleElement.classList.add(this.options.titleClass);
        $toastElement.appendChild($titleElement);
      }
    };

    const setMessage = (): void => {
      if (map.message) {
        let suffix = map.message;

        if (this.options.escapeHtml) {
          suffix = escapeHtml(map.message);
        }

        $messageElement.innerHTML = suffix;
        $messageElement.classList.add(this.options.messageClass);
        $toastElement.appendChild($messageElement);
      }
    };

    const setCloseButton = (): void => {
      if (this.options.closeButton) {
        $closeElement.classList.add(this.options.closeClass);
        $closeElement.setAttribute('role', 'button');
        $toastElement.insertBefore($closeElement, $toastElement.firstChild);
      }
    };

    const setProgressBar = (): void => {
      if (this.options.progressBar) {
        $progressElement.classList.add(this.options.progressClass);
        $toastElement.insertBefore($progressElement, $toastElement.firstChild);
      }
    };

    const setRTL = (): void => {
      if (this.options.rtl) {
        $toastElement.classList.add('rtl');
      }
    };

    const setIcon = (): void => {
      if (map.iconClass) {
        $toastElement.classList.add(this.options.toastClass, iconClass);
      }
    };

    const setSequence = (): void => {
      if (!this.$container) {
        return;
      }

      if (this.options.newestOnTop) {
        this.$container.insertBefore($toastElement, this.$container.firstChild);
      } else {
        this.$container.appendChild($toastElement);
      }
    };

    const updateProgress = (): void => {
      const percentage = (
        (progressBar.hideEta - (new Date().getTime()))
        / progressBar.maxHideTime
      ) * 100;

      $progressElement.style.width = `${percentage}%`;
    };

    const displayToast = (): void => {
      // todo hide toast
      // $toastElement.hide();

      // todo fade out toast
      if (this.options.onShown) {
        this.options.onShown();
      }
      // $toastElement[this.options.showMethod](
      // eslint-disable-next-line
      //     {duration: this.options.showDuration, easing: this.options.showEasing, complete: this.options.onShown}
      // );

      if (this.options.timeOut > 0) {
        intervalId = setTimeout(hideToast, this.options.timeOut);
        progressBar.maxHideTime = this.options.timeOut;
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
        if (this.options.progressBar) {
          progressBar.intervalId = setInterval(updateProgress, 10);
        }
      }
    };

    const personalizeToast = (): void => {
      setIcon();
      setTitle();
      setMessage();
      setCloseButton();
      setProgressBar();
      setRTL();
      setSequence();
      setAria();
    };

    personalizeToast();

    displayToast();

    handleEvents();

    this.publish(response);

    if (this.options.debug && console) {
      console.log(response);
    }

    return $toastElement;
  }
}

export default Toastr;
