


let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el");  //const can't be reassigned
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)

})

for (let i = 0; i < myLeads.length; i++) {

    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    
}






