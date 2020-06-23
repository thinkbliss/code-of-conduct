// JavaScript Document

///////////////////////////////////////////
//	CONFIG
///////////////////////////////////////////



///////////////////////////////////////////
//	GLOBALS
///////////////////////////////////////////


///////////////////////////////////////////
//	MAIN
///////////////////////////////////////////


(function (DellCOC) {
    'use strict';

    /* APP
	========================================================================== */
    DellCOC.app = {
    	init: function () {



            

            this.assestsDir;

            if(window.location.href.indexOf("rebellion-workspace") > -1){
              this.assestsDir = "/rebellion-workspace/dell-coc/";
            }else if (window.location.href.indexOf("localhost/Rebellion/Dell_CoC") > -1) {
              this.assestsDir = "/Rebellion/Dell_CoC/git/";
            }else if (window.location.href.indexOf("localhost") > -1
              || window.location.href.indexOf("local") > -1) {
              this.assestsDir = "";
            }else if (window.location.href.indexOf("thisisarebellion.com") > -1) {
              this.assestsDir = "/clients/delltech/dell-coc/";
            }else {
              // TODO: AEM NEEDS WORK AND TESTING
              this.assestsDir = "/content/dam/delltechnologies/assets/microsites/codeofconduct/2018";
            }





            // load in the correct catagory content
            if(window.location.href.indexOf("customer.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/customer-content.html", success: function(result){
                    DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("how-we-win.htm") > -1) {
                console.log("is how-we-win.htm");
                console.log(this.assestsDir + "/html/how-we-win-content.html");
                var that = this;
                $.ajax({url: that.assestsDir + "/html/how-we-win-content.html", success: function(result){
                    console.log(that.assestsDir + "/html/how-we-win-content.html");
                   DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("innovation.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/innovation-content.html", success: function(result){
                   DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("integrity.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/integrity-content.html", success: function(result){
                    DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("message-from-our-ceo.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/message-from-our-ceo-content.html", success: function(result){
                   DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("results.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/results-content.html", success: function(result){
                    DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("speak-up.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/speak-up-content.html", success: function(result){
                   DellCOC.app.loadContent(result);
                }});
            } else if(window.location.href.indexOf("winning-together.htm") > -1) {
                $.ajax({url: this.assestsDir + "/html/winning-together-content.html", success: function(result){
                    DellCOC.app.loadContent(result);
                }});
            }else{
                //load main nav onto sections
                // $.ajax({
                //     url: this.assestsDir + "/html/main-nav.html",
                //     success: function(result){
                //         $('.main-nav-container').html(result);
                //         $.getScript('../js/main.js', function(){
                //             DellCOC.app.loadQuiz();
                //             DellCOC.utils.checkDevAssetPath();
                //         });

                //     }
                // });

                DellCOC.app.initVideo();
            }



            window.addEventListener('scroll', this.scrollEventHandler);
            this.scrollEventHandler();


            window.addEventListener('scroll', this.scrollResizeCloneHeader);
            this.scrollResizeCloneHeader();

            window.addEventListener('resize', this.resizeEventHandler);
            this.resizeEventHandler();



            setTimeout(function () {
                DellCOC.app.bindEvents();
            }, 1000);

    	},

        loadContent: function (result) {
            $("#content-container").html(result);
            var  that = this;


            //load main nav onto sections
            $.ajax({
                url: that.assestsDir + "/html/main-nav.html",
                success: function(result){
                    $('.main-nav-container').html(result);

                    DellCOC.app.initVideo();

                    $.getScript(that.assestsDir + '/js/main.js', function(){
                        DellCOC.app.loadQuiz();
                    });

                    setTimeout(function () {
                        DellCOC.utils.checkDevAssetPath();
                        
                    },1000);
                }
            });


        },

        loadQuiz: function () {
            var  that = this;
            // ajax modal
            if($('.dell-coc.category-page').length > 0){
                $.ajax({url: that.assestsDir + "/html/modal.html", success: function(result){
                    $(".modal-content").html(result);


                    console.log("get quiz.js")
                    setTimeout(function () {
                        $.getScript(that.assestsDir + '/js/quiz.js', function(e){
                            DellCOC.quiz.bindEvents();
                        });

                    },1000);

                    function success (){
                        window.alert('loaded page1script4');
                    }

                }});
            }
        },


        addMobileArticleNav: function () {
            $('#section-main-nav').addClass('mobile-article-nav');
            if($(window).width() < 768){
                $(window).scrollTop(0);
            }
            
        },

        removeMobileArticleNav: function () {
            $('#section-main-nav').removeClass('mobile-article-nav');
            if($(window).width() < 768){
                $(window).scrollTop(0);
            }
        },


        articleLoaded: function () {
            console.log('articleLoaded');

            DellCOC.utils.checkDevAssetPath();

            setTimeout(function () {
                console.log('articleLoaded setTimeout');
                if($('.sub-nav-content').hasClass('slick-slider') === false){
                    $('.sub-nav-content').slick({
                        infinite: false,
                        slidesToShow: 4,
                        slidesToScroll: 4
                    });
                    $('.sub-nav-content a').each(function (i) {
                        // console.log(i);
                        if($(this).hasClass('router-link-active') === true){
                            // console.log("found : "+ i);
                            var si = $(this).parent().data('slick-index');
                            $('.sub-nav-content').slick('slickGoTo', si, true);
                        }
                    });

                    $('.slick-slider a').on('click', function(e){
                        e.preventDefault();
                        var windowPos = $(window).scrollTop();
                        if (windowPos > 10) {
                            $('html, body').animate({scrollTop: 180});
                        }
                        
                    });
                }
            },200);




            // resources menu link
            $('.link-menu-items.link-resources').on('click', function(e){
                console.log(e);
                var style = String($(this).find('.resource-links').attr('style'));

                if(style && style.indexOf('block') > -1){
                    $(this).find('.resource-links').fadeOut('fast');
                }else{
                    // var pos = $(this).position();
                    // console.log(pos);
                    $(this).find('.resource-links').fadeIn('fast');

                    e.preventDefault();
                }
            });


            $(".main-content .cta-qa").on("click", function (e) {
                e.preventDefault();
                DellCOC.quiz.modal(currentCategory);
              });


            // add footer with
            setTimeout(function () {
                if($('.main-content .footer').length < 1 ){
                    $('.main-content').append(footerContent);
                }
            },500);


            // this.scrollEventHandler();
            DellCOC.app.loadAccordion();
        },

        subNavPosition: function () {
             var slideIndex = $(this).index();
            $('.sub-nav-content').slick('slickGoTo', slideIndex, true);
        },

    	bindEvents: function () {
            console.log("bind events");
            var current = window.location.href;

            // Grid buttons
            $(".grid-switch").on("click", function (e) {
                e.preventDefault();
                console.log('grid-switch');
                $(".slider-container").toggleClass("show");
            });

            $('#section-start-grid .logo-container').on('click', function () {
                $(".slider-container").removeClass("show");
                DellCOC.app.player.play();
            });

            //hamburger nav
            $('.btn-burger').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('open');
                $('#main-nav').toggleClass('sliding');
                $('#main-nav').removeClass('sliding-lang');
                if($('#main-nav').hasClass('sliding')) {
                    $('html').css('overflow', 'hidden');
                } else {
                    $('html').css('overflow', 'visible');
                }
            });

            
            $('.lang-tools a').on('click', function(e){
                e.preventDefault();
                $('#main-nav').addClass('sliding-lang');
            })
            $('.btn-close-lang').on('click', function(e){
                e.preventDefault();
                $('#main-nav').removeClass('sliding-lang');
            })


            //add active class to main nav
            var pgurl = location.href.split("#")[0];
            console.log('hey gurl hey ' + pgurl);
            $("a.btn-main-nav").each(function(){
                var $this = $(this);
                if($this.prop("href").split("#")[0] == pgurl) {
                    $this.addClass("active");
                } else {
                    $this.removeClass("active");
                }
            });
    	},

        showMainNav: function () {
          // $('#clone-container').fadeIn(400);
          $('#section-main-nav').delay(200).fadeIn();
        },


        resizeEventHandler: function () {
            var setAspectRatio = 16/9;
            var va_width =  $(".bc-player-container").width();
            var va_height =  $(".bc-player-container").height();
            var va_aspectRatio = va_width/va_height;
            // console.log(setAspectRatio);
            // console.log(va_aspectRatio);

            // console.log(va_width);
            // console.log(va_height);

            // console.log("vid w:" + va_height * setAspectRatio);

            if(va_aspectRatio < setAspectRatio){
                $("#bc-player video").css({"height":"100%"});
                $("#bc-player video").css({"width":($("#bc-player video").height())*setAspectRatio});

            }else{
                setAspectRatio = 9/16;

                $("#bc-player video").css({"width":"100%"});
                $("#bc-player video").css({"height":$("#bc-player video").width()*setAspectRatio});
            }

            $("#bc-player video").css({"top":(va_height - $("#bc-player video").height())/2});

            $("#bc-player video").css({"left":(va_width - $("#bc-player video").width())/2});



            // Logo Container Image
            if($(window).width() >= 0 && $(window).width() < 768){
                $('.logo-container img').attr("src",DellCOC.app.assestsDir + "/images/logo-dell-tech-blue.png");
            }
            else{
                // console.log('gt than 768');
                $('.container-fluid .logo-container img').attr("src",DellCOC.app.assestsDir + "/images/logo-dell-tech-white.png");
                // console.log($('.container-fluid:not(.white-background) .logo-container img'));
                $('.container-fluid.white-background .logo-container img').attr("src",DellCOC.app.assestsDir + "/images/logo-dell-tech-blue.png");
            }

            if($(window).width() < 980){
                $('.circle').height($('.circle').width());
            }else{
                $('.circle').attr('style', '');
            }




            DellCOC.app.scrollEventHandler();

        },

        scrollEventHandler: function (){
            // var that = this;
            var windowPos = $(window).scrollTop();
            // console.log('window position: '+ windowPos);


            // DellCOC.app.scrollResizeCloneHeader();


            var auxMenu = $('.social-and-links-wrapper');
            var menuPos = auxMenu.offset();


            var fullHeight = $('.section-heading-container-inner').height() + $('.description-content').height() + $('.social-and-links-wrapper').height() - 63;
            // console.log('and the height is ' + fullHeight);
            // sets class on floating social links menu
            if (windowPos >= fullHeight) {
                if($('.social-and-links').hasClass('to-the-left') === false){
                    $('.social-and-links').addClass('to-the-left');
                    $('.social-and-links').css('display', 'none');
                    $('.social-and-links').fadeIn();
                    //$('.social-and-links-wrapper').fadeIn().css('height', '10px');
                }

            } else {
                $('.social-and-links').removeClass('to-the-left');
                //$('.social-and-links-wrapper').css('height', '78px');
            }

        },

        scrollResizeCloneHeader: function () {
            var windowPos = $(window).scrollTop();
            // console.log($('body').height());
            var h = $('.sub-nav-wrapper').height();

            if (windowPos > 180){
                $('.main-content').addClass('fixed');
            }else{
                $('.main-content').removeClass('fixed');
                $('#clone-container').css('z-index', '-1');
            }


            // controls
            if (windowPos >= 100){

                if($('.dell-coc').hasClass('header-fixed') === false){
                    $('.dell-coc').addClass('header-fixed');
                    // section-level-one

                    if($('.section-level-one').css('opacity') == 0){

                    }
                    $( ".section-level-one" ).stop().show().css('display', 'inline-block').animate({
                        opacity: 1
                    }, 500, function() {
                        // Animation complete.
                    });
                }
            }else{

                if($('.dell-coc').hasClass('header-fixed') === true){
                    $('.dell-coc').removeClass('header-fixed');
                    // $('.section-level-one').fadeOut();

                    $( ".section-level-one" ).stop().animate({
                        opacity: 0
                    }, 500, function() {
                        // Animation complete.
                        $(this).hide();

                    });
                }
                
            }

            var offset = $('.child').offset();
            var offset_top = offset.top;
            var myHeight, myBGSize, windowPos_value = 180, windowPos_value_offset = -22;


            if($('.article').hasClass('single-page')){
                windowPos_value = 278;
                windowPos_value_offset = -215;
            }


            if (windowPos <= 0 || windowPos === 'undefined'){
                windowPos = 0;
            }

            if (windowPos <= 0 || windowPos === undefined){
                myHeight = offset_top - windowPos;
            }else if (windowPos > 0 && windowPos <= windowPos_value){
                myHeight = offset_top - windowPos;

            }else{
                myHeight = windowPos_value + windowPos_value_offset;
            }


            if($(window).width() >= 768){
                // console.log("mh: " + myHeight);
                $('.section-heading-container-background').css('height', myHeight);
            }else{
                $('.section-heading-container-background').css('height', '100%');
            }


        },

        initVideo: function () {
            var interval;

            $.getScript('//players.brightcove.net/694940018001/BJ7t7Rlq_default/index.min.js', function(){
                DellCOC.app.resizeEventHandler();

                // console.log(($("#bc-player").length));
                if($("#bc-player").length > 0){

                    videojs("bc-player").ready(function() { // Brightcove player ready event
                        DellCOC.app.player = this;

                        $("#bc-player video").bind('play', function (e) {
                            // do something
                            console.log("play");

                            // clear interval
                            clearInterval(interval);

                            // toggle visiblilty
                            $('#bc-player, .bc-player-container .modal-close-container').fadeIn(800);
                            DellCOC.app.resizeEventHandler();

                            // $('#clone-container').fadeIn();
                            $(".router-view-container, .footer, .category-page .logo-bread-container, .category-page .btn-burger").fadeOut(function(){

                            });

                        });

                        $("#bc-player video").bind('seeking', function (e) {
                            // do something
                            console.log("seeking");

                            // clear interval
                            clearInterval(interval);
                        });

                        $("#bc-player video").bind('pause', function (e) {
                            console.log(e);
                            // do something
                            console.log("pause");

                            // set interval
                            clearInterval(interval);
                            interval = setInterval(intervalFunc, 200);

                        });


                    });

                }



            });

            function intervalFunc () {
                // toggle visiblilty
                $('#bc-player, .bc-player-container .modal-close-container').fadeOut();
                // $('#clone-container').fadeOut();
                $(".router-view-container, .footer, .logo-bread-container, .btn-burger").fadeIn();
            }
        },

        loadVideo: function (bcid){
            console.log("bcid: " + bcid);
            if($('.no-touch').length > 0){
                $('#bc-player').attr('playsinline', 'true');
            }

            var myVideo = document.getElementById("bc-player-video");
            // myVideo.play();

            DellCOC.app.player.catalog.getVideo(bcid, function(error, video) {  // Use the Brightcove API to look up the video ID and get the video
                // console.log(error);
                DellCOC.app.player.catalog.load(video);     // Load the video into the player
            });


        },

        loadAccordion: function () {
        //switching h. w. w. body to accordion on mobile

            var windowWidth = $(window);

            $('.accordion-trigger').on('click',function(e) {
                e.preventDefault();
                if (windowWidth.width() <= 767) {
                    $('.accordion-wrapper').addClass('activated');
                $(this).toggleClass('on');
                var $this = $(this);
                if ($this.next().hasClass('open')) {
                    $this.next().removeClass('open');
                    $this.next().slideUp(350);
                } else {
                    $this.parent().parent().find('.accordion-item .accordion-content').removeClass('open');
                    $this.parent().parent().find('.accordion-item .accordion-content').slideUp(350);
                    $this.next().toggleClass('open');
                    $this.next().slideToggle(350);
                }
                $('html, body').animate({
                    //scrollTop: $(".social-and-links.to-the-left").offset().top
                }, 200);

                } else {
                    $('.accordion-wrapper').removeClass('activated');
                };
            });

            $(window).on('resize', function () {
                if (window.innerWidth <= 767) {
                    $('.accordion-wrapper').addClass("activated");
                }
                if (window.innerWidth >= 768) {
                    $('.accordion-wrapper').removeClass('activated');
                }
            });
            window.addEventListener('resize', DellCOC.app.accordionResizeHandler);
            DellCOC.app.accordionResizeHandler();

        },

        accordionResizeHandler : function () {
             if (window.innerWidth > 767) {
                $('.accordion-wrapper').removeClass('activated');
              }
              if (window.innerWidth < 768) {
                $('.accordion-wrapper').addClass('activated');
              }
        }

    };


    /* Utilities
	========================================================================== */
	DellCOC.utils = {

		init: function() {

			DellCOC.utils.checkDevAssetPath();

		},

		/**
        Update assests path
        */
        checkDevAssetPath: function () {
            console.log("checkDevAssetPath");
            var AEMPath = '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/';
            if (window.location.href.indexOf("localhost") > -1
                || window.location.href.indexOf("thisisarebellion.com") > -1
                || window.location.href.indexOf("local") > -1
                )
            {
                // console.log('changing image paths');
                jQuery('img').each(function () {
                    // console.log($(this).attr('src'));
                    if($(this).attr('src')){
                        jQuery(this).attr('src', jQuery(this).attr('src').replace(AEMPath, '../'));
                    }

                });
                jQuery('a[href$=".pdf"]').each(function () {
                    jQuery(this).attr('href', jQuery(this).attr('href').replace(AEMPath, '/'));
                });

            }
        }


	};


    DellCOC.quiz = {
        init: function () {


        },

        bindEvents: function () {
            $('.modal .close').on('click', function () {
                $('.modal').fadeOut();
                $('html,body').css('overflow', 'inherit'); //bring back body scroll when modal is removed
                // $('.uw.delltechnologies').removeClass("lock-scroll");
                setTimeout(function () {
                    quiz.reset();
                }, 500);

            });
        },

        modal: function(i) {
            console.log(i);

            quiz.quiz_name = i;
            quiz.reset();

            $('.modal').fadeIn();
            if($('.modal').css('display', 'block')){
                $('html,body').css('overflow', 'hidden'); //keeps body from scrolling when modal is visible
                // $('.uw.delltechnologies').addClass("lock-scroll");
            }
            // var quizSection = $('.modal-close-container').siblings(".quiz-content").find(".integrity").val();
            // console.log('what is the final ' + quizSection);

            DellCOC.app.resizeEventHandler();
        }
    };



	/* Init functions
	========================================================================== */
	DellCOC.startup = {

		init: function() {
			DellCOC.utils.init();
			DellCOC.app.init();
            DellCOC.quiz.init();
		}
	};

}(window.DellCOC = window.DellCOC || {}));

jQuery(document).ready(window.DellCOC.startup.init) // Ready event



var ns = DellCOC;
