import Cookies from "js-cookie";
import {
  DefaultCookieBannerName,
  DefaultContent,
  DefaultSettings,
  DefaultLink,
  DefaultAllow,
  DefaultDecline,
  DefaultDismiss
} from "./settings";
import {
  Banner,
  BannerAside,
  BannerBody,
  Button,
  Content,
  Link,
  PowerByLink
} from "./generate";
import "./css/index.less";

declare global {
  interface Window {
    CookieConsent: typeof CookieBanner;
  }
}

class CookieBanner implements ICookieBanner {
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
  declineHtml: string;
  declineStyle: StyleProp;
  declineStyleHover: StyleProp;
  dismissHtml: string;
  dismissStyle: StyleProp;
  dismissStyleHover: StyleProp;
  linkHref: string;
  linkHtml: string;
  linkStyle: StyleProp;
  linkStyleHover: StyleProp;
  messageHtml: string;
  messageStyles: StyleProp;
  onAllow: () => void;
  onDecline: () => void;
  onDismiss: () => void;
  onRestore?: () => void;
  onInit: (isAllow: boolean) => void;
  onUpdate: (isAllow: boolean) => void;
  popupStyle: StyleProp;
  readonly cookieName: string;
  rootDiv: HTMLDivElement;
  showPoweredBy: boolean;
  theme: Theme;
  type: BannerType;
  ignoreAllow: boolean;
  isAllowed: boolean;
  timerAllow: null | number | void;
  isHidden: boolean;
  refreshonallow: boolean;

  private constructor({
    ...rest
  }: CookieBannerProps) {
    this.cookieName = rest.cookieName || DefaultCookieBannerName;

    this.ignoreAllow = rest.ignoreAllow || false;

    this.onInit = rest.popup?.onInit || function () { };

    this.onAllow = rest.buttonAllow?.onClick || function () { };
    this.onDecline = rest.buttonDecline?.onClick || function () { };
    this.onDismiss = rest.buttonDismiss?.onClick || function () { };
    this.onRestore = rest.onRestore || function () { };

    this.theme = rest.theme || DefaultSettings.theme;
    this.type = rest.type || DefaultSettings.type;
    this.blockType = rest.blockType || DefaultSettings.blockType;
    this.blockPosition = rest.blockPosition || DefaultSettings.blockPosition;
    this.container = rest.container || document.querySelectorAll("body")[0];
    this.buttonType = rest.buttonType || DefaultSettings.buttonType;
    this.buttonDirection = rest.buttonDirection || DefaultSettings.buttonDirection;
    this.showPoweredBy = rest.showPoweredBy != null ? rest.showPoweredBy : true;

    this.blindOpacity = rest.blind?.opacity || DefaultSettings.blindOpacity;
    this.blindVisible = rest.blind?.visible || DefaultSettings.blindVisible;
    this.blindBgColor = rest.blind?.bgColor || DefaultSettings.blindBgColor;

    this.animationType = rest.animation?.type || "no";
    this.animationDelay = rest.animation?.delay || "5s";
    this.animationDuration = rest.animation?.duration || "400ms";

    this.popupStyle = rest.popup?.styles || {};

    this.messageHtml = rest.message?.html || DefaultContent.html;
    this.messageStyles = rest.message?.styles || DefaultContent.styles;

    this.linkHtml = rest.link?.html || DefaultLink.html;
    this.linkHref = rest.link?.href || DefaultLink.href;
    this.linkStyle = rest.link?.styles || {};
    this.linkStyleHover = rest.link?.stylesHover || {};

    this.allowHtml = rest.buttonAllow?.html || DefaultAllow.html;
    this.allowStyle = rest.buttonAllow?.styles || DefaultAllow.styles;
    this.allowStyleHover = rest.buttonAllow?.stylesHover || {};

    this.dismissHtml = rest.buttonDismiss?.html || DefaultDismiss.html;
    this.dismissStyle = rest.buttonDismiss?.styles || DefaultDismiss.styles;
    this.dismissStyleHover = rest.buttonDismiss?.stylesHover || {};

    this.declineHtml = rest.buttonDecline?.html || DefaultDecline.html;
    this.declineStyle = rest.buttonDecline?.styles || DefaultDecline.styles;
    this.declineStyleHover = rest.buttonDecline?.stylesHover || {};

    this.acceptByTime = rest.accept?.byTime || -1;
    this.acceptByScroll = rest.accept?.byScroll || "none";
    this.acceptByClick = rest.accept?.byClick || false;

    this.refreshonallow = rest?.refreshonallow ?? false;

    this.init();
  }

