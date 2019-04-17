import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

<body>
    <ul class="pages">
        <li class="chat page">
          <div id="usernameDisplayArea">Current Username: </div>
          <div class="chatArea">
            <ul class="messages"></ul>
          </div>
          <div class="userlist">
            <ul id="users"></ul>
          </div>
          <input id="textarea" class="inputMessage" placeholder="Please Type Here..."/>
        </li>
        <li class="login page">
          <div class="form">
            <h3 class="title">What's your nickname?</h3>
            <input id="usernameInput" class="usernameInput" type="text" maxlength="14" />
            <h3 class="title">Chatroom Number</h3>
            <input id="chatroomInput" class="usernameInput" type="number" maxlength="14" />
            
          </div>
        </li>
      </ul>
      
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
    <script src="/chat.js"></script>
</body>

    );
  }
}

export default App;
