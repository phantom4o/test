# BG_GR

## Responsive Design CSS Media Queries

### Mobile Styles
```css
/* For mobile devices */
@media (max-width: 600px) {
  /* Your mobile styles here */
}
```

### Computer Styles 

```css
/* For PC version */
@media (min-width: 601px) {
  /* Your PC styles here */
}
```

### We can use this thing so the text doesnt blend with the background

```css  
section#sec6 div.sec6-right-side div.pHolder{
    width: 90%;
    background-color: rgba(255, 255, 255, 0.253); <--
    border-radius: 25px; <--
    padding: 15px; <--
}
div.pHolder p{
    font-size: 18px;
    color: #000000;
}

```
- connect the aside menu buttons with there sections
- add the cetf inside the file
- fix the aside so it doesnt look its floading for no reason when i scroll pass nav