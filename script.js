let input = document.querySelector('.text');
let addBtn = document.querySelector('.addTask');
let items = document.querySelector('.items');


let todos = [];

function add(){ 
    
    const inputValue = input.value.trim();
    if(inputValue){
    items.innerHTML += `<div class="js">
<li class="jsLi">${inputValue}</li><button class="jsBtn"> <i class="fas fa-trash"></i></button>
</div>`
input.value = '';
input.focus();
}
}

addBtn.addEventListener('click', add);

input.addEventListener('keypress', function (event){
    if(event.key === 'Enter' || event.keyCode === 13){
        event.preventDefault();
        add();
    }
})

// Add event delegation for delete buttons
items.addEventListener('click', function(event) {
    // Check if clicked element is a delete button or the trash icon inside it
    if(event.target.closest('.jsBtn')) {
        // Find the parent .js div and remove it
        const todoItem = event.target.closest('.js');
        if(todoItem) {
            todoItem.remove();
        }
    }
});

