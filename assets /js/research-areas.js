//box animation when hover

$("#box01").on("mouseenter", ()=>{
    $("#box01 a").css("color", "white");
}).on("mouseleave",()=>{
    $("#box01 a").css("color", "black");
})

$("#box02").on("mouseenter", ()=>{
    $("#box02 a").css("color", "white");
}).on("mouseleave",()=>{
    $("#box02 a").css("color", "black");
})

$("#box03").on("mouseenter", ()=>{
    $("#box03 a").css("color", "white");
}).on("mouseleave",()=>{
    $("#box03 a").css("color", "black");
})



//when scroll down to research area, the background-color changes
var $target = $('body');
var $research = $('#research-areas');

$research.waypoint(function(direction){
    if (direction == 'down') {
        console.log('hello');
        $target.css('background-color', '#FF6E6E' );
        $('#research-areas h2').css('color', 'white')
    } else {
        console.log('leave');
        $target.css('background-color', '#F0EEEE' );
        $('#research-areas h2').css('color', '#9E2435')
    }
}, {offset: '23%'});


