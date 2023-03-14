---
title: Vivliostyleのここが好き
class: text-jquery_01
script:
  - type: 'text/javascript'
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'
  - type: 'text/javascript'
    src: 'sample.js'
---



<script>
var style = `
<style>
.text-jquery_01 h2 {
  margin-top: 0;
  margin-bottom: 5mm;
  font-size: 11pt;
}
.text-jquery_01 h3 {
  margin-top: 0;
  margin-bottom: 5mm;
  font-size: 10pt;
}
.text-jquery_01 span {
  display:block;
  text-align-last: justify;
}
.text-jquery_01 pre {
  margin: 0;
  border-left: 0.5mm solid black;
  padding-left: 3.5mm;
}
<style>
`

var text1_left = `<h2 class="headline" style="margin-top:0;margin-bottom:5mm;">はじめに</h2>
　今回MIGAZINEの制作にVivliostyleという組版プログラムが使われることになったので、なにそれ、どこが良いの？ という話をしたいと思います。これは私の主観でVivliostyleを紹介する記事です。<br />
　Vivliostyleは組版プログラムです。組版プログラムは「本を作る際の原稿データを、印刷物として良い感じの見栄えにする」ためのプログラムです。この場合の原稿とは基本的には文章が主体の小説やプログラミングなどの技術書であることが多いと思います。ほぼイラストしかないMIGAZINEに使っているのは若干尖った用途かもしれません。<br />
　私は本業で図や表が多く入った文書を作ることが多いのですが、そのため、見た目がスッキリきれいな文書をできるだけ楽に作りたいと思ってきました。そのなかで出会ったのがVivliostyleです。<br />
　印刷用の文章を作るプログラムは、ワープロソフトなどの組版プログラムとは呼ばないものも含めるとその種類は多く、私が触ったことのあるものだけでもMicrosoft Word、LaTeX、Adobe InDesign、Vivliostyle、Pandoc、Asciidoctor、Sphinxなどがあります。Vivliostyleはこの中でもかなり気に入っているプログラムです。<br /><br />
<h2 style="margin-top:0mm;margin-bottom:5mm;">Markdownで書ける</h2>
　Markdownを知っていますか？<br />
　Markdownはフォントや文字サイズなどの書式を使わずに、文字だけで見出しや箇条書きを表現する記法です。そのままでも文書構造が一目で分かるほか、書式を設定した文書にコンバートするツールがたくさんあります。Vivliostyleもその一つです。<br />
　同じような記法はいくつもありますが昨今ではデファクトスタンダードの地位を築いていますので、見たことのある人もいるかもしれません。`;

var text1_right = `
　ではMarkdownの何が良いのでしょうか。MS Wordではいけないのでしょうか。答えとして、文書構造に集中できることとバージョン管理システムと相性がいいことが挙げられます。<br />
　例えばMS Wordではどうしても見た目が気になってしまい、「この大見出しから始まるのが1つの節、節の中にそれぞれ小見出しから始まる小節が3つあって……」といった文書の構造（アウトライン）とは異なった書式を設定してしまうことがあります。もちろんWordにもアウトラインエディタがありますので、構造を意識して文章を書くこともできるのですが、おせっかいが過ぎるため文章が長くなるほど書式設定が乱れやすいという問題は残ります。その反面、A4用紙1枚にぴったり収めたいなどの用途では、グラフィカルにかつアドホックに書式を設定できるのがWordの強みです。<br />
　またLaTeXでは構造を意識した書きかたができますが、見出しや箇条書きの命令がやや長く、気軽に書くのに向かないと感じます。ただし、LaTeXはその長い歴史（LaTeXのベースであるTeXの初版は1978年）の中で培われた組版精度の高さがあり、使いたくなるタイミングはあります。<br />
　その点MarkdownではWindowsのメモ帳で気軽に書き始められて文書構造に集中でき、長大な文章になるときはファイルを分割することもでき、Visual Studio Codeなどを使うと書式を設定した結果も見ながら執筆できるなど、書くことへの心理的負担が低くなっています。あ、でも何をもって負担とするかは人に依るかもしれません。<br />
　それから、書式を設定せずにテキストだけで原稿が成り立っているため、バージョン管理システムで管理することができるというのも強みです。バージョン管理システムはもともとプログラムのソースコードを管理するために生まれたプログラムなので、テキスト形式のファイルの扱いに長けています。具体的に言うと、「ファイルのxx行目が変更された」「xx行目の後ろにnn行追加された」というような差分を見やすいのです。そもそ`;

