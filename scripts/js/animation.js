// Aside bar sliding showing disapearing

function toggleMenu() {
    var barsIcon = document.getElementById('barsIcon');
    var closeIcon = document.getElementById('closeIcon');
    var myNav = document.querySelector('.side-menu');

    if (barsIcon.style.display === 'none' || barsIcon.style.display === '') {
        barsIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
        myNav.style.right = '-1000px';
    } else {
        barsIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
        myNav.style.right = '0';

        // Hiding dropdown sections when clicking bars
        var abtSection = document.querySelector('.abt_small_secntion');
        var cerfSection = document.querySelector('.cerf_small_secntion');
        abtSection.style.display = 'none';
        cerfSection.style.display = 'none';
    }
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

