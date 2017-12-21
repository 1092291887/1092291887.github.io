var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation:{
        nextEl:'.swiper-button-next'
    },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }                                                                });



var img=document.querySelector('#music');
var music_off=document.querySelector('.music_off');
var gif=document.querySelector('.gif');
var audio=document.querySelector('audio');



//音乐
window.onload=function(){
    var flag=0;
    music_off.style.animation='run 3s linear 0s infinite';
    gif.style.display='block';
    audio.play();
img.onclick=function(){
    if(flag==1){
        music_off.style.animation='run 3s linear 0s infinite';
        gif.style.display='block';
        audio.play();
        flag=0;
    }else{
        music_off.style.animation='none';
        gif.style.display='none';
        audio.pause();
        flag=1;
    }
}
}


