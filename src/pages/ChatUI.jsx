import React from "react";
import { CometChatConversationsWithMessages } from "@cometchat/chat-uikit-react";
import { WithMessagesStyle } from "@cometchat/uikit-shared";
import { ConversationsConfiguration } from '@cometchat/uikit-shared'
import GroupCreationComponent from '../components/GroupCreationComponent';

function ChatUI() {
    const [currentGroup, setCurrentGroup] = React.useState(null)

    const styles = new WithMessagesStyle({
        width: "100vw",
        height: "100vh",
    });
    
    const conversationConfig = new ConversationsConfiguration({
        menu: <GroupCreationComponent setCurrentGroup={setCurrentGroup} />,
        disableUsersPresence: false,
        disableTyping: false,
        disableReceipt: true,
        disableSoundForMessages: true,
      })
 
    return <div>
        <CometChatConversationsWithMessages
           conversationsWithMessagesStyle={styles}
           conversationsConfiguration={conversationConfig}
           group={currentGroup ? currentGroup : null}
        />
    </div>;
}
export default ChatUI;
