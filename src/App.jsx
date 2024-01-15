import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import ChatUI from "./pages/ChatUI";
export default function App() {
    const [user, setUser] = useState(null);
    // Check if user is logged in
    const getUser = async () => {
        try {
            const loggedInUser = await CometChatUIKit.getLoggedinUser();
            setUser(loggedInUser);
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        getUser();
    }, []);
    return (
        <div className="App">
            {user ? <ChatUI /> : <Login getUser={getUser} />}
        </div>
    );
}
