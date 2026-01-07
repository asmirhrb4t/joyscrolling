// Liste mit beruhigenden Bildern (von Unsplash)
const images = [
{url: "https://images.unsplash.com/photo-1627370778723-4d26700cd972"},
{url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
{url: "https://images.unsplash.com/photo-1612696733108-a77b112d5406"},
{url: "https://images.unsplash.com/photo-1713027524895-f8a1e2103eb8"},
{url: "https://images.unsplash.com/photo-1670670196577-7754fbc6ba01"},
{url: "https://images.unsplash.com/photo-1665194653473-879fc0461de2"},
{url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9"},
{url: "https://images.unsplash.com/photo-1566223805287-d117bfba0f69"},
{url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f"},
{url: "https://images.unsplash.com/photo-1766852304029-b8a3b0f98226"},
{url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1"},
{url: "https://images.unsplash.com/photo-1561999761-99d088de3880"},
{url: "https://images.unsplash.com/photo-1766849009306-edc6d5155b7a"},
{url: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084"},
{url: "https://images.unsplash.com/photo-1533414417583-f0ab99151186"},
{url: "https://images.unsplash.com/photo-1556191327-3d630d25073d"},
{url: "https://images.unsplash.com/photo-1704292088349-26380e81d7d8"},
{url: "https://images.unsplash.com/photo-1570804439979-660b22341c20"},
{url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae"},
{url: "https://images.unsplash.com/photo-1601560496362-10bfa658da09"},
{url: "https://images.unsplash.com/photo-1668767893203-5b28042830e7"},
{url: "https://images.unsplash.com/photo-1661428804419-4fa19a05d0d8"},
{url: "https://images.unsplash.com/photo-1597303927811-9ea7c3de6f30"},
{url: "https://images.unsplash.com/photo-1584358838337-8f86d1b3922e"},
{url: "https://images.unsplash.com/photo-1443397646383-16272048780e"},
{url: "https://images.unsplash.com/photo-1514769232705-67835176bcc7"},
{url: "https://images.unsplash.com/photo-1508841220-87fbee1b4767"},
{url: "https://images.unsplash.com/photo-1614065043559-bce24315e298"},
{url: "https://images.unsplash.com/photo-1601725781442-22a1c2671db9"},
{url: "https://images.unsplash.com/photo-1541417904950-b855846fe074"},
{url: "https://images.unsplash.com/photo-1592859600972-1b0834d83747"},
{url: "https://images.unsplash.com/photo-1621960531176-9e4894d9adf8"},
{url: "https://images.unsplash.com/photo-1626436808209-c5093d1a0f75"},
{url: "https://images.unsplash.com/photo-1595202761821-57d3a4e5dc9f"},
{url: "https://images.unsplash.com/photo-1505140402502-734369f05760"},
{url: "https://images.unsplash.com/photo-1616878443605-aca041c01763"},
{url: "https://images.unsplash.com/photo-1569806166433-979804343a5b"},
{url: "https://images.unsplash.com/photo-1697114288400-71238cf038a2"},
{url: "https://images.unsplash.com/photo-1560199738-3d933bc1e714"}
];

let currentIndex = 0;
const gallery = document.getElementById('gallery');

// Funktion: Neue Bilder hinzufügen
function addImages(count = 3) {
    for (let i = 0; i < count; i++) {
        if (currentIndex >= images.length) {
            currentIndex = 0; // Wieder von vorne beginnen
        }

        const item = images[currentIndex];
        const card = document.createElement('div');
        card.className = 'image-card';

        card.innerHTML = `
        <img src="${item.url}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="${item.caption}">
        `;

        gallery.appendChild(card);
        currentIndex++;
    }
}

// Erste Bilder laden
addImages();

// Unendliches Scrollen
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        addImages();
    }
});
