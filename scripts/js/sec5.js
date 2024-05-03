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



// UnderLine
  const holderItems = document.querySelectorAll('div.hHolders p');
  holderItems.forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('mouseover', function() {
        this.style.borderBottom = '4px solid white';
      });
      item.addEventListener('mouseout', function() {
          this.style.borderBottom = 'none';
      });
  });

