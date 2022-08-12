const input = document.querySelector('#input-cep')

input.addEventListener('keypress', () => {
    let inputlength = input.value.length

    if (inputlength === 5) {
        input.value += '-'
    }

})