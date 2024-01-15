import React, { useState } from 'react';
import Modal from 'react-modal';

import { CometChat } from '@cometchat/chat-sdk-javascript';

const GroupCreationComponent = ({ setCurrentGroup }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [groupName, setGroupName] = useState('')

 const openModal = () => {
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
 };

 const handleCreateGroup = () => {
   const group = new CometChat.Group(
       new Date().getTime().toString(16) + Math.floor(Math.random() * 0xffffffff).toString(16),
       groupName,
       CometChat.GROUP_TYPE.PUBLIC
   )

   CometChat.createGroup(group).then(
       group => {
           console.log('success', group)
           closeModal()
           setCurrentGroup(group)
       }, error => {
           console.log('error', error)
       }
   )
  
 };

 return (
   <div>
     <button onClick={openModal} style={{width: '6rem'}}>New Group</button>

     <Modal
       isOpen={isModalOpen}
       onRequestClose={closeModal}
       appElement={document.getElementById('root')}
       style={{
         content: {
           top: '50%',
           left: '50%',
           right: 'auto',
           bottom: 'auto',
           marginRight: '-50%',
           transform: 'translate(-50%, -50%)',
         },
       }}
     >
       <h2>Create a Group</h2>
       <label>
         Group Name:
         <input type="text" value={groupName} onChange={e => setGroupName(e.target.value)} />
       </label>
       <button onClick={handleCreateGroup}>Create Group</button>
       <button onClick={closeModal}>Cancel</button>
     </Modal>
   </div>
 );
};

export default GroupCreationComponent;
