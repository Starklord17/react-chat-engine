import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
        height="100vh" 
        projectID="a4d71552-4664-482f-b151-cc7c357bd112" 
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

export default App;

// userName="javascriptmastery"
// userSecret="123123"