import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignInAsync } from '../../Services/Action/AuthAction';

function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { IsLogin } = useSelector(state => state.Authreducer)


    const [Inputlist, setInputlist] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputlist({ ...Inputlist, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(SignInAsync(Inputlist))
    }
    if (IsLogin) {
        navigate('/')
    }
    else {
        return (
            <>
                <h1>SignIn</h1>
                <Container>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={Inputlist.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={Inputlist.password} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        <p>
                            Already have Account ?
                            <NavLink className="ms-2" to='/signup'>
                                SignUp
                            </NavLink>
                        </p>

                    </Form>
                </Container>
            </>
        )
    }

}

export default SignIn
