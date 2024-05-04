import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Table striped bordered hover>
      {/* <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <td>Title</td>
          <td>Journal</td>
        </tr>
        <tr>
          <td>Short form</td>
          <td>KRMU</td>
        </tr>
        <tr>
          <td>Initials</td>
          <td>blank</td>
        </tr>
        <tr>
          <td>Frequency</td>
          <td>2 Issues / yr</td>
        </tr>
        <tr>
          <td>DOI</td>
          <td>Unspecified</td>
        </tr>
        <tr>
          <td>ISSN</td>
          <td>Online:something print:something</td>
        </tr>
        <tr>
          <td>License</td>
          <td>CC-BY-SA</td>
        </tr>
        <tr>
          <td>Publisher</td>
          <td>K.R. Mangalam University</td>
        </tr>
        <tr>
          <td>Scope</td>
          <td><Link to={"#"}>   Aim & Scope</Link></td>
        </tr>
        <tr>
          <td>Indexing</td>
          <td><Link to={"#"}>   Indexing</Link></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Home