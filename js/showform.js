var btn = document.querySelector('#show-hide-form');
var form = document.querySelector('.formulario');

btn.addEventListener('click', function(){

    if(form.style.display === 'none'){
        form.style.display = 'block';
    } else {
        form.style.display = 'block';
    }
}

)