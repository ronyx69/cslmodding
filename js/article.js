var el5;
$(".content-warning").each(function() 
{	
el5 = $(this);	
el5.prepend('<img src="https://cslmodding.info/icons/icon_warning.svg" height="32px" width="32px" class="icon1">');
});

var el4;
$(".content-info").each(function() 
{	
el4 = $(this);	
el4.prepend('<img src="https://cslmodding.info/icons/icon_info.svg" height="32px" width="32px" class="icon1">');
});

var el3;
$(".content-photo-box img").each(function() 
{	
el3 = $(this);	
el3.wrap('<a href="' + el3.attr('src') + '" target="null"></a>');
});

var el2;
$(".content h2").each(function() {
  el2 = $(this);
  el2.before('<div style="clear:both"></div><hr>');
});