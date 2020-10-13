theme (string) - Name of preset theme. 
Values:"CodGrayWhite" (default), "BigStoneTurquoise", "SeaweedAtlantis", "CharadeJaffa", "RhinoShakespeare", "CloudBurstGorse", "SanJuanGold", "BlueChillCanary", "AffairBrightSun", "PorcelainMalibu", "AliceBlueCornflowerBlue", "LinkWaterChathamsBlue", "SazeracTuscany", "CatskillWhiteAquaForest", "WhiteMineShaft"

cookieName (string) - Name of a cookie stored in a browser 
Default: "cookie-banner"

type (string) - Type of banner. confirm: Two buttons(let visitors accept/decline cookies). alert: One button(inform visitors)
Values: "confirm" (default), "alert"

blockType (string) - Display banner as block or line
Values: "line" (default), "block" 

blockPosition (string) - Banner position on the screen
Values: "bottom" (default), "bottom-left", "bottom-right", "top-left", "top-right", "center", "top", "top-scroll", "bottom-scroll"

buttonType (string) - Button styles
Values: "round-fill" (default), "round", "rectangle", "rectangle-fill", "rectangle-round", "rectangle-round-fill"

buttonDirection (string) - Display buttons in a row or one after another
Values: "row" (default), "column"

showPoweredBy (boolean) - Display credentials
Values: true (default), false

blind.visible (boolean) - Display screen overlay to force banner interaction
Values: false (default), true

blind.bgColor (string) - Overlay color
Default: "black"

blind.opacity (string) - Overlay opacity
Default: ".5"

animation.type (string) - Render banner with animation
Values: "no" (default), "slide-top", "slide-bottom", "slide-left", "slide-right", "fade"

animation.delay (string) - Animation delay in milliseconds
Default: "5000"

animation.duration (string) - Animation duration in milliseconds
Default: "500"

link.html (string) - Text in the link positioned after the banner message
Default: "Learn more"

link.href (string) - Learn more link Href
Default: "https://gdprinfo.eu"

message.html (string) - Message displayed inside the banner 
Default: "This website uses cookies to ensure you get the best experience on our website."

accept.byScroll (string) - Auto accept and hide banner after user scrolls for x amount of pixels. Provide a number of pixels 
Default: "none"

accept.byTime (number) - Auto accept and hide banner after x amount of milliseconds. Provide a number of milliseconds 
Default: "-1"

accept.byClick (boolean) - Auto accept and hide banner after user clicks anywhere on the screen
Values: false (default), true