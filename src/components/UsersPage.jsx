import { useState , useTransition } from 'react';
import TextField from '@mui/material/TextField';

const UserPage = ({ users }) => {
  
  const [data , setData] = useState(users);
  const [inputValue , setInputValue] = useState('');
  const [isPending , startTransition] = useTransition();
 
  const filterOnChange = (e) => {
    const query = e.target.value.replace(/[^0-9]/gi, '');
    setInputValue(query);
    
    const filter = data.filter((index) => {
      return index.id.indexOf(query) !== -1
    })
    
    if(filter.length !== 0){
      startTransition(() => {
        setData(filter)
      })
    }else{
      setData([])
    }
  }

  const displayUserList = () => {
    if(data.length === 0){
      return <p  className='text-primary text-center text-dark'>User with this ID was not found</p>
    }else{
      const result = data.map((index) => {
        return(
          <div key={index.id}>
            <h5>{index.title}</h5>
          </div>
        );
      })
      return result
    }
  }

  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center gap-3 p-4'>
      <h1 className='text-primary text-center text-dark'>User Page</h1>
      <TextField
      className='w-50'
      id="outlined-basic"
      label="Please Enter The User ID"
      variant="outlined"
      type='text'
      value={inputValue}
      onChange={(e) => filterOnChange(e)}
      />
      {
        isPending && <h3>loading ...</h3>
      }
      <ul>
        {
          displayUserList()
        }
      </ul> 
    </div>
  );
}

export default UserPage;