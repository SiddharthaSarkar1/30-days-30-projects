const submit = document.getElementById("submit");
const output = document.getElementById("output");

submit.addEventListener("click", () => {
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);

  if (date1.getTime() && date2.getTime()) {
    let timeDifference = date1.getTime() - date2.getTime();
    let getDayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));

    if (getDayDifference > 1) {
      output.innerHTML = `The difference between the given dates are ${getDayDifference} days.`;
    } else {
      output.innerHTML = `The difference between the given dates is ${getDayDifference} day.`;
    }
  }
});
