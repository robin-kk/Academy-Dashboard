import React, { useState } from "react"
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import validator from "validator"
import axios from "axios"

const Registration = (props) => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [academy, setAcademy] = useState("")
    const [website, setWebsite] = useState("")
    const [formerr, setFormerr] = useState({})
    const error = {}

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleAcademy = (e) => {
        setAcademy(e.target.value)
    }
    const handleWebsite = (e) => {
        setWebsite(e.target.value)
    }


    const validation = () => {
        if (name.trim().length === 0) {
            error.name = "name cannot be blank"
        }
        if (validator.isEmail(email)) {
            setEmail(email)
        } else {
            error.email = "invalid Email"
        }

        if (password.trim().length === 0) {
            error.password = "Provide a password"
        }

        if (academy.trim().length === 0) {
            error.academy = "enter academy name"
        }
        if (website.trim().length === 0) {
            error.website = "mandatory field"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validation()
        if (Object.keys(error).length === 0) {
            const formdata = {
                username: name,
                email: email,
                password: password,
                academy: {
                    name: academy,
                    website: website
                }
            }
            axios.post("https://dct-e-learning.herokuapp.com/api/admin/register", formdata)
                .then((res) => {
                    const result = res.data
                    if (result.hasOwnProperty("errors")) {
                        alert(result.errors)
                    } else {
                        const popup = window.confirm(result.notice)
                        if (popup) {
                            props.history.push("/login")
                        }
                    }
                })
                .catch((err) => {
                    alert(err.message)
                })

        } else {
            setFormerr(error)
        }
    }

    return <div style={{ width: "500px", backgroundColor: "D9B08C" }} class="text-center" >
        <Form onSubmit={handleSubmit}>
            <h2 class="text-center"><span className="badge bg-secondary">Register with us</span></h2>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="enter your name" value={name} onChange={handleName} />
                {
                    (formerr.name) && <Form.Text style={{ color: "red" }}>
                        {formerr.name}
                    </Form.Text>
                }
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="enter your email" value={email} onChange={handleEmail} />
                {
                    (formerr.email) ? <Form.Text style={{ color: "red" }}>{formerr.email}</Form.Text> :
                        <Form.Text style={{ color: "red" }}> we will never share this email with anyone
                        </Form.Text>
                }

            </Form.Group>
            <Form.Group controlId="formpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="enter your password" value={password} onChange={handlePassword} />
                {
                    (formerr.password) && <Form.Text style={{ color: "red" }}>{formerr.password}</Form.Text>
                }
            </Form.Group>
            <Container>
                <Row>
                    <Col md="auto">
                        <Form.Group controlId="formAcademy">
                            <Form.Label>Academy</Form.Label>
                            <Form.Control type="text" value={academy} onChange={handleAcademy} />
                            {
                                (formerr.academy) && <Form.Text style={{ color: "red" }}>{formerr.academy}</Form.Text>
                            }
                        </Form.Group>
                    </Col>
                    <Col md="auto" >
                        <Form.Group controlId="formWebsite">
                            <Form.Label>website</Form.Label>
                            <Form.Control type="message" value={website} onChange={handleWebsite} />
                            {
                                (formerr.website) && <Form.Text style={{ color: "red" }}>{formerr.website}</Form.Text>
                            }
                        </Form.Group>
                    </Col>
                </Row><br />
            </Container>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    </div>
}
export default Registration