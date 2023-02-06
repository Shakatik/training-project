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




function rahunok (grib) {
const gribs = "гриб";
const gribnoy = grib % 10;
const gribnoys = grib % 100;

// grib ? gribnoy>=0 && gribnoy<=1 : 



    if (gribnoy>=0 && gribnoy<=1){
        return grib = 'гриб'
    }
    else if (gribnoy>=2 && gribnoy<=4){
        return grib = 'гриба'
    }
    else if (gribnoy>=5 && gribnoy<=20 || grib === 11){
        return grib = 'грибов'
    }
}
 console.log(rahunok(106))

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




    function countBy(x, n) {
        let z = [1,2,3,4,5,6,7,8,9,10];
        let a = z.slice(0, n);
        let res = a.filter(elem => elem % x == 0);
        
        return res;
      }

      console.log(countBy(2, 5))