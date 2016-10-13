/*
* This file is for calling custom and jQuery functions
*/

$(document).ready(function() {
    $('.mh').matchHeight({
        byRow: false
    });
    
    $("header .top-header a.menu-toggle").on('click', function(){
        $("ul.primary-menu").slideToggle();
        $(this).toggleClass("active");
        return false;
    });
    
    $("header .top-header ul.primary-menu li.inmenu-toggle a").on('click', function(){
        $(this).parent().parent().find("li:not(.inmenu-toggle)").slideToggle();
        return false;
    });
    
    $("header .top-header ul.primary-menu li.has-level a").on('click', function(){
        $(this).parent().find("ul.drop-menu").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });
    
    $("header .main-header .user-menu .usermenu-toggle").on('click', function(){
        $(this).parent().toggleClass("active");
        return false;
    });
    
     $(".tab-list li").click(function() {
        $(".tab-list li").removeClass('active');
        $(this).addClass("active");
        $(".tab-content").hide();
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).fadeIn();
        return false;
    });
    
    $('#faqslistado').on('click', '.title a', function(){
		if($(this).parent().parent().parent().hasClass("hide-siblings")){
			var $visible_accordion = $(this).parent().parent().siblings(".accordion.showing");
			if($visible_accordion.length){
				$visible_accordion.removeClass("showing");
				$visible_accordion.addClass("hidden");
				$visible_accordion.find(".accordion-content").slideUp('fast');
				$(this).parent().parent().find(".accordion-content").slideToggle('fast');
				$(this).parent().parent().removeClass("hidden");
				$(this).parent().parent().addClass("showing");
			} else {
				if($(this).parent().parent().hasClass("hidden")){
					$(this).parent().parent().removeClass("hidden");
					$(this).parent().parent().addClass("showing");
				} else {
					$(this).parent().parent().removeClass("showing");
					$(this).parent().parent().addClass("hidden");
				}
				
				$(this).parent().parent().find(".accordion-content").slideToggle('fast');
			}
		} else{
			if($(this).parent().parent().hasClass("hidden")){
				$(this).parent().parent().removeClass("hidden");
				$(this).parent().parent().addClass("showing");
			} else {
				$(this).parent().parent().removeClass("showing");
				$(this).parent().parent().addClass("hidden");
			}
			$(this).parent().parent().find(".accordion-content").slideToggle('fast');
		}
		return false;
	});
    
    $('#date').datepick({
        dateFormat: 'D, dd M, yyyy',
        rangeSelect: true,
        //onSelect: customRange, 
        useMouseWheel: false,
        changeMonth: false,
        minDate: 0,
        monthsToShow: 1,
        monthsToStep: 1,
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
    });
    
    $("#date").bind("focus", function(){
        $(this).blur();
    });

    /*function customRange(dates) { 
        if (this.id == 'from') { 
            $('#to').datepick('option', 'minDate', dates[0] || null);
        } 
        else { 
            $('#from').datepick('option', 'maxDate', dates[0] || null); 
        } 
    }*/
    
});

$(window).load(function() {
    
});