var text2_left = `も執筆にバージョン管理システムを使うメリットを説明するのは難しいのですが、使った後ならわかる安心感があるので、使えるなら使いたいものだと思ってください。<br /><br />
<h2>文書の内容とThemeのデータが別れている</h2>
　文書の内容を書いたテキストファイルと、紙面上での見た目を定義したThemeファイルが分かれています。これは原稿を書いているときはその内容に集中できることと、ひとつThemeを作ってしまえば文書がいくつあってもその見た目で統一できることを意味します。<br />
　特に、簡単に見た目を統一できることはとても重要だと思っています。原稿を書くたびに、他の原稿と同じようにするための時間や手間をかける（見出しはxxポイントで、フォントはyyで、余白を設定して、あとはなんだっけ！）のは原稿の内容とは全然関係ないですから。機械がやってくれることは機械に任せてもっと本質に集中したいですよね。<br /><br />
<h2>プロジェクトの管理方法が今風</h2>
　ファイル1つだけの原稿をPDFに変換するだけならVivliostyleはコマンド1行でOKの手軽さを持っています。それとは対称的に、文書が複数の章に分かれている場合は、章ごとに原稿ファイルを分けて執筆することができます。<br />
　原稿ファイルが複数に分かれるときは、そのプロジェクト用のフォルダを作って、原稿ファイルの順番などの設定を書いたファイルを作ります。この方法が、JavaScript（Node.js）のプロジェクト管理の方法を踏襲していて、今風です。慣れている人には理解しやすく、インターネットを活用したバージョン管理やThemeの共有と相性がいいので気に入っています。<br /><br />
<h2>コマンドラインで使う</h2>
　MarkdownやHTMLの文書をPDFに変換する操作は、基本的にはコマンド操作です。WindowsならPowerShellなどで次のように入力します。<br />
　\<pre\>vivliostyle input.md\</pre\>`;

var text2_right = `
　黒い画面にキーボード入力！ うひゃぁ！ と感じるひともいるでしょうが、これ、自動化しやすいのです。「xxのボタンを探してマウスでクリックして」よりも「このコマンドを実行して」の方がコンピュータには理解しやすい、だから確実に自動化できるということです。ほかのプロセスにも組み込みやすい。<br />
　技術文書でも小説でもイラスト集でも、本を作る作業は工程が多いため、自動化により毎回同じ作業を確実に実行できるようにしておくのは重要なことです。プログラマは手を抜くためなら全力でめんどくさいことをするのです。<br /><br />
<h2>Vivliostyleの良いとは言えないところ</h2>
　ここまでVivliostyleの好きなところを書いてきました。しかし好きにはなれないところも少なからずあります。いくつか紹介しましょう。<br /><br />
<h2>Themeファイルを作りこむのが面倒</h2>
　文書の内容（Markdown）と見た目（Theme）が明確に分かれているのがVivliostyleのいいところではあるのですが、どんな文書にでも使える万能のThemeを作るのは本当に難しいです。見出しの文字サイズは何ptがいいのか、見出しの上下はどのくらい開けたほうがいいのか、あの文書ではちょうどよかったがこちらでは行数が微妙……など、調整を始めたらキリがないものですし、個々の文書ごとにThemeを作るのはちょっと違います。<br />
　このように、最大の利点にして最大の欠点であるThemeを、いくつもの文書を作りながらいかに地道に育てるかというのは気長な戦いになります。残念ながら公式のThemeを使ってもすべての痒いところには手が届きません。この戦いを続けられるか、途中であきらめるか試されるのは欠点といえるでしょう。<br /><br />
<h3>一般人にMarkdownはわかりづらい</h3>
　最終的な見た目通りに書けないMarkdownは気軽に他人にお勧めできない記法です。普段からプログラムを書くような人には受け入れやすいのですが、そうでない人にとっては分かりづらいと思います。<br />
`;


