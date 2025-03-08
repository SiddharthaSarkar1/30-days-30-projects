const inputPx = document.getElementById("input-px");
const inputEm = document.getElementById("input-em");

const pxToEm = () => {
  const pxVal = inputPx.value;
  if (pxVal.length != 0) {
    inputEm.value = pxVal / 16;
  } else {
    inputEm.value = "";
  }
};

inputPx.oninput = pxToEm;
