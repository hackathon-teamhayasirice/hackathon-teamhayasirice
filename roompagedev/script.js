gsap.registerPlugin(ScrollTrigger);

// 共通のトリガー要素を設定
const triggerElement = ".two-card-container";

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
      trigger: triggerElement,
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
      trigger: triggerElement,
    },
  }
);