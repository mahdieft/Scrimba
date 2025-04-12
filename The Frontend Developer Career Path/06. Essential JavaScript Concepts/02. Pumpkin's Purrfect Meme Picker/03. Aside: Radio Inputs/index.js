const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
    console.log(document.querySelector(`input[type='radio']:checked`).value)
})
