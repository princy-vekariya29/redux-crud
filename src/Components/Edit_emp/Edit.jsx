import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Emp from '../../../public/Emp.avif'
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Update_emp } from '../../Services/Action/EmpAdd';


// function getData(){
//     let data = localStorage.getItem("emp_data");
//     if(data != null){
//         return JSON.parse(data);
//     }
//     else{
//         return [];
//     }
// }

function Edit() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const location = useLocation();

    // console.log("Location>>>",location.state);

    // const N_data = dispatch(); 

    const N_data = useSelector(state => state.Emp_re.employe);
    const Index = useSelector(state => state.Emp_re.isIndex);

    // console.log("N_data",N_data);


    


    const [inputList, setinputList] = useState(N_data); 

  console.log(inputList,"inputList");

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value

        setinputList({...inputList, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        dispatch(Update_emp(inputList, Index));
        navigate('/');
        // let gdata = getData();

        // gdata[location.state.index] = inputList;
        // localStorage.setItem("emp_data", JSON.stringify(gdata));

        // console.log("gdata",gdata);
        // navigate("/view_emp");
    }

    return (
        <>
            <Container>
                <h1>Edit Employees Details</h1>
                <div className="d-flex">
                    <div className="col-6">
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>First-Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" name='fname'value={inputList.fname} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>Last-Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name='lname' value={inputList.lname} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' value={inputList.email} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>Offically Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter offically email" name='omail'value={inputList.omail} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="number" placeholder="Enter number" name='contact' value={inputList.contact} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className='col-6 mt-3'>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type='text' placeholder='Enter city' name='city' value={inputList.city} onChange={handleChange}/>
                                </Form.Group>
                            </Row>
                            <Form.Group className="col-6 mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" name='address' value={inputList.address} onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="col-6 mb-3">
                                    <Form.Label>desgination</Form.Label>
                                    <Form.Control placeholder="Add desgination" name='desgination' value={inputList.desgination} onChange={handleChange} />
                                </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Gender</Form.Label>
                                <div className="d-flex">

                                    {
                                        ['Male', 'Female'].map((label) => {
                                            return (
                                                <Form.Check type="radio" label={label} name='gender' value={label} onChange={handleChange} checked={label == inputList.gender}/>

                                            )
                                        })
                                    }
                                </div>

                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-6">
                        <img src={Emp} alt="" style={{width:"100%", height: "100%"}} />
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Edit;
