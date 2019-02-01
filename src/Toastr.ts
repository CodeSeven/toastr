import merge from 'lodash/merge';

import './toastr.scss';
import { version } from '../package.json';

type Required<T> = {
  [P in keyof T]-?: T[P];
}

export type ToastType = {
  info?: string;
  error?: string;
  warning?: string;
  success?: string;
};

export type RequiredToastType = Required<ToastType>;

export type ToastrOptions<T = ToastType> = {
  tapToDismiss?: boolean;
  toastClass?: string;
  containerId?: string;
  debug?: boolean;

  showMethod?: 'fadeIn' | 'slideDown' | 'show';
  showDuration?: number;
  showEasing?: 'swing' | 'linear';
  onShown?: Function;
  hideMethod?: 'fadeOut';
  hideDuration?: number;
  hideEasing?: 'swing';
  onHidden?: Function;
  closeMethod?: boolean;
  closeDuration?: boolean;
  closeEasing?: boolean;
  closeOnHover?: boolean;

  extendedTimeOut?: number;
  iconClasses?: T;
  iconClass?: string;
  positionClass?: string;
  timeOut?: number; // Set timeOut and extendedTimeOut to 0 to make it sticky
  titleClass?: string;
  messageClass?: string;
  escapeHtml?: boolean;
  target?: string;
  closeHtml?: string;
  closeClass?: string;
  newestOnTop?: boolean;
  preventDuplicates?: boolean;
  progressBar?: boolean;
  progressClass?: string;
  onclick?: Function;

  onCloseClick?: Function;
  closeButton?: boolean;
  rtl?: boolean;
}

export type NotifyMap = {
  type: string;
  optionsOverride?: ToastrOptions;
  iconClass: string;
  title?: string;
  message?: string;
}

class Toastr {
  private listener: any;

  private toastId = 0;

  private previousToast: string | null = null;

  private toastType: RequiredToastType = {
    info: 'info',
    error: 'error',
    warning: 'warning',
    success: 'success',
  };

  private version = version;

  private options: Required<ToastrOptions<RequiredToastType>> = {
    tapToDismiss: true,
    toastClass: 'toast',
    containerId: 'toast-container',
    debug: false,

    showMethod: 'fadeIn', // fadeIn, slideDown, and show are built into jQuery
    showDuration: 300,
    showEasing: 'swing', // swing and linear are built into jQuery
    onShown: () => { },
    hideMethod: 'fadeOut',
    hideDuration: 1000,
    hideEasing: 'swing',
    onHidden: () => { },
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

    onclick: () => { },
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
    message?: string,
    title?: string,
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
    message?: string,
    title?: string,
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
    message?: string,
    title?: string,
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

  public info(
    message?: string,
    title?: string,
    optionsOverride?: ToastrOptions,
  ): HTMLElement | null {
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
    let { options } = this;
    let iconClass = map.iconClass || this.options.iconClass;

    const shouldExit = (opts: ToastrOptions, exitMap: NotifyMap): boolean => {
      if (opts.preventDuplicates) {
        if (exitMap.message === this.previousToast) {
          return true;
        }

        this.previousToast = exitMap.message || '';
      }
      return false;
    };

    if (typeof map.optionsOverride !== 'undefined') {
      options = merge({}, options, map.optionsOverride);
      iconClass = map.optionsOverride.iconClass || iconClass;
    }

    if (shouldExit(options, map)) {
      return null;
    }

    this.toastId += 1;

    this.$container = this.getContainer(options, true);

    let intervalId: any = null;
    const $toastElement = document.createElement('div');
    const $titleElement = document.createElement('div');
    const $messageElement = document.createElement('div');
    const $progressElement = document.createElement('div');
    const createdElement = document.createElement('div');
    createdElement.innerHTML = options.closeHtml.trim();
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
      options,
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
      if (options.onHidden && response.state !== 'hidden') {
        options.onHidden();
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
      if (options.timeOut > 0 || options.extendedTimeOut > 0) {
        intervalId = setTimeout(hideToast, options.extendedTimeOut);
        progressBar.maxHideTime = options.extendedTimeOut;
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
      }
    };

    const stickAround = (): void => {
      clearTimeout(intervalId);
      progressBar.hideEta = 0;
      // todo
      // $toastElement.stop(true, true)[options.showMethod](
      //     {duration: options.showDuration, easing: options.showEasing}
      // );
    };

    const handleEvents = (): void => {
      if (options.closeOnHover) {
        $toastElement.addEventListener('mouseenter', () => stickAround());
        $toastElement.addEventListener('mouseout', () => delayedHideToast());
      }

      if (!options.onclick && options.tapToDismiss) {
        $toastElement.addEventListener('click', hideToast);
      }

      if (options.closeButton && $closeElement) {
        $closeElement.addEventListener('click', (event: any) => {
          if (event.stopPropagation) {
            event.stopPropagation();
          } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
            // eslint-disable-next-line no-param-reassign
            event.cancelBubble = true;
          }

          if (options.onCloseClick) {
            options.onCloseClick(event);
          }

          hideToast(true);
        });
      }

      if (options.onclick) {
        $toastElement.addEventListener('click', (event) => {
          // ts needs another check here
          if (options.onclick) {
            options.onclick(event);
          }

          hideToast();
        });
      }
    };

    const setTitle = (): void => {
      if (map.title) {
        let suffix = map.title;
        if (options.escapeHtml) {
          suffix = escapeHtml(map.title);
        }
        $titleElement.innerHTML = suffix;
        $titleElement.classList.add(options.titleClass);
        $toastElement.appendChild($titleElement);
      }
    };

    const setMessage = (): void => {
      if (map.message) {
        let suffix = map.message;

        if (options.escapeHtml) {
          suffix = escapeHtml(map.message);
        }

        $messageElement.innerHTML = suffix;
        $messageElement.classList.add(options.messageClass);
        $toastElement.appendChild($messageElement);
      }
    };

    const setCloseButton = (): void => {
      if (options.closeButton) {
        $closeElement.classList.add(options.closeClass);
        $closeElement.setAttribute('role', 'button');
        $toastElement.insertBefore($closeElement, $toastElement.firstChild);
      }
    };

    const setProgressBar = (): void => {
      if (options.progressBar) {
        $progressElement.classList.add(options.progressClass);
        $toastElement.insertBefore($progressElement, $toastElement.firstChild);
      }
    };

    const setRTL = (): void => {
      if (options.rtl) {
        $toastElement.classList.add('rtl');
      }
    };

    const setIcon = (): void => {
      if (map.iconClass) {
        $toastElement.classList.add(options.toastClass, iconClass);
      }
    };

    const setSequence = (): void => {
      if (!this.$container) {
        return;
      }

      if (options.newestOnTop) {
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
      if (options.onShown) {
        options.onShown();
      }
      // $toastElement[options.showMethod](
      // eslint-disable-next-line
      //     {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
      // );

      if (options.timeOut > 0) {
        intervalId = setTimeout(hideToast, options.timeOut);
        progressBar.maxHideTime = options.timeOut;
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
        if (options.progressBar) {
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

    if (options.debug && console) {
      console.log(response);
    }

    return $toastElement;
  }
}

export default Toastr;
