import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function BootstrapTable({restData}) {
    console.log(restData)
if (restData.length <= 0){
    <div></div>
}     

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            {restData.map(row => (<tr>
                <td>{row.id}</td>
                <td>{row.userId}</td>
                <td>{row.title}</td>
                <td>{row.completed ? "true" : "false"}</td>
            </tr>
            ))}
        </Table>
    )
}
export default BootstrapTable