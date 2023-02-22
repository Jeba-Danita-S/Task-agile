let answer = '';

const content = document.querySelectorAll('.box');
content.forEach((div) => {
    div.addEventListener('click', () => {
        const content = div.innerHTML;
        answer += content + "   ";
        alert(answer);
    });
});