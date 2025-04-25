let cursors = [];

for (let i = 1; i <= 5; i++) {

  cursors.push(document.querySelector(`.Cursor${i}`));

}

document.addEventListener("mousemove", (e) => {


  const styleText = "top: " + e.clientY + "px; left:" + e.clientX + "px;";

  for (let i = 0; i < cursors.length; i++) {

    cursors[i].style.cssText = styleText;

  }


});