
let count = 120;

const button = document.getElementById("followBtn");

const followerCount = document.getElementById("count");

button.addEventListener("click", function() {

    if (button.innerText === "Follow") {

        button.innerText = "Following";

        button.classList.add("following");

        count++;

    } else {

        button.innerText = "Follow";

        button.classList.remove("following");

        count--;

    }

    followerCount.innerText = count;

});
