
const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(function (categories) {
          console.log ('Category:', categories.firstElenentChild.textContent);
          console.log ('Elements:', categories.lastElenentChild.children.length);
})