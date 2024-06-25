let pledgeBar = document.querySelector(".pledge-bar");

if (pledgedAmountDefault < 100000) {
  pledgeBar.style.width = pledgedAmountDefault / 1000 + "%";
} else {
  pledgeBar.style.width = "100%";
}

function UpdatePledgeBar() {
  if (pledgedAmount < 100000) {
    pledgeBar.style.width = pledgedAmount / 1000 + "%";
  } else {
    pledgeBar.style.width = "100%";
  }
}