  public update = ({
    ...rest
  }: CookieBannerProps) => {
    this.ignoreAllow = rest.ignoreAllow || this.ignoreAllow;

    this.theme = rest.theme || this.theme;
    this.type = rest.type || this.type;
    this.blockType = rest.blockType || this.blockType;
    this.blockPosition = rest.blockPosition || this.blockPosition;
    this.container = rest.container || this.container;
    this.buttonType = rest.buttonType || this.buttonType;
    this.buttonDirection = rest.buttonDirection || this.buttonDirection;
    this.showPoweredBy = rest.showPoweredBy != null ? rest.showPoweredBy : this.showPoweredBy;

    this.blindOpacity = rest.blind?.opacity || this.blindOpacity;
    this.blindVisible = rest.blind?.visible != null ? rest.blind?.visible : this.blindVisible;
    this.blindBgColor = rest.blind?.bgColor || this.blindBgColor;

    this.animationType = rest.animation?.type || this.animationType;
    this.animationDelay = rest.animation?.delay || this.animationDelay;
    this.animationDuration = rest.animation?.duration || this.animationDuration;

    this.popupStyle = { ...this.popupStyle, ...rest.popup?.styles };

    this.messageHtml = rest.message?.html || this.messageHtml;
    this.messageStyles = { ...this.messageStyles, ...rest.message?.styles };

    this.linkHtml = rest.link?.html || this.linkHtml;
    this.linkHref = rest.link?.href || this.linkHref;
    this.linkStyle = { ...this.linkStyle, ...rest.link?.styles };
    this.linkStyleHover = { ...this.linkStyleHover, ...rest.link?.stylesHover };

    this.allowHtml = rest.buttonAllow?.html || this.allowHtml;
    this.allowStyle = { ...this.allowStyle, ...rest.buttonAllow?.styles };
    this.allowStyleHover = { ...this.allowStyleHover, ...rest.buttonAllow?.stylesHover };

    this.dismissHtml = rest.buttonDismiss?.html || this.dismissHtml;
    this.dismissStyle = { ...this.dismissStyle, ...rest.buttonDismiss?.styles };
    this.dismissStyleHover = { ...this.dismissStyleHover, ...rest.buttonDismiss?.stylesHover };

    this.declineHtml = rest.buttonDecline?.html || this.declineHtml;
    this.declineStyle = { ...this.declineStyle, ...rest.buttonDecline?.styles };
    this.declineStyleHover = { ...this.declineStyleHover, ...rest.buttonDecline?.stylesHover };

    this.acceptByTime = rest.accept?.byTime || this.acceptByTime;
    this.acceptByScroll = rest.accept?.byScroll || this.acceptByScroll;
    this.acceptByClick = rest.accept?.byClick || this.acceptByClick;

    this.refreshonallow = rest?.refreshonallow ?? this.refreshonallow;

    this.onUpdate = rest.popup?.onUpdate;

    const isExisting = Cookies.get(this.cookieName) === "1" || Cookies.get(this.cookieName) === "0";

    if (isExisting && !this.ignoreAllow) {
      this.onUpdate && this.onUpdate(true);
      this.isAllowed = true;
      return;
    }

    if (this.rootDiv) {
      this.rootDiv.remove();
    }

    this.generateBanner();
    this.addAllowEvents();
    this.onUpdate && this.onUpdate(false);
  }

  private handleClickAllow = () => {
    Cookies.set(this.cookieName, "1", {
      path: "/",
      expires: 365
    });
    this.onAllow();
    this.hideRoot();
    if (this.refreshonallow) {
      window.location.reload();
    }
  }

  private handleClickDismiss = () => {
    Cookies.set(this.cookieName, "1", {
      path: "/",
      expires: 365
    });
    this.onDismiss();
    this.hideRoot();
  }

  private handleClickDecline = () => {
    Cookies.set(this.cookieName, "0", {
      path: "/",
      expires: 365
    });
    this.onDecline();
    this.hideRoot();
  }

  private hideRoot = () => {
    if (this.rootDiv) {
      this.rootDiv.className = "cb__hidden";

      setTimeout(() => {
        this.isAllowed = true;
        // this.rootDiv && this.rootDiv.remove();
        // this.rootDiv = null;
        this.rootDiv.classList.add("cb__hide");
      }, 150);
    }
  }

