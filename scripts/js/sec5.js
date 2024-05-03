// data-filter ourVision
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('div.hHolders p');
  const images = document.querySelectorAll('div.pHolder p');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      images.forEach(image => {
        if (image.classList.contains(filter)) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });
});



// UnderLine hover
const holderItems = document.querySelectorAll('div.hHolders p');
holderItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked');
            this.style.borderBottom = 'none';
        } else {
            holderItems.forEach(item => {
                item.classList.remove('clicked');
                item.style.borderBottom = 'none';
            });
            this.classList.add('clicked');
            this.style.borderBottom = '4px solid white';
        }
    });
});

