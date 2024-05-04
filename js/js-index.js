function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML

    //copy header-top .wrapper to .thetop-nav;
    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML

}
copyMenu();
//show mobile meun 
const meunButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
const addclass = document.querySelector('.site')

meunButton.addEventListener('click', function () {
    addclass.classList.toggle('showmeun')
})

closeButton.addEventListener('click', function () {
    addclass.classList.toggle('showmeun')
})

//show sub meun on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//silder

const swiper = new Swiper('.swiper', {
   
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClose = document.querySelector('.site');
searchButton.addEventListener('click', function () {
    showClose.classList.toggle('showsearch')
})

tClose.addEventListener('click', function () {
    showClose.classList.toggle('showsearch')
})

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt');
});

var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }

});

// var productBig = new Swiper

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: productThumb
    }
})

var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {

    let
        stock = stocks[x].dataset.stock,
        available = stocks[x].querySelector('.qty-available').innerHTML,
        sold = stocks[x].querySelector('.qty-sold').innerHTML,
        percent = sold * 100 / stock;
    stocks[x].querySelector('.available').style.width = percent + '%';
}

document.addEventListener('DOMContentLoaded', function () {
    const filterTrigger = document.getElementById('filterTrigger');
    const filterSidebar = document.getElementById('filterSidebar');

    filterTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        filterSidebar.classList.toggle('open');
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        if (filterSidebar.classList.contains('open')) {
            filterSidebar.classList.remove('open');
        }
    });

    // Prevent closing the sidebar when clicking inside the sidebar
    filterSidebar.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {

    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show')
        }
    }, 250)
})

document.addEventListener("click", (e) => {

    const isClosest = e.target.closest(divtoShow);
    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }

})

window.onload = function () {
    document.querySelector('.site').classList.toggle("showmodal")
}

document.querySelector('.modalclose').addEventListener('click', function () {
    document.querySelector('.site').classList.remove('showmodal')
})


//sing

// function redirectToDashboard() {
//     // تحديد عنوان URL للصفحة المستهدفة بعد تسجيل الدخول
//     var targetPageUrl = "index.html";
    
//     // التوجيه إلى الصفحة المستهدفة
//     window.location.href = targetPageUrl;
//   }



// function vilde(){
//     var def={

//     }
// }


// const pas = document.getElementById("#pas");
// const chk = document.getElementById("#chk");

// chk.onchange =function(e){
// pas.Type =chk.checked ? "text" :"password";
// };
