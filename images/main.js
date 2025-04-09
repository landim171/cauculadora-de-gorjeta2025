let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").ValueAsNumber
}

console.log(bill)

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

console.log(numberOfPeople)

function receiveTipPorcentageValue(value) {
    tipPercentage = value / 100
    
    buttonSelected = document.querySelector('#button-${value}')
    buttonSelected.classList.add("button-selected")
}
