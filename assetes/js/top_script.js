// フィルターボタンとコンテンツを取得
const buttons = document.querySelectorAll('.filter-buttons button');
const contentItems = document.querySelectorAll('.content-item');

// 初期表示（ALLカテゴリを表示）
document.addEventListener('DOMContentLoaded', () => {
    buttons[0].classList.add('active'); // 初期アクティブボタンを設定
    filterContent('all'); // 初期はALLを表示
});

// ボタンクリックイベントの設定
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // アクティブなボタンを更新
        document.querySelector('.filter-buttons button.active').classList.remove('active');
        button.classList.add('active');

        // 選択されたカテゴリを取得
        const category = button.dataset.category;

        // コンテンツをフィルタリング
        filterContent(category);
    });
});

// フィルタリング関数
function filterContent(category) {
    contentItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.add('show'); // 表示する
        } else {
            item.classList.remove('show'); // 非表示にする
        }
    });
}

$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
// ポップアップの要素を取得
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupClose = document.getElementById('popup-close');

// 各 content-item にクリックイベントを追加
document.querySelectorAll('.content-item').forEach(item => {
  item.addEventListener('click', event => {
   

    // データ属性から情報を取得
    const image = item.getAttribute('data-image');
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');

    // ポップアップにデータを挿入
    popupImage.src = image;
    popupTitle.textContent = title;
    popupDescription.textContent = description;

    // ポップアップを表示
    popup.classList.add('active');
  });
});

// ポップアップを閉じる処理
popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

// ポップアップ外をクリックしたら閉じる
popup.addEventListener('click', event => {
  if (event.target === popup) {
    popup.classList.remove('active');
  }
});