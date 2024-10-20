katakanaA = [{symb: 'ア', sound: 'a'}, {symb: 'カ', sound: 'ka'}, {symb: 'サ', sound: 'sa'}, {symb: 'タ', sound: 'ta'}, {symb: 'ナ', sound: 'na'}, {symb: 'ハ', sound: 'ha'}, {symb: 'マ', sound: 'ma'}, {symb: 'ヤ', sound: 'ya'}, {symb: 'ラ', sound: 'ra'}, {symb: 'ワ', sound: 'wa'}];
katakanaI = [{symb: 'イ', sound: 'i'}, {symb: 'キ', sound: 'ki'}, {symb: 'シ', sound: 'shi'}, {symb: 'チ', sound: 'chi'}, {symb: 'ニ', sound: 'ni'}, {symb: 'ヒ', sound: 'hi'}, {symb: 'ミ', sound: 'mi'}, {symb: '', sound: ''}, {symb: 'リ', sound: 'ri'}, {symb: 'ヰ', sound: 'wi'}];
katakanaU = [{symb: 'ウ', sound: 'u'}, {symb: 'ク', sound: 'ku'}, {symb: 'ス', sound: 'su'}, {symb: 'ツ', sound: 'tsu'}, {symb: 'ヌ', sound: 'nu'}, {symb: 'フ', sound: 'fu'}, {symb: 'ム', sound: 'mu'}, {symb: 'ユ', sound: 'yu'}, {symb: 'ル', sound: 'ru'}, {symb: '', sound: ''}];
katakanaE = [{symb: 'エ', sound: 'e'}, {symb: 'ケ', sound: 'ke'}, {symb: 'セ', sound: 'se'}, {symb: 'テ', sound: 'te'}, {symb: 'ネ', sound: 'ne'}, {symb: 'ヘ', sound: 'he'}, {symb: 'メ', sound: 'me'}, {symb: '', sound: ''}, {symb: 'レ', sound: 're'}, {symb: 'ヱ', sound: 'we'}];
katakanaO = [{symb: 'オ', sound: 'o'}, {symb: 'コ', sound: 'ko'}, {symb: 'ソ', sound: 'so'}, {symb: 'ト', sound: 'to'}, {symb: 'ノ', sound: 'no'}, {symb: 'ホ', sound: 'ho'}, {symb: 'モ', sound: 'mo'}, {symb: 'ヨ', sound: 'yo'}, {symb: 'ロ', sound: 'ro'}, {symb: 'ヲ', sound: 'wo'}];
katakana = [katakanaA, katakanaI, katakanaU, katakanaE, katakanaO];

hiraganaA = [{symb: 'あ', sound: 'a'}, {symb: 'か', sound: 'ka'}, {symb: 'さ', sound: 'sa'}, {symb: 'た', sound: 'ta'}, {symb: 'な', sound: 'na'}, {symb: 'は', sound: 'ha'}, {symb: 'ま', sound: 'ma'}, {symb: 'や', sound: 'ya'}, {symb: 'ら', sound: 'ra'}, {symb: 'わ', sound: 'wa'}];
hiraganaI = [{symb: 'い', sound: 'i'}, {symb: 'き', sound: 'ki'}, {symb: 'し', sound: 'shi'}, {symb: 'ち', sound: 'chi'}, {symb: 'に', sound: 'ni'}, {symb: 'ひ', sound: 'hi'}, {symb: 'み', sound: 'mi'}, {symb: '', sound: ''}, {symb: 'り', sound: 'ri'}, {symb: 'ゐ', sound: 'wi'}];
hiraganaU = [{symb: 'う', sound: 'u'}, {symb: 'く', sound: 'ku'}, {symb: 'す', sound: 'su'}, {symb: 'つ', sound: 'tsu'}, {symb: 'ぬ', sound: 'nu'}, {symb: 'ふ', sound: 'fu'}, {symb: 'む', sound: 'mu'}, {symb: 'ゆ', sound: 'yu'}, {symb: 'る', sound: 'ru'}, {symb: '', sound: ''}];
hiraganaE = [{symb: 'え', sound: 'e'}, {symb: 'け', sound: 'ke'}, {symb: 'せ', sound: 'se'}, {symb: 'て', sound: 'te'}, {symb: 'ね', sound: 'ne'}, {symb: 'へ', sound: 'he'}, {symb: 'め', sound: 'me'}, {symb: '', sound: ''}, {symb: 'れ', sound: 're'}, {symb: 'ゑ', sound: 'e'}];
hiraganaO = [{symb: 'お', sound: 'o'}, {symb: 'こ', sound: 'ko'}, {symb: 'そ', sound: 'so'}, {symb: 'と', sound: 'to'}, {symb: 'の', sound: 'no'}, {symb: 'ほ', sound: 'ho'}, {symb: 'も', sound: 'mo'}, {symb: 'よ', sound: 'yo'}, {symb: 'ろ', sound: 'ro'}, {symb: 'を', sound: 'o'}];
hiragana = [hiraganaA, hiraganaI, hiraganaU, hiraganaE, hiraganaO];
let outparr = []

