
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';

export default function ShowNotes(props) {
  const NOTES_MAIN_STORE = "MAIN_STORE";
  const NOTES_DELETED_STORE = "DELETED_STORE";
  
  const {arr,setArr}=props

  const handleDelete = (id) => {
    let main_data_array = JSON.parse(localStorage.getItem(NOTES_MAIN_STORE) || '[]');
    let deleted_array = JSON.parse(localStorage.getItem(NOTES_DELETED_STORE) || '[]');
    let searched_item = main_data_array.find(t => t.id === id);
    if (searched_item != null) {
      deleted_array.push(searched_item);
    }
    const newNotes = main_data_array.filter(note => note.id !== id);
    setArr(newNotes)
    localStorage.setItem(NOTES_MAIN_STORE, JSON.stringify(newNotes));
    localStorage.setItem(NOTES_DELETED_STORE, JSON.stringify(deleted_array));
  }

  const handleEdit=(id,title,desc)=>{
    props.edit(id,title,desc)
  }

  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>Serial No.</th>
          <th scope='col'>Title</th>
          <th scope='col'>Description</th>
          <th scope='col'>Date</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {arr && arr.map((element, index) => {
          return (<tr key={element.id}>
            <th scope='row'>{index + 1}</th>
            <td >{element.title}</td>
            <td >{element.desc}</td>
            <td>{element._date}</td>
            <td>
              <MDBBtn className='mx-2' color='danger' onClick={() => handleDelete(element.id)}>Delete</MDBBtn>
              <MDBBtn className='mx-1' color='dark' onClick={()=>handleEdit(element.id,element.title,element.desc)}>Edit</MDBBtn>
            </td>
          </tr>)
        })}
      </MDBTableBody>
    </MDBTable>
  );
}