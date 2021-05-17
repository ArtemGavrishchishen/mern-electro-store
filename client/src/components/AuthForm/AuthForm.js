import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const AuthForm = ({ closeModal }) => {
  const [key, setKey] = useState('first')

  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: values => {
      // closeModal()
      alert(JSON.stringify(values, null, 2))
    },
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      surname: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: values => {
      // closeModal()
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Tab.Container
      id="left-tabs-example"
      activeKey={key}
      onSelect={k => setKey(k)}
    >
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Form noValidate onSubmit={formikLogin.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formikLogin.values.email}
                  onChange={formikLogin.handleChange}
                  isValid={
                    formikLogin.touched.email && !formikLogin.errors.email
                  }
                  isInvalid={
                    formikLogin.touched.email && !!formikLogin.errors.email
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {formikLogin.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Your password</Form.Label>

                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formikLogin.values.password}
                  onChange={formikLogin.handleChange}
                  isValid={
                    formikLogin.touched.password && !formikLogin.errors.password
                  }
                  isInvalid={
                    formikLogin.touched.password &&
                    !!formikLogin.errors.password
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {formikLogin.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </Tab.Pane>

        <Tab.Pane eventKey="second">
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  isValid={formik.touched.name && !formik.errors.name}
                  isInvalid={formik.touched.name && !!formik.errors.name}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Your surname</Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  isValid={formik.touched.surname && !formik.errors.surname}
                  isInvalid={formik.touched.surname && !!formik.errors.surname}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.surname}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Your password</Form.Label>

                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={
                    formik.touched.password && !!formik.errors.password
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </Tab.Pane>
      </Tab.Content>

      {key === 'second' && <Nav.Link eventKey="first">first</Nav.Link>}
      {key === 'first' && <Nav.Link eventKey="second">second</Nav.Link>}
    </Tab.Container>
  )
}

export default AuthForm
