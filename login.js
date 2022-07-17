const usernameInput = document.querySelector(".user-input")
const passwordInput = document.querySelector(".password-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const singinMsg = document.querySelector(".singin-msg");
const loginBut = document.querySelector(".login-button");

loginBut.addEventListener("click" , singin);



   function singin (event) {
     event.preventDefault();
     usernameMsg.innerText = "";
     passwordMsg.innerText = "";
   const usernameValue = usernameInput.value;
   const passwordValue = passwordInput.value;
   
  let ifSendData = true; 

  if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1){
    usernameMsg.innerText = "please enter your email";
    ifSendData = false;
  }
  
  if ( passwordValue.length === 0) {
      passwordMsg.innerText = "plaese enter your password "
      ifSendData = false;

  } else if (passwordValue.length <= 4) {
    passwordMsg.innerText = "your password is to short";
    ifSendData = false;
  }
    if (ifSendData){
      const body = JSON.stringify({
        username: usernameValue,
        password: passwordValue,
      })
      const headers = {
       "Content-Type": "application/json"
      }
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        body: body,
        headers: headers
      })
    .then(response => {
      if(response.ok){
        singinMsg.innerText = " You sigend in successfully"
      }
    })

   }
  }