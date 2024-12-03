let navigator = "card";
let language = "EN";

$('section[language="EN"]').hide();
$('section[language="TH"]').hide();

$('section[language="EN"][id="card"]').show();
$('section[id="about"]').hide();
$('section[id="portfolio"]').hide();

$('div[id="switch-mode"]').on('click', e => {
    $('body[id="body"]').toggleClass('dark');
    $('div[id="nav"]').toggleClass('dark');
    $('img[id="profile"]').toggleClass('dark');
    $('span[id="darkToggleText"]').toggleClass('dark');

    if ($('#body').hasClass('dark')) {
        $('i[id="theme-icon"]').removeClass('fa-sun').addClass('fa-moon');
    } else {
        $('i[id="theme-icon"]').removeClass('fa-moon').addClass('fa-sun');
    }
})

$('div[id="card"]').on('click', e => {
    $('section').hide();
    $('section[language="' + language + '"][id="card"]').show();

    navigator = "card";
})

$('div[id="about"]').on('click', e => {
    $('section').hide();
    $('section[language="' + language + '"][id="about"]').show();

    navigator = "about";
})

$('div[id="portfolio"]').on('click', e => {
    $('section').hide();
    $('section[language="' + language + '"][id="portfolio"]').show();

    navigator = "portfolio";
})

$('#language').on('change', e => {
    let languageSet = $('#language').val();

    language = languageSet;

    $('section').hide();
    $('section[language="'+ language +'"][id="'+ navigator +'"]').show();
})

$('span[id="folioCategory"]').on('click', e => {
    let folioCategory = e.target.textContent;

    $('div[type="folio"]').hide();

    folioCategory = folioCategory === "ทั้งหมด" ? "All" : folioCategory;
    folioCategory = folioCategory === "เว็บไซต์" ? "Website" : folioCategory;
    folioCategory = folioCategory === "เพลง" ? "Music" : folioCategory;

    if (folioCategory === "All") {
        $('div[type="folio"]').show();
    } else {
        $('div[folioCategory="'+ folioCategory +'"]').show();
    }
})