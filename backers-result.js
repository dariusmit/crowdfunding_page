let backers = 5007;
let backersDiv = document.querySelector(".backers-result");
backersDiv.textContent = Number(backers);

function increaseBackers() {
  backers = backers + 1;
  backersDiv.textContent = Number(backers);
}
