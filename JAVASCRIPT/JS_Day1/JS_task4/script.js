const List = document.querySelectorAll(".list");

for (let i = 0; i < List.length; i++) {
    List[i].addEventListener("click", function() {
        const firstLetter = List[i].textContent[0].toLowerCase();
        const color = (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") ? "red" : "green";
        List[i].style.backgroundColor = color;
    });
}