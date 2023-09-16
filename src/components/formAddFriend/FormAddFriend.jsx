import Button from '../button/Button';

const FormAddFriend = () => {
    return (
        <form className='form-add-friend'>
            <label>👩🏼‍🤝‍👩🏻 Friend name</label>
            <input type='text' />

            <label>🖼️ Imgae URL</label>
            <input type='text' />

            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;
