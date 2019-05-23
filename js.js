

function showtime()
{ 
  //if (!document.all&&!document.getElementById) 
  //  return 
  //thelement=document.getElementById ? document.getElementById("tick2") : document.all.tick2;
  //var Digital=new Date(); 
  //var hours=Digital.getHours();
  //var minutes=Digital.getMinutes();
  //var seconds=Digital.getSeconds(); 
  //var dn="PM"; 
  //if (hours<12) 
  //  dn="AM" 
  //if (hours>12) 
  //  hours=hours-12; 
  //if (hours==0) 
  //  hours=12; 
  //if (minutes<=9) 
  //  minutes="0"+minutes; 
  //if (seconds<=9) 
  //  seconds="0"+seconds; 
  //var ctime=hours + ":" + minutes + ":" + seconds + " " +dn 
  //thelement.innerHTML="<b style='font-size:30;color:#A8CCDC;'>"+ctime+"</b>";
  //setTimeout("showtime()",1000);
}

function showday()
{
	
  if (!document.all&&!document.getElementById)
  return
	thelement = document.getElementById ? document.getElementById("day") : document.all.day;
	var ngay;
	var d = new Date();
	var dd = d.getDate() ;
	var mm = d.getMonth() +1;
	var yy = d.getFullYear();
	
	day = d.getDay();
	switch(day)
	{
		case 0:
			ngay = "Chủ Nhật";
			break;
		case 1:
			ngay = "Thứ Hai";
			break;
		case 2:
		ngay = "Thứ Ba"
			break;

		case 3:
		ngay = "Thứ Tư"
			break;

		case 4:
		ngay = "Thứ Năm"
			break;

		case 5:
		ngay = "Thứ Sáu"
			break;

		case 6:
		ngay = "Thứ Bảy"
			break;

				default:
		ngay = "Thứ";

	}
	var thungay = ngay + " " + dd +"/" + mm + "/" + yy;
	thelement.innerHTML = "<b style='font-size:30;color:#A8CCDC;'>"+thungay+"</b>";
	setTimeout(showday(),1000);
}

$(function () {
    var vid = document.getElementById("bgvid");
    //var pauseButton = document.querySelector("#polina button");

    var pause = $('.pause');
    var play = $('.play');

    var mute = $('.mute');
    var unmute = $('.unmute');

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        vid.removeAttribute("autoplay");
        vid.pause();
       // pauseButton.innerHTML = "Paused";
        play.hide();

        
    }

    function vidFade() {
        vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function () {
        // only functional if "loop" is removed 
        vid.pause();
        // to capture IE10
        vidFade();
    });


    //pauseButton.addEventListener("click", function () {
    //    vid.classList.toggle("stopfade");
    //    if (vid.paused) {
    //        vid.play();
    //        pauseButton.innerHTML = "Pause";
    //    } else {
    //        vid.pause();
    //        pauseButton.innerHTML = "Paused";
    //    }
    //})

    $('.play-pause').on('click', function () {
        vid.classList.toggle("stopfade");
        if (vid.paused) {
            vid.play();
            play.hide();
            pause.show();
        } else {
            vid.pause();
            play.show();
            pause.hide();
        }
    });


    mute.hide();
    $('.mute-unmute').on('click', function () {
        vid.classList.toggle("stopfade");
        if (vid.muted) {
            vid.muted = false;
            mute.show();
            unmute.hide();
        } else {
            vid.muted = true
            unmute.show();
            mute.hide();
        }
    });






    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
          ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {

                  $("#mySidenav").children().removeClass("current-session");
                  var id_target = target.attr('id');
                  var current_section_menu = $("#mySidenav " + "a[href='#" + id_target + "']");
                  //add css current section selector
                  current_section_menu.addClass('current-session');

                  // Only prevent default if animation is actually gonna happen
                  event.preventDefault();
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000, function () {
                      // Callback after animation
                      // Must change focus!
                      var $target = $(target);
                      $target.focus();
                      if ($target.is(":focus")) { // Checking if the target was focused
                          return false;
                      } else {
                          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                          $target.focus(); // Set focus again
                      };
                  });
              }
          }
      });

    $("section").mouseenter(function () {
        var id = $(this).attr('id');
        var current_section_menu = $("#mySidenav " + "a[href='#" + id + "']");
        $("#mySidenav").children().removeClass("current-session");
        current_section_menu.addClass('current-session');
    });

    /*Infinyty*/
    //var $elie = $("#infinity"), degree = 0, timer;
    //rotate();
    //function rotate() {

    //    $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
    //    $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
    //    timer = setTimeout(function () {
    //        ++degree; rotate();
    //    }, 5);
    //}

    //$("input").toggle(function () {
    //    clearTimeout(timer);
    //}, function () {
    //    rotate();
    //});

    //Text typing
    new TypingText(document.getElementById("polina",1000));
    TypingText.runAll();

});



