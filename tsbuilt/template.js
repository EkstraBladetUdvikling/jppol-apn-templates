"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("./styles");
(function () {
    var SWIPEBANNERURL = "#{SWIPEBANNERURL}";
    var SWIPEBANNERURL_FRONTPAGE = "#{SWIPEBANNERURL_FRONTPAGE}";
    var SWIPEBANNERURL_FRONTPAGE_2 = "#{SWIPEBANNERURL_FRONTPAGE_2}";
    var backgroundColor = "#{BACKGROUNDCOLOR}";
    var mediaUrl = "${MEDIA_URL}";
    var domainString = "#{DOMAIN}";
    var trackingPixel1 = "#{TRACKINPIXEL1}";
    var trackingPixel2 = "#{TRACKINPIXEL2}";
    var trackingPixel3 = "#{TRACKINPIXEL3}";
    var domainUrl = "";
    switch (domainString) {
        case "Ekstra Bladet":
            domainUrl = "https://ekstrabladet.dk";
            break;
        case "JP":
            domainUrl = "https://jp.dk";
            break;
        case "Politiken":
            domainUrl = "https://politiken.dk";
            break;
    }
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLconstiables = sPageURL.split("&");
        var sParameterName;
        for (var i = 0; i < sURLconstiables.length; i++) {
            sParameterName = sURLconstiables[i].split("=");
            if (sParameterName[0] === sParam) {
                return sParameterName[1];
            }
        }
    };
    var getEpaperURL = getUrlParameter("src");
    var epaper_originurl = getEpaperURL
        ? decodeURIComponent(getEpaperURL)
        : domainUrl;
    var urlqueorand = SWIPEBANNERURL.indexOf("?") !== -1 ? "&" : "?";
    var theTarget = SWIPEBANNERURL +
        urlqueorand +
        "t=" +
        encodeURIComponent(new Date().toString());
    var body = document.body;
    var container = document.createElement("div");
    container.id = "epaper_eb_banner";
    var epaper_eb_banner_container = document.createElement("div");
    epaper_eb_banner_container.id = "epaper_eb_banner_container";
    var htmlString = "<div id=\"epaper_eb_banner_logo\"><div></div></div>";
    epaper_eb_banner_container.innerHTML = htmlString;
    var epaper_eb_banner_content = document.createElement("div");
    epaper_eb_banner_content.id = "epaper_eb_banner_content";
    var frontPage = "<img src='" + SWIPEBANNERURL_FRONTPAGE + "' />";
    var frontPage2 = SWIPEBANNERURL_FRONTPAGE_2.length > 2
        ? "<img src='" + SWIPEBANNERURL_FRONTPAGE_2 + "' />"
        : "";
    var content = "<div class=\"epaper_eb_banner_content_left\"></div>\n                            <div id=\"epaper_eb_cover\" class=\"epaper_eb_banner_content_center\">\n                            " + frontPage + frontPage2 + "\n                            </div>\n                            <div class=\"epaper_eb_banner_content_right\">\n                              <i class=\"material-icons lastpage_arrow\">last_page</i>\n                              <i class=\"material-icons nextpage_arrow\">chevron_right</i>\n                            </div>";
    epaper_eb_banner_content.innerHTML = content;
    epaper_eb_banner_container.appendChild(epaper_eb_banner_content);
    var epaper_eb_banner_txt = document.createElement("div");
    epaper_eb_banner_txt.id = "epaper_eb_banner_txt";
    epaper_eb_banner_container.appendChild(epaper_eb_banner_txt);
    var epaper_eb_banner_pointer = document.createElement("div");
    epaper_eb_banner_pointer.id = "epaper_eb_banner_pointer";
    var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 23\">\n                <path class=\"pointer_stroke\" d=\"M6 0h2v1H6V0zM0 8v3h1V9h2V8H0zM1 11h1v1H1V11zM3 9h1v1H3V9zM16 8h1v1h-1V8zM2 12h1v2H2V12zM3 14h1v2H3V14zM4 16h1v3H4V16zM16 17h1v3h-1V17zM12 7h2V6h-3v4h1V7zM14 7v4h1V8h1V7H14zM16 23v-3h-1v2H6v-3H5v4H16zM4 10v1h1v4h1V1H5v9H4zM9 6h2V5H9V1H8v9h1V6zM17 9h1v8h-1V9z\"/>\n                <polygon class=\"pointer_fill\" points=\"6 1 6 15 5 15 5 11 4 11 4 10 3 10 3 9 1 9 1 11 2 11 2 12 3 12 3 14 4 14 4 16 5 16 5 19 6 19 6 22 15 22 15 20 16 20 16 17 17 17 17 9 16 9 16 8 15 8 15 11 14 11 14 7 12 7 12 10 11 10 11 6 9 6 9 10 8 10 8 1 \" />\n                <defs><linearGradient id=\"grad1\" x1=\"65%\" y1=\"20%\" x2=\"45%\" y2=\"90%\"><stop offset=\"0%\" style=\"stop-color:rgb(255,255,255); stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:rgb(215,215,215); stop-opacity:1\" /></linearGradient></defs>\n                </svg>";
    epaper_eb_banner_pointer.innerHTML = svg;
    epaper_eb_banner_container.appendChild(epaper_eb_banner_pointer);
    /**
     * Assemble banner element
     */
    container.appendChild(epaper_eb_banner_container);
    /**
     * Set up Event listeners
     */
    // $("#epaper_eb_banner_container").on("swipeleft", function() {
    //   openAdLayer("moveL");
    // });
    // $("#epaper_eb_banner_container").on("swiperight", function() {
    //   openAdLayer("moveR");
    // });
    epaper_eb_banner_container.addEventListener("click", function () {
        openAdLayer("moveL");
    });
    function openAdLayer(classArg) {
        if (!epaper_eb_banner_content.classList.contains(classArg)) {
            epaper_eb_banner_content.classList.add(classArg);
            epaper_eb_banner_txt.classList.add("fade");
            epaper_eb_banner_pointer.classList.add("fade");
            var getEpaperRandom = getUrlParameter("r");
            var pass_epaperframe_data = {
                epaperframe_ok: "goframe",
                epaperframe_name: window.name.toString(),
                epaperframe_random: getEpaperRandom.toString(),
                epaperframe_bannercolor: backgroundColor.toString()
            };
            if (trackingPixel1.length > 2) {
                var trackingImg1 = document.createElement("img");
                trackingImg1.src = trackingPixel1;
                body.appendChild(trackingImg1);
            }
            if (trackingPixel2.length > 2) {
                var trackingImg2 = document.createElement("img");
                trackingImg2.src = trackingPixel2;
                body.appendChild(trackingImg2);
            }
            if (trackingPixel3.length > 2) {
                var trackingImg3 = document.createElement("img");
                trackingImg3.src = trackingPixel3;
                body.appendChild(trackingImg3);
            }
            window.parent.postMessage(JSON.stringify(pass_epaperframe_data), epaper_originurl);
            setTimeout(function () {
                location.replace(theTarget);
            }, 800);
        }
    }
    /**
     * Add all styling options to head
     */
    var headFrag = document.createDocumentFragment();
    var linkTag = document.createElement("style");
    linkTag.innerHTML =
        '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
    headFrag.appendChild(linkTag);
    var styleTag = document.createElement("style");
    var moreStyling = "#epaper_eb_banner_container { background-color: " + backgroundColor + "; }\n  #epaper_eb_banner_logo { background-color: " + backgroundColor + "; }\n  #epaper_eb_banner_logo > div { background: url(" + mediaUrl + ") left center no-repeat; background-size:contain; }";
    styleTag.innerHTML = styles_1.styles + moreStyling;
    headFrag.appendChild(styleTag);
    document.head.appendChild(headFrag);
    /**
     * Add banner to body
     */
    body.appendChild(container);
})();
