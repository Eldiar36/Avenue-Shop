function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");
    let cart = menu.find("mobile-cart");
    let overlay = menu.find("burger-menu_overlay");
     button.on("click",(e) => {
         e.preventDefault();
         toogleMenu();
     });
    links.on("click", () => toogleMenu())
    overlay.on("click", () => toogleMenu());
    cart.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');


$(document).ready(function(){
    $(".project").owlCarousel({
        items: 7,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
        loop:true,
        nav:true,
        margin:10,
        navText:false,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:3
            },
            900: {
                items:5
            },
            1200: {
                items:5
            },
            1400: {
                items:7

            }

        }

    });
});
$(document).ready(function(){
    $(".cart-carousel").owlCarousel({
        items: 4,
        loop:true,
        margin:10,
        nav:true,
        navText:false,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:3
            },
            900: {
                items:3
            },
            1200: {
                items:4
            },
            1400: {
                items:4

            }

        }

    });
});
$(document).ready(function(){
    $(".photo").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:false,

        dots:false,
        autoplay:true,
        smartSpeed:2000,
        autoplayTimeout:7000

    });
});
$(document).ready(function(){
    $(".people").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        margin:10,
        dots:false,
       /* autoplay:true,
        smartSpeed:2000,
        autoplayTimeout:7000,*/
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});
$(document).on('click', '.popup-close', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
});
$('.popup-modal').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});
//header-fixed
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header-block");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
//
//wear-img-gallery
let bigImg = document.getElementById('item-full');
let subImg = document.getElementById('preview-box').getElementsByTagName("img");

for (let i = 0; i < subImg.length; i ++) {
    subImg[i].addEventListener("click", full);}
        function full() {
            let imgSrc = this.getAttribute('src');

            bigImg.innerHTML = "<img  src="+imgSrc+">";
}
//
let size = document.getElementsByClassName('size-item');
let  x;
 for (x = 0;x < acc.length; x ++) {
   size[i].onclick = function () {
        this.classList.toggle("active");
    }
 }