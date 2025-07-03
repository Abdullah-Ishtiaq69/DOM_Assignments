const heading = document.querySelector("h3");
const button = document.querySelector("button");

let isFriend = false;

function addFriend() {
  if (isFriend) {
    button.innerHTML = "Remove Friend";
    heading.innerHTML = "Friends";
    heading.style.color = "green";
    isFriend = false;
  } else {
    button.innerHTML = "Add Friend";
    heading.innerHTML = "Stranger";
    heading.style.color = "red";
    isFriend = true;
  };
};

button.addEventListener("click" , addFriend);
