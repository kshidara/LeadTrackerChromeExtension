// chrome://extensions/

let myLeads = []



const inputEl = document.getElementById("input-el");  //const can't be reassigned
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


// ["lead1","lead2"] or null
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {

    myLeads = leadsFromLocalStorage
    renderLeads()

} 


inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    //To verify that it works:
    console.log(localStorage.getItem("myLeads"))
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













