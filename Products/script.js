var products = [
    {
        title: "Aite Module",
        img: "../Assets/Img/Projects/AiteModulePrototypev3.jpeg",
        desc: "Project Aite is the first prototype of the state of art hologram technology. It uses particles in the air reflecting light to create an image. Version 1 has 25 pixels. Each pixel is a module that has a light in it. A motherboard controls which pixel should be on and off to create the image you want. It increases the brightness to let the pixel go farther than other pixels.",
        url: "AiteModule/",
        date: "04 / 2027",
        price: 49.99
    },
]

function displayProduct(productNum) {
    document.getElementById("productInfoTitle").innerHTML = products[productNum].title;
    document.getElementById("productInfoImg").src = products[productNum].img;
    document.getElementById("productInfoDesc").innerHTML = products[productNum].desc;

    document.getElementById("productBtnsUrl").href = products[productNum].url;
    document.getElementById("productBtnsDate").innerHTML = products[productNum].date;
    document.getElementById("productBtnsPrice").innerHTML = products[productNum].price;
}
