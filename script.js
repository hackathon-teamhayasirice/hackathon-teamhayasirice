gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  const introductionSection = document.querySelector(".introduction");

  introductionSection.style.transform = "translateX(0)";
});
//　gsap文法　gsap.やりたいメゾット(".クラス名", {パラメータ}) どんどん下に追加していく

gsap.set(".introduction", {
  width: items.length * 100 + "%",
}); //items.lengthはjs-itemの要素の数のこと．今回は3つあるのでwidthは300%になる．
