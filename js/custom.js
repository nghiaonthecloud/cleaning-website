$(document).on('ready', function(){

	"use strict";

    // Countdown timer

        function makeTimer() {

                var endTime = new Date("March 7, 2018 12:00:00 PDT");
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Days</span>');
                $("#hours").html(hours + '<span class="camp">Hour</span>');
                $("#minutes").html(minutes + '<span class="camp">Minute</span>');
                $("#seconds").html(seconds + '<span class="camp">Second</span>');

        }

        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel

        // i. #testimonial-carousel


        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            loop:true,
            autoplay:true,
            smartSpeed:1000,

            dots:true,
            autoplayHoverPause:true,

            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }


        });

       // 6. Smooth Scroll spy

        $('.header-area').sticky({
           topSpacing:0
        });

        //=============

        // $('li.smooth-menu a').bind("click", function(event) {
        //     event.preventDefault();
        //     var anchor = $(this);
        //     $('html, body').stop().animate({
        //         scrollTop: $(anchor.attr('href')).offset().top - -1
        //     }, 1200,'easeInOutExpo');
        // });

        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    // 7.animation support

        $(window).load(function(){

            $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });


});

