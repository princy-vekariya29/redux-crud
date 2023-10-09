import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { SignUpAsync } from '../../Services/Action/AuthAction';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function SignUp() {

    const dispatch = useDispatch()

    const [Inputlist, setInputlist] = useState({
        fname: "",
        email: "",
        password: "",
        con_password: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputlist({ ...Inputlist, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(SignUpAsync(Inputlist))
    }

    return (
        <>
            <h1>SignUp</h1>
            <Container>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full-Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="fname" value={Inputlist.fname} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={Inputlist.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={Inputlist.password} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm-Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm-Password" name="con_password" value={Inputlist.con_password} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>



                   
                        <p>
                            Already Account ?
                           <NavLink to='/signin'>
                                SignIn
                           </NavLink>
                        </p>
                    
                </Form>
            </Container>
        </>
    )
}

export default SignUp
