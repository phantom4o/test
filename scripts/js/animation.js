// Aside bar sliding showing disapearing

function toggleMenu() {
    var barsIcon = document.getElementById('barsIcon');
    var closeIcon = document.getElementById('closeIcon');
    var myNav = document.getElementById('side-menu');

    if (barsIcon.style.display === 'none') {
        barsIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
        myNav.style.right = '-780px'; 
    } else {
        barsIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
        myNav.style.right = '0';
        
    }
}