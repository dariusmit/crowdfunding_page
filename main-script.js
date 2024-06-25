const rewardBox = document.querySelector(".hidden-reward-box");
const pledgeBox0 = document.querySelector(".hidden-pledge-box-0");
const pledgeBox1 = document.querySelector(".hidden-pledge-box-1");
const pledgeBox2 = document.querySelector(".hidden-pledge-box-2");
const completedBox = document.querySelector(".hidden-completed-box");
const navigation = document.querySelector(".hidden-mobile-navigation");
const bookmarkImg = document.querySelector(".bookmark-img");
const bookmarkText = document.querySelector(".bookmark-p");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const errorBox = document.querySelector(".hidden-error-box");

function openRewardBox() {
  rewardBox.classList.remove("hidden-reward-box");
  rewardBox.classList.toggle("reveal-reward-box", true);
}

function closeRewardBox() {
  rewardBox.classList.remove("reveal-reward-box");
  rewardBox.classList.toggle("hidden-reward-box", true);
}

function enablePledgeBox0() {
  pledgeBox0.classList.remove("hidden-pledge-box-0");
  pledgeBox0.classList.toggle("reveal-pledge-box-0", true);
  document.querySelector('.modal-no-reward').style.border = '1px solid #147b74';

  if (pledgeBox1.classList.contains("reveal-pledge-box-1")) {
    document.querySelector('.modal-bamboo-stand').style.border = '1px solid lightgrey';
    pledgeBox1.classList.remove("reveal-pledge-box-1");
    pledgeBox1.classList.toggle("hidden-pledge-box-1", true);
  }

  if (pledgeBox2.classList.contains("reveal-pledge-box-2")) {
    document.querySelector('.modal-black-edition-stand').style.border = '1px solid lightgrey';
    pledgeBox2.classList.remove("reveal-pledge-box-2");
    pledgeBox2.classList.toggle("hidden-pledge-box-2", true);
  }
}

function enablePledgeBox1() {
  pledgeBox1.classList.remove("hidden-pledge-box-1");
  pledgeBox1.classList.toggle("reveal-pledge-box-1", true);
  document.querySelector('.modal-bamboo-stand').style.border = '1px solid #147b74';

  if (pledgeBox0.classList.contains("reveal-pledge-box-0")) {
    document.querySelector('.modal-no-reward').style.border = '1px solid lightgrey';
    pledgeBox0.classList.remove("reveal-pledge-box-0");
    pledgeBox0.classList.toggle("hidden-pledge-box-0", true);
  }

  if (pledgeBox2.classList.contains("reveal-pledge-box-2")) {
    document.querySelector('.modal-black-edition-stand').style.border = '1px solid lightgrey';
    pledgeBox2.classList.remove("reveal-pledge-box-2");
    pledgeBox2.classList.toggle("hidden-pledge-box-2", true);
  }
}

function enablePledgeBox2() {
  pledgeBox2.classList.remove("hidden-pledge-box-2");
  pledgeBox2.classList.toggle("reveal-pledge-box-2", true);
  document.querySelector('.modal-black-edition-stand').style.border = '1px solid #147b74';

  if (pledgeBox0.classList.contains("reveal-pledge-box-0")) {
    document.querySelector('.modal-no-reward').style.border = '1px solid lightgrey';
    pledgeBox0.classList.remove("reveal-pledge-box-0");
    pledgeBox0.classList.toggle("hidden-pledge-box-0", true);
  }

  if (pledgeBox1.classList.contains("reveal-pledge-box-1")) {
    document.querySelector('.modal-bamboo-stand').style.border = '1px solid lightgrey';
    pledgeBox1.classList.remove("reveal-pledge-box-1");
    pledgeBox1.classList.toggle("hidden-pledge-box-1", true);
  }
}

function openErrorBox() {
  errorBox.classList.remove("hidden-error-box");
  errorBox.classList.toggle("reveal-error-box", true);
}

