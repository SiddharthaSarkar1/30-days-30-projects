const countEl = document.getElementById('count');

updateVisitorCount();

function updateVisitorCount() {
    console.log("Calling updateVisitorCount")
    fetch('https://api.countapi.xyz/update/project/pen?amount=1')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        countEl.innerHTML = res.value;
    });
}