  private generateBanner = () => {
    this.rootDiv = document.createElement("div");
    this.rootDiv.id = "cookiebanner-root";
    this.rootDiv.className = this.isHidden ? "cb__hide" : "";

    const generatedBanner = Banner({
      blockType: this.blockType,
      blockPosition: this.blockPosition,
      theme: this.theme,
      popupStyles: this.popupStyle,
      blindOpacity: this.blindOpacity,
      blindVisible: this.blindVisible,
      blindBgColor: this.blindBgColor,
      animationType: this.animationType,
      animationDelay: this.animationDelay,
      animationDuration: this.animationDuration
    });

    generatedBanner.appendChild(
      BannerBody({
        children: [
          Content({
            messageHtml: this.messageHtml,
            messageStyles: this.messageStyles
          }),
          Link({
            linkHref: this.linkHref,
            linkHtml: this.linkHtml,
            linkStyle: this.linkStyle,
            linkStyleHover: this.linkStyleHover
          }),
          this.showPoweredBy ? PowerByLink() : null
        ].filter(Boolean)
      })
    )

    if (this.type === "alert") {
      generatedBanner.appendChild(
        BannerAside({
          direction: this.buttonDirection,
          children: [
            Button({
              html: this.dismissHtml,
              className: `cb__b_dismiss cb__b_${this.buttonType}`,
              buttonStyles: this.dismissStyle,
              onClick: this.handleClickDismiss,
              buttonStylesHover: this.dismissStyleHover
            })
          ]
        })
      );
    } else {
      generatedBanner.appendChild(
        BannerAside({
          direction: this.buttonDirection,
          children: [
            Button({
              html: this.declineHtml,
              className: `cb__b_decline cb__b_${this.buttonType}`,
              buttonStyles: this.declineStyle,
              onClick: this.handleClickDecline,
              buttonStylesHover: this.declineStyleHover
            }),
            Button({
              html: this.allowHtml,
              className: `cb__b_allow cb__b_${this.buttonType}`,
              buttonStyles: this.allowStyle,
              onClick: this.handleClickAllow,
              buttonStylesHover: this.allowStyleHover
            })
          ]
        })
      );
    }

    this.rootDiv.appendChild(generatedBanner);

    if (this.blindVisible) {
      const divBlind: HTMLDivElement = document.createElement("div");
      const divBlindInner: HTMLDivElement = document.createElement("div");
      const className = ["cb__blind"];

      if (this.animationType !== "no") {
        className.push("cb_animation-fade");
        divBlind.style.setProperty("animation-delay", `${this.animationDelay}`);
        divBlind.style.setProperty("animation-duration", `${this.animationDuration}`);
      }

      divBlind.className = className.join(" ");
      divBlindInner.style.setProperty("background-color", this.blindBgColor);
      divBlindInner.style.setProperty("opacity", this.blindOpacity);
      divBlindInner.className = "cb__blind-inner";
      divBlind.appendChild(divBlindInner);
      this.rootDiv.appendChild(divBlind);
    }

    if (this.blockPosition === "bottom-scroll") {
      this.container.appendChild(this.rootDiv);
    } else {
      const firstChildNode = this.container.firstChild;
      this.container.insertBefore(this.rootDiv, firstChildNode);
    }
  }

  private onWindowScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > parseInt(this.acceptByScroll)) {
      this.handleClickAllow();
    }
  }

  private onBodyClick = (event: any) => {
    if (!this.isAllowed) {
      this.handleClickAllow();
    }
  }

  private onRestoreClick = () => {
    this.rootDiv.classList.remove("cb__hide");
    this.isHidden = false;
    Cookies.remove(this.cookieName);
    this.update({} as CookieBannerProps);
    this.onRestore();
  }

  private addAllowEvents = () => {
    if (this.acceptByTime !== -1) {
      if (this.timerAllow) {
        clearTimeout(this.timerAllow);
        this.timerAllow = null;
      }

      this.timerAllow = setTimeout(() => {
        if (!this.isAllowed) {
          this.handleClickAllow();
        }
      }, this.acceptByTime);
    }

    if (this.acceptByScroll !== "none") {
      window.addEventListener("scroll", () => {
        if (!this.isAllowed) {
          this.onWindowScroll();
        }
      });
    }

    if (this.acceptByClick) {
      window.addEventListener("click", this.onBodyClick);
    }

    const restoreButton = document.querySelector(".cncb-js-restore");

    if (restoreButton) {
      restoreButton.addEventListener("click", () => {
        this.onRestoreClick()
      }, false);
    }
  }

  private init = () => {
    const isExisting = Cookies.get(this.cookieName) === "1" || Cookies.get(this.cookieName) === "0";

    if (isExisting && !this.ignoreAllow) {
      this.onInit(true);
      this.isAllowed = true;
      this.isHidden = true;
      // return;
    } else {
      this.onInit(false);
    }

    this.generateBanner();
    this.addAllowEvents();
  }
}

window.CookieConsent = CookieBanner;
