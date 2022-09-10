import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <h1>Register a new account</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-3">
        <span>Have an account?</span> <Link to="/login">Login</Link>
      </div>
    </>
  )
}

export default Register
