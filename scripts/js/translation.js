var currentLanguage = "ENG";

function toggleLanguage() {
    currentLanguage = (currentLanguage === "ENG") ? "BGN" : "ENG";
    updateContent();
}

function updateContent() {
    fetch('scripts/json/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("element1").textContent = data[currentLanguage]["element1"];
            document.getElementById("element2").textContent = data[currentLanguage]["element2"];
            document.getElementById("element3").textContent = data[currentLanguage]["element3"];
            document.getElementById("element4").textContent = data[currentLanguage]["element4"];
            document.getElementById("element5").textContent = data[currentLanguage]["element5"];
            document.getElementById("element6").textContent = data[currentLanguage]["element6"];
            document.getElementById("element7").textContent = data[currentLanguage]["element7"];
            document.getElementById("element8").textContent = data[currentLanguage]["element8"];
            document.getElementById("element9").textContent = data[currentLanguage]["element9"];
            document.getElementById("element10").textContent = data[currentLanguage]["element10"];
            document.getElementById("element11").textContent = data[currentLanguage]["element11"];
            document.getElementById("element12").textContent = data[currentLanguage]["element12"];
            document.getElementById("element13").textContent = data[currentLanguage]["element13"];
            document.getElementById("element14").textContent = data[currentLanguage]["element14"];
            document.getElementById("element15").textContent = data[currentLanguage]["element15"];
            document.getElementById("element16").textContent = data[currentLanguage]["element16"];
            document.getElementById("element17").textContent = data[currentLanguage]["element17"];
            document.getElementById("element18").textContent = data[currentLanguage]["element18"];
            document.getElementById("element19").textContent = data[currentLanguage]["element19"];
            document.getElementById("element20").textContent = data[currentLanguage]["element20"];
            document.getElementById("element21").textContent = data[currentLanguage]["element21"];
            document.getElementById("element22").textContent = data[currentLanguage]["element22"];
            document.getElementById("element23").textContent = data[currentLanguage]["element23"];
            document.getElementById("element24").textContent = data[currentLanguage]["element24"];
            document.getElementById("element25").textContent = data[currentLanguage]["element25"];
            document.getElementById("element26").textContent = data[currentLanguage]["element26"];
            document.getElementById("element27").textContent = data[currentLanguage]["element27"];
            document.getElementById("element28").textContent = data[currentLanguage]["element28"];
            document.getElementById("element29").textContent = data[currentLanguage]["element29"];
            document.getElementById("element30").textContent = data[currentLanguage]["element30"];
            document.getElementById("element31").textContent = data[currentLanguage]["element31"];
            document.getElementById("element32").textContent = data[currentLanguage]["element32"];
            document.getElementById("element33").textContent = data[currentLanguage]["element33"];
            document.getElementById("element34").textContent = data[currentLanguage]["element34"];
            document.getElementById("element35").textContent = data[currentLanguage]["element35"];
            document.getElementById("element36").textContent = data[currentLanguage]["element36"];
            document.getElementById("element37").textContent = data[currentLanguage]["element37"];
            document.getElementById("element38").textContent = data[currentLanguage]["element38"];
            document.getElementById("element39").textContent = data[currentLanguage]["element39"];
            document.getElementById("element40").textContent = data[currentLanguage]["element40"];

        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Initial content update
updateContent();