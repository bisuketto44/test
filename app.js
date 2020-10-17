
const quiz = [

    {
        quetion: 'S9におけるLOLランク戦の、pondereのガングプランクの勝率は何％？',
        answers: ['① 17%', '② 23%', '③ 29%', '④ 8%'],
        correct: '② 23%'
    }
    ,
    {
        quetion: 'TNCTLOLのディスコード通話に残る最古のチャット履歴はいつのもの？',
        answers: ['① 2015年8月20日', '② 2016年12月20日', '③ 2017年11月17日', '④ 2018年3月4日'],
        correct: '② 2016年12月20日'
    },
    {
        quetion: 'fami_leonaでおなじみ、ふぁみちき君のレオナの使用スキンは？',
        answers: ['① プールパーティーレオナ', '② バーベキューレオナ ', '③ 戦乙女レオナ', '④ プロジェクト・レオナ'],
        correct: '④ プロジェクト・レオナ'
    },
    {
        quetion: 'pondereがkatamen名義で作曲した曲は以下のうちどれ？',
        answers: ['① 解析Aを許さない', '② 知識工学教えてください', '③ 蒙古食べるのでごめんなさい', '④ わかんないですけどシェンとトランドルの2vs1を普通にさばいてダブルキルできちゃいました'],
        correct: '① 解析Aを許さない'
    },
    {
        quetion: '東京高専が誇るラノベ作家、「葬儀屋」によって描かれたライトノベルのタイトルは？',
        answers: ['① 異世界転生騒動記', '② ニートだけどハロワにいったら異世界つれてかれた', '③ 影の使い手', '④ 転生したらスライムだった件'],
        correct: '③ 影の使い手'

    },
    {
        quetion: 'いたいプロがフォートナイトで初のドン勝を飾るまでにかかった回数は？',
        answers: ['① 6回', '② 62回', '③ 625回', '④ 6253回'],
        correct: '③ 625回'
    },
    {
        quetion: 'むぎ（グラガス）vs グレイブスのジャングル対決対面につけられたLv差は？',
        answers: ['① 2lv', '② 3lv', '③ 4lv', '④ 5lv'],
        correct: '④ 5lv'
    },
    {
        quetion: 'ばたばたくんのチャンピオンマスタリーポイント1位は?',
        answers: ['① アニビア', '② アーリー', '③ ラックス', '④ ボリベア'],
        correct: '① アニビア'
    }


];

const tips = [

    {
        T: '正解は②。ガンプラは13戦で勝率23%。しかし、KDAは3.44:1と好調であった。ちなみに今季のフィオラは20戦26%の勝率である。'
    },
    {
        T: '正解は②。最古のチャット履歴は2016年12月20日であった。チャット内容は aaa である。'
    },
    {
        T: '正解は④。ふぁみち君の愛用スキンはプロジェクト・レオナである。ケイトリンにEを外し、ULTを外したのち、死んだアリスターにフラッシュQを放った。'
    },
    {
        T: '正解は①。katamen作曲の曲は 解析Aを許さない である。キャッチーな曲調の中に解析Aへの憎しみが上手く込められている。残りの選択肢はすべて、ましも君のチャット内容。'
    },
    {
        T: '正解は③。実際に内容を読んだのは川田だけだとされている。kindle版税込み683円。レビュー評価は★2.8。'
    },
    {
        T: '625回やって初のドン勝が取れたらしい。詳しくはディスコードの検索欄で625回と調べてみよう。'
    },
    {
        T: '正解は④。敵のグレイブスが12lvでむぎのグラガスは7lvであった。ちなみにサポート（ながと）は8lvだったので異常さが良くわかる。'
    },
    {
        T: 'ばたばたくんのマスタリー1位はアニビア、ラックスは2位、ボリベアは3位である。たびたび行われるカスタムでは無情にもアニビアのBANが盛んに行われていた。'
    },
    {

    }
];


const length = quiz.length;
document.getElementById("a2").style.display = "none";//最初はディスプレイ非表示
document.getElementById("a3").style.display = "none";
document.getElementById("a4").style.display = "none";
document.getElementById("a5").style.display = "none";



//問題文を表示する関数
const set1 = (j) => {

    document.getElementById('a1').textContent = '問題： ' + quiz[j].quetion

}


//ボタン部分に選択肢を表示する関数
const $button = document.getElementsByTagName('button');//長いので定義
const set2 = (j) => {
    for (let i = 0; i < 4; i++) {
        $button[i].textContent = quiz[j].answers[i];
    }

}

document.getElementById('a1').textContent = 'ＴＮＣＴクイズ';
for (let i = 0; i < 4; i++)$button[i].style.display = "none";
document.getElementById("a4").style.display = "block";
document.getElementById("a4").textContent = 'スタート'//スタート画面


document.getElementById("a4").addEventListener('click', () => {//スタートを押したら開始

    document.getElementById("a4").style.display = "none";
    for (let i = 0; i < 4; i++)$button[i].style.display = "block";//押すと同時に次へのボタンを消して、選択しを出現させる

})


let n = 0;//問題文、選択肢を回すn
document.getElementById("a4").addEventListener('click', () => { //次へをクリックしたら次の問題へ、最後の問題なら結果出力へ


    if (n < length) {
        set1(n);
        set2(n);
    }
    else {
        for (let i = 0; i < 4; i++)$button[i].style.display = "none";
        document.getElementById('a1').textContent = '結果は : ' + result + '/8点でした！'

    }
    n++;//nを追加
    document.getElementById("a2").style.display = "none";//ディスプレイ非表示
    document.getElementById("a3").style.display = "none";//問題を次へ移すために正解不正解を消す
    document.getElementById("a4").style.display = "none";
    document.getElementById("a5").style.display = "none";

    for (let i = 0; i < 4; i++)$button[i].disabled = false;


})


let j = 0;//判定を回すためのj(nを使うと既に＋１されてくるのでダメ)
let result = 0;//正解の回数をカウント

for (let i = 0; i < 4; i++) {
    $button[i].addEventListener('click', (e) => { //ボタンがクリックされた正誤判定の関数へ
        judge1(e);
    });
};

//正解不正解を判定する関数
const judge1 = (e) => {

    if (quiz[j].correct === e.target.textContent) {
        document.getElementById("a2").style.display = "block";//正解と表示
        result++;
    }    // e.target=$button0~4のクリックされたどれか
    else {
        document.getElementById("a3").style.display = "block";//不正解と表示
    }



    document.getElementById("a4").style.display = "block"; //次へのボタン表示
    for (let i = 0; i < 4; i++)$button[i].disabled = true; //選択肢を再度クリックできないように

    document.getElementById("a5").style.display = "block";//問題解説のブロックを表示
    document.getElementById("a5").textContent = tips[j].T;//表示内容を代入
    j++;//次へ

    if (j === length) {
        document.getElementById("a4").textContent = "結果表示へ"//もし問題が最後なら結果出力誘導を表示
    }

};




