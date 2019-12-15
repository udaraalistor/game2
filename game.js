
let interval;
$('.start').click(function () {
    $('#btn').css('display', 'none');
    $('.start').css('display', 'none');
    f1();
    f2();
    waraudio.loop=true;
    waraudio.play();

    interval = setInterval(function () {
        // if (f3(img, $(".ene"))){
        //     phv.setValue(d-10);
        //     // gameover();
        // }

        console.log("adkjhga");

        if (f3(img,gg1)){
            // d-=10;
            // $('.hpbarvalue').text(d);

            // gameover();
            phv.setValue(d-=10);
        }

        if (f3(img,gg2)){
            // d-=10;
            // $('.hpbarvalue').text(d);
            // gameover();
            phv.setValue(d-=10);
        }

        if (f3(img,gg3)){
            // d-=10;
            // $('.hpbarvalue').text(d);
            // gameover();
            phv.setValue(d-=10);
        }

        if (f3(img,gg4)){
            // d-=10;
            // $('.hpbarvalue').text(d);
            // gameover();
            phv.setValue(d-=10);
        }

        if (f3(img,gg5)){
            // d-=10;
            // $('.hpbarvalue').text(d);
            // gameover();
            phv.setValue(d-=10);
        }

        if (f3(img,gg6)){
            // d-=10;
            // $('.hpbarvalue').text(d);
            // gameover();
            phv.setValue(d-=10);
        }




    },700);

});

function gameover() {
    // $('#div2').stop(true);
    // $('#div1').stop(true);
    // $('.c').stop(true);
    // $('#btn').css('display', 'inline-block');
    // $('.again').css('display', 'inline-block');

    clearInterval(interval);
}

var gg1= $('#gg1');
var gg2= $('#gg2');
var gg3= $('#gg3');
var gg4= $('#gg4');
var gg5= $('#gg5');
var gg6= $('#gg6');

var img= $('.img');

var imgbul=$('#imgbul');





function f1() {
    $('#div2').css('left', '100%');
    $('#div2').animate({left: '-=6400px'}, 17000, 'linear', f1);

};

function f2() {
    $('.c').css('bottom', '10px');
    $('.c').animate({bottom: '+=400px'}, 8000, 'swing');
    $('.c').animate({bottom: '-=200px'}, 5000, 'swing', f2);

};

function f3($div1, $div2) {
    var k1 = $div1.offset().left;
    var l1 = $div1.offset().top;
    var m1 = $div1.outerHeight(true);
    var n1 = $div1.outerWidth(true);
    var o1 = l1 + m1;
    var p1 = k1 + n1;

    var k2 = $div2.offset().left;
    var l2 = $div2.offset().top;
    var m2 = $div2.outerHeight(true);
    var n2 = $div2.outerWidth(true);
    var o2 = l2 + m2;
    var p2 = k2 + n2;

    if (o1 < l2 || l1 > o2 || p1 < k2 || k1 > p2) return false;
    return true;
}


$('.again').click(function () {
    location.reload();

});


// +HERO==============================================================================================


var step = document.querySelector('#div1');


var one = 100;

var jump = document.getElementById('.step');

var jumpleft = 0;

var two = 200;

var three = 600;


window.addEventListener('load', () => {
    step.style.position = 'absolute';
    step.style.left = 0;
    step.style.top = 0;


});

window.addEventListener('keyup', (e) => {

    switch (e.key) {
        case 'ArrowLeft':
            step.style.left = parseInt(step.style.left) - one + 'px';
            $('#div1').css('transform', 'rotateY(-180deg)');

            // $('#div1').css(function () {
            //     'transform', 'rotateY(-180deg)'
            // });

            break;
        case 'ArrowRight':
            step.style.left = parseInt(step.style.left) + one + 'px';
            $('#div1').css('transform', 'rotateY(-360deg)');
            break;
        // case 'ArrowUp':
        //     step.style.top= parseInt(step.style.top) - one + 'px';
        //     break;
        // case 'ArrowDown':
        //     step.style.top= parseInt(step.style.top) + one + 'px';
        //     break;


    }


});



$(window).keypress(function (e) {
    if (e.which === 32) {

        step.style.top = parseInt(step.style.top) - two + 'px';
        setTimeout(down, 700);
    }

});

function down() {
    step.style.top = parseInt(step.style.top) + two + 'px';
}



// +BULLET=====================================================================================


let bullet = document.querySelector('#bullet');
var audio= new Audio('audio/aud3.mp3');
var waraudio= new Audio('audio/war2.mp3');

var score=0;




$(window).on('click', function () {
    $('#bullet').css({
        'display': 'block',
        'transition': 'left .5s',
        'left': 1500,
    });
    setTimeout(bull, 500);
    audio.play();


    let intervals= setInterval(function () {

        if (f3(imgbul,gg1)){
            $('#gg1').css('display','none');
            $('#bullet').css('display','none');
            score+=10;
            $('.scorevalue').text(score);
            gameover1();
        }

        if (f3(imgbul,gg2)){
            $('#gg2').css('display','none');
            $('#bullet').css('display','none');
            score+=10;
            $('.scorevalue').text(score);
            gameover1();
        }

        if (f3(imgbul,gg3)){
            $('#gg1').css('display','none');
            $('#bullet').css('display','none');
            score+=10;
            $('.scorevalue').text(score);
            gameover1();
        }

        if (f3(imgbul,gg4)){
            $('#gg1').css('display','none');
            $('#bullet').css('display','none');
            score+=10;
            $('.scorevalue').text(score);
            gameover1();
        }

        if (f3(imgbul,gg5)){
            $('#gg1').css('display','none');
            $('#bullet').css('display','none');
            score+=10;
            $('.scorevalue').text(score);
            gameover1();
        }

        if (f3(imgbul,gg6)){
            $('#gg1').css('display','none');
            $('#bullet').css('display','none');
            score+=10;
            $('.scorevalue').text(score);
            gameover1();
        }

             function gameover1() {
                 clearInterval(intervals);


             }
    });
});




function bull() {
    $('#bullet').css({
        'left': '200px',
        'transition': 'none',
        'display': 'none',
    });
    setTimeout(hello, 100);
}

function hello() {
    $('#bullet').css({
        'display': 'block',
        'background':'transparent'
    });
}

// HEALTH BAR===========================================================================

class hpbars {
    constructor(element , initialValue=0){
        this.valueElem= element.querySelector('.hpbarvalue');
        this.fillElem= element.querySelector('.fill');

        this.setValue(initialValue);
        // console.log(valueElem);
        // console.log(fillElem);
    }

    setValue(newValue){
        if (newValue < 0){
            newValue=0;
        }
        if (newValue > 100){
            newValue=100;
        }

        this.value= newValue;
        this.update();

    }

    getValue(newValue){
        if (newValue < 0){
            newValue=0;
        }
        if (newValue > 100){
            newValue=100;
        }

        this.value= newValue;
        this.update();

    }

    update(){
        const pre=this.value + '%';
        this.fillElem.style.width= pre;
        this.valueElem.textContent= pre;
    }
}
var d= 100;
// var e=10;
const phv= new hpbars(document.querySelector('.hpbar'), d);

// phv.setValue(50);










