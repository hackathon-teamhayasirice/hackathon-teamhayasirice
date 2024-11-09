// ↓使用していないとエラーになるのでコメントアウト
// gsap.registerPlugin(ScrollTrigger);

// 選べる4つのコース

// お食事

// お部屋

// アクセス
window.onload = () =>{
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


// カレンダー
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var events = [];
  
// 2024年1月1日から2025年12月31日までの予定を作成
for (let year = 2024; year <= 2025; year++) {  // 2024年から2025年まで
  for (let month = 0; month < 12; month++) {  // 0〜11で1月〜12月
      let daysInMonth = new Date(year, month + 1, 0).getDate();  // 各月の日数を取得

      for (let day = 1; day <= daysInMonth; day++) {
          let dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

          // ランダムに0〜2の間の数字を生成
          let randomIcon = Math.floor(Math.random() * 3);  // 0, 1, 2 のいずれか

          // Sky と Family の予定を追加
          events.push({ title: 'Sky', start: dateString, iconText: String(randomIcon) });
          events.push({ title: 'Family', start: dateString, iconText: String(randomIcon) });
      }
  }
}


  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'en',
      headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: ''
      },
      titleFormat: { month: 'long' },
      dayHeaderContent: function(arg) {
          return arg.text.slice(0, 2);  // 曜日の最初の2文字を表示
      },
      events,        
      eventOrder: 'order',  // タイトルで並べ替え
      contentHeight: 'auto', // 中身の高さを自動調整
      eventContent: function(arg) {
          // <div>要素を作成してイベント全体のスタイルを設定
          let eventDiv = document.createElement('div');
          eventDiv.classList.add('fc-event-title-container');

          // 左側のテキスト要素
          let textEl = document.createElement('div');
          textEl.classList.add('fc-event-text');
          textEl.textContent = arg.event.title;  // "sky"などのテキスト

          // 右側のアイコン要素
          let iconEl = document.createElement('div');
          iconEl.classList.add('fc-event-icon');
          iconEl.textContent = arg.event.extendedProps.iconText;  // "1"などのアイコンテキスト

          // 子要素を追加
          eventDiv.appendChild(textEl);
          eventDiv.appendChild(iconEl);

          return { domNodes: [eventDiv] };
      }
  });

  calendar.render();
});
