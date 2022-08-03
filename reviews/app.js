// local reviews data
const reviews = [
    {
      id: 1,
      name: "Dillon Horne",
      job: "Midfielder ",
      img:
        "./Images/person 1.png",
      text:
        "Can put a decent perfomance in midfield. Tends to hold on to the ball a bit long but has tackles , goals and assits in him  ",
    },
    {
      id: 2,
      name: "Tyrone Welman",
      job: "Midfielder / Defender",
      img:
        "./Images/personcut2.jpg",
      text:
        "Player who lives in both attacks and defense , Does a solid job in both places throughout the field ",
    },
    {
      id: 3,
      name: "Dullah Jacobs",
      job: "Attacking Midfielder",
      img:
        "./Images/person 3.png",
      text:
        "Silky Smooth on the left foot , loves a good step over in the game. Can be Dangerous in the middle of park also",
    },
    {
      id: 4,
      name: "Keegan Simmons",
      job: "Trouble Maker",
      img:
        "./Images/person 4.png",
      text:
        " Tough but clean with the tackles , Hates to lose , Hates people not tracking back even more,"    },

    {
    id: 5,
    name: "Gary Jackson",
    job: "GoalKeeper / Drinker ",
    img:
    "./Images/person 6.png",
    text:
    " Current Goalkeeper For Never On Time, Loves a good block and isnt afraid to go play in field for short amount of times"    },




  ];

  // select items 
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const  info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

 // set starting item
 let currentItem = 0; //global var

 // load intial item
 window.addEventListener("DOMContentLoaded",function(){
     showPerson();
 });

 // show person based on function
 function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
 }

 //show next person
 nextBtn.addEventListener("click", function (){
     currentItem++;
     if(currentItem > reviews.length - 1){
         currentItem = 0;
     }
     showPerson();

 })
//show previous person
 prevBtn.addEventListener("click", function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();

})

//show random person

randomBtn.addEventListener("click", function (){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