var text3_left = `　インターネット上のサービスではMarkdownを使える場面が増えている（GitHub、Notion、いくつかのWikiやBlogなど）ので、覚えてみてはいかがですか。<br /><br />
<h3>細かい調整が難しい</h3>
　あと1行分詰めると1ページに納まるんだけどなぁ！ というときは行送りをちょっとだけ小さくしたくなりますよね。しかしVivliostyleではThemeを文書全体、ほかの文書でも共有していますので、基本的には特定の文書向けの微調整を行いません。1行詰めたいときは文の言い回しを修正する方がいいでしょう。<br />
　文書ごとの微調整が重要な場合は最初からWordなどのワープロソフトを使う方が幸せになれます。<br />
　Vivliostyleで細かい調整や特殊なレイアウトが必要なときは、MarkdownのなかにHTMLをべた書きすることができます。これは裏技とかではなく一般的なテクニックです。ただし、文書全体の統一感が無くなるとThemeを使っている意味が薄れる（し、そもそもHTMLを書きたくないからMarkdownを使っている）ので使いどころが限られます。<br /><br />
<h3>複雑な表を表現するのが苦手</h3>
　Markdownの仕様のせいでセルの結合ができません。複雑な表を作るならSphinx（reStructuredText）やAsciidoctor（Asciidoc）が強いです。<br />
　Vivliostyleで複雑な表を作る時はHTMLで書くか、別のソフトで作った表を図として読み込むのが正攻法です。しかしMarkdownの手軽さが失われてしまうので惜しいところだと思います。<br /><br />
<h2>おわりに</h2>
　先にも書いた通り、私は様々な文書作成プログラム・組版プログラムをかじってきました。その中で思うことは、痒いところ全てに手が届くツールはなかなか無いということです。<br />
　たとえば、ホビーユースのLaTeX人口がもうちょっと多かったらそもそもほかのツールは探してなかったかもしれないし、AsciidoctorやPandocのデフォルトスタイルに少ページ文書向けのも`;

var text3_right = `のがあったら十分満足できていたでしょう（Vivliostyleの前にスタイルを作りこんでいたPandocもまだ使っていますしね）。逆に、今後Markdownで表を書くのに疲れてほかのツールに移っていってしまう可能性も大いにあります。しかし今はVivliostyleがとても良く私の要求に応えてくれていて、むこう数年は使いこんでいきたいと感じています。<br />
　文章を書くことや本をつくることが楽しくなるツールがあることはとてもうれしいことです。幸運にもVivliostyleというちょうどいいツールがあって、文章主体の本だけでなくイラスト集にも使えることを今回、MIGAZINEが見せてくれました。<br />
　本記事を通してVivliostyleをはじめとした組版プログラムに興味を持つ人が1人でもいたらいいなと思います。`;

$(function(){
    $('.text-jquery_01 .text-main-first-page-left .text-column-left').html(text1_left);
    $('.text-jquery_01 .text-main-first-page-left .text-column-right').html(text1_right);
    
    $('.text-jquery_01 .text-page2 .text-column-left').html(text2_left);
    $('.text-jquery_01 .text-page2 .text-column-right').html(text2_right);

    $('.text-jquery_01 .text-page3 .text-column-left').html(text3_left);
    $('.text-jquery_01 .text-page3 .text-column-right').html(text3_right);
    //console.log("hello");
/*
    for(var i = 1; i < 100; i++) {
      var t = text.substr(0, i);
      $('.text-count').text(t);
      var width = $('.text-count').width();
      var height = $('.text-count').height();
      console.log(width);
      $('.result').text(width + ':' + height);
      if (width > 100) {
        break;
      }
    }
*/
    $('.style').html(style);
});
</script>

<div class="text-count" style="display: inline-block;"></div>
<div class="result"></div>

<div class="style"></div> <!-- 動的スタイル変更用 -->

<div class="chapter-warapper-left">
  <div class="chapter-bar">
    <div class="chapter-number">essays</div>
  </div>
  <!--<div class="chapter-title">イラストレーション</div>-->
  <!--<div class="chapter-text">Illust</div>-->
</div>

<div class="text-wrapper">
<div class="text-header-page-left">
    <div class="text-title">Vivliostyleのここが好き</div>
    <div class="text-author">idomshi</div>
</div>
<div class="text-main-first-page-left">
  <div class="text-column-left"></div>
  <div class="text-column-right"></div>
</div>
<div class="text-main-since-page-right text-page2">
  <div class="text-column-left"></div>
  <div class="text-column-right"></div>
</div>
<div class="text-main-since-page-left text-page3">
  <div class="text-column-left"></div>
  <div class="text-column-right"></div>
</div>
</div>