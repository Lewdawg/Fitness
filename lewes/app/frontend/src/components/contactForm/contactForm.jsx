import './contactForm.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ContactForm() {



    return (

        <Form className="theContactForm" style={{ width: "75%", height: "75%" }}>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" style={{ width: "30%" }} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" style={{ width: "30%" }} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "30%" }}>
                Submit
             </Button>
        </Form>
    )
}

export default ContactForm
