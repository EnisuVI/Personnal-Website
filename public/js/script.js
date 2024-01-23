$(document).ready(function() {

    console.log('ready');

    // Changement de theme
    let btn = $('.btn');
    let btnNight = $('.btnNight');
    let btnDay = $('.btnDay');

    if (localStorage.getItem('theme') == 'night') {
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
        $(btnNight).show();
        $(btnDay).hide();

    } else {
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
        $(btnNight).hide();
        $(btnDay).show();
    };

    $(btn).click(function() {


        if (localStorage.getItem('theme') == 'day') {
            document.styleSheets[0].disabled = true;
            document.styleSheets[1].disabled = false;
            localStorage.setItem('theme', 'night');
            $(btnNight).show();
            $(btnDay).hide();
        } else {
            document.styleSheets[0].disabled = false;
            document.styleSheets[1].disabled = true;
            localStorage.setItem('theme', 'day');
            $(btnNight).hide();
            $(btnDay).show();
        }

    });
    

})
