//#whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

const link = new URL('https://dummyjson.com/recipes?limit=0');
const food = document.getElementsByClassName('recipes')[0];

fetch(link)
    .then(value => value.json())
    .then(recipesObj => {
        let {recipes} = recipesObj;

        recipes.forEach(recipe => {
            // картка рецепта
            const card = document.createElement('div');
            card.classList.add('recipe');

            // фото
            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;
            card.appendChild(img);

            // решта вмісту картки
            const body = document.createElement('div');
            body.classList.add('recipe-body');
            card.appendChild(body);

            // назва
            const title = document.createElement('h2');
            title.textContent = `${recipe.id}. ${recipe.name}`;
            body.appendChild(title);

            // основна інформація
            const info = document.createElement('ul');
            info.classList.add('info');
            body.appendChild(info);

            const fields = [
                ['Кухня', recipe.cuisine],
                ['Складність', recipe.difficulty],
                ['Тип страви', recipe.mealType.join(', ')],
                ['Підготовка', `${recipe.prepTimeMinutes} хв`],
                ['Приготування', `${recipe.cookTimeMinutes} хв`],
                ['Порцій', recipe.servings],
                ['Калорії на порцію', recipe.caloriesPerServing],
                ['Рейтинг', `${recipe.rating} (відгуків: ${recipe.reviewCount})`],
            ];

            fields.forEach(([name, value]) => {
                const li = document.createElement('li');
                li.innerHTML = `<b>${name}:</b> ${value}`;
                info.appendChild(li);
            });

            // інгредієнти — маркований список
            addList(body, 'Інгредієнти', recipe.ingredients, 'ul');

            // інструкція — нумерований список
            addList(body, 'Інструкція', recipe.instructions, 'ol');

            // теги
            const tags = document.createElement('div');
            tags.classList.add('tags');
            recipe.tags.forEach(tag => {
                const span = document.createElement('span');
                span.classList.add('tag');
                span.textContent = tag;
                tags.appendChild(span);
            });
            body.appendChild(tags);

            food.appendChild(card);
        });
    });

// створює заголовок і список (ul або ol) та додає в parent
function addList(parent, title, items, listType) {
    const h3 = document.createElement('h3');
    h3.textContent = title;
    parent.appendChild(h3);

    const list = document.createElement(listType);
    list.classList.add('list');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    parent.appendChild(list);
}