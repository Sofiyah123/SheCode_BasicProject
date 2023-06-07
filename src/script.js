let button = document.querySelector("button");
let response = document.querySelector(".response");

function orderCake() {
  name = prompt("what is your name");
  if (name === "") {
    response.innerHTML = "<span style='color:Red;'>No Name no Cake!</span>";
    alert("No name No Cake!");
  } else {
    response.innerHTML =
      "<span style='color:green;'>Thanks " +
      name +
      ", We will be in touch, meanwhile, have alot of Cakes!</span>";
    alert(
      "Thanks " + name + ", We will be in touch, meanwhile, have alot of Cakes!"
    );
  }
}
button.addEventListener("click", orderCake);
