var title = document.querySelector("#title");
var btnAcpt = document.querySelector("#acpt");
var btnDeny = document.querySelector("#deny");
var img = document.querySelector("#header-img");

btnAcpt.addEventListener("click", handleAcptClick);
btnDeny.addEventListener("click", handleDenyClick);

function handleAcptClick() {
  title.innerHTML = "Trả lời đúng rồi đó!!! Me toooo.";
  if (!btnDeny.classList.contains("hide")) {
    img.src = "imgs/thinking.jpg";
    title.innerHTML = "Suy nghĩ kĩ chưa z, cho suy nghĩ lại";
    this.classList.add("hide");
    btnDeny.classList.add("hide");
    setTimeout(function () {
      img.src = "imgs/waiting.gif";
      title.innerHTML = "Chọn lại điiii";
      btnAcpt.classList.remove("hide");
      btnDeny.classList.remove("hide");
    }, 3000);
  } else {
    this.classList.add("hide");

    img.src = "imgs/final.gif";
  }
}

function handleDenyClick() {
  this.classList.add("hide");
  btnAcpt.style.width = "300px";
  title.innerHTML = "Bạn đã loại được đáp án sai rồi đó!!!";
}
