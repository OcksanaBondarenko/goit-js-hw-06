const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListAl = document.querySelector('#ingredients');
console.log("ingredientListAl", ingredientListAl);
  
const ingredientItemAl = document.createElement('li');
ingredientItemAl.classList.add('item'); 

ingredientItemAl.textContent = 'Potatoes';
console.log(ingredientItemAl);
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.