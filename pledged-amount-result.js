let pledgedAmountDefault = 39914;
let pledgedAmount;
let pledgedAmountDiv = document.querySelector(".pledged-amount-result");
pledgedAmountDiv.textContent = "$" + Number(pledgedAmountDefault);

function addPledgeAmount() {
  for (let i = 0; i < 3; i++) {
    if (Number(document.getElementsByName("pledgeAmount")[i].value)) {
      pledgedAmount =
        Number(pledgedAmountDefault) +
        Number(document.getElementsByName("pledgeAmount")[i].value);
      pledgedAmountDiv.textContent = "$" + pledgedAmount;
    } else {
      continue;
    }
  }
}
