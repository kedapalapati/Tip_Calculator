const btnEl = document.getElementById("Calculate");

function calculateTotal(){
    const billEl = document.getElementById("bill");
    const tipEl = document.getElementById("tip");
    const totaltip = billEl.value * (tipEl.value/100);
    const total = Number(billEl.value) + Number(totaltip);
    const totalEl = document.getElementById("total");
    totalEl.innerHTML = total;

}

btnEl.addEventListener("click", calculateTotal);