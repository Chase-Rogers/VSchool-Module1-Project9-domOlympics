const headerId = document.getElementById("header");
const elementH1 = document.createElement("h1");
const elementP = document.createElement("p");
const elementDiv = document.createElement("div");
const arrayOfMessages = document.getElementsByClassName("message");
let arrLength = arrayOfMessages.length - 1;
let themeValue = document.getElementById("theme-drop-down").value;


// adds event listener to send button and calls the applicaple functions
document.getElementById("send").addEventListener("click", function(sendMessage) {
    sendMessage.preventDefault();
    themeValue = document.getElementById("theme-drop-down").value;
    newMessage();
    applyTheme();
});

// creates new message
function newMessage () {
    let textMessage = document.getElementById("input").value
    document.getElementById("messages").appendChild(messageDiv);
    messageDiv.setAttribute("class","message");
    messageDiv.textContent = textMessage;

}
// applys selected theme to all messages
function applyTheme (themeValue) {
    if (arrayOfMessages.length === 0 && themeValue === "theme-one") {
        messageDiv.setAttribute("class", "message left")
    } else if (arrayOfMessages.length === 0 && themeValue === "theme-two") {
        messageDiv.setAttribute("class", "message left aLeft")
    } else if (arrayOfMessages[arrLength].classList.contains("left") && themeValue === "theme-one") {
        messageDiv.setAttribute("class", "message right")
    } else if (arrayOfMessages[arrLength].classList.contains("right") && themeValue === "theme-one") {
        messageDiv.setAttribute("class", "message left")
    } else if (arrayOfMessages[arrLength].classList.contains("aLeft") && themeValue === "theme-two") {
        messageDiv.setAttribute("class", "message right aRight")
    } else if (arrayOfMessages[arrLength].classList.contains("aRight") && themeValue === "theme-two") {
        messageDiv.setAttribute("class", "message left aLeft")
    }
} 