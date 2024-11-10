// 選べる4つのコース
$(document).ready(function () {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "6.75%",
  });
});
// お食事
gsap.registerPlugin(ScrollTrigger);

// 共通のトリガー要素を設定
const triggerElement1 = ".meal-page-dev";

// meal-image-text-container1を左からスライドイン
gsap.fromTo(
  ".meal-image-text-container1",
  {
    x: -window.innerWidth, // 画面の左端からスタート
    opacity: 0,
  },
  {
    x: 0, // 元の位置に移動
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: triggerElement1,
    },
  }
);

// meal-image-text-container2を右からスライドイン
gsap.fromTo(
  ".meal-image-text-container2",
  {
    x: window.innerWidth, // 画面の右端からスタート
    opacity: 0, // 初期状態は透明
  },
  {
    x: 0, // 元の位置に移動
    opacity: 1, // 不透明に
    duration: 2,
    scrollTrigger: {
      trigger: triggerElement1,
    },
  }
);

// お部屋
gsap.registerPlugin(ScrollTrigger);

// 共通のトリガー要素を設定
const triggerElement2 = ".two-card-container";

// 中央位置を計算
const centerX = window.innerWidth / 2;
const imgTextContainer = document.querySelector(".room-image-text-container1");
const imgTextContainer1Width = imgTextContainer.offsetWidth;
// room-image-text-container1を中央から左に出現させる
gsap.fromTo(
  ".room-image-text-container1",
  {
    x: imgTextContainer1Width / 2 + 60,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: triggerElement2,
    },
  }
);

// room-image-text-container2を中央から右に出現させる
gsap.fromTo(
  ".room-image-text-container2",
  {
    x: -(imgTextContainer1Width / 2 + 60),
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: triggerElement2,
    },
  }
);

// アクセス
window.onload = () => {
  let map = L.map("map").setView([34.635635, 132.62966], 16);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  let customIcon = L.icon({
    iconUrl: "./img/access-pin.png", // カスタムアイコンのURL
    iconSize: [32, 32], // アイコンサイズ [幅, 高さ]
    iconAnchor: [16, 32], // アイコンの位置調整 [x, y]
    popupAnchor: [0, -32], // ポップアップの位置調整
  });
  // 目標地点にカスタムマーカーを配置
  let marker = L.marker([34.635635, 132.62966], { icon: customIcon }).addTo(
    map
  );

  // マーカーにポップアップを追加
  marker.bindPopup("HAYASHI GRAMPING").openPopup();
};
//周辺観光
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 3, // 1回に表示するスライド数
    slidesToScroll: 1, // 1回にスクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 1000, // 自動再生のスピード
    infinite: true, // 無限ループ
    centerMode: true, // 中央配置を有効にす
    variableWidth: true, // スライドの幅を可変にする
    dots: true, // ドットナビゲーション
    focusOnSelect: true, // スライドをクリックで選択
    gap: 100, // スライド間のスペースを調整するオプション
  });
});

// カレンダー
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var events = [];

  // 2024年1月1日から2025年12月31日までの予定を作成
  for (let year = 2024; year <= 2025; year++) {
    // 2024年から2025年まで
    for (let month = 0; month < 12; month++) {
      // 0〜11で1月〜12月
      let daysInMonth = new Date(year, month + 1, 0).getDate(); // 各月の日数を取得

      for (let day = 1; day <= daysInMonth; day++) {
        let dateString = `${year}-${String(month + 1).padStart(
          2,
          "0"
        )}-${String(day).padStart(2, "0")}`;

        // ランダムに0〜2の間の数字を生成
        let randomIcon = Math.floor(Math.random() * 3); // 0, 1, 2 のいずれか

        // Sky と Family の予定を追加
        events.push({
          title: "Sky",
          start: dateString,
          iconText: String(randomIcon),
        });
        events.push({
          title: "Family",
          start: dateString,
          iconText: String(randomIcon),
        });
      }
    }
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "en",
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "",
    },
    titleFormat: { month: "long" },
    dayHeaderContent: function (arg) {
      return arg.text.slice(0, 2); // 曜日の最初の2文字を表示
    },
    events,
    eventOrder: "order", // タイトルで並べ替え
    contentHeight: "auto", // 中身の高さを自動調整
    eventContent: function (arg) {
      // <div>要素を作成してイベント全体のスタイルを設定
      let eventDiv = document.createElement("div");
      eventDiv.classList.add("fc-event-title-container");

      // 左側のテキスト要素
      let textEl = document.createElement("div");
      textEl.classList.add("fc-event-text");
      textEl.textContent = arg.event.title; // "sky"などのテキスト

      // 右側のアイコン要素
      let iconEl = document.createElement("div");
      iconEl.classList.add("fc-event-icon");
      iconEl.textContent = arg.event.extendedProps.iconText; // "1"などのアイコンテキスト

      // 子要素を追加
      eventDiv.appendChild(textEl);
      eventDiv.appendChild(iconEl);

      return { domNodes: [eventDiv] };
    },
  });

  calendar.render();
});

//フッターのアニメーション
gsap.fromTo(
  ".forest",
  { y: 0, opacity: 0 }, //初期状態　画面外からスタート
  {
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",
      // start: "top bottom", //要素の底とビューポートが一致した時にトリガー
      // end: "bottom bottom", //フッターが画面下に触れたら終了
      // start: "bottom bottom",
      // end: "top bottom",
      scrub: true, //スクロールに同期
    },
  }
);
