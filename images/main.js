let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").ValueAsNumber

    calculateResult()
}

console.log(bill)


function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber

    calculateResult()
}

console.log(numberOfPeople)

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    removeClassButtonSelected()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector('#button-${value}')
    buttonSelected.classList.add("button-selected")

    calculateResult()
}

 function reciveNumberOfPeopleValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100


 }


function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculateResult() {
    if (bill !== 0 && tipPercentage !== && numberOfPeople !== 0) {
        let tipAmoutPersoncalculateTipAmoutPerson()
        calculateTotalPerson(tipAmoutPerson)

        
    }
}

function calculateTipAmoutPerson() {
    let tipAmoutStrong = document.querySelector(".amout strong")
    let totalAmoutPerson = bill / tipPercentage + numberOfPeople
    tipAmoutStrong.textContent = '$${totalAmoutPerson.toFixed(2)}'
    return tipAmoutStrong
}

function calculateTotalPerson(tipAmoutPerson) {
    let totalStrong = document.querySelector(".total strong")
        let totalAmoutPerson = bill / numberOfPeople + tipAmoutPerson
        totalStrong.textContent = '$${totalAmoutPerson.toFixed(2)}'

}
