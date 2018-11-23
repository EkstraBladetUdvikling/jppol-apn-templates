(function () {
	'use strict';

	var styles = "html, body {\n\twidth: 100%;\n\theight: 100%;\n}\nbody, td, th {\n\tfont-family: Tahoma, Geneva, sans-serif;\n\tfont-size: 14px;\n\tcolor: #333;\n\tline-height: 21px;\n\n\tbackground-color:#fff;\n}\n#epaper_eb_banner,\n#epaper_eb_banner_container,\n#epaper_eb_banner_logo,\n#epaper_eb_banner_txt,\n#epaper_eb_banner_pointer {\n\tposition:absolute;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tbackground-size:contain;\n}\n#epaper_eb_banner {\n\t/*background-color:#fff;*/\n\n\tbackground: -webkit-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));\n\tbackground: -ms-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));\n\tbackground: linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));\n\toverflow: hidden;\n}\n#epaper_eb_banner_container {}\n\n#epaper_eb_banner_logo {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\theight:51px;\n\twidth:100%;\n\tpadding:10px;\n}\n#epaper_eb_banner_logo > div {\n\theight:100%;\n\twidth:100%;\n\tdisplay:block;\n}\n#epaper_eb_banner_content {\n\tposition: absolute;\n\tmargin-top:51px;\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: calc(100% - 51px);\n}\n\n.epaper_eb_banner_content_left, .epaper_eb_banner_content_right {\n\twidth: 40px;\n}\n.epaper_eb_banner_content_center {\n\theight: 100%;\n}\n.epaper_eb_banner_content_right {}\n.epaper_eb_banner_content_right .lastpage_arrow {\n\tfont-size:40px;\n\tfont-weight:bold;\n\tmargin-top:20px;\n\tcolor:#fff;\n}\n.epaper_eb_banner_content_right .nextpage_arrow {\n\tfont-size:57px;\n\tfont-weight:bold;\n\tmargin-top: calc(50vh - 122px);\n\tmargin-left:-10px;\n\tcolor:#fff;\n}\n.epaper_eb_banner_content_center img {\n\tposition: relative;\n\theight: 515px;\n\twidth: auto;\n\ttop:50%;\n\ttransform:translateY(-50%);\n\n\t-moz-box-shadow: \t3px 3px 5px 1px rgba(0,0,0,0.3);\n\t-webkit-box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.3);\n\tbox-shadow: \t\t3px 3px 5px 1px rgba(0,0,0,0.3);\n}\n.epaper_eb_banner_content_center img:nth-child(2) {\n\t-moz-box-shadow: \t4px 3px 5px 1px rgba(0,0,0,0.3);\n\t-webkit-box-shadow: 4px 3px 5px 1px rgba(0,0,0,0.3);\n\tbox-shadow: \t\t4px 3px 5px 1px rgba(0,0,0,0.3);\n}\n\n#epaper_eb_banner_txt {}\n#epaper_eb_banner_pointer {\n\twidth:30px;\n\theight:30px;\n\toverflow:visible;\n\tleft:50%;\n\ttop:50%;\n\t-webkit-transform: translate(203px,34px) scale(1.1) rotate(-27deg);\n\ttransform: translate(203px,34px) scale(1.1) rotate(-27deg);\n\t-webkit-transition: all 0.3s ease;\n\ttransition: all 0.3s ease;\n}\n#epaper_eb_banner_pointer svg {\n\twidth:100%;\n\tfilter: drop-shadow(0px 3px 3px rgba(0,0,0,0.35));\n}\n.pointer_stroke {\n\tfill: #000;\n}\n.pointer_fill {\n\tfill: url(#grad1);\n}\n#epaper_eb_banner_container:hover #epaper_eb_banner_pointer {\n\t-webkit-transform: translate(200px,30px) scale(1) rotate(-32deg);\n\ttransform: translate(200px,30px) scale(1) rotate(-32deg);\n\n}\n.moveL {\n\t-webkit-animation: moveLeft 3s ease-out 1;\n\tanimation: moveLeft 3s ease-out 1;\n}\n.moveR {\n\t-webkit-animation: moveRight 3s ease-out 1;\n\tanimation: moveRight 3s ease-out 1;\n}\n@-webkit-keyframes moveRight {\n\t0% {-webkit-transform: translateX(0%);}\n\t10% {-webkit-transform: translateX(100%);}\n\t100% {-webkit-transform: translateX(100%);}\n}\n@keyframes moveRight {\n\t0% {transform: translateX(0%);}\n\t10% {transform: translateX(100%);}\n\t100% {transform: translateX(100%);}\n}\n@-webkit-keyframes moveLeft {\n\t0% {-webkit-transform: translateX(0%);}\n\t10% {-webkit-transform: translateX(-100%);}\n\t100% {-webkit-transform: translateX(-100%);}\n}\n@keyframes moveLeft {\n\t0% {transform: translateX(0%);}\n\t10% {transform: translateX(-100%);}\n\t100% {transform: translateX(-100%);}\n}";
	var onSiteStyling = ".epaper_banner_container {position: relative; display: inline-block;} .epaperframe_expanded, .epaperframe_expanded_ios, .epaper_overlay_expanded, .epaper_overlay_btn {  z-index: 82000 !important; background: rgba(0,0,0,0.5);\n  -webkit-transition-duration:0.5s; transition-duration:0.5s; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out; }\n  .epaper_overlay_expanded { position: fixed; width: 100%; height: 100%; left: 0px; top: 0px; }\n  .epaperframe_expanded { position: fixed !important; width: 96% !important; left: 2%; top: 51px;\n                height: 94vh !important;\n                height: -webkit-calc(100vh - 51px) !important;\n                height: -moz-calc(100vh - 51px) !important;\n                height: calc(100vh - 51px) !important; }\n.epaperframe_expanded_ios { position: fixed !important; width: 100% !important; left: 0%; top: 51px; }\n.epaperframe_wrapper_ios { overflow: hidden !important; }\n.epaperframe_expanded_body { position: absolute; overflow: hidden; width: 100% !important; height: 100% !important;}\n.epaper_overlay_btn {\n  right: calc(2% + 5px); bottom: 5px;\n  width: 9vh;\n  height: 9vh;\n  max-width: 16.4vmin !important;\n  max-height: 16.4vmin !important;\n  min-width: 88px !important;\n  min-height: 88px !important;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.handle_epaper_btn {\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  background: none;\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n  text-decoration: none;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0;\n  cursor: pointer;\n}\n.handle_epaper_btn svg {\n  width: 40%; height: auto; margin-left: auto;  margin-right: auto;\n}\n.handle_epaper_btn svg:hover {\n  width: 56%; height: auto;\n}\n.handle_epaper_btn .epaper_layer_expand {\n  fill: #fff;\n}\n.pol_expanded {\n  position: absolute;\n  height:100% !important;\n  width:100% !important;\n  left: 0px !important;\n  top: 0px !important;\n  margin: 0px !important;\n  padding: 0px !important;\n}\n.epaperframe_wrapper_ios_height { height: 100% !important; max-height: none !important; }\n.epaper_handle_btn {display:block; opacity: 1; position: fixed; }\n";

	// <div class="epaper_banner_container"  style="position: relative; display: inline-block;">
	//   <div id="handle_epaper_btn_holder_inframe" class="epaper_overlay_btn" style="display:none; position:absolute;">
	//     <div id="toggle_epaper_inframe" class="handle_epaper_btn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg></div>
	//   </div>
	//     <div id="epaperframe_wrapper" style="width:930px; height:600px; overflow:hidden; ">
	//       <iframe name="epaperframe" id="epaperframe" src="banner.html" allowfullscreen frameborder="0" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" style="overflow:visible;"></iframe>
	//     </div>
	// </div>
	var parentDoc = window.parent.document;
	var parentBody = parentDoc.body;
	var receiver = parentDoc.getElementById(document.body.id);
	var epaper_iframe_name = receiver.querySelector('iframe');
	var bannerContainer = document.createElement('div');
	var handle_epaper_btn_holder_inframe = document.createElement('div');
	var toggle_epaper_inframe = document.createElement('div');
	var epaperframe_wrapper = document.createElement('div');
	var epaperframe = document.createElement('div');
	var toggle_epaper = document.createElement('div');
	var epaper_overlay = document.createElement('div');
	var handle_epaper_btn_holder = document.createElement('div');
	var randomNum = new Date().getTime();
	var theClass = navigator.userAgent.match(/(iPod|iPhone|iPad)/)
	    ? 'epaperframe_expanded_ios'
	    : 'epaperframe_expanded';
	function bannerOnSite() {
	    console.log('PARENT!!!', window.parent.document);
	    console.log('PARENT!!!', parentDoc, receiver);
	    console.log('PARENT!!!', onSiteStyling);
	    bannerContainer.className = 'epaper_banner_container';
	    handle_epaper_btn_holder_inframe.id = "handle_epaper_btn_holder_inframe" + randomNum;
	    handle_epaper_btn_holder_inframe.id = "toggle_epaper_inframe" + randomNum;
	    handle_epaper_btn_holder_inframe.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 120 120\" width=\"120\" height=\"120\"><path class=\"epaper_layer_expand\" d=\"M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z\"/></svg>";
	    handle_epaper_btn_holder_inframe.appendChild(toggle_epaper_inframe);
	    bannerContainer.appendChild(handle_epaper_btn_holder_inframe);
	    epaperframe_wrapper.id = "epaperframe_wrapper" + randomNum;
	    epaperframe_wrapper.setAttribute('style', 'height:600px;overflow:hidden;width:930px;');
	    epaperframe.id = "epaperframe" + randomNum;
	    epaperframe_wrapper.appendChild(epaperframe);
	    bannerContainer.appendChild(epaperframe_wrapper);
	    var overlayFrag = document.createDocumentFragment();
	    overlayFrag.appendChild(epaper_overlay);
	    overlayFrag.appendChild(bannerContainer);
	    overlayFrag.appendChild(handle_epaper_btn_holder);
	    receiver.appendChild(overlayFrag);
	}
	function toggleAdLayerOverlay() {
	    console.log('Toggle epaper_overlay');
	    var theClass = navigator.userAgent.match(/(iPod|iPhone|iPad)/)
	        ? 'epaperframe_expanded_ios'
	        : 'epaperframe_expanded';
	    epaperframe_wrapper.classList.toggle(theClass);
	    //if (epaper_iframe_name.hasClass("epaperframe_expanded")) {
	    if (epaperframe_wrapper.classList.contains(theClass)) {
	        console.log('vis luk knap');
	        //alert("YES "+ theClass);
	        /**
	         * pol.dk
	         */
	        // $bContainPar.classList.add("epaperframe_expanded");
	        // $bContain.classList.add("pol_expanded");
	        // $bContainAd.classList.add("pol_expanded");
	        epaper_overlay.style.display = 'block';
	        handle_epaper_btn_holder.style.display = 'block';
	        handle_epaper_btn_holder_inframe.style.display = 'none';
	        //$("body").css( {"overflow": "hidden" } );
	        parentBody.classList.add('epaperframe_expanded_body');
	        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	            epaperframe_wrapper.classList.add('epaperframe_wrapper_ios_height');
	        }
	    }
	    else {
	        //alert("No "+ theClass);
	        console.log('vis åbn knap');
	        epaper_overlay.style.display = 'none';
	        /**
	         * pol.dk
	         */
	        // $bContainPar.removeClass("epaperframe_expanded");
	        // $bContain.removeClass("pol_expanded");
	        // $bContainAd.removeClass("pol_expanded");
	        handle_epaper_btn_holder.style.display = 'none';
	        handle_epaper_btn_holder_inframe.style.display = 'block';
	        //$("body").css( {"overflow": "scroll" } );
	        parentBody.classList.remove('epaperframe_expanded_body');
	        epaperframe_wrapper.classList.remove('epaperframe_wrapper_ios_height');
	    }
	    calculateFontsize('toggle layer');
	}
	function getContrast50(hexcolor) {
	    return parseInt(hexcolor, 16) > 0xffffff / 1.25 ? '333333' : 'ffffff';
	}
	function calculateFontsize(arg) {
	    var newFontSize = (toggle_epaper.clientWidth * 0.27).toString();
	    toggle_epaper.style.fontSize = newFontSize;
	    toggle_epaper_inframe.style.fontSize = newFontSize;
	    console.log(arg + ': recalculating toggle button font size');
	}
	function openOverlay(pass_data) {
	    console.log(pass_data);
	    var epaperframe_id = pass_data.epaperframe_name;
	    var random_from_banner = pass_data.epaperframe_random;
	    var color_from_banner = pass_data.epaperframe_bannercolor;
	    var color_from_banner = color_from_banner.indexOf('#') !== -1
	        ? color_from_banner.substring(1)
	        : color_from_banner;
	    console.log('Message received: ##' +
	        color_from_banner +
	        ' - ' +
	        epaperframe_id +
	        ', random: ' +
	        random_from_banner);
	    //var epaper_iframe_name = $("iframe[name="+ epaperframe_id +"]")
	    epaper_iframe_name.classList.add('epaperframe_expanded');
	    /**
	     * pol.dk -->
	     */
	    // var $bContain = $("#epaperframe_wrapper"+ epaper_banner_random).closest(".adtech-container");
	    // var $bContainAd = $bContain.closest(".ad");
	    // var $bContainPar = $bContain.closest("section");
	    // $bContainPar.css( {"z-index":"80990"} );
	    // $bContainPar.classList.add("epaperframe_expanded");
	    // $bContain.classList.add("pol_expanded");
	    // $bContainAd.classList.add("pol_expanded");
	    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	        epaperframe_wrapper.classList.add('epaperframe_wrapper_ios');
	        epaperframe_wrapper.classList.add('epaperframe_wrapper_ios_height');
	    }
	    epaperframe_wrapper.classList.add(theClass);
	    epaper_overlay.id = 'epaper_overlay' + randomNum;
	    epaper_overlay.className = 'epaper_overlay_expanded';
	    handle_epaper_btn_holder.id = 'handle_epaper_btn_holder' + randomNum;
	    toggle_epaper.id = 'toggle_epaper' + randomNum;
	    toggle_epaper.innerHTML = 'luk&nbsp;&times;';
	    toggle_epaper.appendChild(toggle_epaper);
	    handle_epaper_btn_holder.className = 'epaper_overlay_btn epaper_handle_btn';
	    handle_epaper_btn_holder.style.backgroundColor = "#" + color_from_banner;
	    toggle_epaper.classList.add('handle_epaper_btn');
	    parentBody.classList.add('epaperframe_expanded_body');
	    var contrast = "#" + getContrast50(color_from_banner);
	    toggle_epaper_inframe.style.color = contrast;
	    var svgBtn = toggle_epaper_inframe.querySelector('.epaper_layer_expand');
	    svgBtn.style.fill = contrast;
	    console.log('Button text color: ' + contrast);
	    calculateFontsize('init');
	    //Toggle layer
	    handle_epaper_btn_holder.addEventListener('click', toggleAdLayerOverlay);
	    epaper_overlay.addEventListener('click', toggleAdLayerOverlay);
	    handle_epaper_btn_holder_inframe.addEventListener('click', toggleAdLayerOverlay);
	}

	function bannerInFrame() {
	    var swipeBannerUrl = '#{SWIPEBANNERURL}';
	    var swipeBannerUrl_frontpage = swipeBannerUrl + "/Image.ashx?PageNumber=1&ImageType=Normal";
	    var hasSecondFrontpage = '#{SECONDFRONTPAGE}';
	    var swipeBannerUrl_frontpage_2 = hasSecondFrontpage.indexOf('SECONDFRONTPAGE') === -1 &&
	        hasSecondFrontpage === 'true'
	        ? swipeBannerUrl + "/Image.ashx?PageNumber=2&ImageType=Normal"
	        : '';
	    var backgroundColorTop = '#{BACKGROUNDCOLORTOP}';
	    var backgroundColor = '#{BACKGROUNDCOLOR}';
	    var mediaUrl = '${MEDIA_URL}';
	    // const domainString: string = '#{DOMAIN}';
	    var trackingPixel1 = '#{TRACKINGURL1}';
	    var trackingPixel2 = '#{TRACKINGURL2}';
	    var trackingPixel3 = '#{TRACKINGURL3}';
	    // let domainUrl: string = '';
	    // if (domainString.indexOf('DOMAIN') === -1) {
	    //   switch (domainString) {
	    //     case 'JP':
	    //       domainUrl = 'https://jp.dk';
	    //       break;
	    //     case 'Politiken':
	    //       domainUrl = 'https://politiken.dk';
	    //       break;
	    //     case 'Ekstra Bladet':
	    //       domainUrl = 'https://ekstrabladet.dk';
	    //       break;
	    //   }
	    // }
	    var getUrlParameter = function (sParam) {
	        if (window.location) {
	            var sPageURL = window.location.search.substring(1);
	            if (sPageURL !== '') {
	                var regExp = new RegExp(sParam + '=(.*?)[&]');
	                var returnString = '';
	                if (sPageURL.match(regExp)) {
	                    returnString = sPageURL.match(regExp)[1];
	                }
	                return returnString;
	            }
	        }
	        return '';
	        // console.log('sPageURL', sPageURL);
	        // const sURLconstiables = sPageURL.split('&');
	        // let sParameterName: string[];
	        // for (let i = 0; i < sURLconstiables.length; i++) {
	        //   sParameterName = sURLconstiables[i].split('=');
	        //   if (sParameterName[0] === sParam) {
	        //     return sParameterName[1];
	        //   }
	        // }
	    };
	    // const getEpaperURL = getUrlParameter('src');
	    // const epaper_originurl =
	    //   getEpaperURL !== '' ? decodeURIComponent(getEpaperURL) : domainUrl;
	    var urlqueorand = swipeBannerUrl.indexOf('?') !== -1 ? '&' : '?';
	    var theTarget = swipeBannerUrl +
	        urlqueorand +
	        't=' +
	        encodeURIComponent(new Date().toString());
	    var body = document.body;
	    var container = document.createElement('div');
	    container.id = 'epaper_eb_banner';
	    var epaper_eb_banner_container = document.createElement('div');
	    epaper_eb_banner_container.id = 'epaper_eb_banner_container';
	    var htmlString = "<div id=\"epaper_eb_banner_logo\"><div></div></div>";
	    epaper_eb_banner_container.innerHTML = htmlString;
	    var epaper_eb_banner_content = document.createElement('div');
	    epaper_eb_banner_content.id = 'epaper_eb_banner_content';
	    var frontPage = "<img src='" + swipeBannerUrl_frontpage + "' />";
	    var frontPage2 = swipeBannerUrl_frontpage_2 !== ''
	        ? "<img src='" + swipeBannerUrl_frontpage_2 + "' />"
	        : '';
	    var content = "<div class=\"epaper_eb_banner_content_left\"></div>\n                            <div id=\"epaper_eb_cover\" class=\"epaper_eb_banner_content_center\">\n                            " + frontPage + frontPage2 + "\n                            </div>\n                            <div class=\"epaper_eb_banner_content_right\">\n                              <i class=\"material-icons lastpage_arrow\">last_page</i>\n                              <i class=\"material-icons nextpage_arrow\">chevron_right</i>\n                            </div>";
	    epaper_eb_banner_content.innerHTML = content;
	    epaper_eb_banner_container.appendChild(epaper_eb_banner_content);
	    var epaper_eb_banner_txt = document.createElement('div');
	    epaper_eb_banner_txt.id = 'epaper_eb_banner_txt';
	    epaper_eb_banner_container.appendChild(epaper_eb_banner_txt);
	    var epaper_eb_banner_pointer = document.createElement('div');
	    epaper_eb_banner_pointer.id = 'epaper_eb_banner_pointer';
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
	    epaper_eb_banner_container.addEventListener('click', function () {
	        openAdLayer('moveL');
	    });
	    function openAdLayer(classArg) {
	        if (!epaper_eb_banner_content.classList.contains(classArg)) {
	            epaper_eb_banner_content.classList.add(classArg);
	            epaper_eb_banner_txt.classList.add('fade');
	            epaper_eb_banner_pointer.classList.add('fade');
	            var getEpaperRandom = getUrlParameter('r');
	            if (getEpaperRandom === '') {
	                getEpaperRandom = new Date().getTime().toString();
	            }
	            var pass_epaperframe_data = {
	                epaperframe_bannercolor: backgroundColorTop.toString(),
	                epaperframe_name: window.name.toString(),
	                epaperframe_ok: 'goframe',
	                epaperframe_random: getEpaperRandom
	            };
	            if (trackingPixel1.indexOf('TRACKINGURL1') === -1 &&
	                trackingPixel1.indexOf('ebimg.dk') === -1) {
	                var trackingImg1 = document.createElement('img');
	                trackingImg1.src = trackingPixel1;
	                body.appendChild(trackingImg1);
	            }
	            if (trackingPixel2.indexOf('TRACKINGURL2') === -1 &&
	                trackingPixel2.indexOf('ebimg.dk') === -1) {
	                var trackingImg2 = document.createElement('img');
	                trackingImg2.src = trackingPixel2;
	                body.appendChild(trackingImg2);
	            }
	            if (trackingPixel3.indexOf('TRACKINGURL3') === -1 &&
	                trackingPixel3.indexOf('ebimg.dk') === -1) {
	                var trackingImg3 = document.createElement('img');
	                trackingImg3.src = trackingPixel3;
	                body.appendChild(trackingImg3);
	            }
	            openOverlay(pass_epaperframe_data);
	            // window.parent.postMessage(
	            //   JSON.stringify(pass_epaperframe_data),
	            //   epaper_originurl
	            // );
	            setTimeout(function () {
	                location.replace(theTarget);
	            }, 800);
	        }
	    }
	    /**
	     * Add all styling options to head
	     */
	    var headFrag = document.createDocumentFragment();
	    var linkTag = document.createElement('link');
	    linkTag.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
	    linkTag.rel = 'stylesheet';
	    headFrag.appendChild(linkTag);
	    var styleTag = document.createElement('style');
	    var bgStyling = backgroundColor.indexOf('BACKGROUNDCOLOR') === -1
	        ? "#epaper_eb_banner_container { background-color: " + backgroundColor + "; }"
	        : '';
	    var moreStyling = bgStyling + "\n  #epaper_eb_banner_logo { background-color: " + backgroundColorTop + "; }\n  #epaper_eb_banner_logo > div { background: url(" + mediaUrl + ") left center no-repeat; background-size:contain; }";
	    styleTag.innerHTML = styles + moreStyling;
	    headFrag.appendChild(styleTag);
	    document.head.appendChild(headFrag);
	    /**
	     * Add banner to body
	     */
	    body.appendChild(container);
	}

	window.addEventListener('load', function () {
	    bannerInFrame();
	    bannerOnSite();
	    console.log('oooh ${CLICK_URL}');
	});

}());
