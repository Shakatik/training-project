// 1 = гриб
// 2 = гриба
// 5 = грибов

// foo(1)
// const userName = prompt("who are you mf?", "");

// if (userName === "Admin") {
//   const pass = prompt("parol", "");

//   if (pass === "1234") {
//     alert("access denied");
//   } else if (pass === "" || pass == null) {
//     alert("cancel");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (userName === "" || userName == null) {
//   alert("cancel");
// } else {
//   alert("Я вас не знаю");
// }
// let height = null;
// let width = null;
// let area = height ?? (100 * width) ?? 50;
// console.log(area)


const grib = 10002;

// function rahunok (name) {
const gribs = "гриб";
const gribnoy = grib % 10;
const gribnoys = grib % 100;

    if (gribnoy>=0 && gribnoy<=1){
        console.log(gribs+"")
    }
    if (gribnoy>=2 && gribnoy<=4){
        console.log(gribs+"а")
    }
    if (grib>=5 && grib<=20 || grib === 11){
        console.log(gribs+"ов")
    }




    // function getNoun(gribov) {
    //     const grib = 1;
        
    //     if (grib = 11) {
    //         return gribov = "грибов";
    //     }
    //     if (grib >= 5 && n <= 20) {
    //         return gribov = "грибов";
    //       }
    //     grib %= 100;
    //     if (grib >= 5 && n <= 20) {
    //         return gribov = "грибов";
    //     }
    //     grib %= 10;
    //     if (grib === 1) {
    //       return gribov = "гриб";
    //     }
    //     if (grib >= 2 && n <= 4) {
    //       return gribov = "гриба";
    //     }
        
    //   }

    //   console.log(gribov)