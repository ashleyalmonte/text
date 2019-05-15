  class User {
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []

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

  msg = new Message('Why do the knicks sucks?')
