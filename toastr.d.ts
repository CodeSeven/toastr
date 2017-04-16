/**
 * Type Script Defenition for toastr
 * @author Chris Seufert <chris@modd.com.au>
 */

declare var toastr:Toastr;

interface Toastr {
  /**
   * Show Error Message
   * @param message
   * @param title
   * @param options
   * @return Toast Instance
   */
  error:(message:string, title?:string, options?:ToastrOptions)=>Toast;
  /**
   * Show Info Message
   * @param message
   * @param title
   * @param options
   * @return Toast Instance
   */
  info:(message:string, title?:string, options?:ToastrOptions)=>Toast;
  /**
   * Show Warning Message
   * @param message
   * @param title
   * @param options
   * @return Toast Instance
   */
  wanring:(message:string, title?:string, options?:ToastrOptions)=>Toast;
  /**
   * Show Success Message
   * @param message
   * @param title
   * @param options
   * @return Toast Instance
   */
  success:(message:string, title?:string, options?:ToastrOptions)=>Toast;
  /**
   * Clear a Toast Message from the screen
   * @param Toast Toast Instance
   */
  clear:(Toast)=>void;
  remove:(Toast)=>void;
  options:ToastrOptions;
  version:string;
}

interface Toast extends JQuery { }

interface ToastrOptions {
  tapToDismiss?:boolean;
  toastClass?:string;
  containerId?:string;
  debug?:boolean;

  showMethod?:string;
  showDuration?:number;
  onShown?:()=>void;
  hideMethod?:string;
  hideDuration?:number;
  hideEasing?:string;
  onHidden?:()=>void;

  extendedTimeOut?:number;
  iconClasses?:{
    error?:string;
    info?:string;
    success?:string;
    warning?:string;
  };
  iconClass?:string;
  positionClass?:string;
  timeOut?:number;
  titleClass?:string;
  target?:string;
  closeHtml?:string;
  newestOnTop?:boolean;
  progressBar?:boolean;
}
