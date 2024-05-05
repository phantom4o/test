// Aside bar sliding showing disappearing
function toggleMenu() {
    var barsIcon = document.getElementById('barsIcon');
    var closeIcon = document.getElementById('closeIcon');
    var myNav = document.querySelector('.side-menu');

    if (myNav.style.right === '-1000px' || myNav.style.right === '') {
        barsIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
        myNav.style.right = '0';
    } else {
        barsIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
        myNav.style.right = '-1000px';
    }

    // Hiding dropdown sections when clicking bars
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


// GO To animation
document.addEventListener("DOMContentLoaded", function() {
    var scrollUpButton = document.getElementById('scrollUpButton');

    // Function to scroll to the top gradually
    function slowScrollToTop() {
        var currentPosition = window.pageYOffset;
        var interval = setInterval(function() {
            if (currentPosition > 0) {
                window.scrollBy(0, -50); // Adjust the value to change scroll speed
                currentPosition -= 50; // Adjust the value to change scroll speed
            } else {
                clearInterval(interval);
            }
        }, 1); // Adjust the value to change scroll speed
    }

    // Add event listener to the scroll-up button
    scrollUpButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Call the slowScrollToTop function
        slowScrollToTop();
    });

    // Prevent default behavior for touchmove events when scrolling
    document.addEventListener('touchmove', function(event) {
        if (event.target === scrollUpButton) {
            event.preventDefault();
        }
    });
});

