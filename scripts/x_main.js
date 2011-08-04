/*
Description: New Site
Author: Barnum Design
*/	

var $j = jQuery.noConflict();
$j(document).ready(function(){
							
/////* Global variables */////
var Loc=document.location.href;
var breadcrumb=$j('#catalog_crumb');
var Dir0 = Loc.split('/')[3];
var Dir1 = Loc.split('/')[4];
var Dir2 = Loc.split('/')[5];
var Dir3 = Loc.split('/')[6];
var Uns1 = Loc.split('_')[1];
var section="";

/////* Templates */////
if(Dir1!="index.htm" && Dir1!=""){ // all but the portal
}
if(Uns1!="catalog" && Dir1!="index.htm" && Dir1!="") $j('#Top .breadcrumb .main').fadeIn('1000');
if(Dir0.substring(0,17)=="CatalogueRetrieve" || Uns1=="product" || Uns1=="catalog" || Dir0.substring(0,15)=="OrderRetrievev2" || Dir0.substring(0,13)=="OrderRetrieve" || Dir0.substring(0,12)=="Default.aspx" || Dir0.substring(0,13)=="MemberProcess") {
$j('#Wrap').addClass('catalog');
	if(Uns1=="catalog"){
	$j('#Wrap').addClass('prod-small');
	}
	if(Uns1=="product"){
	$j('#Wrap').addClass('prod-large');
	}
}
else if(Dir1=="index.htm" || Dir1==""){
section="home";
}
else if(Dir1=="Products" && (Dir2=="" || Dir2=="index.htm")){
section="Products";
}
else if(Dir1=="About" && (Dir2=="" || Dir2=="index.htm")){
section="About";
}
else if(Dir1=="Events" || Dir0.substring(0,20)=="AnnouncementRetrieve"){
section="Events";
}
else{ 
section="default";
}

///// Fancy Box 
$j('a.ltbx').fancybox({'transitionIn':'elastic','transitionOut':'elastic','speedIn':600,'speedOut':200,'overlayShow':true});
$j('a.ltbx a').fancybox({'transitionIn':'elastic','transitionOut':'elastic','speedIn':600,'speedOut':200,'overlayShow':true});
$j('a.ltbx.win').fancybox({'width':600,'height':600,'autoDimensions':false});
$j("a.ltbx.if").fancybox({'width':'75%','height':'75%','autoScale':false,'transitionIn':'none','transitionOut':'none','type':'iframe'});

///// Reisizr 
$j(".resizr img").each(function(){$j(this).cjObjectScaler({method:"fit",fade: 800});});

///// Nav
$j('.s-nav a').each(function(){;
var SubA=$j(this);
var SubL=this.href;
	if (SubL==Loc || (SubL.split('/')[3]==Loc.split('/')[3] && SubL.split('/')[4]=="") || SubA.html()==breadcrumb.html() || ($j('#Account')!=null && (SubL.split('/')[3]=="Account" && SubL.split('/')[4]=="") || (Loc.split('/')[3].substring(0,12)=="CaseRetrieve" && SubL.split('/')[4]=="Case_History.htm") || (Loc.split('/')[3].substring(0,19) == "OrderSecureRetrieve" && SubL.split('/')[4] == "Order_History.htm")) || (SubL.split('/')[3]=="Store" && (Loc.split('_')[1]=="catalog" || Loc.split('_')[1]=="product" || Loc.split('/')[3].substring(0,13)=="OrderRetrieve" || Loc.split('/')[3].substring(0,17)=="CatalogueRetrieve")) || (SubL.split('/')[4]== "FAQs.htm" && (Loc.split('/')[3].substring(0,11)=="FAQRetrieve" || Loc.split('/')[3].substring(15,18)=="FAQ"))) {
	$j(this).attr('class', 'active');
	$j(this).parents('li').attr('class', 'selected')
	}
});

///// SZ Login Nav
if(loggedin==1){
$j('.loggedIn').css('display', 'block'); 
}
else {
$j('.loggedOut').css('display', 'block');
}

///// TopNav
$j('#TopNav > div > ul > li ').mouseover(function(){
$j(this).siblings().removeClass('selected');
$j(this).addClass('selected');
 $j(this).mouseleave(function(){
 $j(this).removeClass('selected');
 });
});

///// IE6 
if(IE6_or_below==true){
//// Trans bg
$j('.trans').each(function(){$j(this).height($j(this).parent().outerHeight());});
}

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
if($j('#gMap_addr').html()!=null){
var gMap_address=$j("#gMap_addr").html();
var gMap_title=$j("#gMap_title").html();
initialize();
showAddress(gMap_address,gMap_title);
$j('#Wrap #map_canvas').parent().hide();
}

});
