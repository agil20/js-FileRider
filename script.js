
let sumbit=document.getElementById("submit");
let name=document.getElementById("1")
let surname=document.getElementById("2")
let username=document.getElementById("3")
let image=document.getElementById("4");
let card=document.getElementById("cards")
let namecard=document.getElementById("name")
let surnamecard=document.getElementById("surname")
let usernamecard=document.getElementById("username")

window.onload =function(){
    let localname=localStorage.getItem("Name")
let localsurname=localStorage.getItem("Surname")
let localusername=localStorage.getItem("username")
    namecard.innerHTML=localname
    surnamecard.innerHTML=localsurname
    usernamecard.innerHTML=localusername
}
image.addEventListener("change",function(ev)
{
    for (const file of ev.target.files) {
      let reader=new FileReader();
      reader.onloadend=function(ev){
console.log(ev.target);
      }
reader.readAsDataURL(file)
    }
}
)
sumbit.onclick=function(){
localStorage.setItem("Name",name.value)
localStorage.setItem("Surname",surname.value)
localStorage.setItem("username",username.value)
localStorage.setItem("image",image.value)
let localname=localStorage.getItem("Name")
let localsurname=localStorage.getItem("Surname")
let localusername=localStorage.getItem("username")

if(name.value!=""&&surname.value!=""&& username.value!=""){
    card.classList.remove("my-card")
    namecard.innerHTML=localname
    surnamecard.innerHTML=localsurname
    usernamecard.innerHTML=localusername
    card.classList.remove("my-card")
}
}
