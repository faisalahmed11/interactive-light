function lightSwitch(state) {
  if (state == "on") {
    document.getElementsByTagName("img")[0].style.display = "none";
    document.getElementsByTagName("button")[0].classList.add("on");
    document.getElementsByTagName("button")[1].classList.remove("off");
    document.getElementsByTagName("img")[1].style.display = "block";
    document.getElementsByClassName("container")[0].classList.add("on");
  } else {
    document.getElementsByTagName("img")[1].style.display = "none";
    document.getElementsByTagName("button")[1].classList.add("off");
    document.getElementsByTagName("button")[0].classList.remove("on");
    document.getElementsByTagName("img")[0].style.display = "block";
    document.getElementsByClassName("container")[0].classList.remove("on");
  }
}
