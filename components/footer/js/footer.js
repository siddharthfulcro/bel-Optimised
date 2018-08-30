
$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 767) {
            $("footer .footer-section ul").hide();
            $("footer .footer-section h3").click(function(){
                $("footer .footer-section ul").stop().slideUp(200);
                $(this).parentsUntil("footer-section").children("footer .footer-section ul").stop().slideToggle(200);
            });
        }
        else
        {
            $("footer .footer-section ul").show();
        }
    }
});

$(document).ready(function() {

    $(".sublink").hide();
    $("footer .footer-section ul li a").click(function(){
        $(".sublink").stop().slideUp(200);
        $(this).parentsUntil("footer-section").children(".sublink").stop().slideToggle(200);
    });

})


