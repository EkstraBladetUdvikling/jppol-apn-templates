const dimCloserButton = 84;
export const styles = `html, body {
	width: 100%;
	height: 100%;
}
body, td, th {
	font-family: Tahoma, Geneva, sans-serif;
	font-size: 14px;
	color: #333;
	line-height: 21px;

	background-color:#fff;
}
#epaper_eb_banner,
#epaperBannerContainer,
#epaper_eb_banner_logo,
#epaperBannerTxt,
#epaperBannerPointer {
	position:absolute;
	height: 100%;
	width: 100%;
	cursor: pointer;
	background-repeat: no-repeat;
	background-position: center center;
	background-size:contain;
}
#epaper_eb_banner {
	/*background-color:#fff;*/

	background: -webkit-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));
	background: -ms-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));
	background: linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));
	overflow: hidden;
}


#epaper_eb_banner_logo {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	height:51px;
	width:100%;
	padding:10px;
}
#epaper_eb_banner_logo > div {
	height:100%;
	width:100%;
	display:block;
}
#epaperBannerContent {
	position: absolute;
	margin-top:51px;
	display: flex;
	justify-content: center;
	width: 100%;
	height: calc(100% - 51px);
}

.epaperBannerContent_left, .epaperBannerContent_right {
	width: 40px;
}
.epaperBannerContent_center {
	height: 100%;
}
.epaperBannerContent_right {}
.epaperBannerContent_right .lastpage_arrow {
	font-size:40px;
	font-weight:bold;
	margin-top:20px;
	color:#fff;
}
.epaperBannerContent_right .nextpage_arrow {
	font-size:57px;
	font-weight:bold;
	margin-top: calc(50vh - 122px);
	margin-left:-10px;
	color:#fff;
}
.frontpage {
	position: relative;
	height: 515px;
	width: auto;
	top:50%;
	transform:translateY(-50%);

	-moz-box-shadow: 	3px 3px 5px 1px rgba(0,0,0,0.3);
	-webkit-box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.3);
	box-shadow: 		3px 3px 5px 1px rgba(0,0,0,0.3);
}
.frontpage2 {
	-moz-box-shadow: 	4px 3px 5px 1px rgba(0,0,0,0.3);
	-webkit-box-shadow: 4px 3px 5px 1px rgba(0,0,0,0.3);
	box-shadow: 		4px 3px 5px 1px rgba(0,0,0,0.3);
}
#epaperBannerTxt {}
#epaperBannerPointer {
  display: none;
	width:30px;
	height:30px;
	overflow:visible;
	left:50%;
	top:50%;
}
#epaperBannerPointer svg {
	width:100%;
	filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.35));
}
.pointer_stroke {
	fill: #000;
}
.pointer_fill {
	fill: url(#grad1);
}
.moveL {
	-webkit-animation: moveLeft 3s ease-out 1;
	animation: moveLeft 3s ease-out 1;
}
.moveR {
	-webkit-animation: moveRight 3s ease-out 1;
	animation: moveRight 3s ease-out 1;
}
@-webkit-keyframes moveRight {
	0% {-webkit-transform: translateX(0%);}
	10% {-webkit-transform: translateX(100%);}
	100% {-webkit-transform: translateX(100%);}
}
@keyframes moveRight {
	0% {transform: translateX(0%);}
	10% {transform: translateX(100%);}
	100% {transform: translateX(100%);}
}
@-webkit-keyframes moveLeft {
	0% {-webkit-transform: translateX(0%);}
	10% {-webkit-transform: translateX(-100%);}
	100% {-webkit-transform: translateX(-100%);}
}
@keyframes moveLeft {
	0% {transform: translateX(0%);}
	10% {transform: translateX(-100%);}
	100% {transform: translateX(-100%);}
}
.reopenerSvg {
  height: 44px;
  width: 44px;
}
.reopenerSvg:hover {
  height: 50px;
  width: 50px;
}
.closerButton {
  align-items: center;
  background: rgb(0, 0, 0);
  border-radius: 50%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: ${dimCloserButton}px;
  fill: #fff;
  font-family: Arial;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
  line-height: ${dimCloserButton}px;
  padding: 20px;
  text-transform: uppercase;
  width: ${dimCloserButton}px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.fullScreenIframe {
  border: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
@keyframes movePointer {
  0% { transform: translateX(0px) rotate(0deg); }
  60% { transform: translateX(0px) rotate(0deg); }
  70% { transform: translateX(15px) rotate(15deg); }
  85% { transform: translateX(0px) rotate(0deg); }
  100% { transform: translateX(0px) rotate(0deg); }
}
@media only screen and (max-width : 640px) {
  .epaperBannerContent_center {
    text-align: center;
  }
  #epaperBannerPointer {
    display: block;
    width: 72px;
    height: 72px;
    overflow: visible;
    left: 25%;
    top: 60%;
    -webkit-animation: movePointer 3s linear infinite;
    animation: movePointer 3s linear infinite;
  }
  .frontpage {
    height: 250px;
  }
  .opslag {
    height: auto;
    width: 120px;
  }
  #epaperBannerTxt {
    position:relative;
    display:block;
    left: 82px;
    top: 170px;
    color:#fff;
    background-color:rgba(0,0,0,0.3);
    width: 148px;
    height: 48px;
    border:4px solid;
    -moz-border-radius: 28px;
    -webkit-border-radius: 28px;
    -khtml-border-radius: 28px;
    border-radius: 28px;
  }
  #epaperBannerTxt:after {
    content:"";
    position:absolute;
    background-color:#fff;
    width: 40px;
    height: 40px;
    margin-left:4px;
    margin-top:4px;

    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -khtml-border-radius: 50%;
    border-radius: 50%;
  }
}`;
