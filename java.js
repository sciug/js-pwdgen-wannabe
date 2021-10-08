const userName = prompt("what's your name?")
const userSureName = prompt("what's your surename?")
const userAge = prompt("how old are you?")
const color = prompt("what's your favourite colour?")



document.getElementById("title").innerHTML = `Hi there ${userName}` 
document.getElementById("infoUser").innerHTML = `Here's your info: 
 ${userName} ${userSureName} ${userAge} ${color}`