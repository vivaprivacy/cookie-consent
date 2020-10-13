import { allowMessageStyles, allowLinkStyles, allowButtonsStyles, allowPopupStyles, allowThemes } from "./allowStyles";
import { DefaultSettings } from "./settings";

export const Content = ({
  messageHtml,
  messageStyles
}: ContentProps): HTMLDivElement => {
  const div: HTMLDivElement = document.createElement("div");
  div.innerHTML = messageHtml;
  div.className = "cb__content-text";

  for (let k in messageStyles) {
    if (messageStyles[k] && allowMessageStyles.includes(k)) {
      div.style.setProperty(k, messageStyles[k]);
    }
  }

  return div;
}

export const Link = ({ linkHref, linkHtml, linkStyle, linkStyleHover }: LinkProps): HTMLAnchorElement => {
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = linkHref;
  link.innerHTML = linkHtml;
  link.target = "_blank";
  link.className = "cb__link";

  for (let k in linkStyle) {
    if (linkStyle[k] && allowLinkStyles.includes(k)) {
      link.style.setProperty(k, linkStyle[k]);
    }
  }

  if (Object.keys(linkStyleHover).length > 0) {
    link.addEventListener("mouseenter", () => {
      for (let k in linkStyleHover) {
        if (linkStyleHover[k] && allowLinkStyles.includes(k)) {
          link.style.setProperty(k, linkStyleHover[k]);
        }
      }
    }, false);

    link.addEventListener("mouseleave", () => {
      for (let k in linkStyleHover) {
        if (linkStyleHover[k] && allowLinkStyles.includes(k)) {
          link.style.removeProperty(k);
        }
      }

      for (let k in linkStyle) {
        if (linkStyle[k] && allowLinkStyles.includes(k)) {
          link.style.setProperty(k, linkStyle[k]);
        }
      }
    }, false);
  }

  return link;
}

export const Button = ({
  html,
  className,
  buttonStyles,
  onClick,
  buttonStylesHover
}: ButtonProps): HTMLButtonElement => {
  const button: HTMLButtonElement = document.createElement("button");
  button.type = "button";
  button.innerHTML = html;
  button.className = `cb__b ${className}`;

  for (let k in buttonStyles) {
    if (buttonStyles[k] && allowButtonsStyles.includes(k)) {
      button.style.setProperty(k, buttonStyles[k]);
    }
  }

  button.onclick = function () {
    onClick();
  };

  if (Object.keys(buttonStylesHover).length > 0) {
    button.addEventListener("mouseenter", () => {
      for (let k in buttonStylesHover) {
        if (buttonStylesHover[k] && allowButtonsStyles.includes(k)) {
          button.style.setProperty(k, buttonStylesHover[k]);
        }
      }
    }, false);

    button.addEventListener("mouseleave", () => {
      for (let k in buttonStylesHover) {
        if (buttonStylesHover[k] && allowButtonsStyles.includes(k)) {
          button.style.removeProperty(k);
        }
      }

      for (let k in buttonStyles) {
        if (buttonStyles[k] && allowButtonsStyles.includes(k)) {
          button.style.setProperty(k, buttonStyles[k]);
        }
      }
    }, false);
  }

  return button;
}

export const BannerAside = ({ children, direction }: AsideProps): HTMLDivElement => {
  const div: HTMLDivElement = document.createElement("div");
  const classes = ["cb__aside"];

  if (direction === "column") {
    classes.push("cb__aside_vertical");
  } else {
    classes.push("cb__aside_default");
  }

  div.className = classes.join(" ");

  for (let child of children) {
    div.appendChild(child);
  }

  return div;
}

export const BannerBody = ({ children = [] }: BannerBodyProps): HTMLDivElement => {
  const div: HTMLDivElement = document.createElement("div");
  div.className = "cb__content-body";

  for (let child of children) {
    div.appendChild(child);
  }

  return div;
}

