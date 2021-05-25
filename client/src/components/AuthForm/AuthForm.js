import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import AppAlerts from '../AppAlerts'

import { signIn } from '../../store/actions/auth.actions'
import { getUser } from '../../store/actions/user.actions'
import styles from './AuthPage.module.css'

const AuthForm = ({ closeModal }) => {
  const dispatch = useDispatch()
  const [key, setKey] = useState('first')
  const [error, setError] = useState(null)

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
      setError(null)

      dispatch(
        signIn(values, ({ error, data }) => {
          if (!error) {
            dispatch(getUser())
            closeModal()
          } else {
            setError(error.message)
          }
        })
      )

      alert(JSON.stringify(values, null, 2))
    },
  })

  const formikRegistration = useFormik({
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
    <>
      {/* <Toast
        onClose={() => {
          setError(null)
          setShowAlert(false)
        }}
        show={showAlert}
        delay={5000}
        autohide
        bsPrefix={styles.errorToast}
      >
        <Toast.Body>
          <Alert variant={'danger'}>{error}</Alert>
        </Toast.Body>
      </Toast> */}
      <AppAlerts text={error} onCloseAlert={setError} />
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
                      formikLogin.touched.password &&
                      !formikLogin.errors.password
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
              <Button type="submit">Login</Button>
            </Form>
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            <Form noValidate onSubmit={formikRegistration.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formikRegistration.values.name}
                    onChange={formikRegistration.handleChange}
                    isValid={
                      formikRegistration.touched.name &&
                      !formikRegistration.errors.name
                    }
                    isInvalid={
                      formikRegistration.touched.name &&
                      !!formikRegistration.errors.name
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {formikRegistration.errors.name}
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
                    value={formikRegistration.values.surname}
                    onChange={formikRegistration.handleChange}
                    isValid={
                      formikRegistration.touched.surname &&
                      !formikRegistration.errors.surname
                    }
                    isInvalid={
                      formikRegistration.touched.surname &&
                      !!formikRegistration.errors.surname
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {formikRegistration.errors.surname}
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
                    value={formikRegistration.values.email}
                    onChange={formikRegistration.handleChange}
                    isValid={
                      formikRegistration.touched.email &&
                      !formikRegistration.errors.email
                    }
                    isInvalid={
                      formikRegistration.touched.email &&
                      !!formikRegistration.errors.email
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {formikRegistration.errors.email}
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
                    value={formikRegistration.values.password}
                    onChange={formikRegistration.handleChange}
                    isValid={
                      formikRegistration.touched.password &&
                      !formikRegistration.errors.password
                    }
                    isInvalid={
                      formikRegistration.touched.password &&
                      !!formikRegistration.errors.password
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {formikRegistration.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit">Get Started</Button>
            </Form>
          </Tab.Pane>
        </Tab.Content>
        <Row>
          {key === 'second' && (
            <Nav.Link eventKey="first" className={styles.center}>
              Already have an account? Sign in.
            </Nav.Link>
          )}
          {key === 'first' && (
            <Nav.Link eventKey="second" className={styles.center}>
              Create Account
            </Nav.Link>
          )}
        </Row>
      </Tab.Container>
    </>
  )
}

export default AuthForm
