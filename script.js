let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelector('.ingredientDiv');

addIngredientsBtn.addEventListener('click', function(){
    let newIngredients = ingredientDiv.cloneNode(true);
    let input = newIngredients.getElementByTagName('input')[0];
    input.value = '';
    ingredientList.appendChild(newIngredients);
});