        //https://cryptii.com/pipes/caesar-cipher
        //https://planetcalc.ru/1434/

window.onload = ceasar() 

var langChecker = 'en-ru'

function ceasar() {
    
    //Поля для сбора входных данных
    var messageInput = document.getElementById('messageInput'); // поле для ввода криптограммы
    var messageOutput = document.getElementById('messageOutput');//поле для вывода результата
    console.log('w?',messageInput);
    var language = document.getElementById("l"); //поле для выбора алфавита
    console.log('why?',language.options[language.options.selectedIndex].text);
    
    if(messageInput != null){ // обработка входной информации
        var pureWords = messageInput.value.replace(/[,?.\\\/@]/, '');
        var messageWords = pureWords.split(' ');
        var isCrWordFound = false;

        messageWords.forEach(element=>{ //нахождение слова из 8 символов для поиска сдвига методом полосок
            if(element.length == 8 && !isCrWordFound){
                isCrWordFound = true;
                //Расшифровка криптограммы
                deCrypt(language.options[language.options.selectedIndex].text, messageInput.value, element, messageOutput)
            }
        })
        
    }

}

function setTest(number, ) {
    var messageInput = document.getElementById('messageInput'); // поле для ввода криптограммы
    var language = document.getElementById("l");

    switch (number) {
        case 1:
            messageInput.value = 'Ьш, д цраэш фшэйп зхус! Жниту пхйфуцчб те ёйхйзш.'
            language.value = 'Русский'
            ceasar()
            break;
        case 2:
            messageInput.value = 'Пл, ч йдурл злрэг ыиже! Ъбьёж гиэзжйкф ёш щэиэыл. Пкж яэ кше кшгжэ? жпэёф бёкэиэйёж зжйежкиэкф...'
            language.value = 'Русский'
            ceasar()
            break;
        case 3:
            messageInput.value = 'Pu thjyvljvuvtpjz, hu pukbzayf pz h iyhujo vm hu ljvuvtf aoha wyvkbjlz h jsvzlsf ylshalk zla vm yhd thalyphsz, nvvkz, vy zlycpjlz. Mvy lehtwsl, vul tpnoa ylmly av aol sbtily pukbzayf vy aol puzbyhujl pukbzayf.'
            language.value = 'English'
            ceasar()
            break;
        case 4:
            messageInput.value = 'Xgj wpsehdw, gfw eayzl jwxwj lg lzw dmetwj afvmkljq gj lzw afkmjsfuw afvmkljq. Af esujgwugfgeauk, sf afvmkljq ak s tjsfuz gx sf wugfgeq lzsl hjgvmuwk s udgkwdq jwdslwv kwl gx jso eslwjasdk, yggvk, gj kwjnauwk.'
            language.value = 'English'
            ceasar()
            break;
        default:
            break;
    }
}

