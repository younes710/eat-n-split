import { useState } from 'react';
import Button from './components/button/Button';
import FormAddFriend from './components/formAddFriend/FormAddFriend';
import FormSplitBill from './components/formSplitBill/FormSplitBill';
import FriendsList from './components/friendsList/FriendsList';

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);

    const handleShowAddFriend = () => {
        setShowAddFriend((show) => !show);
    };

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList />
                {showAddFriend && <FormAddFriend />}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>
            <FormSplitBill />
        </div>
    );
}

export default App;
