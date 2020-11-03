$(document).ready(function () {
    $(".technology-slider-wrapper").slick({
            fade: true,
            appendDots: $('.technology-group-wrapper')
        }
    );
});
$('.item-1').click(function (event) {
    $('.technology-slider-wrapper').slick('goTo', 0)
});
$('.item-2').click(function (event) {
    $('.technology-slider-wrapper').slick('goTo', 1)
});
$('.item-3').click(function (event) {
    $('.technology-slider-wrapper').slick('goTo', 2)
});
$('.item-4').click(function (event) {
    $('.technology-slider-wrapper').slick('goTo', 3)
});
$(document).ready(function () {
    $("#header-nav-list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
const headerBlock = document.getElementById('header');
const handleMenu = document.getElementById('header-nav-list');
const links = document.querySelectorAll('#header-nav a');
const contentNavFix = document.querySelectorAll('#content-nav-list>li');
const pages = document.getElementById('pages');
handleMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        links.forEach((el) => el.classList.remove('active-item-menu'));
        event.target.classList.add('active-item-menu');
        pages.classList.remove('active-burger');
        nav.classList.remove('active-burger');
        handleHamburger.classList.remove('active-burger');
    }
});
const nav = document.getElementById('header-nav');
const handleHamburger = document.getElementById('hamburger');

handleHamburger.addEventListener('click', () => {
    pages.classList.toggle('active-burger');
    nav.classList.toggle('active-burger');
    handleHamburger.classList.toggle('active-burger');
});

document.addEventListener("scroll", onscroll);

function onscroll() {
    const curPos = window.scrollY;
    const positionID = document.querySelectorAll('#pages>section,#pages>header', '#pages>main');

    positionID.forEach((el) => {
        if (el.offsetTop - 90 <= curPos && (el.offsetTop + el.offsetHeight - 90) > curPos) {
            if (el.getAttribute('id') !== 'header') {
                headerBlock.classList.add('header-active');
            } else {
                headerBlock.classList.remove('header-active')
            }
            links.forEach((a) => {
                a.classList.remove('active-item-menu');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active-item-menu');
                }
            });
            contentNavFix.forEach((li) => {
                li.classList.remove('content-nav-item-white');
                li.classList.remove('content-nav-item-red');
                if (el.getAttribute('id') === li.getAttribute('data-position').substring(1)) {
                    if (el.getAttribute('id') !== 'header' && el.getAttribute('id') !== 'content') {
                        li.classList.add('content-nav-item-red');
                    } else {
                        li.classList.add('content-nav-item-white');
                    }
                }
            });

        }
    })
}

const technologyItems = document.querySelectorAll(".technology-group-item");


$('.technology-slider-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    let nexstSlide = nextSlide;
    technologyItems.forEach(item => {
        item.classList.remove('technology-active');
        if (item.closest('.technology-group-item').getAttribute('data-item') == nexstSlide) {
            item.classList.add("technology-active");
        }
        item.addEventListener('click', event => {
            technologyItems.forEach(elem => elem.classList.remove('technology-active'));
            event.target.closest('.technology-group-item').classList.add("technology-active");
        })
    });
});