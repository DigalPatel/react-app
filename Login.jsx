import React from 'react';
// import Register from './Register';
import { useState,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
export default function Login() {
	// const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    password: ""
  })
  const [validations, setValidations] = useState({
    name: '',
    password: '',

  })

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);
  

  const {

    name: nameVal,
    password: passwordVal,

  } = validations
  

  

  const validateAll = () => {
    const { name, password } = data
    const validations = { name: '', password: '' }
    let isValid = true
    // name validation 
    if (!name) {
      validations.name = <p style={{ color: 'red' }}>Name is required</p>
      isValid = false
    }

    else if (name && !/^.*(?=.{4,})[a-zA-Z ]*$/.test(name)) {
      validations.name = <p style={{ color: 'red' }}>Enter only character & more then 3 character</p>

      isValid = false
    }
    
    //password validation  
    if (!password) {
      validations.password = <p style={{ color: 'red' }}>password is required</p>
      isValid = false
    }
    else if (password && !/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/.test(password)) {
      validations.password = <p style={{ color: 'red' }}>password in insert 1 uppercase , lowercase , special character , numbers and compalsory 8 characters</p>
      isValid = false
    }

    setValidations(validations)


    return isValid
  }

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
    (JSON.stringify(data))
    const isValid = validateAll()

    if (!isValid) {
      
      return false
     
    }
    else 
    {
      window.location = '/Register';
    }

    setData({ name: "", password: ""});

  
    // window.location = '/Register';
  }
  

  return (
    <div>
      <center>
        <h1>LOGIN PAGE</h1>
        <form onClick={submitHandler} action="POST">
          {(JSON.stringify(data))}

          <div className='container mt-5 mb-5'>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" value={data.name} onBlur={validateAll} onChange={changeHandler} /><div>{nameVal}</div>
          </div>
          <div className='mb-5'>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" value={data.password} onBlur={validateAll} onChange={changeHandler} /><div>{passwordVal}</div>
          </div>


          <button className='btn btn-primary' >LOGIN</button>

  

        </form>
      </center>
    </div>

  );
}

