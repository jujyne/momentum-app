//name modal
function submitName(){
    const nameValue = document.getElementById('name').value;
    if (nameValue) {
        document.getElementById('greeting__name').textContent = ` ${nameValue}!`;
        document.getElementById('name-modal').style.display = "none"; 
        document.getElementById('name-modal-container').style.display = "none"; 
    }
    else{
        document.getElementById('name-modal').style.display = "none"; 
        document.getElementById('name-modal-container').style.display = "none"; 
    }
}

document.getElementById('name').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitName();
    }
  });

// //change name
const changeName = document.getElementById('change-name');
changeName.addEventListener("click", () =>{
    document.getElementById('name-modal').style.display = "flex"; 
    document.getElementById('name-modal-container').style.display = "flex"; 
});



//clock
function updateTimeAndGreeting() {
    const d = new Date();
    const seconds = d.getSeconds().toString().padStart(2, '0'); 
    const minutes = d.getMinutes().toString().padStart(2, '0');
    let hours = d.getHours();
    let ampm;
    
    let timeOfDay = '';
    function setTimeOfDay() {
        if (d.getHours() < 12) {
            timeOfDay = "morning";
        } else if (d.getHours() >= 12 && d.getHours() < 18) {
            timeOfDay = "afternoon";
        } else if (d.getHours() >= 18) {
            timeOfDay = "evening";
        }
    }
    setTimeOfDay();
        

    function setHours(){
        if (hours === 0){
            hours = 12;
        }
        else if (hours <= 12){
           hours = hours;
        }
        else if (hours > 12 )
            hours = hours % 12;
    }
    setHours();

    function setAmPm(){
        if (timeOfDay === "morning"){
            ampm = "am";
        }
        else if (timeOfDay === "afternoon" || timeOfDay === "evening"){
            ampm = "pm";
        }
    }
    setAmPm();

    const timeDisplay = document.getElementById("main__time");
    timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    //greeting
    let greeting;
    const greetingDisplay = document.getElementById('main__greeting');

    function setGreeting(){
        if (timeOfDay === "morning"){
            greeting = "Good morning";
        }
        else if (timeOfDay === "afternoon"){
            greeting = "Good afternoon"
        }
        else if (timeOfDay === "evening"){
            greeting = "Good evening  ";
        }

        greetingDisplay.textContent = greeting;
    }
    setGreeting();
}
setInterval(updateTimeAndGreeting, 1000);
updateTimeAndGreeting();



//focus
  const focusEdit = document.getElementById("focus__edit-button");
  const focusText = document.getElementById("main__focus__text-container");
  
  focusEdit.addEventListener("click", () =>{
      document.getElementById("focus-modal").style.display = "flex";
  })
  
  focusText.addEventListener("mouseover", () =>{
      document.getElementById("focus__edit-button").style.display = "block";
  });
  
  focusText.addEventListener("mouseout", () =>{
      document.getElementById("focus__edit-button").style.display = "none";
  });
  
  
  function submitFocus(){
      const focusValue = document.getElementById('focus').value;
      if (focusValue){
          const mainFocusText = document.getElementById('main__focus__text');
          mainFocusText.textContent = focusValue;
          mainFocusText.style.fontStyle = "normal";
          mainFocusText.style.fontWeight = "600";
          document.getElementById("focus-modal").style.display = "none";
          document.getElementById("main__focus__question").textContent = "Today :"
      } else{
          document.getElementById("focus-modal").style.display = "none"
      }
  }

document.getElementById('focus').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFocus();
    }
  });
  


//change quote
const changeQuote = document.getElementById("footer__quote__edit-button");
changeQuote.addEventListener("click", () =>{
    document.getElementById("quote-modal").style.display = "flex";
});

const cancelQuote = document.getElementById("cancel-quote");
cancelQuote.addEventListener("click", () =>{
    document.getElementById("quote-modal").style.display = "none";
});

function submitQuote(){
    const quoteValue = document.getElementById('quote').value;
    const authorValue = document.getElementById('author').value;
    if (quoteValue || authorValue){
        document.getElementById('footer__quote-area').textContent = `"${quoteValue}"`;
        document.getElementById('footer__quote-author').textContent = `-${authorValue}`;
        document.getElementById('quote-modal').style.display = "none";
    }
}


const quoteSource = [
    ["Life is like riding a bicycle. To keep your balance you must keep moving.", "Albert Einstein"],
    ["Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.", "Alan Cohen"],
    ["If you want a thing done well, do it yourself.", "Napoleon Bonaparte"],
    ["If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.", "Barack Obama"],
    ["The place to improve the world is first in one's own heart and head and hands.", "Robert M. Pirsig"],
    ["Only those who dare to fail greatly can ever achieve greatly.", "Robert Kennedy"],
    ["A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.", "Bernard Shaw"],
    ["Experience is not what happens to a man. It is what a man does with what happens to him.", "Aldous Huxley"],
    ["If you want your life to be more rewarding, you have to change the way you think.", "Oprah Winfrey"],
    ["Those who are free of resentful thoughts surely find peace.", "Buddha"]
  ];

