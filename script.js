// script.js
function generateEmojis() {
  const chatContainer = document.getElementById("chatContainer");
  console.log(chatContainer);
  const emojis = ["⚽️", "⚽️", "🎉", "🥅", "😎"];
  for (let i = 0; i < 50; i++) {
    // 空のdiv要素を作る
    const emoji = document.createElement("div");
    // div要素にemojiを追加する
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    // div要素にemojiクラスを追加する
    emoji.classList.add("emoji");
    // 絵文字の位置をランダムに設定する
    emoji.style.left = `${Math.random() * 100}%`;
    // 絵文字のアニメーションの遅延をランダムに設定
    emoji.style.animationDelay = `${Math.random() * 2}s`;
    //　絵文字のをチャット画面のコンテナ要素に追加する
    chatContainer.appendChild(emoji);

    // アニメーションが終了したら絵文字を削除する
    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }
}
