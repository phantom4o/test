var currentLanguage = "ENG";

function toggleLanguage() {
    currentLanguage = (currentLanguage === "ENG") ? "BGN" : "ENG";
    updateContent();
    updateFontSize(); // Call the function to update font size after language change
}

function updateContent() {
    fetch('scripts/json/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const languageData = data[currentLanguage];
            for (let i = 1; i <= 60; i++) {
                const element = document.getElementById("element" + i);
                if (element && languageData["element" + i]) {
                    element.textContent = languageData["element" + i];
                }
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function updateFontSize() {
    // Check the current language and update font size accordingly
    if (currentLanguage === "BGN") {
        document.querySelectorAll('section#sec6 div.sec6-right-side div.pHolder p').forEach(function(p) {
            p.style.fontSize = '16.5px';
        });
    } else {
        document.querySelectorAll('section#sec6 div.sec6-right-side div.pHolder p').forEach(function(p) {
            p.style.fontSize = '18px';
        });
    }
}


updateContent();