function showkatakana(){
    let nigg = document.getElementById("nigg");
    checkex()
    let table = document.createElement('table');
    table.id = "tst"
    for (let i = 0; i < katakanaA.length; i++){
        let tr = document.createElement('tr');
        for (let ii = 0; ii < katakana.length; ii++){
            let td = document.createElement('td')
            td.textContent = katakana[ii][i].symb + katakana[ii][i].sound
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table)
    nigg.appendChild(table)
}
function showhiragana(){
    let nigg = document.getElementById("nigg");
    checkex()
    let table = document.createElement('table');
    table.id = "tst"
    for (let i = 0; i < hiraganaA.length; i++){
        let tr = document.createElement('tr');
        for (let ii = 0; ii < hiragana.length; ii++){
            let td = document.createElement('td')
            td.textContent = hiragana[ii][i].symb + hiragana[ii][i].sound
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table)
    nigg.appendChild(table)
}

function trainingkatakana(){
    let nigg = document.getElementById("nigg")
    shufl = shuffle(katakana.slice())
    checkex()
    let table = document.createElement('table')
    table.id = "tst"
    for (let i = 0; i < katakanaA.length; i++){
        let tr = document.createElement('tr');
        for (let ii = 0; ii < shufl.length; ii++){
            let td = document.createElement('td')
            let inp = document.createElement('input')
            let td2 = document.createElement('td')
            td.textContent = shufl[ii][i].symb
            tr.appendChild(td)
            td2.setAttribute("width", "100px")
            tr.setAttribute("align", "center")
            tr.appendChild(td2)
            td2.appendChild(inp)
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table)
    nigg.appendChild(table)
    let butt = document.createElement('button')
    butt.innerHTML = "Check"
    butt.id = "chk"
    butt.onclick = function() {check()}
    nigg.appendChild(butt)
}
function traininghiragana(){
    let nigg = document.getElementById("nigg")
    shufl = shuffle(hiragana.slice())
    checkex()
    let table = document.createElement('table')
    table.id = "tst"
    for (let i = 0; i < hiraganaA.length; i++){
        let tr = document.createElement('tr');
        for (let ii = 0; ii < shufl.length; ii++){
            let td = document.createElement('td')
            let inp = document.createElement('input')
            let td2 = document.createElement('td')
            td.textContent = shufl[ii][i].symb
            tr.appendChild(td)
            td2.setAttribute("width", "100px")
            tr.setAttribute("align", "center")
            tr.appendChild(td2)
            td2.appendChild(inp)
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table)
    nigg.appendChild(table)
    let butt = document.createElement('button')
    butt.innerHTML = "Check"
    butt.id = "chk"
    butt.onclick = function() {check()}
    nigg.appendChild(butt)
}

function check(){
    table = document.getElementById('tst')
    for (let i = 0; i < table.rows[0].cells.length; i+=2){
        for (let ii = 0; ii < table.rows.length; ii++){
                console.log(i, ii, table.rows[i].cells[ii].innerHTML)
                console.log((outparr[i/2].find(({symb}) => symb === table.rows[ii].cells[i].innerHTML)).sound)
                if ((outparr[i/2].find(({symb}) => symb === table.rows[ii].cells[i].innerHTML)).sound == table.rows[ii].cells[i+1].children[0].value){
                    table.rows[ii].cells[i+1].children[0].style.backgroundColor = 'green'
                    table.rows[ii].cells[i].style.backgroundColor = 'green'                    
                }
                else{
                    table.rows[ii].cells[i+1].children[0].style.backgroundColor = 'black'
                    table.rows[ii].cells[i].style.backgroundColor = 'black' 
                }
            }

        }
        
}
function shuffle(inparr){
    outparr = []
    inparr.forEach(element => {
        element.forEach(element2 => {
            outparr.push(element2)
        }); 
    });
    let newarr = []
    while (true) {
        let randind = Math.floor(Math.random() * outparr.length)
        newarr.push(outparr[randind])
        outparr.splice(randind, 1)
        if (outparr.length == 0){
            break
        }
    }
    while (true){
        outparr.push(newarr.slice(0, 10))
        newarr.splice(0, 10)
        if (newarr.length == 0){
            break
        }
    }
    return outparr 
}
function checkex(){
    if (document.contains(document.getElementById("tst"))){
        document.getElementById("tst").remove()
    }
    if (document.contains(document.getElementById("chk"))){
        document.getElementById("chk").remove()
    }
}