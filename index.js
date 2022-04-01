// chrome://extensions/

let myLeads = []
const inputEl = document.getElementById("input-el");  //const can't be reassigned
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// global variable,set key and variable as strings (primitive db so it only takes stringss as key/value)
localStorage.setItem("myLeads", "www.examplelead.com")
console.log(localStorage.getItem("myLeads"))
localStorage.clear()

inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()

})


function renderLeads(){

    let listItems = ""  //holds all HTML for list items
    for (let i = 0; i < myLeads.length; i++) {

        listItems += `
                    <li>
                        <a  target='_blank'  href='${myLeads[i]}'>
                            ${myLeads[i]}                       
                        </a>
                    </li>
        `

    }

    ulEl.innerHTML = listItems 
}







