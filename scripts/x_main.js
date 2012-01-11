/*
Description: New Site
Author: Barnum Design
*/	

var $ = jQuery.noConflict();
$(document).ready(function(){
							
/////* Global variables */////
Loc=document.location.href;
breadcrumb=$('#catalog_crumb');
Dir0 = Loc.split('/')[3];
Dir1 = Loc.split('/')[4];
Dir2 = Loc.split('/')[5];
Dir3 = Loc.split('/')[6];
Uns1 = Loc.split('_')[1];
section="";

/////* Templates */////
if(Dir1!="index.htm" && Dir1!=""){ // all but the portal
}
if(Uns1!="catalog" && Dir1!="");
if(Dir0.substring(0,17)=="CatalogueRetrieve" || Uns1=="product" || Uns1=="catalog" || Dir0.substring(0,15)=="OrderRetrievev2" || Dir0.substring(0,13)=="OrderRetrieve" || Dir0.substring(0,12)=="Default.aspx" || Dir0.substring(0,13)=="MemberProcess") {
$('.Wrap').addClass('catalog');
}
// Product small and large
if($('.productSmall').height()!=null) $('.Wrap').addClass('prod-small');
if($('.productLarge').height()!=null) $('.Wrap').addClass('prod-large');
else if(Dir1==""){
section="home";
// Flash embedd
/*
var flashvars={};
var params={play:"true",loop:"false",scale:"noscale",salign:"tl",quality:"high",wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"};
var attributes={};
swfobject.embedSWF("/flash/banner.swf","intro_banner","675","250","9.0.0",false,flashvars,params,attributes);
*/
}
else if(Dir1=="Products" && Dir2==""){
section="Products";
}
else if(Dir1=="About" && Dir2==""){
section="About";
}
else if(Dir1=="Events" || Dir0.substring(0,20)=="AnnouncementRetrieve"){
section="Events";
}
else{ 
section="default";
}

///// Fancy Box 
$('a.ltbx').fancybox({'transitionIn':'elastic','transitionOut':'elastic','speedIn':600,'speedOut':200,'overlayShow':true});
$('a.ltbx a').fancybox({'transitionIn':'elastic','transitionOut':'elastic','speedIn':600,'speedOut':200,'overlayShow':true});
$('a.ltbx.win').fancybox({'width':600,'height':600,'autoDimensions':false});
$("a.ltbx.if").fancybox({'width':'75%','height':'75%','autoScale':false,'transitionIn':'none','transitionOut':'none','type':'iframe'});


///// FlexSlider
$('.flexslider').flexslider();


///// "Map It" link
$('.page-body.locations .map-it a').addClass('ltbx if');

///// Reisizr 
$(".resizr img").each(function(){$(this).cjObjectScaler({method:"fit",fade: 800});});

///// SUPER Nav (.s-nav)
$('.s-nav a').each(function(){;
var SubA=$(this);
var SubL=this.href;
	if (SubL==Loc /* || (SubL.split('/')[3]==Loc.split('/')[3] && SubL.split('/')[4]=="") */ || SubA.html()==breadcrumb.html() || ($('#Account')!=null && (SubL.split('/')[3]=="Account" && SubL.split('/')[4]=="") || (Loc.split('/')[3].substring(0,12)=="CaseRetrieve" && SubL.split('/')[4]=="Case_History.htm") || (Loc.split('/')[3].substring(0,19) == "OrderSecureRetrieve" && SubL.split('/')[4] == "Order_History.htm")) || (SubL.split('/')[3]=="Store" && (Loc.split('_')[1]=="catalog" || Loc.split('_')[1]=="product" || Loc.split('/')[3].substring(0,13)=="OrderRetrieve" || Loc.split('/')[3].substring(0,17)=="CatalogueRetrieve")) || (SubL.split('/')[4]== "FAQs.htm" && (Loc.split('/')[3].substring(0,11)=="FAQRetrieve" || Loc.split('/')[3].substring(15,18)=="FAQ"))) {
	$(this).attr('class', 'active');
	$(this).parents('li').attr('class', 'selected')
	}
});

///// SZ Login Nav
if(loggedin==1){
$('.loggedIn').css('display', 'block'); 
}
else {
$('.loggedOut').css('display', 'block');
}

// Forced discount code.
//var discountcode="Mothersday";
//$('table.cart tr.discount-code input.discountcodeInput').attr('value',discountcode).trigger("change");

///// TopNav
$('.Top_nav > div > ul > li').removeClass('selected').removeClass('selected'); // add to prevent sub nav reveal on load
$('#TopNav > div > ul > li ').mouseover(function(){
$(this).siblings().removeClass('selected');
$(this).addClass('selected');
 $(this).mouseleave(function(){
 $(this).removeClass('selected');
 });
});

///// IE6 
if(typeof ie6!=undefined){
//// Trans bg
$('.trans').each(function(){$(this).height($(this).parent().outerHeight());});
}

///// Portal jcarousel slideshow
$('#mycarousel').jcarousel({
vertical:true,
scroll: 1,
visible: 1,
auto: 5,
wrap: 'circular',
});

///// List stripe
$('ul.stripes.odd li:odd').addClass('stripe');
$('ul.stripes.even li:even').addClass('stripe');
$('table.stripes.odd tr:odd').addClass('stripe');
$('table.stripes.even tr:even').addClass('stripe');

});

//// Google map
var map = null;	
var geocoder = null;	
function initialize() {	
	if (GBrowserIsCompatible()) {	
	map = new GMap2(document.getElementById("map_canvas"));	
	map.setCenter(new GLatLng(-30.4693, 150.0179), 13);	
	map.addControl(new GLargeMapControl());	
	map.addControl(new GMapTypeControl());	
	geocoder = new GClientGeocoder();	
	}}	
	function showAddress(address,title) {	
	if (geocoder) {	
	geocoder.getLatLng(	
	address,	
	function(point) {	
	if (!point) {	
	alert(address + " not found");	
	} else {	
	map.setCenter(point, 13);	
	var marker = new GMarker(point);	
	map.addOverlay(marker);	
	marker.openInfoWindowHtml(title+"<br />"+address);	
	}});}}

//// Google map - custom address targetting
if($('#gMap_addr').html()!=null){
var gMap_address=$("#gMap_addr").html();
var gMap_title=$("#gMap_title").html();
initialize();
showAddress(gMap_address,gMap_title);
$('#map_canvas').parent().hide();
}
