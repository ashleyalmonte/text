  class User {
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
    this.blocklist = []

  }
}
   sendMessage(rec){
   let msg = new Message()
   rec.inbox.push(msg)
 }
  sendMessage(recipient) {
  let msg = new Message()
  console.log('message sent: ' + msg.content)
  recipient.inbox.push(msg)
}

  class Message {
  constructor(content)
 this.content = prompt('Enter a message')

  }
}

 user1 = new User('ashleyalmonte@aol.com', '111')
 user2 = new User('sup@aol.com' '1111')
let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventlistener('keydown', function(event) {
  if (event.which == 13) {
    sendMessage()
  }
}

}

  msg = new Message('Why do the knicks sucks?')


  function sendMessage(){
    let text = document.getElementById('msg-content')
    let p = document.createElement('p')
    p.innerText = Text.value
    user2inbox.appendChild(p)
  }
