var products = [
    {
        title: "Aite Module",
        img: "../Assets/Img/Projects/AiteModulePrototypev3.jpeg",
        desc: "Project Aite is the first prototype of the state of art hologram technology. It uses particles in the air reflecting light to create an image. Version 1 has 25 pixels. Each pixel is a module that has a light in it. A motherboard controls which pixel should be on and off to create the image you want. It increases the brightness to let the pixel go farther than other pixels.",
        url: "AiteModule/",
        date: "04 / 2027",
        price: 49.99
    },

    {
        title: "Paper",
        img: "https://www.rubicon.com/wp-content/uploads/2022/01/newspaper-bundles-for-paper-recycling.jpg",
        desc: "Just alot of paper...",
        url: "../MoreProjects/",
        date: "04 / 2024",
        price: 10.25
    },

    {
        title: "Phone",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Wow a phone! You dont see that every day...",
        url: "../MoreProjects/",
        date: "04 / 1982",
        price: 503.52
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
