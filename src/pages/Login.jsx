import React from "react";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
function Login({ getUser }) {
    const sampleusers = [
        {
            user: "Iron Man",
            UID: "SUPERHERO1",
        },
        {
            user: "Captain America",
            UID: "SUPERHERO2",
        },
        {
            user: "Spiderman",
            UID: "SUPERHERO3",
        },
        {
            user: "Cyclops",
            UID: "SUPERHERO5",
        },
    ];
    const handleLogin = async (UID) => {
        // Log in the user
        await CometChatUIKit.login(UID);
        getUser();
    };
    return (
        <div>
            <h2>Login to your account using our sample users</h2>
            {sampleusers.map(({ user, UID }) => (
                <button
                    key={UID}
                    onClick={() => handleLogin(UID)}
                    style={{
                        display: "block",
                        padding: ".5rem",
                        border: "1px solid gray",
                        width: "8rem",
                        borderRadius: "10px",
                        marginTop: ".5rem",
                    }}
                >
                    {user}
                </button>
            ))}
        </div>
    );
}
export default Login;
