window.onload = changeUsername();

  function changeUsername(element) {
    var username = prompt("Enter your username"); //asks for your username
    document.getElementById("username").innerHTML = username; //displays your username
  }
  