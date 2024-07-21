

let input = document.getElementById("input");


let password = document.getElementById("password");


let passwordContent = document.getElementById("validation");

input.onkeyup = function(){
    input.value = input.value.toUpperCase();
   
}
let mainDiv = document.getElementById("main")
password.onfocus = function (){
    passwordContent.style.display = "block"
    mainDiv.style.height = "550px"
}

password.onblur = function(){
    passwordContent.style.display = "none"
    mainDiv.style.height = "330px"
}

password.onkeyup = function(){
    let lowerCaseLetter =  /[a-z]/g ; 
   let letter = document.getElementById("letter");
    if(lowerCaseLetter.test(password.value)){
        letter.innerHTML = `<i class="fa-solid fa-check"></i> A <b>lowercase</b> letter`
        letter.classList.remove("visible")
        letter.classList.add("correct")

    }else if(!lowerCaseLetter.test(password.value)){
        letter.innerHTML = `A <b>lowercase</b> letter`
        letter.classList.remove("correct")
        letter.classList.add("visible")
    }

    let upperCase = /[A-Z]/g;
    let uppercaseAlphabate = document.getElementById("uppercase");
    if(upperCase.test(password.value)){
        uppercaseAlphabate.innerHTML = `<i class="fa-solid fa-check"></i>  A <b>capital (uppercase)</b> letter`
        uppercaseAlphabate.classList.remove("visible")
        uppercaseAlphabate.classList.add("correct")

    }else if(!upperCase.test(password.value)){
        uppercaseAlphabate.innerHTML = `A <b>capital (uppercase)</b> letter`
        uppercaseAlphabate.classList.remove("correct")
        uppercaseAlphabate.classList.add("visible")
    }

    let numbers = /[0-9]/g;
    let num = document.getElementById("number")
    if(numbers.test(password.value)){
        num.innerHTML = `<i class="fa-solid fa-check"></i> A <b>number</b>`

        num.classList.remove("visible")
        num.classList.add("correct")
    }else if(!numbers.test(password.value)){
        num.innerHTML = `A <b>number</b>`

        num.classList.add("visible")
        num.classList.remove("correct")
    }

    let specialRegix = /[-/`~!#*$@_%+=.,^&(){}[\]|<>?\\]/g
     
    let specialCharacter = document.getElementById("special")

    if(specialRegix.test(password.value)){
        specialCharacter.innerHTML = `<i class="fa-solid fa-check"></i> A <b>special characters</b>`

        specialCharacter.classList.remove("visible")
        specialCharacter.classList.add("correct")
    }else if(!specialRegix.test(password.value)){
        specialCharacter.innerHTML = `A <b>special characters</b>`

        specialCharacter.classList.remove("correct")
        specialCharacter.classList.add("visible")
    }

    let length = document.getElementById("length");

    if(password.value.length >= 8 ){
        length.innerHTML = `<i class="fa-solid fa-check"></i> Minimum <b>8 characters</b>`

        length.classList.remove("visible")

        length.classList.add("correct")

    }else if(password.value.length <= 8){
        length.innerHTML = `Minimum <b>8 characters</b>`

        length.classList.remove("correct")
        length.classList.add("visible")

    }

}