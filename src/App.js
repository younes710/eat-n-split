import Button from './components/button/Button';
import FormAddFriend from './components/formAddFriend/FormAddFriend';
import FormSplitBill from './components/formSplitBill/FormSplitBill';
import FriendsList from './components/friendsList/FriendsList';

function App() {
    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList />
                <FormAddFriend />
                <Button>Add friend</Button>
            </div>
            <FormSplitBill />
        </div>
    );
}

export default App;
