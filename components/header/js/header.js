if (window.matchMedia('screen and (max-width: 767px)').matches){
    
    $(document).ready(function(){
        $(".hamburger_menu").click(function(){
            $(".main_navigation").addClass("close_menu");
        });
        $(".m_close").click(function(){
            $(".main_navigation").removeClass("close_menu");
        });
        $(".dropdown").click(function(){ 
            if ($(this).find('ul:first').is(':visible')) {
                $(this).find('ul:first').hide();
            }
            else{
                $(this).find('ul:first').show();
            }
        });
        
        $(".search_container a").click(function(){
            $("#searchInput").toggle();
        });
        
    });
    
}