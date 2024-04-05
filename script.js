
function goBack() {
    window.history.back();
}


//------- QUESTION 1 -----------

let q1_submit = document.getElementById("q1_submit");

if (q1_submit != undefined) {
    q1_submit.addEventListener("click", () => {
        let teaForm = document.getElementById("teaForm");
        let selectedTea = teaForm.elements["tea"].value;
        
        localStorage.setItem("selectedTea", selectedTea);
    });
}

//------- QUESTION 2 -----------

let q2_submit = document.getElementById("q2_submit");

if (q2_submit != undefined) {
    q2_submit.addEventListener("click", () => {
        let selectedToppings = [];
        let checkboxes = document.getElementsByName("topping");
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedToppings.push(checkbox.value);
            }
        });
        localStorage.setItem("selectedToppings", JSON.stringify(selectedToppings));
    });
}


//------- QUESTION 3 -----------

let q3_submit = document.getElementById("q3_submit");

if (q3_submit != undefined) {
    q3_submit.addEventListener("click", () => {
        let sugarLevel = document.getElementById("sugarLevel").value;
        let iceLevel = document.querySelector('input[name="iceLevel"]:checked').value;
        
        localStorage.setItem("sugarLevel", sugarLevel);
        localStorage.setItem("iceLevel", iceLevel);
    });
}
//------- QUESTION 4 -----------

let q4_submit = document.getElementById("q4_submit");

if (q4_submit != undefined) {
    q4_submit.addEventListener("click", () => {
        let teaLevel = document.getElementById("teaLevel").value;
        let milkType = document.getElementById("milkType").value;
        let toppingsAmount = document.getElementById("toppingsAmount").value;
        let needBag = document.getElementById("needBag").value;
        
        localStorage.setItem("teaLevel", teaLevel);
        localStorage.setItem("milkType", milkType);
        localStorage.setItem("toppingsAmount", toppingsAmount);
        localStorage.setItem("needBag", needBag);
    });
}


//------- ANSWER -----------

let selectedTea =localStorage.getItem("selectedTea");
let selectedToppings =localStorage.getItem("selectedToppings");
let teaLevel = localStorage.getItem("teaLevel");
let milkType = localStorage.getItem("milkType");
let toppingsAmount = localStorage.getItem("toppingsAmount");
let needBag = localStorage.getItem("needBag");
let sugarLevel = localStorage.getItem("sugarLevel");
let iceLevel = localStorage.getItem("iceLevel");

document.getElementById("receiptSelectedTea").textContent = selectedTea;
document.getElementById("receiptSelectedToppings").textContent = selectedToppings;
document.getElementById("receiptTeaLevel").textContent = teaLevel;
document.getElementById("receiptMilkType").textContent = milkType;
document.getElementById("receiptToppingsAmount").textContent = toppingsAmount;
document.getElementById("receiptNeedBag").textContent = needBag;
document.getElementById("receiptSugarLevel").textContent = sugarLevel;
document.getElementById("receiptIceLevel").textContent = iceLevel;


function goToIndexPage() {
    window.location.href = "index.html";
}
