// get only the unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

//array of objects
recipies = [
    {
        id:0,
        name: "Afang Soup",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/09/afang-soup-with-eba.jpg?w=750&ssl=1",
        category: "Sauce",
        origin:"Nigeria",
        calories:"362kcal",
        description: "Afang soup, eaten by Efik and Ibibio people of Nigeria is a delicious stew made with Afang leaves and a leafy vegetable called waterleaf."

    },
    {
        id:1,
        name: "Nigerian Tomato Stew",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2018/09/Nigerian-tomato-stew-dished-and-ready.jpg?w=750&ssl=1",
        category: "Sauce",
        origin:"Nigeria",
        calories:"353.4kcal",
        description: "This Nigerian red stew recipe features my favorite Nigerian tomato stew using farm raised ram meat which adds a distinct, delicious gamey flavor!"

    },
    {
        id:2,
        name: "Caribbean Curried Goat",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2018/03/curry-goat-07.jpg?w=750&ssl=1",
        category: "Sauce",
        origin:"Jamaica",
        calories:"424.6kcal",
        description: "Jamaican curry goat is a finger licking, savory, comforting and flavorful curry that will deliver a major punch to your taste buds!"

    },
    {
        id:3,
        name: "Mixed Seafood Coconut Fried Rice",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/05/seafood-fried-rice.jpg?w=750&ssl=1",
        category: "Main",
        origin:"Nigerian, Tropical",
        calories:"428.3kcal",
        description: "fried rice with a seafood medley featuring a mix of fresh crab meat, shrimp, calamari and fresh homemade coconut milk!"
    },
    {
        id:4,
        name: "Senegalese Sombi",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2015/04/RicePudding1.jpg?resize=1080%2C1622&ssl=1",
        category: "Dessert",
        origin:"Senegal",
        calories:"213kcal",
        description: "Sombi is a senegalese and very easy coconut rice pudding to make that can serve as a cool summertime dessert as well as a comforting cold weather treat."

    },
    {
        "id": 5,
        "name": "Tacos",
        "image": "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main",
        "origin": "Mexico",
        "calories": "226kcal",
        "description": "Tacos are a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling."
    },
    {
        "id": 6,
        "name": "Sushi",
        "image": "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main",
        "origin": "Japan",
        "calories": "350kcal",
        "description": "Sushi is a traditional Japanese dish made with vinegared rice, raw fish, and vegetables."
    },
    {
        "id": 7,
        "name": "Pasta Carbonara",
        "image": "https://images.pexels.com/photos/5640045/pexels-photo-5640045.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main",
        "origin": "Italy",
        "calories": "590kcal",
        "description": "Pasta Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, pancetta, and pepper."
    },
    {
        "id": 8,
        "name": "Falafel",
        "image": "https://images.pexels.com/photos/6275164/pexels-photo-6275164.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Dessert",
        "origin": "Middle East",
        "calories": "333kcal",
        "description": "Falafel is a deep-fried ball or patty made from ground chickpeas, fava beans, or both, often served in a pita."
    },
    {
        "id": 9,
        "name": "Butter Chicken",
        "image": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main",
        "origin": "India",
        "calories": "438kcal",
        "description": "Butter Chicken is a popular Indian dish made of chicken in a mildly spiced curry sauce."
    },
    {
        "id": 10,
        "name": "Paella",
        "image": "https://images.pexels.com/photos/16743489/pexels-photo-16743489/free-photo-of-paella-served-in-wok.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main",
        "origin": "Spain",
        "calories": "379kcal",
        "description": "Paella is a Spanish rice dish originally from Valencia, made with rice, saffron, chicken, seafood, and vegetables."
    }

]


const section = document.querySelector('.section-container');
const btnsContainer = document.querySelector('.btn-container');



// Loading content
window.addEventListener('DOMContentLoaded',()=>{
   
    displayRecipes(recipies);
    displayButtonItems()
    
})



// dynamically genrate filter buttons
function displayButtonItems(){
    // generating the unique categories
    const categories = recipies.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category)
        }

        return values
    },['all'])

// dynamically generating the buttons from the returned unique categories
   const btns = categories.map(btn=>{
        return`<button class="btn" type="button"data-id=${btn}>${btn}</button>`
   }).join("")

   btnsContainer.innerHTML = btns

   // filtering functionality implementation
   const filterBtns = btnsContainer.querySelectorAll('.btn')
   filterBtns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        let recipeCategory = e.currentTarget.dataset.id;
        const filterdItems = recipies.filter(item=>{
            if(recipeCategory === item.category){
                return item
            } 
        })
        if(recipeCategory === 'all'){
            displayRecipes(recipies)
        }else{
            displayRecipes(filterdItems)
        }
    })
   })
}



//dynamically display items
function displayRecipes(recipeArr){
    const  recipesList = recipeArr.map(item=>{
        return `<article class="recipe">
        <div class="img-container">
            <img src=${item.image} alt=${item.name} class="recipe-image">
        </div>
        
        <div class="recipe-description">
            <div>
                <h2 class="food-title">${item.name} <span class="calories">(${item.calories})</span></h2>
                <h2 class="food-nationality">${item.origin}</h2>
            </div>
            <p class="description">${item.description}</p>
        </div>
    </article>`
      }).join("")
      section.innerHTML = recipesList
}

