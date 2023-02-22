const input = document.getElementById('inputid');

input.addEventListener('input', () => {
    const answer = input.value;
    document.getElementById('output').innerText = answer;

});