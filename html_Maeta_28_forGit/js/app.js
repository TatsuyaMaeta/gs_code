// https://www.jungleocean.com/programming/190201jquery-slick

$('.station-list1').slick({
    autoplay: true, //自動再生
    slidesToShow: 4, //表示するスライドの数
});

$('.station-list2').slick({
    autoplay: true, //自動再生
    slidesToShow: 5, //表示するスライドの数
});

$('.station-list3').slick({
    autoplay: true, //自動再生
    slidesToShow: 2, //表示するスライドの数
});
// jqueryを使用するときは
// １、サイトからファイルをダウンロードして
// ２、htmlファイルに読み込ませて
// ３、自分で作ったファイルにやりたい内容をcss,jsに書き込む