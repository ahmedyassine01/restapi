import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { getUsers, handleAdd } from '../redux/action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AddNewUser = () => {
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const  [phone, setphone] = useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const user={
            fullName,email,phone,
        };
        dispatch(handleAdd(user))
        dispatch(getUsers());
        closeModal()
    }

    Modal.setAppElement('#root');
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div>
        <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <form onSubmit={handleSubmit}>
            <label >Full Name</label>
            <input type="text" placeholder="foulen ben foulen " value={fullName} onChange={e=>setfullName(e.target.value)}/>
            <label >email</label>
            <input type="text" placeholder="foulen@yahoo.com" value={email}  onChange={e=>setemail(e.target.value)}/>
            <label >phone</label>
            <input type="text" placeholder="+2165458795" value={phone}  onChange={e=>setphone(e.target.value)}/>
            <div>
             <button onClick={closeModal}>Cancel</button>
             <button type="submit">Add</button>   
            </div>
            
        </form>
      </Modal>
    </div>
  )
}

export default AddNewUser