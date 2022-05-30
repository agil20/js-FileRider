let sumbit=document.getElementById("submit");
let name=document.getElementById("1")
let surname=document.getElementById("2")
let username=document.getElementById("3")
let image=document.getElementById("4")

sumbit.onclick=function(){
localStorage.setItem("Name",name.value)
localStorage.setItem("Surnamw",surname.value)
localStorage.setItem("Name",username.value)
localStorage.setItem("Name",image.value)

}
