import React, {useState} from 'react';

const AddContact = ({addContact}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addContact({ name, email, phoneNumber})
        setName('')
        setEmail('')
        setPhoneNumber('')

        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <input 
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input 
                    type="text" 
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                />
                <button type="submit">Add Contact</button>
            </form>
        )
    }
}

export default AddContact