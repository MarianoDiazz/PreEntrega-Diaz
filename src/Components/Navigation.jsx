import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from './CarWidget';


const Navigation = () => {
    return (
        <Navbar variant='dark' expand="lg" className="bg-dark">
            <Container fluid>
                <Navbar.Brand href="#">Mi tienda</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Categorias" id="categorias">
                            <NavDropdown.Item href="#action3">Categoria 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Categoria 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Categoria 3</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Ej: Producto 1"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                    <Nav>
                        <Nav.Link>
                            <CarWidget></CarWidget>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation