const projects = [
    {
      title: "The Hyper-Quantum Thingamajig",
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
      title: "The Electro-Quantum-Thingamabob",
      description: "This project aims to develop a device that can do... a lot of stuff! It's all about harnessing the power of electro-quantum-hyper-something-something, to create a device that can generate limitless energy, create artificial gravity, and maybe even cure the common cold! It's all very scientific, trust me. Every scienceman dreams of making breakthroughs like this."
    },
    {
      title: "The Mind-Reading Brainwave Amplifier",
      description: "This project involves developing a device that can read people's thoughts by amplifying their brainwaves. We're talking about telepathy, folks! The possibilities are endless... from ending world hunger to winning the lottery. All we need is a few more volunteers to sign up for our human experimentation program."
    }
  ];

  const tmplProject = document.querySelector("#tmpl-project");
  const cardsNode = document.querySelector(".cards");
  let projectNodes = [];

  for(let i = 0; i < 5; i++){
    let lgt = projectNodes.length;
    projectNodes[lgt] = tmplProject.content.cloneNode(true);
    projectNodes[lgt].querySelector("h3").textContent = projects[i].title;
    projectNodes[lgt].querySelector("p").textContent = projects[i].description;
    cardsNode.appendChild(projectNodes[lgt]);

  }

  function User(name="John Doe", tag="@johndoe", pic="img/placeholder.png", project="New Document Template"){
    this.name = name;
    this.tag = tag;
    this.pic = pic;
    this.project = project;
  }

  let mainUser = new User("Sir Sanchez", "@sr.sanchez", "profile-img/0.png");
  let users = [
    new User(),
    mainUser,
    new User(),
    new User(),
  ]
 


  let userNodes = [];

  
  
  const trendingProjects = document.querySelector(".trending-projects");
  const tempUser = document.querySelector("#tmpl-user");
  
  users.forEach(user =>{
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

