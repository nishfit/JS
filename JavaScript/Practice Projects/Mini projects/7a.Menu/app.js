const menu = [
    
    {
    id: 1,
    title:"Dal Tadka",
    price:60,
    img:"./Images/dal-tadka.avif",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
    },
    {
        id: 2,
        title:"Grilled meat",
        price:100,
        img:"./Images/grilled-meat.avif",
        desc:"it,Nemo ad eius blanditiis doloribus nesciunt.",
        },
    {
        id: 3,
        title:"Pasta",
        price:70,
        img:"./Images/pasta.avif",
        desc:"Lorem asd sad asd sadasd sad asd sd aipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
        },
        {
            id: 4,
            title:"Shahi Paneer",
            price:150,
            img:"./Images/shahipaneer.avif",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
            },
            {
                id: 5,
                title:"Veg Momos",
                price:40,
                img:"./Images/veg-momos.avif",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
                },
                {
                    id: 6,
                    title:"Veg Soup",
                    price:120,
                    img:"./Images/veg-soup.avif",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
                    },

];

let main = document.querySelector('.main');

window.addEventListener('DOMContentLoaded', ()=> {
    console.log("Nish: Content loaded");
    let displayMenu = menu.map( (item)=>{
        return `<span class="items">
        <img src=${item.img} alt="">
        <span class="details">
            <header>
                <h4 class="heading">${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="desc">${item.desc}</p>
        </span>
    </span>`
    })

    displayMenu = displayMenu.join("");
    main.innerHTML = displayMenu;
})


// let price = document.querySelectorAll('.items');
// price.forEach(( items ) =>{
    
//         console.log(items.innerHTML);
//         items.addEventListener("click",()=>{
//             console.log("Hello 2");
//         })
    
// });

let price = document.querySelector('img');
 price.addEventListener("click",()=>{
    console.log("hello");
 })
