var title = document.querySelector("#title");
var btn = document.querySelector("#btnAction");
var img = document.querySelector("#header-img");
var btnClickCount = 0;

btnAction.addEventListener("click", handleClick);

function handleClick() {
  if (btnClickCount == 0) {
    showText("Hôm nay là 8/3 á...");
    showImg("imgs/img1.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 1) {
    showText("Nên mình muốn nói rằng...");
    showImg("imgs/begin.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 2) {
    showText("Bạn là 1 người xinh đẹp và cuốn hút nhất mình từng gặp!!!");
    showImg("imgs/img2.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 3) {
    showText("Nên là mong bạn sẽ luôn vui vẻ và tươi cười thật nhiềuuuu");
    showImg("imgs/img3.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 4) {
    showText("À chúc vậy thui, giờ là trải lòng ha !!");
    showImg("imgs/img4.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 5) {
    showText("Mình là người không tự tin về bản thân rất nhiều");
    showImg("imgs/img5.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 6) {
    showText("Nhưng mà từ khi gặp bạn thì mọi thứ thay đổi rồi á");
    showImg("imgs/img6.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 7) {
    showText(
      "Mình tự tin hơn và làm những thứ mình tưởng rằng mình không làm nổi"
    );
    showImg("imgs/img7.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 8) {
    showText("Nên là với mình thì bạn là một người rất đặc biệt");
    showImg("imgs/img8.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 9) {
    showText(
      "Mặc dù mình năng động nhưng lại rất ghét phải nghe người khác nói quá nhiều"
    );
    showImg("imgs/img9.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 10) {
    showText("Nhưng không hiểu sao bạn lại là 1 ngoại lệ");
    showImg("imgs/img10.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 11) {
    showText("Mình còn nghĩ là 1 ngày đi 8 tiếng để nghe còn chưa đủ nữa");
    showImg("imgs/img11.webp");
    showBtn("Tiếp tục");
    btnClickCount++;
  } else if (btnClickCount == 12) {
    showText("Nên là ờm...........");
    showImg("imgs/img12.webp");
    hideBtn();
    btnClickCount++;
  }
}

function showText(text) {
  setTimeout(() => {
    title.style.opacity = "0";
    setTimeout(() => {
      title.innerHTML = text;
      title.style.opacity = "1";
    }, 300);
  }, 300);
}

function showImg(imgSrc) {
  setTimeout(() => {
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = imgSrc;
      img.style.opacity = "1";
    }, 300);
  }, 300);
}

function showBtn(btnText) {
  setTimeout(() => {
    btn.classList.add("hide");
    setTimeout(() => {
      btn.classList.remove("hide");
      btn.innerHTML = btnText;
    }, 300);
  }, 300);
}

function hideBtn() {
  setTimeout(() => {
    btn.classList.add("hide");
  }, 300);
}
