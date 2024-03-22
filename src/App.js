import { useState } from 'react';
import Button from './components/button/Button';
import FormAddFriend from './components/formAddFriend/FormAddFriend';
import FormSplitBill from './components/formSplitBill/FormSplitBill';
import FriendsList from './components/friendsList/FriendsList';

const initialFriends = [
 {
  id: 118836,
  name: 'Clark',
  image: 'https://i.pravatar.cc/48?u=118836',
  balance: -7,
 },
 {
  id: 933372,
  name: 'Sarah',
  image: 'https://i.pravatar.cc/48?u=933372',
  balance: 20,
 },
 {
  id: 499476,
  name: 'Anthony',
  image: 'https://i.pravatar.cc/48?u=499476',
  balance: 0,
 },
];

function App() {
 const [friends, setFriends] = useState(initialFriends);
 const [showAddFriend, setShowAddFriend] = useState(false);
 const [selectedFriend, setSelectedFriend] = useState(null);

 const handleShowAddFriend = () => {
  setShowAddFriend((show) => !show);
 };

 const handleAddFriend = (friend) => {
  setFriends((friends) => [...friends, friend]);
  setShowAddFriend(false);
 };

 const handleSelection = (friend) => {
  // setSelectedFriend(friend);
  setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  setShowAddFriend(false);
 };

 const handleSplitBill = (value) => {
  setFriends((friends) =>
   friends.map((friend) =>
    friend.id === selectedFriend.id
     ? { ...friend, balance: friend.balance + value }
     : friend
   )
  );
  setSelectedFriend(null);
 };

 return (
  <div className='app'>
   <div className='sidebar'>
    <FriendsList
     friends={friends}
     selectedFriend={selectedFriend}
     onSelection={handleSelection}
    />
    {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
    <Button onClick={handleShowAddFriend}>
     {showAddFriend ? 'Close' : 'Add friend'}
    </Button>
   </div>
   {selectedFriend && (
    <FormSplitBill
     selectedFriend={selectedFriend}
     onSplitBill={handleSplitBill}
     key={`friend-${selectedFriend.id}`}
    />
   )}
  </div>
 );
}

export default App;
