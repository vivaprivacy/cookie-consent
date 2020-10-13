type Theme = "CodGrayWhite" | "BigStoneTurquoise" | "SeaweedAtlantis" | "CharadeJaffa" | "RhinoShakespeare" | "CloudBurstGorse" | "SanJuanGold" | "BlueChillCanary" | "AffairBrightSun" | "PorcelainMalibu" | "AliceBlueCornflowerBlue" | "LinkWaterChathamsBlue" | "SazeracTuscany" | "CatskillWhiteAquaForest" | "WhiteMineShaft";
type BannerBlockType = "block" | "line";
type BannerBlockPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center" | "top" | "bottom" | "top-scroll" | "bottom-scroll";
type BannerAnimation = "no" | "slide-top" | "slide-bottom" | "slide-left" | "slide-right" | "fade";
type BannerType = "alert" | "confirm";
type ButtonsStyle = "filled-round" | "filled-rounded" | "filled-rectangle" | "blank-round" | "blank-rounded" | "blank-rectangle";
type ButtonDirection = "row" | "column";

type StyleProp = {
  [_prop: string]: string;
}

type DefaultElementProps = {
  html: string;
  styles: StyleProp;
}

type DefaultSettingProps = {
  animationType: BannerAnimation;
  animationDelay: number;
  animationDuration: number;
  theme: Theme;
  type: BannerType;
  blockType: BannerBlockType;
  blockPosition: BannerBlockPosition;
  buttonType: ButtonsStyle;
  buttonDirection: ButtonDirection;
  blindBgColor: string;
  blindOpacity: string;
  blindVisible: boolean;
}

type ContentProps = {
  messageHtml: string;
  messageStyles: StyleProp;
}

type LinkProps = {
  linkHtml: string;
  linkHref: string;
  linkStyle: StyleProp;
  linkStyleHover: StyleProp;
}

type ButtonProps = {
  html: string;
  className: string;
  buttonStyles: StyleProp;
  onClick: () => void;
  buttonStylesHover: StyleProp;
}

type BannerProps = {
  blockType: BannerBlockType;
  blockPosition: BannerBlockPosition;
  theme: Theme;
  popupStyles: StyleProp;
  blindBgColor: string;
  blindOpacity: string;
  blindVisible: boolean;
  animationType: BannerAnimation;
  animationDelay: string;
  animationDuration: string;
}

type AsideProps = {
  children: Array<HTMLButtonElement>;
  direction: ButtonDirection;
}

type BannerBodyProps = {
  children: Array<HTMLDivElement | HTMLAnchorElement>;
}

type Styles = {
  styles: StyleProp;
  stylesHover: StyleProp;
}

type ICookieBanner = Pick<LinkProps, "linkHref" | "linkHtml"> & ContentProps & {
  acceptByTime: number;
  acceptByScroll: string;
  acceptByClick: boolean;
  allowHtml: string;
  allowStyle: StyleProp;
  allowStyleHover: StyleProp;
  animationDelay: string;
  animationDuration: string;
  animationType: BannerAnimation;
  blindBgColor: string;
  blindOpacity: string;
  blindVisible: boolean;
  blockPosition: BannerBlockPosition;
  blockType: BannerBlockType;
  buttonDirection: ButtonDirection;
  buttonType: ButtonsStyle;
  container: HTMLDivElement | HTMLBodyElement;
  cookieName: string;
  declineHtml: string;
  declineStyle: StyleProp;
  declineStyleHover: StyleProp;
  dismissHtml: string;
  dismissStyle: StyleProp;
  dismissStyleHover: StyleProp;
  isAllowed: boolean;
  linkStyle: StyleProp;
  linkStyleHover: StyleProp;
  onAllow: () => void;
  onDecline: () => void;
  onDismiss: () => void;
  onInit: (isAllow: boolean) => void;
  onUpdate?: (isAllow: boolean) => void;
  onRestore?: () => void;
  popupStyle: StyleProp;
  rootDiv: HTMLDivElement;
  showPoweredBy: boolean;
  theme: Theme;
  timerAllow: null | number | void;
  type: BannerType;
  ignoreAllow: boolean;
  isHidden: boolean;
  refreshonallow: boolean;
}

type CookieBannerProps = {
  theme?: Theme;
  cookieName?: string;
  type?: BannerType;
  blockType?: BannerBlockType;
  blockPosition?: BannerBlockPosition;
  container?: HTMLDivElement | HTMLBodyElement;
  buttonType?: ButtonsStyle;
  buttonDirection?: ButtonDirection;
  showPoweredBy?: boolean;
  ignoreAllow?: boolean;
  blind?: {
    visible?: boolean;
    bgColor?: string;
    opacity?: string;
  },
  animation?: {
    type?: BannerAnimation,
    delay?: string,
    duration?: string
  },
  popup?: {
    styles: StyleProp;
    onInit?: (isAllow: boolean) => void;
    onUpdate?: (isAllow: boolean) => void;
  };
  link?: Styles & {
    html: string;
    href: string;
  };
  message?: {
    styles: StyleProp;
    html: string;
  },
  buttonAllow: Styles & Pick<ButtonProps, "html" | "onClick">,
  buttonDismiss: Styles & Pick<ButtonProps, "html" | "onClick">,
  buttonDecline: Styles & Pick<ButtonProps, "html" | "onClick">,
  accept?: {
    byScroll?: string;
    byTime?: number;
    byClick?: boolean;
  }
  onRestore?: () => void;
  refreshonallow?: boolean;
}