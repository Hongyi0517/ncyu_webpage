function toggleText() {
    const extraText = document.getElementById('extraText');
    if (extraText.style.display === 'none') {
      extraText.style.display = 'block';
    } else {
      extraText.style.display = 'none';
    }
  }

// 圖片數組，可以根據需要更換圖片URL
const images = [
    "https://media1.tenor.com/m/vF8t9VRqwIUAAAAC/mygo-chihaya-anon.gif",
    "https://media1.tenor.com/m/zkf-xzyD0xEAAAAd/mygo-sakiko.gif",
    "https://media1.tenor.com/m/V-VhL2ayPnIAAAAC/mygo-soyo.gif",
    "https://media1.tenor.com/m/Peqy-2fBNAsAAAAC/mygo-rana.gif",
    "https://media1.tenor.com/m/O-8UoHvo8YMAAAAC/bang-dream-bandori.gif",
    "https://media1.tenor.com/m/rFhTPTn8yn4AAAAd/mygo-%E6%84%9B%E9%9F%B3.gif"
];

// 顯示隨機圖片的函式
function showRandomImage() {
    // 隨機選擇一張圖片
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];

    // 顯示圖片
    const imageContainer = document.getElementById("image-container");
    const imgElement = document.getElementById("random-image");
    imgElement.src = imageUrl; // 設置圖片的來源
    imageContainer.style.display = "block"; // 顯示圖片容器
}