const projects = [
    {
        title: "The Hyper-Quantum Device",
        description: "This project involves developing a device that can do... well, a lot of things! We're talking about super-quantum computing, hyper-dimensional imaging, and quantum-entanglement fusion, all rolled into one! And the best part? It runs on rainbows and unicorn farts! It's the dream of every scienceman out there."
    },
    {
        title: "The Interdimensional Portal Generator",
        description: "Okay, hear me out on this one. This project aims to create a device that can generate a portal to other dimensions. But, let's be real, we're not really sure if it's possible... or even safe! But, hey, we're sciencemen, we're not afraid to take risks... as long as we have good insurance."
    },
    {
        title: "The Neutrino Accelerator Thingy",
        description: "This project is all about accelerating neutrinos to... well, really fast speeds! We're talking speeds that would make Usain Bolt look like a sloth. And the best part? We're doing it all with a 'particle thingy' that we found in the back of the lab. I mean, what could possibly go wrong? This is just another day in the life of a scienceman."
    },
    {
        title: "The Electro-Quantum-Thingy",
        description: "This project aims to develop a device that can do... a lot of stuff! It's all about harnessing the power of electro-quantum-hyper-something-something, to create a device that can generate limitless energy, create artificial gravity, and maybe even cure the common cold! It's all very scientific, trust me. Every scienceman dreams of making breakthroughs like this."
    },
    {
        title: "The Mind-Reading Amplifier",
        description: "This project involves developing a device that can read people's thoughts by amplifying their brainwaves. We're talking about telepathy, folks! The possibilities are endless... from ending world hunger to winning the lottery. All we need is a few more volunteers to sign up for our human experimentation program."
    },
    {
        title: "The Molecular Resonance Harmonizer",
        description: "Okay, listen up! We're creating a device that can harmonize the vibrations of molecules, which means we can manipulate matter at the atomic level! Think of the possibilities... we could cure diseases, create new materials, and maybe even teleport objects! It's like having the power of a superhero, but without the cape. And get this, we're powering it with a crystal that we found on a mountaintop in Tibet. I don't know what it does, but it looks cool! This is the kind of breakthrough that's going to change the world, mark my words."
    },

];

//Setting cards 
const tmplProject = document.querySelector("#tmpl-project");
const cardsNode = document.querySelector(".cards");
let projectNodes = [];

for (let i = 0; i < 6; i++) {
    let lgt = projectNodes.length;
    projectNodes[lgt] = tmplProject.content.cloneNode(true);
    projectNodes[lgt].querySelector("h3").textContent = projects[i].title;
    let text = projects[i].description;
    projectNodes[lgt].querySelector("p").textContent =
    (text.length > 220) ? text.slice(0, 220) + " ◾ ◾ ◾": text;
    cardsNode.appendChild(projectNodes[lgt]);

}

//Setting Bulletin
const articleNodes = document.querySelectorAll(".article > p");

articleNodes.forEach(article => {
    let text = article.textContent;
    if(text.length > 180) article.textContent = text.slice(0,180) + "◾ ◾ ◾";
});

function User(name = "John Doe", tag = "@johndoe", pic = "img/placeholder.png", project = "New File Template") {
    this.name = name;
    this.tag = tag;
    this.pic = pic;
    this.project = project;
}

//Setting Users

let mainUser = new User("Sir Sanchez", "@sr.sanchez", "profile-img/0.png", projects[0].title);
let users = [
    new User("Carl G", "@carl.g", "profile-img/1.jpg", "The Felin Hypnotizer"),
    mainUser,
    new User("Nylah", "nylah.01", "profile-img/2.jpg", "Atomic Excavator"),
    new User("Claude", "its.claude", "profile-img/3.jpg", "Pocket Particle Accelarator"),
    
]



let userNodes = [];



const trendingProjects = document.querySelector(".trending-projects");
const tempUser = document.querySelector("#tmpl-user");

users.forEach(user => {
    let lgt = userNodes.length;

    userNodes[lgt] = tempUser.content.cloneNode(true);
    console.log(userNodes[lgt]);
    userNodes[lgt].querySelector(".profile-pic > img").src = user.pic;
    userNodes[lgt].querySelector(".profile-tag").textContent = user.tag;
    userNodes[lgt].querySelector(".profile-project").textContent = user.project;
    trendingProjects.appendChild(userNodes[lgt]);
});

const userNameNodes = document.querySelectorAll(".user.profile-name");
const userTagNodes = document.querySelectorAll(".user.profile-tag");
const userPicNodes = document.querySelectorAll(".user.profile-pic > img");
userNameNodes.forEach(userNameNode => userNameNode.textContent = mainUser.name);
userTagNodes.forEach(userTagNode => userTagNode.textContent = mainUser.tag);
userPicNodes.forEach(userPicNode => userPicNode.src = mainUser.pic);

