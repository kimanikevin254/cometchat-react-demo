import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
(async () => {
    const uiKitSettings = new UIKitSettingsBuilder()
        .setAppId(import.meta.env.VITE_APP_ID)
        .setRegion(import.meta.env.VITE_REGION)
        .setAuthKey(import.meta.env.VITE_AUTH_KEY)
        .subscribePresenceForFriends()
        .build();
    try {
        await CometChatUIKit.init(uiKitSettings);
        console.log("Initialization completed successfully");
        ReactDOM.createRoot(document.getElementById("root")).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } catch (error) {
        console.log("Initialization failed with error:", error);
    }
})();
