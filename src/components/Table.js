import React from 'react';


function Table() {
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Article title</th>
                <th scope="col">Content</th>
                <th scope="col">Comments</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    );
}

export default Table
