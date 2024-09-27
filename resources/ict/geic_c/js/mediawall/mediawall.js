//공지사항
$(function () {
    $('.notice_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        slidesToShow: 4,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});


//프로모션
var weathers = new Array('thunderstorm with light rain', 'thunderstorm with rain', 'thunderstorm with heavy rain', 'light thunderstorm', 'thunderstorm', 'heavy thunderstorm', 'ragged thunderstorm', 'thunderstorm with light drizzle', 'thunderstorm with drizzle', 'thunderstorm with heavy drizzle', 'light intensity drizzle', 'drizzle', 'heavy intensity drizzle', 'light intensity drizzle rain', 'drizzle rain', 'heavy intensity drizzle rain', 'shower rain and drizzle', 'heavy shower rain and drizzle', 'shower drizzle', 'light rain', 'moderate rain', 'heavy intensity rain', 'very heavy rain', 'extreme rain', 'freezing rain', 'light intensity shower rain', 'shower rain', 'heavy intensity shower rain', 'ragged shower rain', 'light snow', 'snow', 'heavy snow', 'sleet', 'light shower sleet', 'shower sleet', 'light rain and snow', 'rain and snow', 'light shower snow', 'shower snow', 'heavy shower snow', 'mist', 'smoke', 'haze', 'sand/dust whirls', 'fog', 'sand', 'dust', 'volcanic ash', 'squalls', 'tornado', 'clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds');

var weatherskor = new Array('뇌우', '뇌우', '뇌우', '뇌우', '뇌우', '뇌우', '뇌우', '뇌우', '뇌우', '뇌우', '이슬비', '이슬비', '이슬비', '이슬비', '이슬비', '이슬비', '이슬비', '이슬비', '비 약간', '적당한 비', '비 많이', '비 많이', '폭우', '우박', '소나기 약간', '소나기', '폭우 수준의 소나기', '오락가락한 소나기', '눈 약간', '눈', '폭설', '진눈째비', '약간의 진눈깨비', '갑자기 진눈깨비', '약간의 비와 눈', '비와 눈', '갑자기 약간 눈', '갑자기 눈', '폭설', '안개', '연기', '안개', '모래/먼지 소용돌이', '모래', '모래', '먼지', '화산재', '토네이도', '토네이도', '맑음', '구름 약간', '약간 흐림', '흐림 구름', '많이 흐림');
var i;

$.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=35.868464&lon=128.6016669&appid=3bcf7eca7fc5d5df252135e43043a0a7',
    dataType: "json",
    type: "GET",
    async: "false",
    success: function (data) {
        console.log(data);
        $('.weather-box span.feels_like').html(Math.floor((data.main.feels_like - 273.15) * 10) / 10 + '°');
        $('.weather-box .weather_icon').addClass('w' + data.weather[0].icon);
        $('.weather-box span.temp').html(Math.floor((data.main.temp - 273.15) * 10) / 10 + '°');

        for (i = 0; i < weathers.length; i++) {
            if (weathers[i] == data.weather[0].description) {
                var kor = weatherskor[i];
            }
        }
        $('.weather-box span.description').html(kor);
    }
});

$(function () {
    var now = new Date();

    let y = now.getFullYear();
    let mo = now.getMonth() + 1;
    let d = now.getDate();
    let dow = now.getDay();
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var today = new Date().getDay();
    var todayLabel = week[today];

    $('#years').text(y);
    $('#months').text(mo);
    $('#days').text(d);
    $('#dayofweeks').text(todayLabel);
});

var session_max_time = '20';
var session_timer = setInterval("checkTime()", 1000);

$(document).ready(function () {
    $(this).mousemove(function (e) {
        sessionExtension();
    });

    $('.remainTimeWrap').on('mouseenter', function () {
        $('.remainTimeWrap').addClass('on');
    });

    $('.remainTimeWrap').on('mouseleave', function () {
        $('.remainTimeWrap').removeClass('on');
    });
});

function sessionExtension() {
    session_max_time = '20';
    clearInterval(session_timer);
    session_timer = setInterval("checkTime()", 1000);
}

function checkTime() {
    var session_minute = 0;
    var session_second = 0;
    if (session_max_time % 60 == 0) {
        session_minute = session_max_time / 60;
        session_second = "0" + 0;
    } else {
        session_minute = session_max_time / 60;
        session_second = session_max_time % 60;
    }

    $("#session_minute").text(Math.floor(session_minute));
    if (session_second.toString().length <= 1) {
        $("#session_second").text("0" + session_second);
    } else {
        $("#session_second").text(session_second);
    }

    session_max_time--;

    if (session_max_time == -1) {
        //location.href='/hm/booksX/infowelcome.do';
    } else {}
}

//신착인기도서
$(function () {
    var __width = $(window).width();
    $('.newbook_main').on('init', function (event, slick) {

    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.newbook_thumbnails',
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000

    });


    $('.newbook_thumbnails').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.newbook_main',
        variableWidth: false,
        swipeToSlide: true,
        adaptiveHeight: true,

    });
});

$(function () {
    var __width = $(window).width();
    $('.newbook_main02').on('init', function (event, slick) {

    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.newbook_thumbnails02',
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000

    });


    $('.newbook_thumbnails02').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.newbook_main02',
        variableWidth: false,
        swipeToSlide: true,
        adaptiveHeight: true,

    });
});


//쉬는날
$(function () {

    $('.memberCountCon').slick({
        infinite: true,
        slidesToShow: 1,
        focusOnSelect: true,
        autoplay: true,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        variableWidth: false,
        vertical: true,
        lazyLoad: 'progressive',
        speed: 2000

    });

});

$(function () {

    $('.memberCountCon1').slick({
        infinite: true,
        slidesToShow: 1,
        focusOnSelect: true,
        autoplay: true,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        variableWidth: false,
        vertical: true,
        lazyLoad: 'progressive',
        speed: 2000

    });

});

$(function () {

    $('.memberCountCon2').slick({
        infinite: true,
        slidesToShow: 1,
        focusOnSelect: true,
        autoplay: true,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        variableWidth: false,
        vertical: true,
        lazyLoad: 'progressive',
        speed: 2000

    });

});

$(function () {

    $('.memberCountCon3').slick({
        infinite: true,
        slidesToShow: 1,
        focusOnSelect: true,
        autoplay: true,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        variableWidth: false,
        vertical: true,
        lazyLoad: 'progressive',
        speed: 2000

    });

});
