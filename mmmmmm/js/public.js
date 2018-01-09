//footer二级菜单
$(".with .title").click(function(){
    $(this)
        .toggleClass("bgpb")
        .next()
        .slideToggle()
})


//返回顶部
$(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("#back-to-top").fadeIn(1000)
        }else{
            $("#back-to-top").fadeOut(1000)
        }
    });
$("#back-to-top").click(function(){
     $("body,html").animate({"scrollTop":"0"},2000)
 })





//汉堡包图标
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
    $('#hamburger-11').click(function(){
        if($('.fade').css("left")=="0px"){
            $('.fade').css({"left":"-100%"})
        }else{
            $('.fade').css({"left":"0px"})
        }
        })
});



//搜索
var search=document.getElementById("search");
console.log(search);

function searchShow(){
   console.log(search.style.display);
    
//    if(search.style.display=="block"){
//        search.style.display="none";
//        console.log(search.style.display);
//    }else{
//        search.style.display="block";
//        console.log(search.style.display);
//    }
}



//$(function() {
//    $("#searchShow").click(function() {
//        $(this).text($("#search").is(":hidden"));
//        $("#search").slideToggle();
//    });
//
//
//
//  $('#searchShow').click(function(){
//        if($('#search').css("top")=="0px"){
//            $('#search').css({"top":"-10%"})
//        }else{
//            $('#search').css({"top":"0px"})
//        }
//        })
//  });


