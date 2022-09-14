import React, { useEffect, useState } from 'react'
import Note from './models'
import ShowNotes from './ShowNotes'
import { GetMaxId } from './GetMaxId';
import {
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit'
import Navbar from './Navbar';
export const Form = () => {
    
    const NOTES_MAIN_STORE = "MAIN_STORE";
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [arr, setArr] = useState([])

    let main_data_array = JSON.parse(localStorage.getItem(NOTES_MAIN_STORE) || '[]')
    useEffect(() => {
        if(main_data_array)
          setArr(main_data_array)
      }, []);

    const handleAdd = () => {
        let id=0;
        let main_data_array = JSON.parse(localStorage.getItem(NOTES_MAIN_STORE) || '[]');
        const note= new Note(id,title,desc)
        note._date = new Date().toLocaleString();
        note.id = GetMaxId(main_data_array) + 1;
        main_data_array.push(note);
        setArr(main_data_array)
        localStorage.setItem(NOTES_MAIN_STORE, JSON.stringify(main_data_array));
    }

    const editData=(title,desc)=>{
        setTitle(title)
        setDesc(desc)
    }
    return (
        <div>
            <Navbar />
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Notes App</MDBCardTitle>
                    <MDBCardText>
                        Save your Notes...
                    </MDBCardText>
                    <MDBInput label='Title' id='formControlDefault' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <MDBInput label='Description' id='formControlLg' type='text' value={desc} size='lg' onChange={(e) => setDesc(e.target.value)} />
                    <br />
                    <MDBBtn color='success' onClick={handleAdd}>Add</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete</MDBBtn>
                    <MDBBtn className='mx-1' color='dark'>Update</MDBBtn>
                    <MDBBtn className='mx-1' color='dark'>Delete All</MDBBtn>
                    <MDBBtn className='mx-1' color='dark' >Restore All</MDBBtn>
                    <MDBBtn className='mx-1' color='dark'>Archive</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <ShowNotes setArr={setArr} arr={arr} edit={editData} />
        </div>
    )
}
