/*
 * Toastr
 * Copyright 2012-2016
 * Authors: John Papa,  Tim Ferrell and Stephen Bero.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */

/* jshint -W040 */
class toastr {

  constructor(options) {
    this.container = null;
    this.listener = null;
    this.toastId = 0;
    this.previousToast = undefined;
    this.options = options;

    this.toastType = {
      error: 'error',
      info: 'info',
      success: 'success',
      warning: 'warning',
    };

    this.defaultOptions = {
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

      extendedTimeOut: 1000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      },
      iconClass: 'toast-info',
      positionClass: 'toast-top-right',
      timeOut: 1000, // Set timeOut and extendedTimeOut to 0 to make it sticky
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      target: 'body',
      closeHtml: 'CLOSE',
      newestOnTop: true,
      preventDuplicates: false,
      progressBar: false,
    };

    return this;
  }

  /**
   * Gets the current options for toastr.
   * Includes defaults where not overriden.
   * @private
   * @returns {Object}
   */
  getOptions() {
    return Object.assign(this.defaultOptions, this.options);
  }

  /**
   * Retrieves the container element.
   * @param options
   * @param {boolean} createContainer Create a container if one does not already exist.
   * @returns {Element}
   */
  getContainer(options, createContainer) {
    let opt = options;

    if (typeof (options) === 'undefined') {
      opt = this.getOptions();
    }

    this.container = document.getElementById(opt.containerId);

    if (this.container !== null) {
      return this.container;
    }

    if (createContainer) {
      this.container = this.createContainer(opt);
    }

    return this.container;
  }

  /**
   * Checks if the provided element is visible on screen.
   * @private
   * @param element
   * @returns {boolean}
   */
  isElementVisible(element) { // eslint-disable-line class-methods-use-this
    return element.offsetWidth > 0 && element.offsetHeight > 0; // TODO this doesn't work
  }


  /**
   * Creates a toast with the 'error' styling.
   * @param message {string}
   * @param title {string}
   * @param optionsOverride {object}
   */
  error(message, title, optionsOverride) {
    return this.notify({
      type: this.toastType.error,
      iconClass: this.getOptions().iconClasses.error,
      message,
      optionsOverride,
      title,
    });
  }

  /**
   * Creates a toast with the 'info' styling.
   * @param message {string}
   * @param title {string}
   * @param optionsOverride {object}
   */
  info(message, title, optionsOverride) {
    return this.notify({
      type: this.toastType.info,
      iconClass: this.getOptions().iconClasses.info,
      message,
      optionsOverride,
      title,
    });
  }

  /**
   * Creates a toast with the 'success' styling.
   * @param message {string}
   * @param title {string}
   * @param optionsOverride {object}
   */
  success(message, title, optionsOverride) {
    return this.notify({
      type: this.toastType.success,
      iconClass: this.getOptions().iconClasses.success,
      message,
      optionsOverride,
      title,
    });
  }

  /**
   * Creates a toast with the 'warning' styling.
   * @param message {string}
   * @param title {string}
   * @param optionsOverride {object}
   */
  warning(message, title, optionsOverride) {
    return this.notify({
      type: this.toastType.warning,
      iconClass: this.getOptions().iconClasses.warning,
      message,
      optionsOverride,
      title,
    });
  }

  /**
   * Adds a listener to when a toast is shown.
   * @param callback
   */
  subscribe(callback) {
    this.listener = callback;
  }

  /**
   * Clears the provided toast element from the screen, executing animations.
   * @param {Element} toastElement
   * @param clearOptions
   */
  clear(toastElement, clearOptions) {
    const options = this.getOptions();

    if (this.container === null) {
      this.getContainer(options, false);
    }

    if (!this.clearToast(toastElement, options, clearOptions)) {
      this.clearContainer(options);
    }
  }

  /**
   * Removes a toast from the screen, without executing animations.
   * Good to go for v3.
   * @param {Element} toastElement The toast to be removed.
   */
  remove(toastElement) {
    const options = this.getOptions();

    if (typeof (this.container) === 'undefined') {
      this.getContainer(options, false);
    }

    if (typeof (toastElement) === 'undefined' && toastElement.matches(':focus')) {
      this.removeToast(toastElement);
      return;
    }

    if (!this.container.hasChildNodes()) {
      this.container.remove();
    }
  }

  /**
   * Clears all toasts from the container.
   * @param options
   */
  clearContainer(options) {
    if (this.container) {
      const numToastsToClear = this.container.children.length;

      for (let i = numToastsToClear - 1; i >= 0; i -= 1) {
        const item = this.container.children[i];
        this.clearToast(item, options);
      }

      // this.container.childNodes.forEach(item => this.clearToast(item, options, false));
    }
  }

  /**
   * Clears a toast.
   * @private
   * @param toastElement
   * @param options
   * @param clearOptions
   * @returns {boolean}
   */
  clearToast(toastElement, options, clearOptions) {
    if (typeof (toastElement) !== 'undefined') {
      const forceToastClosure = clearOptions && clearOptions.force ? clearOptions.force : false;

      if (forceToastClosure || !toastElement.matches(':focus')) {
        this.removeToast(toastElement);

        // TODO: Show exit animation and do callback etc
        return true;
      }
    }

    return false;
  }

  /**
   * Removes a toast from the screen.
   * @param toastElement
   */
  removeToast(toastElement) {
    if (typeof (this.container) === 'undefined') {
      this.container = this.getContainer();
    }

    if (this.isElementVisible(toastElement)) return;

    // Use the element to get its parent so we can remove it.
    toastElement.parentNode.removeChild(toastElement);

    if (toastElement.timeoutId !== null) {
      clearTimeout(toastElement.timeoutId);
    }

    toastElement = null; // eslint-disable-line no-param-reassign

    if (this.container.childNodes.length === 0 && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
      this.previousToast = undefined;
    }
  }

  /**
   * Creates the toastr container.
   * @private
   * @param options
   * @returns {Element}
   * @see Updated for v3.
   */
  createContainer(options) {
    const container = document.createElement('div');
    container.classList.add(options.positionClass);
    container.setAttribute('id', options.containerId);
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('role', 'alert');

    this.container = container;

    document.querySelector(options.target).appendChild(this.container);

    return this.container;
  }

  /**
   * Broadcast toast notification to the listener object.
   * @param {object} args Arguments to provide to the listener callback.
   */
  publish(args) {
    if (typeof (this.listener) === 'undefined' || this.listener === null) {
      return;
    }

    this.listener(args);
  }

  /**
   * Core method for generating toasts.
   * @param map
   * @returns {Element}
   */
  notify(map) {
    let options = this.getOptions();
    let iconClass = map.iconClass || options.iconClass;

    if (typeof (map.optionsOverride) !== 'undefined') {
      options = Object.assign(options, map.optionsOverride);
      iconClass = map.optionsOverride.iconClass || iconClass;
    }

    this.toastId += 1;

    const container = this.getContainer(options, true);
    const titleElement = document.createElement('div');
    const messageElement = document.createElement('div');
    const iconElement = document.createElement('div');
    const progressElement = document.createElement('div');
    const closeElement = document.createElement('div');
    closeElement.innerHTML = options.closeHtml;
    const message = map.message;
    const title = map.title;

    const progressBar = {
      intervalId: null,
      hideEta: null,
      maxHideTime: null,
    };

    const response = {
      toastId: this.toastId,
      state: 'visible',
      startTime: new Date(),
      options,
      map,
    };

    let timeoutId = null;
    let toastElement = document.createElement('div');
    toastElement.classList.add(iconClass);

    const shouldExit = (opt, mapping) => {
      if (options.preventDuplicates) {
        // if (typeof(this) !== 'undefined') {

        if (mapping.message === this.previousToast) {
          return true;
        }

        this.previousToast = map.message; // TODO: JSHint Possible String Violation
      }

      return false;
    };

    if (shouldExit.call(this, options, map)) {
      return null;
    }

    const setSequence = () => {
      const localContainer = this.getContainer();

      if (options.newestOnTop) {
        const firstNode = localContainer.firstChild;
        localContainer.insertBefore(toastElement, firstNode);

        // console.log(this.container);
        // TODO: Not yet supported in v3
      } else {
        localContainer.appendChild(toastElement); // TODO: JSHint Possible String Violation
      }

      this.container = localContainer;
    };

    /**
     * Good to go for v3.
     */
    const setTitle = (localTitle) => {
      if (typeof (localTitle) !== 'undefined') {
        titleElement.innerHTML = localTitle;
        titleElement.classList.add(options.titleClass);
        toastElement.appendChild(titleElement);
      }
    };

    /**
     * Good to go for v3.
     */
    const setMessage = (localMessage) => {
      console.log('message recv as', localMessage);

      if (typeof (message) !== 'undefined') {
        const mapMessage = document.createElement('div');
        mapMessage.innerHTML = message;

        messageElement.appendChild(mapMessage);
        messageElement.classList.add(options.messageClass);

        toastElement.appendChild(messageElement);
      }
    };

    /**
     * Adds a class to set the icon for the toast.
     * Good to go for v3.
     */
    const setIcon = (localIconClass) => {
      if (typeof (options.iconClass) !== 'undefined') {
        iconElement.classList.add('toast-icon');

        let innerContent = '';

        switch (localIconClass) {
          case 'toast-info':
            innerContent = '<i class="fa fa-info-circle"></i>';
            break;
          case 'toast-warn':
            innerContent = '<i class="fa fa-exclamation-triangle"></i>';
            break;
          case 'toast-error':
            innerContent = '<i class="fa fa-exclamation-circle"></i>';
            break;
          case 'toast-success':
            innerContent = '<i class="fa fa-check"></i>';
            break;
          default:
            break;
        }

        iconElement.innerHTML = innerContent;
        toastElement.appendChild(iconElement);
        toastElement.classList.add(options.toastClass);
      }
    };

    const setCloseButton = (localCloseElement) => {
      console.log(localCloseElement);

      if (typeof (localCloseElement) !== 'undefined') {
        localCloseElement.classList.add('toast-close-button');
        localCloseElement.setAttribute('role', 'button');
        localCloseElement.setAttribute('type', 'button');
        toastElement.appendChild(localCloseElement);
      }
    };

    const setProgressBar = () => {
      if (typeof (options.progressBar) !== 'undefined' && options.progressBar) {
        progressElement.classList.add('toast-progress');
        toastElement.appendChild(progressElement);
      }
    };

    const personalizeToast = () => {
      setIcon(iconClass);
      setTitle(title);
      setMessage(message);
      setCloseButton(closeElement);
      setProgressBar();
    };

    /**
     * Defines the animation for animating toasts onto the document.
     * @param {Element} toastElement The element to be animated in.
     * @param {Function} animationFinishedCallback Executed when the animation is completed.
     */
    const animateToastIn = (localToastElement, animationFinishedCallback) => {
      const animateInPlayer = localToastElement.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], {
        duration: options.showDuration,
        iterations: 1,
        delay: 0,
      });

      animateInPlayer.onfinish = animationFinishedCallback;
    };

    /**
     * Defines the animation for animating toasts off of the document.
     * @param {Element} toastElement The element to be animated out.
     * @param {Function} animationFinishedCallback Executed when the animation is completed.
     */
    const animateToastOut = (localToastElement, animationFinishedCallback) => {
      const animateInPlayer = localToastElement.animate([
        { opacity: 1 },
        { opacity: 0 },
      ], {
        duration: options.hideDuration,
        iterations: 1,
        delay: 0,
      });

      animateInPlayer.onfinish = animationFinishedCallback;
    };

    const hideToast = (override) => {
      if (toastElement === null) return;
      if (toastElement.matches(':focus') && !override) return;

      clearInterval(progressBar.intervalId);

      console.log('Hiding toast now.', toastElement);

      // const removeFunction = this.removeToast; // TODO: JSHint Possible String Violation

      if (typeof (options.onHidden) === 'function') {
        options.onHidden();
      }

      const animationFinishedCallback = (args) => {
        console.log('Toast is now hiding.', args);

        if (toastElement === null) return;

        const parentNode = toastElement.parentNode;

        // Repeating myself. Try to find a way to not duplicate code.
        // Use the element to get it's parent so we can remove it.
        if (parentNode !== null) {
          parentNode.removeChild(toastElement);

          if (!parentNode.hasChildNodes()) {
            container.parentNode.removeChild(container);
            this.previousToast = undefined;
          }
        }

        toastElement = null;
      };

      animateToastOut(toastElement, animationFinishedCallback);
    };

    const updateProgress = () => {
      const progress = progressBar.hideEta - new Date().getTime();
      const percentage = (progress / progressBar.maxHideTime) * 100;
      progressElement.style.width = `${percentage}%`;
    };

    /**
     * Pushes the current toast out for display.
     */
    const displayToast = () => {
      console.log('Appending toast to container.', toastElement);

      // container.appendChild(toastElement);
      setSequence.call(this);

      if (typeof (options.onShown) === 'function') {
        options.onShown();
      }

      const animationFinishedCallback = (args) => {
        console.log('Toast animation in completed.', args);

        if (options.timeOut > 0) {
          timeoutId = setTimeout(hideToast, options.timeOut);
          progressBar.maxHideTime = parseFloat(options.timeOut);
          progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
          if (options.progressBar) {
            progressBar.intervalId = setInterval(updateProgress, 10);
          }
        }
      };

      animateToastIn(toastElement, animationFinishedCallback);
    };

    const delayedHideToast = () => {
      if (options.timeOut > 0 || options.extendedTimeOut > 0) {
        timeoutId = setTimeout(hideToast, options.extendedTimeOut);
        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
      }
    };

    const stickAround = () => {
      clearTimeout(timeoutId);
      progressBar.hideEta = 0;

      // toastElement.stop(true, true)[options.showMethod]( // TODO Remove jQuery
      // {duration: options.showDuration, easing: options.showEasing}
      // );
    };

    const handleEvents = () => {
      toastElement.addEventListener('mouseover', stickAround);
      toastElement.addEventListener('mouseout', delayedHideToast);

      if (!options.onclick && options.tapToDismiss) {
        toastElement.addEventListener('click', hideToast);
      }

      if (options.closeButton && closeElement) {
        closeElement.addEventListener('click', (event) => {
          if (event.stopPropagation) {
            event.stopPropagation();
          } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
            event.cancelBubble = true; // eslint-disable-line no-param-reassign
          }

          hideToast(true);
        });
      }

      if (options.onclick) {
        toastElement.addEventListener('click', () => {
          options.onclick(); // TODO remove jQuery
          hideToast();
        });
      }
    };

    personalizeToast.call(this);

    displayToast.call(this);

    handleEvents();

    this.publish(response);

    if (options.debug && console) {
      console.log(response);
    }

    return toastElement;
  }
}

// This makes toastr an export for closure's sake
if (typeof (window) !== 'undefined') {
  window.toastr = toastr;
}
