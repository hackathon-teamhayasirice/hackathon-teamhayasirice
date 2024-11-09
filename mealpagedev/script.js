gsap.registerPlugin(ScrollTrigger);

// 共通のトリガー要素を設定
const triggerElement = ".meal-page-dev";

// meal-image-text-container1を左からスライドイン
gsap.fromTo(
  ".meal-image-text-container1",
  {
    x: -window.innerWidth, // 画面の左端からスタート
  },
  {
    x: 0, // 元の位置に移動
    duration: 3,
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 80%", // ビューポートの80%の位置で開始
      end: "top 20%", // ビューポートの20%の位置で終了
      scrub: 1, // スクロールに合わせてアニメーションを調整
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
    duration: 3,
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 80%", // ビューポートの80%の位置で開始
      end: "top 20%", // ビューポートの20%の位置で終了
      scrub: 1, // スクロールに合わせてアニメーションを調整
    },
  }
);
