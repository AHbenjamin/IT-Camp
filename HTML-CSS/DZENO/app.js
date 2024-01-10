var button = document.createElement("button");
button.textContent = "Click me";
button.addEventListener("click", displayMessage);
document.body.appendChild(button);
function displayMessage() {
    alert("Dzeno Hvala sto si nas ostavio");
}