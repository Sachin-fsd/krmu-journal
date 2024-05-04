import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CustomNavDropdown = ({ title, id, children }) => (
  <NavDropdown title={title} id={id}>
    {children}
  </NavDropdown>
);
function Topbar() {

  return (
    <>
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.krmangalam.edu.in/wp-content/uploads/2023/10/Group-25-300x47.webp"
              // width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {/* React Bootstrap */}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <div>Journal</div>
              <p className='nav-sub-heading'>Open Access & Peer Reviewed</p>  
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <CustomNavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aim and Scope</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Editorial Bond</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Organisation</NavDropdown.Item>
                <CustomNavDropdown title="Policies" id="more-options">
                  <NavDropdown.Item href="#action/3.3">Peer Review process</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Open Access Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Publication Ethics</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Plagiarism Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Withdrawal Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Errdata/Change Policy</NavDropdown.Item>
                </CustomNavDropdown>
                <NavDropdown.Item href="#action/3.2">Indexing</NavDropdown.Item>
                <CustomNavDropdown title="Metrices" id="more-options">
                  <NavDropdown.Item href="#action/3.3">Frequency</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Acceptance Rate</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Submission to Editorial Decision</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Submission to Final Decision</NavDropdown.Item>
                </CustomNavDropdown>
              </CustomNavDropdown>
              <CustomNavDropdown title="Browse" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Current Issue</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Past Issue</NavDropdown.Item>
              </CustomNavDropdown>
              <CustomNavDropdown title="Submissions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Author Guidelines</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Papers/Online Submissions</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Copyright Notice</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fees</NavDropdown.Item>
              </CustomNavDropdown>
            </Nav>
            <Form inline="true">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>


        </Container>
      </Navbar>
    </>

  );
}

export default Topbar;