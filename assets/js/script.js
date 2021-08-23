document.querySelector('#sendText').addEventListener('click', () => {
    const text = document.querySelector('#text').value;
    if(text !== '') {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const letters = text.split('');
        let counter = 0;
        

        window.alert(`Have ${counter} vowels in the text!`);
    } else {
        window.alert('Write something!');
    }
})