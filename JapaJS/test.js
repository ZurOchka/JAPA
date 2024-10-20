katakanaA = [{symb: 'ア', sound: 'a'}, {symb: 'カ', sound: 'ka'}, {symb: 'サ', sound: 'sa'}, {symb: 'タ', sound: 'ta'}, {symb: 'ナ', sound: 'na'}, {symb: 'ハ', sound: 'ha'}, {symb: 'マ', sound: 'ma'}, {symb: 'ヤ', sound: 'ya'}, {symb: 'ラ', sound: 'ra'}, {symb: 'ワ', sound: 'wa'}];
katakanaI = [{symb: 'イ', sound: 'i'}, {symb: 'キ', sound: 'ki'}, {symb: 'シ', sound: 'shi'}, {symb: 'チ', sound: 'ti'}, {symb: 'ニ', sound: 'ni'}, {symb: 'ヒ', sound: 'hi'}, {symb: 'ミ', sound: 'mi'}, {symb: '', sound: ''}, {symb: 'リ', sound: 'ri'}, {symb: 'ヰ', sound: 'wi'}];
katakanaU = [{symb: 'ウ', sound: 'u'}, {symb: 'ク', sound: 'ku'}, {symb: 'ス', sound: 'su'}, {symb: 'ツ', sound: 'tsu'}, {symb: 'ヌ', sound: 'nu'}, {symb: 'フ', sound: 'hu'}, {symb: 'ム', sound: 'mu'}, {symb: 'ユ', sound: 'yu'}, {symb: 'ル', sound: 'ru'}, {symb: '', sound: ''}];
katakanaE = [{symb: 'エ', sound: 'e'}, {symb: 'ケ', sound: 'ke'}, {symb: 'セ', sound: 'se'}, {symb: 'テ', sound: 'te'}, {symb: 'ネ', sound: 'ne'}, {symb: 'ヘ', sound: 'he'}, {symb: 'メ', sound: 'me'}, {symb: 'エ', sound: 'ye'}, {symb: 'レ', sound: 're'}, {symb: 'ヱ', sound: 'we'}];
katakanaO = [{symb: 'オ', sound: 'o'}, {symb: 'コ', sound: 'ko'}, {symb: 'ソ', sound: 'so'}, {symb: 'ト', sound: 'to'}, {symb: 'ノ', sound: 'no'}, {symb: 'ホ', sound: 'ho'}, {symb: 'モ', sound: 'mo'}, {symb: 'ヨ', sound: 'yo'}, {symb: 'ロ', sound: 'ro'}, {symb: 'ヲ', sound: 'wo'}];
katakana = [katakanaA, katakanaI, katakanaU, katakanaE, katakanaO];

function shuffle(outparr){
    let newarr = []
    while (true){
        peaceodnewarr = []
        while (true){
            randind = Math.floor(Math.random() * (outparr[0].length))
            peaceodnewarr.push(outparr[0][randind])
            outparr[0].splice(randind, 1)
            if (outparr[0].length == 0){
                break
            }
        }
        outparr.splice(0, 1)
        newarr.push(peaceodnewarr)
        if (outparr.length ==0){
            break
        }
        //console.log(outparr)
    }
    return katakana
}
//console.log(katakana)
console.log(shuffle(_cloneDeep(katakana)))