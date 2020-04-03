// // 1. CREATE FACTORIAL
//     let inputNumber = window.prompt('masukkan angka untuk faktorial');
//     let numOfFactorial = 1;

//     for(i=0; i<inputNumber ;i++){
//         numOfFactorial = numOfFactorial * (inputNumber-i);
//         window.alert(`ini adalah hasil faktorial anda ${numOfFactorial}`);
//     }
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
cekNilai = () => {
for(let nilaiSiswa =1;nilaiSiswa<100;nilaiSiswa++){
if (nilaiSiswa < 60) {
    console.log('Nilai kamu adalah D');
} else if (nilaiSiswa < 75) {
    console.log('Nilai kamu adalah C');
} else if (nilaiSiswa < 90) {
    console.log('Nilai kamu adalah B');
} else {
    console.log('Nilai kamu adalah A');
}

}
}
console.log(cekNilai);

// 4. CREATE ASSIGN GRADE WITH FOR