$(document).ready(function(){
    //SLİDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        navText:['PREV','NEXT'],
        responsive:{
            0:{
                nav:false,

            },
            768:{
                nav: true,
            }
           
        }
    });
 // PROJECT SLİDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:1000,
        margin:24,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                margin:0,
                },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
            }
           
        }
    });

    $('#review-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1,
        dots:true,
        smartSpeed:500,
        autoplay:true,
        responsive:{
            0:{
                nav:false,

            },
            768:{
                nav: false,
            }
           
        }
    });
});

let valueDisplays = document.querySelectorAll('.num');
let interval=4000;

valueDisplays.forEach((valueDisplays) => {
    let startValue=0;
    let endValue = parseInt(valueDisplays.getAttribute("data-vala"));

    console.log(endValue)
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue+=1
        valueDisplays.textContent=startValue;

        if(startValue===endValue){
            if(endValue<100){
                valueDisplays.textContent=startValue+'K+'
            }
            clearInterval(counter);
        }
    }, duration);
});