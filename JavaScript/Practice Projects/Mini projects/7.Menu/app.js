//ietms
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
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
        },
    {
        id: 3,
        title:"Pasta",
        price:70,
        img:"./Images/pasta.avif",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Nemo ad eius blanditiis doloribus nesciunt.",
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

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', ()=>{
    console.log('hello there');
    let displayMenu = menu.map(function(item){
        console.log(item);
        return `<article class="menu-items">
        <img src=${item.img} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rs ${item.price}</h4>
            </header>
            <p>${item.desc}</p>
        </div>
    </article>`;
    });
    console.log(displayMenu);
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
});

