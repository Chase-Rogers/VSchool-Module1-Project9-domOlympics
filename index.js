const headerId = document.getElementById("header");
const elementH1 = document.createElement("h1");
const elementP = document.createElement("p");
const messagesContainer = document.getElementsByClassName("messages")

let themeValue = document.getElementById("theme-drop-down").value;
let arrayOfMessages = document.getElementsByClassName("message");

const convo = ["Mom where are you?", "Driving home from shopping. Why are you asking?", "Mom, we went shopping together! T_T", "Oh my God! Stay where you are. I'm coming back!"]

// creates H1 tag and inner text
elementH1.appendChild(document.createTextNode("JavaScript Made This!!"));
headerId.appendChild(elementH1);
headerId.setAttribute("class", "header");

// creates P tag and inner text including span tag and a style
elementP.innerHTML = "<span class='name'>Chase Rogers</span> wrote this JavaScript";
headerId.appendChild(elementP);
elementP.setAttribute("class", "createdBy");
elementP.style.textAlign = "center";
document.getElementsByTagName("button")[1].setAttribute("id", "send");
messagesContainer[0].setAttribute("id", "messages")

for (i = 0; i < arrayOfMessages.length; i++) {
    arrayOfMessages[i].textContent = convo[i];
}

const clearChat = () => {
    messagesContainer[0].innerHTML = "";
};

const sendMessage = (e) => {
    e.preventDefault();
    let textMessage = document.getElementById("input").value.trim();
    if (textMessage !== "") {
        newMessage(textMessage);
    }
};

// creates new message
const newMessage = (message) => {
    let messageDiv = document.createElement("div");
    messageDiv.setAttribute("class","message " + themeValue);
    messageDiv.textContent = message;
    let lastArrayIndex = arrayOfMessages.length - 1;
    applyTheme(messageDiv, lastArrayIndex);
}

// applies selected theme to all messages
const applyTheme = (message, index) => {
    arrayOfMessages = document.getElementsByClassName("message");
    if (arrayOfMessages.length === 0 || arrayOfMessages[index].classList.contains("right")) {
        message.classList.add("left")
    } else {
        message.classList.add("right")
    } 
    document.getElementById("messages").appendChild(message);
    arrayOfMessages = document.getElementsByClassName("message");
} 

const changeTheme = () => {
    const previousValue = themeValue;
    arrayOfMessages = document.getElementsByClassName("message");
    themeValue = document.getElementById("theme-drop-down").value;

        for (var i = 0; i < arrayOfMessages.length; i++) {
            arrayOfMessages[i].classList.remove(previousValue)
            arrayOfMessages[i].classList.add(themeValue);
        }    
}

// event listeners
document.getElementById("clear-button").addEventListener("click", clearChat);
document.getElementById("theme-drop-down").addEventListener("change", changeTheme);
document.getElementById("send").addEventListener("click", sendMessage);