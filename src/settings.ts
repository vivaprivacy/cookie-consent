export const DefaultCookieBannerName: string = "cookie-banner";

export const DefaultContent: DefaultElementProps = {
  html: "This website uses cookies to ensure you get the best experience on our website.",
  styles: {}
};

export const DefaultSettings: DefaultSettingProps = {
  animationType: "no",
  animationDelay: 5000,
  animationDuration: 500,
  theme: "CodGrayWhite",
  type: "confirm",
  blockType: "line",
  blockPosition: "bottom",
  buttonType: "filled-round",
  buttonDirection: "row",
  blindBgColor: "black",
  blindOpacity: ".5",
  blindVisible: false
};

export const DefaultLink: DefaultElementProps & {
  href: string;
} = {
  html: "Learn more",
  href: "/terms",
  styles: {}
}

export const DefaultAllow: DefaultElementProps = {
  html: "Allow cookie!",
  styles: {}
}

export const DefaultDismiss: DefaultElementProps = {
  html: "Dismiss",
  styles: {}
}

export const DefaultDecline: DefaultElementProps = {
  html: "Decline",
  styles: {}
}