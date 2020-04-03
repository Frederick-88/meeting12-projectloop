// // 1. CREATE FACTORIAL
let inputNumber = window.prompt('masukkan angka untuk faktorial');
let numOfFactorial = 1;

for(i=0; i<inputNumber ;i++){
    numOfFactorial = numOfFactorial * (inputNumber-i);
    window.alert(`ini adalah hasil faktorial anda ${numOfFactorial}`);
}
// // 1. CREATE FACTORIAL


// 2. CREATE REVERSE STRING

// cara dengan split dan msukin.

// function reverseWord(value) {
//     var splitString = value.split("");
//     var reverseArray = splitString.reverse("");
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }
// console.log(reverseWord("WELCOME"));


// cara dengan for
// let nameInput = window.prompt("Silahkan masukkan nama anda");
// let reverseName = ('');

// for(let value of nameInput)
// reverseName = (value + reverseName);

// window.alert(reverseName)
// cara dengan for

// 2. CREATE REVERSE STRING

// 3. CREATE REVERSE ARRAY
// let arrayInput = ['melon','mangga','apel'];
// let reverseArray = arrayInput.reverse();

// console.log(reverseArray);
// 3. CREATE REVERSE ARRAY

// 4. CREATE ASSIGN GRADE WITH FOR

// cekNilai = (nilaiSiswa) => {

//     if (nilaiSiswa < 60) {
//         return 'adalah D';
//     } else if (nilaiSiswa < 75) {
//         return 'adalah C';
//     } else if (nilaiSiswa < 90) {
//         return 'adalah B';
//     } else {
//         return 'adalah A';
//     }
// }

// for (let i = 1; i < 100; i++) {
//     let nilai = cekNilai(i);
//     console.log(`Nilai kamu adalah ${i} dengan skor ${nilai}`);
// }
// 4. CREATE ASSIGN GRADE WITH FOR

// 5. MULTIPLIER IN FOR
// let numberInput = window.prompt('Masukkan nomor pertama');
// let pengulanganInput = window.prompt('Anda ingin melihat list nomor pertama dikali berapa?');


// for(i=0; i<=pengulanganInput ;i++){
//     let perkalian = numberInput * i;

//     console.log(`${numberInput} x ${i} = ${perkalian}`);
// }