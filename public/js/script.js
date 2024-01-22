$(document).ready(function() {

    console.log('ready');

    // Changement de theme
    let btn = $('.btn');

    if (localStorage.getItem('theme') == 'night') {
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
    } else {
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
    };

    $(btn).click(function() {


        if (localStorage.getItem('theme') == 'day') {
            document.styleSheets[0].disabled = true;
            document.styleSheets[1].disabled = false;
            localStorage.setItem('theme', 'night');
        } else {
            document.styleSheets[0].disabled = false;
            document.styleSheets[1].disabled = true;
            localStorage.setItem('theme', 'day');
        }

    });


})

