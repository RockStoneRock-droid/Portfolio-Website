class Chatbot {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() { //displays the menu on click
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox)) //opens chat menu

        sendButton.addEventListener('click', () => this.onSendButton(chatBox)) //sends messages

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => { //listens to if we hit enter button we also want to send a message
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state; //checks what the current state is

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input'); //extracts text from user
        let text1 = textField.value
        if (text1 === "") { //checks to see if text is empty
            return;
        }

        let msg1 = { name: "User", message: text1 } //defines dicitionary with user text
        this.messages.push(msg1); //pushes to messages array

        fetch($SCRIPT_ROOT + '/predict', { //hardcoded to local host, change depending on host
            method: 'POST', //defines method as post
            body: JSON.stringify({ message: text1 }),  //adds to json object
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json()) //waits for response and extracts json
          .then(r => {
            let msg2 = { name: "Chase", message: r.answer }; //defines object with answer as the message
            this.messages.push(msg2); //pushes method to array
            this.updateChatText(chatbox) //updates chattext
            textField.value = ''

        }).catch((error) => { //catches errors that could occur
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }


    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Chase")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages'); //creates new html text
        chatmessage.innerHTML = html; //sets the inner html to new text
    }
}

const chatbox = new Chatbot();
chatbox.display();