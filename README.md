# Cookie notice with a lot of customization features

![Examples](https://raw.githubusercontent.com/vivaprivacy/cookie-consent/main/images/screenshot-1.png)

## Installing

Using jsDelivr CDN:
```sh
<script src="https://cdn.jsdelivr.net/npm/@vivaprivacy/cookie-consent@1.0.2/build/cookie-consent.min.js"></script>
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
|cookieName|string|Name of a cookie stored in a browser|"cookie-banner"(default)|
|type|string|Type of a banner. confirm: Two buttons(let visitors accept/decline cookies). alert: One button(inform visitors)|"confirm" (default), "alert"|
|blockType|string|Display banner as block or line|"line" (default), "block" |
|blockPosition|string|Banner position on the screen|"bottom" (default), "bottom-left", "bottom-right", "top-left", "top-right", "center", "top", "top-scroll", "bottom-scroll"|
|buttonType|string|Button styles|"round-fill" (default), "round", "rectangle", "rectangle-fill", "rectangle-round", "rectangle-round-fill"|
|buttonDirection|string|Display buttons in a row or one after another|"row" (default), "column"|
|showPoweredBy|boolean|Display credentials|true (default), false|
|blind.visible|boolean|Display screen overlay to force banner interaction|false (default), true|
|blind.bgColor|string|Overlay color|"black" (default)|
|blind.opacity|string|Overlay opacity|".5" (default)|
|animation.type|string|Render banner with animation|"no" (default), "slide-top", "slide-bottom", "slide-left", "slide-right", "fade"|
|animation.delay |string|Animation delay in milliseconds|"5000" (default)|
|animation.duration|string|Animation duration in milliseconds|"500" (default)|
|link.html|string|Text in the link positioned after the banner message|"Learn more" (default)|
|link.href|string|Learn more link Href|"https://gdprinfo.eu" (default)|
|message.html|string|Message displayed inside the banner |"This website uses cookies to ensure you get the best experience on our website." (default)|
|accept.byScroll |string|Auto accept and hide banner after user scrolls for x amount of pixels. Provide a number of pixels |"none" (default)|
|accept.byTime|number|Auto accept and hide banner after x amount of milliseconds. Provide a number of milliseconds |"-1" (default)|
|accept.byClick|boolean|Auto accept and hide banner after user clicks anywhere on the screen|false (default), true|
|refreshonallow|boolean|Refresh a page after user accepts cookies|false (default),true|
|cookieName|string|Cookie name|"cookie-banner" (default)|
|ignoreAllow||||
|messageStyles||||
|linkStyle||||
|linkStyleHover||||
|allowHtml||||
|allowStyle|||||
|allowStyleHover|||||
|dismissHtml|||||
|dismissStyle|||||
|dismissStyleHover|||||
|declineHtml|||||
|declineStyle|||||
|declineStyleHover|||||
|onAllow|||||
|onDecline|||||
|onDismiss|||||
|onRestore|||||
|onInit|||||
|onUpdate|||||
