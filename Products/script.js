var products = [
    {
        title: "Aite Module",
        img: "../Assets/Img/Projects/AiteModulePrototypev3.jpeg",
        desc: "Project Aite is the first prototype of the state of art hologram technology. It uses particles in the air reflecting light to create an image. Version 1 has 25 pixels. Each pixel is a module that has a light in it. A motherboard controls which pixel should be on and off to create the image you want. It increases the brightness to let the pixel go farther than other pixels.",
        url: "Order/",
        date: "09 / 2023",
        price: 15.99
    },

    {
        title: "Ruined Vortex",
        img: "../Assets/Img/Projects/Ruined Vortext.png",
        desc: "The Ruined Vortex is a cool desk gadet you can get as a gift or for yourself. When you flip the switch it spins and will light up.",
        url: "Order/",
        date: "08 / 2024",
        price: 20.75
    },

    {
        title: "Astral Hawk Drone",
        img: "../Assets/Img/Projects/AstralHawkDrone.JPG",
        desc: "The Astral Hawk Drone is the first version of the Astral Hawk. Like the Real Cargo ship that will be built in the future this version has the thrust on the corners, but with fan blades.",
        url: "Order/",
        date: "09 / 2024",
        price: 100.15
    },
]

function displayProduct(productNum) {
    document.getElementById("productInfoTitle").innerHTML = products[productNum].title;
    document.getElementById("productInfoImg").src = products[productNum].img;
    document.getElementById("productInfoDesc").innerHTML = products[productNum].desc;

    document.getElementById("productBtnsUrl").href = products[productNum].url;
    document.getElementById("productBtnsDate").innerHTML = products[productNum].date;
    document.getElementById("productBtnsPrice").innerHTML = "$ " + products[productNum].price;
}
