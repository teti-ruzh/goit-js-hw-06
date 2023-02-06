const categoryList = document.querySelector('ul#categories')
const categoryRef = categoryList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryRef.length}`);


categoryRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})
