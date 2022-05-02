import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () => {
    return (
      <ChatEngine
        height="100vh"
        projectID="
57f00512-ae45-4a95-8874-2b79e49a6af5"
        userName="BLACK"
        userSecret="5010"
        renderChatFeed={
            (chatAppProps) => <ChatFeed {...chatAppProps} />
        }
      />
    );
}

export default App;