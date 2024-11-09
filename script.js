// ↓使用していないとエラーになるのでコメントアウト
// gsap.registerPlugin(ScrollTrigger);

// 選べる4つのコース

// お食事

// お部屋

// アクセス
window.onload = () =>{
  console.log("loaded");
  let map = L.map('map').setView([34.635635, 132.62966], 16);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  let customIcon = L.icon({
      iconUrl: './img/access-pin.png', // カスタムアイコンのURL
      iconSize: [32, 32],                 // アイコンサイズ [幅, 高さ]
      iconAnchor: [16, 32],               // アイコンの位置調整 [x, y]
      popupAnchor: [0, -32]               // ポップアップの位置調整
  });
  // 目標地点にカスタムマーカーを配置
let marker = L.marker([34.635635, 132.62966], { icon: customIcon }).addTo(map);

// マーカーにポップアップを追加
marker.bindPopup("HAYASHI GRAMPING").openPopup();
}