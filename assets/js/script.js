document.querySelector('#sendText').addEventListener('click', () => {
    const text = document.querySelector('#text').value;
    if(text !== '') {
        const vowels = ['a', 'á', 'à', 'ã', 'e', 'é', 'ê', 'i', 'í', 'o', 'ó', 'õ', 'u', 'ú', 'ü'];
        const letters = text.split('');
        const counter = [];

        for (let i = 0; i < letters.length; i++) {
            if (vowels.indexOf(letters[i]) > -1) {
                counter.push(letters[i]);
            }
        }
        
        window.alert(`Have ${counter.length} vowels in the text!`);
        document.querySelector('#text').value = '';
    } else {
        window.alert('Write something!');
    }
})