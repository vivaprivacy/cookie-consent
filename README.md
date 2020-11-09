# Cookie notice with a lot of customization features

![Examples](https://raw.githubusercontent.com/vivaprivacy/cookie-consent/main/images/screenshot-1.png)

## Installing

Using jsDelivr CDN:
```sh
<script src="https://cdn.jsdelivr.net/npm/@vivaprivacy/cookie-consent@1.0.4/build/cookie-consent.min.js"></script>
```

#### Classic
```
const CC = window.CookieConsent
```

##### Initialization:
```
const cc = new CC({
  //...options
})
```

| Prop | Type | Description |Values|
| ------ | ------ | ------ |------|
| theme | string | Name of preset theme  | "CodGrayWhite" (default), "BigStoneTurquoise", "SeaweedAtlantis", "CharadeJaffa", "RhinoShakespeare", "CloudBurstGorse", "SanJuanGold", "BlueChillCanary", "AffairBrightSun", "PorcelainMalibu", "AliceBlueCornflowerBlue", "LinkWaterChathamsBlue", "SazeracTuscany", "CatskillWhiteAquaForest", "WhiteMineShaft"|
|cookieName|string|Name of a cookie stored in a browser.|"cookie-banner"(default)|
|type|string|Type of a banner. confirm: Two buttons(let visitors accept/decline cookies). alert: One button(inform visitors)|"confirm" (default), "alert"|
|blockType|string|Display banner as block or line|"line" (default), "block" |
|blockPosition|string|Banner position on the screen|"bottom" (default), "bottom-left", "bottom-right", "top-left", "top-right", "center", "top", "top-scroll", "bottom-scroll"|
|buttonType|string|Button styles|"round-fill" (default), "round", "rectangle", "rectangle-fill", "rectangle-round", "rectangle-round-fill"|
|buttonDirection|string|Display buttons in a row or one after another|"row" (default), "column"|
|showPoweredBy|boolean|Display credentials|true (default), false|
|blind.visible|boolean|Display screen overlay to force banner interaction|false (default), true|
|blind.bgColor|string|Overlay color|"black" (default)|
|blind.opacity|string|Overlay opacity|".5" (default)|
|animation.type|string|Render a banner with animation.|"no" (default), "slide-top", "slide-bottom", "slide-left", "slide-right", "fade"|
|animation.delay |string|Animation delay in milliseconds.|"5000" (default)|
|animation.duration|string|Animation duration in milliseconds.|"500" (default)|
|link.html|string|Text in the link positioned after the banner message.|"Learn more" (default)|
|link.href|string|Learn more link href|"https://gdprinfo.eu" (default)|
|message.html|string|Message displayed inside the banner. |"This website uses cookies to ensure you get the best experience on our website." (default)|
|accept.byScroll |string|Auto accept and hide banner after user scrolls for x amount of pixels. Provide a number of pixels. |"none" (default)|
|accept.byTime|number|Auto accept and hide banner after x amount of milliseconds. Provide a number of milliseconds. |"-1" (default)|
|accept.byClick|boolean|Auto accept and hide banner after a user clicks anywhere on the screen|false (default), true|
|refreshonallow|boolean|Refresh a page after user accepts cookies.|false (default),true|
|cookieName|string|Cookie name.|"cookie-banner" (default)|
|ignoreAllow|boolean|Ignores a previous choice of a user and display the banner anyway. Use for testing purposes only.|false (default), true|
|popupStyles|object|Change popup CSS|Accepted parameters: {"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "border", "box-shadow", "width"}|
|messageStyles|object|Change message CSS|Accepted parameters: {"color", "font-size", "font-family", "margin"}|
|linkStyle|object|Change link CSS |{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "box-shadow", "background", "font-size", "font-family", "border", "text-decoration", "margin", "display"}|
|linkStyleHover|object|Change link hover CSS |{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "box-shadow", "background", "font-size", "font-family", "border", "text-decoration", "margin", "display"}|
|allowHtml|string|Accept button HTML|"Accept" (default)|
|allowStyle|object|Accept button CSS|{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "box-shadow", "background", "border"}|
|allowStyleHover|object|Accept button hover CSS|{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "box-shadow", "background", "border"}|
|dismissHtml|string|Dismiss button HTML|"Dismiss" (default)|
|dismissStyle|object|Dismiss button hover CSS|{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "box-shadow", "background", "border"}|
|dismissStyleHover|object|Dismiss button hover CSS|{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "box-shadow", "background", "border"}|
|declineHtml|string|Decline button HTML|"Decline" (default)|
|declineStyle|object|Decline button hover CSS|{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "box-shadow", "background", "border"}|
|declineStyleHover|object|Decline button hover CSS|{"background-color", "color", "padding", "border-radius", "border-color", "border-width", "border-style", "font-size", "font-family", "box-shadow", "background", "border"}|
|onAllow|function|Function to call after a user clicks on the allow button|Example:  function() { console.log("clicked allow button"); }|
|onDecline|function|Function to call after a user clicks on the decline button|Example: function() {console.log("clicked decline button");}|
|onDismiss|function|Function to call after a user clicks on the dismiss button|Example: function() {console.log("clicked dismiss button");}|
|onRestore|function|Function to call after the banner is shown again|Example: function() {console.log("restores");}|
|onInit|function(onAllow)|Function to call on banner initizalization|Example: function(isAllow) {console.log("plugin has been initialzed", isAllow);}|
|onUpdate|function(onAllow)|Function to call on banner update|Example: function(isAllow) {console.log("updated", isAllow);}|