function closeErrorBox() {
  errorBox.classList.remove("reveal-error-box");
  errorBox.classList.toggle("hidden-error-box", true);
}

function openCompletedBox0() {
    if (document.getElementsByName("pledgeAmount")[0].value > 0) {
      completedBox.classList.remove("hidden-completed-box");
      completedBox.classList.toggle("reveal-completed-box", true);
      closeRewardBox();
      if (pledgeBox0.classList.contains("reveal-pledge-box-0")) {
        pledgeBox0.classList.remove("reveal-pledge-box-0");
        pledgeBox0.classList.toggle("hidden-pledge-box-0", true);
      }
      if (pledgeBox1.classList.contains("reveal-pledge-box-1")) {
        pledgeBox1.classList.remove("reveal-pledge-box-1");
        pledgeBox1.classList.toggle("hidden-pledge-box-1", true);
      }
      if (pledgeBox2.classList.contains("reveal-pledge-box-2")) {
        pledgeBox2.classList.remove("reveal-pledge-box-2");
        pledgeBox2.classList.toggle("hidden-pledge-box-2", true);
      }
    } else {
      openErrorBox();
    }
}

function openCompletedBox1() {
  if (document.getElementsByName("pledgeAmount")[1].value > 0) {
    completedBox.classList.remove("hidden-completed-box");
    completedBox.classList.toggle("reveal-completed-box", true);
    closeRewardBox();
    if (pledgeBox0.classList.contains("reveal-pledge-box-0")) {
      pledgeBox0.classList.remove("reveal-pledge-box-0");
      pledgeBox0.classList.toggle("hidden-pledge-box-0", true);
    }
    if (pledgeBox1.classList.contains("reveal-pledge-box-1")) {
      pledgeBox1.classList.remove("reveal-pledge-box-1");
      pledgeBox1.classList.toggle("hidden-pledge-box-1", true);
    }
    if (pledgeBox2.classList.contains("reveal-pledge-box-2")) {
      pledgeBox2.classList.remove("reveal-pledge-box-2");
      pledgeBox2.classList.toggle("hidden-pledge-box-2", true);
    }
  } else {
    openErrorBox();
  }
}

function openCompletedBox2() {
  if (document.getElementsByName("pledgeAmount")[2].value > 0) {
    completedBox.classList.remove("hidden-completed-box");
    completedBox.classList.toggle("reveal-completed-box", true);
    closeRewardBox();
    if (pledgeBox0.classList.contains("reveal-pledge-box-0")) {
      pledgeBox0.classList.remove("reveal-pledge-box-0");
      pledgeBox0.classList.toggle("hidden-pledge-box-0", true);
    }
    if (pledgeBox1.classList.contains("reveal-pledge-box-1")) {
      pledgeBox1.classList.remove("reveal-pledge-box-1");
      pledgeBox1.classList.toggle("hidden-pledge-box-1", true);
    }
    if (pledgeBox2.classList.contains("reveal-pledge-box-2")) {
      pledgeBox2.classList.remove("reveal-pledge-box-2");
      pledgeBox2.classList.toggle("hidden-pledge-box-2", true);
    }
  } else {
    openErrorBox();
  }
}

function closeCompletedBox() {
  completedBox.classList.remove("reveal-completed-box");
  completedBox.classList.toggle("hidden-completed-box", true);
  window.scrollTo(0, 0);
}

function enableNavigation() {
  navigation.classList.toggle("enable-mobile-navigation");
  hamburgerMenuIcon.style.display = "none";
}

function disableNavigation() {
  hamburgerMenuIcon.style.display = "block";
  navigation.classList.toggle("enable-mobile-navigation");
}

function bookmarkMobile() {
  bookmarkImg.classList.toggle("bookmark-img-filter");
  document.querySelector(".bookmark-p").classList.toggle("hide-bookmark-p");
  document.querySelector(".bookmarked-p").classList.toggle("reveal-bookmarked-p");
}