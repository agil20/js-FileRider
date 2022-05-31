
let sumbit=document.getElementById("submit");
let name=document.getElementById("1")
let surname=document.getElementById("2")
let username=document.getElementById("3")
let image=document.getElementById("4");
let card=document.getElementById("cards")
let namecard=document.getElementById("name")
let surnamecard=document.getElementById("surname")
let usernamecard=document.getElementById("username")
let cardImg = document.getElementById("imagecard")
let img = "download.jfif";

let locImage;


window.onload =function(){
    card.classList.remove("my-card")

     localname=localStorage.getItem("Name")
 localsurname=localStorage.getItem("Surname")
 localusername=localStorage.getItem("username")
 let LSImage = localStorage.getItem("img")
 cardImg.setAttribute("src", LSImage);

    namecard.innerHTML=localname
    surnamecard.innerHTML=localsurname
    usernamecard.innerHTML=localusername
}

sumbit.onclick=function(){
localStorage.setItem("Name",name.value)
localStorage.setItem("Surname",surname.value)
localStorage.setItem("username",username.value)
let localname=localStorage.getItem("Name")
let localsurname=localStorage.getItem("Surname")
let localusername=localStorage.getItem("username")
localStorage.setItem("img", locImage)


if(name.value!=""&&surname.value!=""&& username.value!=""&& image.value!="" ){
    namecard.innerHTML=localname
    surnamecard.innerHTML=localsurname
    usernamecard.innerHTML=localusername
    cardImg.setAttribute("src", LSImage);

}
}

image.addEventListener("change", (e) => {
    for (const file of e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (image) {
        locImage = image.target.result;
      };
    }
  });
  