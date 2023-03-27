//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const payTerminal = {
  userName: "Anastasiia",
}

function showUserName(user) {
  if (user.userName) {
    console.log("Hello, " + user.userName);
  } else {
    console.log("There is no such name");
  }
}

showUserName(payTerminal);
