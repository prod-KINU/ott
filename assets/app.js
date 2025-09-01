// UMD 読み込み時はグローバルの `anime` が使えます
// エラーチェック（存在確認）
if (typeof anime !== "function") {
  console.error("anime.js が読み込めていません。CDNパスや通信を確認してください。");
} else {
  // 基本アニメーション
  anime({
    targets: ".box",
    translateX: 300,
    rotate: "1turn",
    background: "#4caf50",
    duration: 1500,
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true
  });
}
