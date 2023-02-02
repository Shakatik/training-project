// 1 = гриб
// 2 = гриба
// 5 = грибов

// foo(1)
const userName = prompt("who are you mf?", "");

if (userName === "Admin") {

    const pass = prompt("parol", "")

    if (pass === "1234") {
        alert("access denied")
    } else if (pass === "" || pass == null) {
        alert("cancel")
    } else {
    alert( 'Неверный пароль' );
  }
} else if(userName === "" || userName == null) {
    alert("cancel")
} else {
    alert( "Я вас не знаю" );
}

