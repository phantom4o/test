# test

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

### Example Snap Slide Verticlue 

```css  
        .container {
            width: 100%;
            height: 100px; /* Adjust height as needed */
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            scrollbar-width: none; /* Hides scrollbar in Firefox */
            -ms-overflow-style: none; /* Hides scrollbar in Internet Explorer */
        }
         
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
        }
        
        li {
            min-height: 100px; /* Adjust height as needed */
            width: 100%;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            scroll-snap-align: start;
        }

    <div class="container">
        <ul class="scroller">
            <li>Lorem, ipsum dolor.</li>
            <li>Fugiat, maxime atque?</li>
            <li>Repellendus, dolorum ut.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Fugiat, maxime atque?</li>
            <li>Repellendus, dolorum ut.</li>
        </ul>
    </div>


```
