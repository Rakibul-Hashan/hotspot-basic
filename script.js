const item = document.querySelectorAll('.tooltip');
const bubble = document.querySelectorAll('.item')

bubble.forEach((current, ind, arr) => {
    current.addEventListener('click', (e) => {
        item[ind].classList.toggle('non-valid');
        console.log(current, ind, arr, item);
        
    })
})
