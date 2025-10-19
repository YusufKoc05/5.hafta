// --- ANA SAYFA ÜST RESİM DEĞİŞTİRME ---
function changeImage(img) {
  const main = document.getElementById("mainImage");
  if (main) {
    main.src = img.src.replace("w=200", "w=800");
    main.style.opacity = "0.3";
    setTimeout(() => {
      main.style.opacity = "1";
    }, 200);
  }
}

// --- SEPETE EKLE BUTONU ---
function addToCart(productName) {
  const msg = document.createElement("div");
  msg.className = "cart-message";
  msg.innerHTML = `🛒 <b>${productName}</b> sepete eklendi!`;
  document.body.appendChild(msg);

  // Görsel efekt
  setTimeout(() => {
    msg.style.opacity = "1";
    msg.style.bottom = "40px";
  }, 50);

  // 3 saniye sonra kaybolsun
  setTimeout(() => {
    msg.style.opacity = "0";
    msg.style.bottom = "10px";
    setTimeout(() => msg.remove(), 500);
  }, 3000);
}

// --- SEPET MESAJI STİLİ ---
const style = document.createElement("style");
style.innerHTML = `
.cart-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  background: linear-gradient(90deg, #ff6600, #8a2be2, #5ac8fa);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transition: all 0.4s ease;
  opacity: 0;
  z-index: 9999;
}
`;
document.head.appendChild(style);
