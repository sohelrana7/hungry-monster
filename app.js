

const searchFood = () => {
    const meals = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

// display food
const displayFood = foods => {
    const foodContainer = document.getElementById('food-container')
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.className = 'card card-width';
        foodDiv.innerHTML = `
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 onclick="getInstruction('${food.strInstructions}')" class="card-title">${food.strMeal}</h5>
        </div>
        
        `;
        foodContainer.appendChild(foodDiv);
    })
}

// get instructions
const getInstruction = strInstructions =>{
    
}