function deCrypt(lang, input, cr, output) {
    var alphabet; //для перевода кримто текста


    var inputCrypt = cr//'wixy' //крипто слово для сдвигание полосок
    var text = '' // переведенный текст

    var textCrypt = input//'Byffi, fyn om wixy migynbcha !!' //исходный крипто текст

    
    const rowCount = 8
    
    var rows;
    var caps;
    var letterCount;
    
    if(lang == 'English'){//
        console.log('English')
        langChecker = 'en-ru'
        alphabet = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        rows = [['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']]; //полоски

        caps = ['A', 'B' ,'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B' ,'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        letterCount = 26
    }
    else{
        console.log('Russ')
        langChecker = 'ru-ru'
        alphabet = ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'];

        rows = [['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я'],
        ['а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я', 'а', 'б' ,'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы' ,'ь', 'э', 'ю', 'я']]; //полоски
    
        caps = ['А', 'Б' ,'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы' ,'Ь', 'Э', 'Ю', 'Я', 'А', 'Б' ,'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы' ,'Ь', 'Э', 'Ю', 'Я']

        letterCount = 33
    }


    console.log('this is input:', inputCrypt)
    console.log('this is rows:')
    console.log(rows)

    

    //_______Подготовка к выравниванию__________
    //__________________________________________
    var indexes = []; //массив с найденными порядковыми номерами крипто слова

    for (let index = 0; index < rowCount; index++) { //забиваем массив с порядковыми номерами
        indexes.push(rows[index].indexOf(inputCrypt[index])+1)
        console.log(indexes[index])
    }
    console.log('This is ind', indexes)

    //определяем максимальный порядковый номер буквы с крипто слова
    var max = {
        value: Number, 
        row: Number
    }
    max.value = Math.max(...indexes)
    max.row = indexes.indexOf(max.value)+1

    console.log('this is max: ', max)

    //определяем минимальный порядковый номер буквы с крипто слова
    var min = {
        value: Number, 
        row: Number
    }
    min.value = Math.min(...indexes)
    min.row = indexes.indexOf(min.value)+1

    console.log('this is min: ', min)

    //определяем максимальное смещение полосок
    // var offsetM = max.value - min.value
    // console.log('offsetM: ', offsetM)

    //______________Само выравнивание_____________
    //____________________________________________
    rows.forEach((element, index) => {
        
        // console.log(rows)

            //вычисляем смещение каждой полоски (работает)
            var offset = max.value - indexes[index]
            console.log(`offset ${index+1} row: `, offset)
            
            for(let i=0; i<offset; i++){
                element.splice(0, 0, '-')
            }
        
    });


    //________Поиск нормального слова в полосках______
    //________________________________________________

    var wordPlace = 0;
    var wordCryptPlace = 0;
    var ceasarOffset = 0;

    for(let i=0; i<letterCount*2; i++){ //проходим по всем полоскам
        var wordArray = [];
        wordArray.push(rows[0][i])
        wordArray.push(rows[1][i])
        wordArray.push(rows[2][i])
        wordArray.push(rows[3][i])
        wordArray.push(rows[4][i])
        wordArray.push(rows[5][i])
        wordArray.push(rows[6][i])
        wordArray.push(rows[7][i])
        
        var word = wordArray.join('')
        console.log(word)//текущее слово из полосок
        if(word==inputCrypt){
            wordCryptPlace = i;
            console.log('cr',wordCryptPlace)
        }

        if(word.length > 3 && !word.includes('-')){//проверяем слова из полосок

            isRealWord(i).then(result=>{
                console.log(result)
                wordPlace = result; //теперь у нас есть точно индекс норм слова
                //запусить новый цикл для поиска индекса крипто слова
                if (wordPlace>=wordCryptPlace) {
                    ceasarOffset =wordPlace-wordCryptPlace
                    console.log('ceasar', ceasarOffset)
                    decrypt()
                }
                else{
                    ceasarOffset = wordCryptPlace - wordPlace
                    console.log('ceasar', ceasarOffset)
                    decrypt()
                }
                
            })           
            
        }
    }

//___________FUNCTIONS_____________
    function isRealWord(iteration) {
        var key = 'dict.1.1.20200913T095249Z.d0331694e987418b.8979b9a34fd7e3abd92c4a963306f09ed1ef4ce4';
        
        return new Promise((resolve, reject)=>{
            fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=${langChecker}&text=${word}`).then(res=>{
                // console.log(res)
                return res.json()
            }).then(data=>{
                console.log(data)
                if (data.def.length!=0) {
                    var realWordPlace = iteration
                    console.log('async', realWordPlace)
                    resolve(realWordPlace)
                }
            }).catch(error=>{
                console.log(error)
            })
        })
    }

    // console.log('result: ', wordPlace)
    // console.log('cr word: ', wordCryptPlace)


    //_________Decrypt_______________
    function decrypt() {
        console.log(textCrypt.length)
        for (let i = 0; i < textCrypt.length; i++) {
            console.log(textCrypt[i])
            if(rows[0].includes(textCrypt[i])){ //если текущий символ с крипто строки алфавитный, то переводим его
                text += alphabet[alphabet.indexOf(textCrypt[i])+letterCount-ceasarOffset]
                console.log('translated: ',alphabet[alphabet.indexOf(textCrypt[i])+letterCount-ceasarOffset])
            }
            else if(caps.includes(textCrypt[i])){//Если алфавитный, но заглавная буква
                text += caps[caps.indexOf(textCrypt[i])+letterCount-ceasarOffset]
                console.log('translated caps: ', caps[caps.indexOf(textCrypt[i])+letterCount-ceasarOffset])
            }
            else{ //если нет (там всякие ?-:%@ и прочее) то просто оставляем
                text += textCrypt[i]
                console.log(textCrypt[i])
            }
            console.log(text)
            output.innerText = text
        }
    }
    
}