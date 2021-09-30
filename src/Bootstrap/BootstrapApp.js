import '../App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useState } from 'react';
import BootstrapTable from './BootStrapTable';
import SpinnerComponent from './Spinner'
import { Form } from 'react-bootstrap';
import React from 'react';

function BootstrapApp() {
    const [allData, setAllData] = useState([]);
    const todoIdRef = React.useRef()
    const [spin, setspin] = useState(false)

    const handleClick = (event) => {
        setspin(true)
        event.preventDefault()
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(response => setAllData(response.data))
            .then(setspin(false))
            .catch((error) => {
                console.log(error)
                this.setState({ error: error })
            })
    }


    const handleInputClick = (event) => {
        setspin(true)
        event.preventDefault()
        axios.get('https://jsonplaceholder.typicode.com/todos/' + todoIdRef.current.value)
            .then(response => setAllData(response.data))
            //.then(setspin(false))
            .catch((error) => {
                console.log(error)
                this.setState({ error: error })
            })
    }
    return (
        <div className="App">
            <header className="App-header">
                <Button variant="primary" onClick={() => console.log('here')}>Click me</Button>

                <Form onSubmit={handleInputClick}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter todo id</Form.Label>
                        <Form.Control type="text" ref={todoIdRef} />
                        <Form.Text className="text-muted">
                            Enter todo id to fetch
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>


                <Button onClick={handleClick}>Get All Data</Button>
                <SpinnerComponent isSpin={spin} />
                <br />
                <BootstrapTable restData={allData} />
            </header>

        </div>







    );
}
export default BootstrapApp;