function setRandomQuote(){
    let m = [Math.floor(Math.random()*quoteSource.length)];
    const randomQuote =quoteSource[m][0];
    document.getElementById("footer__quote-area").textContent = `"${randomQuote}"` ;
    const randomAuthor = quoteSource[m][1];
    document.getElementById("footer__quote-author").textContent = `-${randomAuthor}`;
}
setRandomQuote();



//backgroundimage 
const dayImageSource = [
    'images/day/background_day1.jpg', 
    'images/day/background_day2.jpg', 
    'images/day/background_day3.jpg', 
    'images/day/background_day4.jpg', 
    'images/day/background_day5.jpg'
];

const nightImageSource =  [
    'images/night/background_night1.jpg',
    'images/night/background_night2.jpg',
    'images/night/background_night3.jpg',
    'images/night/background_night4.jpg',
    'images/night/background_night5.jpg'
];

const imageDisplay = document.querySelector("body");
let lastImageChangeTime = -1;

function getRandomImage(imagesArray) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
}

function setImage() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let randomImage;

    if ((currentHour >= 6 && currentHour < 18) && (currentHour !== lastImageChangeTime)) {
        randomImage = getRandomImage(dayImageSource);
        lastImageChangeTime = currentHour;
    } else if ((currentHour < 6 || currentHour >= 18) && (currentHour !== lastImageChangeTime)) {
        randomImage = getRandomImage(nightImageSource);
        lastImageChangeTime = currentHour;
    }

    if (randomImage) {
        imageDisplay.style.backgroundImage = `url('${randomImage}')`;
    }
}

setImage();
setInterval(setImage, 1000);


const changeImageButton = document.getElementById("footer__left__button");
changeImageButton.addEventListener("click", () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    

    if (currentHour >= 6 && currentHour < 18) {
        randomImage = dayImageSource[Math.floor(Math.random() * dayImageSource.length)];
    } else {
        randomImage = nightImageSource[Math.floor(Math.random() * nightImageSource.length)];
    }

    // to preload the image
    const temporaryImage = new Image();
    temporaryImage.onload = () => {
        imageDisplay.style.backgroundImage = `url('${randomImage}')`;
    };
    temporaryImage.src = randomImage; // start loading the image
});




// todo 
const todoModal = document.getElementById("todo-modal");
const todoCloseButton =document.getElementById("todo-button__cancel");
const todoAddButton =document.getElementById("todo-button__add");
const todoInput = document.getElementById("todo-modal__bottom__add-text");
const todoSubmitInput = document.getElementById("todo__submit");


const todoTitle = document.getElementById("todo-icon")
todoTitle.addEventListener("click", ()=>{
    todoModal.style.display = "flex";
    todoTitle.style.display = "none";
});

todoCloseButton.addEventListener("click", ()=>{
    todoModal.style.display = "none";
    todoTitle.style.display = "flex";
});

todoAddButton.addEventListener("click", ()=>{
    todoInput.style.display = "flex";
});


const todoList = document.getElementById("todo-modal__textbox");
const todoValueList = [];

function submitTodoList(){
    const todoValue = document.getElementById('todo').value;
    
    if (todoValue){
        todoValueList.push( `${todoValue}`);

        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item');

        const todoItem = document.createElement("p");
        todoItem.classList.add('todo-item-font');
        todoItem.textContent = `${todoValue}.`;
        todoItem.style.wordBreak = "break-all";
        todoItem.style.paddingLeft ="1vmin";


        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        const deleteIcon = document.createElement("img");
        deleteIcon.src ="images/trash.png";
        deleteIcon.classList.add("delete-icon");
        deleteIcon.style.cursor = "pointer";
       

        const checkBox = document.createElement("input");
        checkBox.type ="checkbox";
        checkBox.classList.add("checkbox");
        checkBox.style.cursor = "pointer";
        checkBox.style.width = "2vmin";
        checkBox.style.height = "2vmin";

        
        todoItem.style.textAlign = "left";
        todoItem.style.paddingBottom = "0.25rem";

        deleteButton.addEventListener('click', function() {
            // Removes the todo item and update the todoValueList
            const index = todoValueList.indexOf(todoValue);
            if (index !== -1) {
                todoValueList.splice(index, 1);
            }
            todoItemContainer.remove();
        });

        deleteButton.append(deleteIcon);
        todoItemContainer.append(checkBox,todoItem,deleteButton);
        todoList.append(todoItemContainer);
        todoInput.style.display = "none";
        document.getElementById('todo').value ='';
    }
    else{
        todoInput.style.display = "none";
    }
}

document.getElementById('todo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitTodoList();
    }
  });


const todoTextElements = document.getElementsByClassName("todo-item-font");
const deleteIcons = document.getElementsByClassName("delete-icon");

for (let i = 0; i < todoTextElements.length; i++) {
    todoTextElements[i].addEventListener("mouseover", () => {
        deleteIcons[i].style.display = "block";
    });
    
    todoTextElements[i].addEventListener("mouseout", () => {
        deleteIcons[i].style.display = "none";
    });
}






















  

   
