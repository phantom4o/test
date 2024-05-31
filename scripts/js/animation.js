// Aside bar sliding showing disappearing
function toggleMenu() {
    var barsIcon = document.getElementById('barsIcon');
    var closeIcon = document.getElementById('closeIcon');
    var myNav = document.querySelector('.side-menu');
    var blackOv = document.querySelector('#blackOverlay');

    if (myNav.style.right === '-1000px' || myNav.style.right === '') {
        barsIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
        blackOv.style.display = "block";
        myNav.style.right = '0';
    } else {
        barsIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
        blackOv.style.display = "none";
        myNav.style.right = '-1000px';
    }

    var abtSection = document.querySelector('.abt_small_secntion');
    var cerfSection = document.querySelector('.cerf_small_secntion');
    abtSection.style.display = 'none';
    cerfSection.style.display = 'none';
}

// Aside bar Section drop down
document.getElementById('element2').addEventListener('click', function () {
    var abtSection = document.querySelector('.abt_small_secntion');
    if (abtSection.style.display === 'none' || abtSection.style.display === '') {
        abtSection.style.display = 'block';
    } else {
        abtSection.style.display = 'none';
    }
});

document.getElementById('element3').addEventListener('click', function () {
    var cerfSection = document.querySelector('.cerf_small_secntion');
    if (cerfSection.style.display === 'none' || cerfSection.style.display === '') {
        cerfSection.style.display = 'block';
    } else {
        cerfSection.style.display = 'none';
    }
});

// nav hide and show

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var img = nav.querySelector('img');
    var aside = document.querySelector('.side-menu');
    if (window.scrollY > document.getElementById('sec1').offsetTop) {
        nav.classList.add('transparent');
        img.classList.add('hidden');
        aside.style.top = '0px';
        aside.style.paddingTop = '50px';
        aside.style.height = '100vh';
    } else {
        nav.classList.remove('transparent');
        img.classList.remove('hidden');
        aside.style.top = '60px';
        aside.style.paddingTop = '20px';
        aside.style.height = '94vh';
    }
});

// Loading Screen
function loader() {
    var loader = document.querySelector('.loader');
    setTimeout(function() {
        loader.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }, 700);
}



