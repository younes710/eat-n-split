import Friend from '../friend/Friend';

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
 return (
  <ul>
   {friends.map((friend, index) => (
    <Friend
     friend={friend}
     key={friend.id}
     onSelection={onSelection}
     selectedFriend={selectedFriend}
    />
   ))}
  </ul>
 );
};

export default FriendsList;
