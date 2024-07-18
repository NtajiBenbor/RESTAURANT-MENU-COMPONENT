// get only the unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./imgs/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./imgs/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./imgs/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./imgs/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./imgs/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./imgs/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./imgs/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./imgs/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./imgs/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "stake dinner",
      category: "dinner",
      price: 39.99,
      img: "./imgs/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  recipies = [
    {
        id:0,
        name: "Afang Soup",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/09/afang-soup-with-eba.jpg?w=750&ssl=1",
        category: "Soup",
        origin:"Nigeria",
        calories:"362kcal",
        description: "Afang soup, eaten by Efik and Ibibio people of Nigeria is a delicious stew made with Afang leaves and a leafy vegetable called waterleaf."

    },
    {
        id:1,
        name: "Nigerian Tomato Stew",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2018/09/Nigerian-tomato-stew-dished-and-ready.jpg?w=750&ssl=1",
        category: "Stew",
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
        description: "Jamaican curry goat is a finger licking, savory, comforting and flavorful curry that will deliver a major punch to your taste buds! It is usually eaten with rice and sometimes with a side of fried plantains and is one of the jamaican food staples you absolutely should not hesitate to try!"

    },
    {
        id:3,
        name: "Mixed Seafood Coconut Fried Rice",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/05/seafood-fried-rice.jpg?w=750&ssl=1",
        category: "Rice dish",
        origin:"Nigerian, Tropical",
        calories:"428.3kcal",
        description: "In this delicious mixed seafood coconut fried rice recipe I'll be showing how to cook coconut fried rice with a seafood medley featuring a mix of fresh crab meat, shrimp, calamari and fresh homemade coconut milk!"
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
        "category": "Main Course",
        "origin": "Mexico",
        "calories": "226kcal",
        "description": "Tacos are a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling."
    },
    {
        "id": 6,
        "name": "Sushi",
        "image": "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main Course",
        "origin": "Japan",
        "calories": "350kcal",
        "description": "Sushi is a traditional Japanese dish made with vinegared rice, raw fish, and vegetables."
    },
    {
        "id": 7,
        "name": "Pasta Carbonara",
        "image": "https://images.pexels.com/photos/5640045/pexels-photo-5640045.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main Course",
        "origin": "Italy",
        "calories": "590kcal",
        "description": "Pasta Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, pancetta, and pepper."
    },
    {
        "id": 8,
        "name": "Falafel",
        "image": "https://images.pexels.com/photos/6275164/pexels-photo-6275164.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Snack",
        "origin": "Middle East",
        "calories": "333kcal",
        "description": "Falafel is a deep-fried ball or patty made from ground chickpeas, fava beans, or both, often served in a pita."
    },
    {
        "id": 9,
        "name": "Butter Chicken",
        "image": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main Course",
        "origin": "India",
        "calories": "438kcal",
        "description": "Butter Chicken is a popular Indian dish made of chicken in a mildly spiced curry sauce."
    },
    {
        "id": 10,
        "name": "Paella",
        "image": "https://images.pexels.com/photos/16743489/pexels-photo-16743489/free-photo-of-paella-served-in-wok.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "Main Course",
        "origin": "Spain",
        "calories": "379kcal",
        "description": "Paella is a Spanish rice dish originally from Valencia, made with rice, saffron, chicken, seafood, and vegetables."
    }

]


const section = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container')
const filterBtns = document.querySelectorAll('.filter-btn');


window.addEventListener('DOMContentLoaded',()=>{
  displayMenuItems(menu);

  displayBtnItems();

 

})




function displayBtnItems (){
  const categoryItems = menu.reduce((values, item) =>{
    if(!values.includes(item.category)){
      values.push(item.category)
    }

return values  

},['all'])

const btns= categoryItems.map( category => `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`).join("");

console.log(btns)
btnContainer.innerHTML = btns 
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click',(e)=>{
     let category = e.currentTarget.dataset.id;
    
     let categoryItems = menu.filter( item =>{

        if(item.category === category){
          return item;
        }
     })
     
       if(category === "all"){

         displayMenuItems(menu)
       }else{

        displayMenuItems(categoryItems)
       }

  })

});
}




function displayMenuItems(menuArry){

  let menuItems = menuArry.map( item =>{
    return `<article class="menu-item">
    <img src=${item.img} alt=" menu item">
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
    </div>
  </article>`
  }).join("")
    section.innerHTML = menuItems ; 
}











//   const section = document.querySelector('.section-center');
//   const btnContainer = document.querySelector(".btn-container")
//   // const filterBtns = document.querySelectorAll('.filter-btn')

//   // console.log(btns);


//   // load items
//   window.addEventListener('DOMContentLoaded',()=>{

//     displayMenuItems(menu); 
//     displayBtnItems()


//   })


  




//   // genrate html Templating 
//   function displayMenuItems(menuItems){

//     let display = menuItems.map((item)=>{
//       // console.log(item);

//     // return `<h1>${item.title}: ${item.price}</h1>`; 

//     return ` <article class="menu-item">
//     <img src="${item.img}" class="photo" alt=${item.title}>
//     <div class="item-info">
//         <header>
//             <h4>${item.title}</h4>
//             <h4 class="price">$${item.price}</h4>
//         </header>
//         <p class="item-text">${item.desc}</p>
//     </div>
// </article>`
//   })
//   display = display.join('');
//   section.innerHTML = display

//   }

// // filter btn display and filter functionality
//   function displayBtnItems(){
//     // getting the unique categories
//     const categories = menu.reduce((values,item)=>{
//       if(!values.includes(item.category)){
//         values.push(item.category)
//       }
//       return values
//     },['all'])

//     // iterating over categories return buttons
//     const categoryBtns = categories.map(btn =>{
//       return `<button class="filter-btn" type="button" data-id=${btn}>${btn}</button>`
//     }).join("")

//       btnContainer.innerHTML = categoryBtns;
//       const filterBtns = document.querySelectorAll('.filter-btn')

//       // Filter items
//   filterBtns.forEach(btn => {
//     btn.addEventListener('click',(e)=>{

//      let category = e.currentTarget.dataset.id;


//      const menuCategory = menu.filter( item =>{
//         if(item.category === category){
//           // console.log(item)
//           return item;
//         }
//      })
//         if(category === 'all'){

//             displayMenuItems(menu);
//         }
//         else{

//             displayMenuItems(menuCategory);
//         }
//     })
//  });
//   }




  //filter code
  // btns.forEach(btn=>{
  //   btn.addEventListener('click',(e)=>{
  //     // console.dir(e.target)
  //     let clicked= e.target.textContent;
  //     console.dir(clicked)

  //     if(clicked === 'Breakfast'){
  //       let breakFast = menu.filter(item =>item.category === "breakfast").map(item => item)
  //       displayMenuItems(breakFast);
  //     }else if(clicked === "Lunch"){
  //       let lunch = menu.filter(item =>item.category === "lunch").map(item => item)
  //       displayMenuItems(lunch);
  //     }else if(clicked === 'Shakes'){
  //       let shakes = menu.filter(item =>item.category === "shakes").map(item => item)
  //       displayMenuItems(shakes);
  //     }else{
  //       displayMenuItems(menu); 
  //     }
  //   })
  // })