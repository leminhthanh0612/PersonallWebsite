var images = ["images/pro1.jpg","images/pro2.jpg","images/pro3.jpg"];
var index = 0;
function show()
{
	var img = document.getElementById("img");
	img.src = images[index++];
	
	if(index >= images.length)
		index = 0;
		
	setTimeout("show()",5000);
}

function showtime()
{ 
  if (!document.all&&!document.getElementById) 
    return 
  thelement=document.getElementById ? document.getElementById("tick2") : document.all.tick2;
  var Digital=new Date(); 
  var hours=Digital.getHours();
  var minutes=Digital.getMinutes();
  var seconds=Digital.getSeconds(); 
  var dn="PM"; 
  if (hours<12) 
    dn="AM" 
  if (hours>12) 
    hours=hours-12; 
  if (hours==0) 
    hours=12; 
  if (minutes<=9) 
    minutes="0"+minutes; 
  if (seconds<=9) 
    seconds="0"+seconds; 
  var ctime=hours + ":" + minutes + ":" + seconds + " " +dn 
  thelement.innerHTML="<b style='font-size:30;color:#A8CCDC;'>"+ctime+"</b>";
  setTimeout("showtime()",1000);
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

});



