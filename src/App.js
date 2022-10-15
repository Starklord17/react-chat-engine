import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {
  return (
    <ChatEngine 
        height="100vh" 
        projectID="a4d71552-4664-482f-b151-cc7c357bd112" 
        userName="maxs" 
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

export default App;

// userName="javascriptmastery"
// userSecret="123123"