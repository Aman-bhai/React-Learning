import React, { useState } from 'react'

const Input = () => {
    const [name, setname] = useState({
        fname: '',
        lname: '',
        email: ''
    })
    const [fullname, setfullname] = useState({
        fname: '',
        lname: '',
        email: ''
    })



    const handleChange = (event) => {
        console.log(event.target.value)
        let { name, value } = event.target

        setname((prevValue) => {
        return{
            ...prevValue,
            [name]:value,
        }

        })
    }


    const handleClick = () => {
        alert("Form is Submitted Successfully")
        setfullname(name)
        setname({fname:"",lname:"",email:""})
    }
    return (
        <div className='form'>
            <h1 className='h1'>Hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <input type='text' onChange={handleChange} placeholder='Enter the First Name' name='fname' value={name.fname} autoComplete='off' />
            <input type='text' onChange={handleChange} placeholder='Enter the Last Name' name='lname' value={name.lname} autoComplete='off' />
            <input type='email' onChange={handleChange} placeholder='Enter the Email' name='email' value={name.email} autoComplete='off' />
            <button onClick={handleClick}>Get Submitted</button>

        </div>
    )
}

export default Input
