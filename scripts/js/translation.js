var currentLanguage = "ENG";

function toggleLanguage() {
    currentLanguage = (currentLanguage === "ENG") ? "BGN" : "ENG";
    updateContent();
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
updateContent();
