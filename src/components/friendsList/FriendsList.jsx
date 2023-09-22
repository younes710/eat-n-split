import Friend from '../friend/Friend';

const FriendsList = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend, index) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    );
};

export default FriendsList;
