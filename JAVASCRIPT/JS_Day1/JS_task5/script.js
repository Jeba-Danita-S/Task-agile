const List = document.querySelector("#family-list");

List.addEventListener("click", function() {
    const familyList = document.querySelectorAll("#family-list li");

    for (let i = 0; i < familyList.length; i++) {
        if (i % 2 == 0) {
            familyList[i].style.color = "red";
        } else {
            familyList[i].style.color = "green";
        }
    }
});