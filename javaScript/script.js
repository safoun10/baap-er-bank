document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    const emailData = document.getElementById("email-input").value;
    const passData = document.getElementById("pass-input").value;

    if(emailData === "child@abba.com" && passData === "bangladesh"){
        location.replace("bank.html");
    }
    else{
        alert("abbe hala , korsos ki ? bank er password vuilla gesos ga ? nah , poladare ami manush banaite parlam na")
    }
});