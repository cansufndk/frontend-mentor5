const form = document.querySelector('form')
const button = document.querySelector('button')

form.addEventListener('submit', kayit)

function kayit() {

    const input = document.querySelector('input').value

    if(input === "") {
        alert('fill in the blanks')
    }

}

