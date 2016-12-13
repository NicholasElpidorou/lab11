(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;
  //
  let lastNameStored = localStorage.lastName;
  console.log(`Name on page load: ${nameStored}`);
  console.log(`Name on page load: ${lastNameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored} ${lastNameStored}`;
    console.log(`Name stored is: ${nameStored} ${lastNameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Get the name the user entered:
    nameStored = userName.value;
	lastNameStored = lastName.value;
    // Show the name in "my-name":
    myName.innerHTML = nameStored + " " + lastNameStored;
    // Put the name into localStorage:
    localStorage.name = nameStored;
	localStorage.lastName = lastNameStored;
    console.log(`New name stored: ${nameStored} ${lastNameStored}`);
    return false;
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  
  function RemoveName(){
	localStorage.clear();
	
  }
  
  document.getElementById("bye").onclick = RemoveName;

}());