export const PowerByLink = (): HTMLDivElement => {
  const div: HTMLDivElement = document.createElement("div");
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = "//lint_to_power_by";
  link.innerHTML = "Powered by UserState";
  link.target = "_blank";
  link.className = "cb__powered-by";
  div.appendChild(link);

  return div;
}

export const Banner = ({ blockType, blockPosition, theme, popupStyles, animationDelay, animationDuration, animationType }: BannerProps): HTMLDivElement => {
  const myTheme = allowThemes.includes(theme) ? theme : DefaultSettings.theme;
  const div: HTMLDivElement = document.createElement("div");
  div.className = `cb cb_${blockType} cb_${blockPosition} cb_${myTheme} cb_animation-${animationType}`;
  div.style.setProperty("animation-delay", `${animationDelay}`);
  div.style.setProperty("animation-duration", `${animationDuration}`);

  if (blockType === "line" && (blockPosition === "top" || blockPosition === "bottom")) {
    div.style.setProperty("width", "auto");

    const widthStyle = (popupStyles["width"] || "auto");
    const margin = [
      popupStyles["margin-top"] || "0px",
      popupStyles["margin-right"] || "auto",
      popupStyles["margin-bottom"] || "0px",
      popupStyles["margin-left"] || "auto"
    ];

    const checkMargin = (margin: string) => (margin === "auto" || parseInt(margin, 10) === 0);

    if (checkMargin(margin[0]) && blockPosition === "top") {
      div.classList.add("cb_without-mt");
    }

    if (widthStyle === "auto" && margin[1] === "auto") {
      div.classList.add("cb_without-mr");
    }

    if (checkMargin(margin[2]) && blockPosition === "bottom") {
      div.classList.add("cb_without-mb");
    }

    if (widthStyle === "auto" && margin[3] === "auto") {
      div.classList.add("cb_without-ml");
    }

    margin.forEach((m, index) => {
      const props = ["margin-top", "margin-right", "margin-bottom", "margin-left"];
      div.style.setProperty(props[index], m);
    });
  } else if (blockType === "block") {
    const isMobile = window.matchMedia("(max-width: 639.98px)").matches;
    const marginDefault = "20px";
    const mt = popupStyles["margin-top"] || "auto";
    const mr = popupStyles["margin-right"] || "auto";
    const mb = popupStyles["margin-bottom"] || "auto";
    const ml = popupStyles["margin-left"] || "auto";
    let margin: [string, string, string, string] = ["", "", "", ""];

    if (blockPosition === "center") {
      margin = [
        mt,
        "auto",
        mb,
        "auto"
      ];
    } else if (blockPosition === "top-left") {
      margin = [
        isMobile ? mt || "0px" : mt === "auto" ? marginDefault : mt,
        "auto",
        "auto",
        isMobile ? ml || "0px" : ml === "auto" ? marginDefault : ml,
      ];
    } else if (blockPosition === "top-right") {
      margin = [
        isMobile ? mt || "0px" : mt === "auto" ? marginDefault : mt,
        isMobile ? mr || "0px" : mr === "auto" ? marginDefault : mr,
        "auto",
        "auto",
      ];
    } else if (blockPosition === "bottom-right") {
      margin = [
        "auto",
        isMobile ? mr || "0px" : mr === "auto" ? marginDefault : mr,
        isMobile ? mb || "0px" : mb === "auto" ? marginDefault : mb,
        "auto",
      ];
    } else if (blockPosition === "bottom-left") {
      margin = [
        "auto",
        "auto",
        isMobile ? mb || "0px" : mb === "auto" ? marginDefault : mb,
        isMobile ? ml || "0px" : ml === "auto" ? marginDefault : ml,
      ];
    }

    margin.forEach((m, index) => {
      const props = ["margin-top", "margin-right", "margin-bottom", "margin-left"];
      div.style.setProperty(props[index], m);
    });
  }

  for (let k in popupStyles) {
    if (popupStyles[k] && allowPopupStyles.includes(k)) {
      div.style.setProperty(k, popupStyles[k]);
    }
  }

  return div;
}