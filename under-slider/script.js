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
