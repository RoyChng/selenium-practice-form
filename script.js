const form = document.querySelector(".practice-form")
let added = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (added) return;
    form.insertAdjacentHTML("afterbegin", `
    <div class="success">
            Submitted Successfully
    </div>
    `)
    added = true;
})