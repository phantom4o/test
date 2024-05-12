document.addEventListener('DOMContentLoaded', function() {
  const buttonsSec5 = document.querySelectorAll('.sec5-right-side div.hHolders p');
  const imagesSec5 = document.querySelectorAll('.sec5-right-side div.pHolder p');
  
  buttonsSec5.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      imagesSec5.forEach(image => {
        if (image.classList.contains(filter)) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });
  
  const buttonsSec6 = document.querySelectorAll('div.sec6-right-side div.hHolders p');
  const imagesSec6 = document.querySelectorAll('div.sec6-right-side div.pHolder p');
  
  buttonsSec6.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      imagesSec6.forEach(image => {
        if (image.classList.contains(filter)) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });

  // underline onClick
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
});
