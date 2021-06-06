import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { tv } from '../configs'

const FormTv = () => {
  const formik = useFormik({
    initialValues: tv.value,
    validationSchema: Yup.object(tv.schema),
    onSubmit: values => {
      const data = {
        addType: 'tv',
        values,
      }
      console.log(data)
    },
  })
  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Brand name</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              placeholder="Brand name"
              value={formik.values.brand}
              onChange={formik.handleChange}
              isValid={formik.touched.brand && !formik.errors.brand}
              isInvalid={formik.touched.brand && !!formik.errors.brand}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.brand}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              placeholder="Model"
              value={formik.values.model}
              onChange={formik.handleChange}
              isValid={formik.touched.model && !formik.errors.model}
              isInvalid={formik.touched.model && !!formik.errors.model}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.model}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>SmartTV</Form.Label>
            <Form.Control
              type="text"
              name="smartTV"
              placeholder="SmartTV"
              value={formik.values.smartTV}
              onChange={formik.handleChange}
              isValid={formik.touched.smartTV && !formik.errors.smartTV}
              isInvalid={formik.touched.smartTV && !!formik.errors.smartTV}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.smartTV}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Technologies</Form.Label>
            <Form.Control
              type="text"
              name="technologies"
              placeholder="Technologies"
              value={formik.values.technologies}
              onChange={formik.handleChange}
              isValid={
                formik.touched.technologies && !formik.errors.technologies
              }
              isInvalid={
                formik.touched.technologies && !!formik.errors.technologies
              }
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.technologies}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Connectors</Form.Label>
            <Form.Control
              type="text"
              name="connectors"
              placeholder="Connectors"
              value={formik.values.connectors}
              onChange={formik.handleChange}
              isValid={formik.touched.connectors && !formik.errors.connectors}
              isInvalid={
                formik.touched.connectors && !!formik.errors.connectors
              }
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.connectors}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Screen Resolution</Form.Label>
            <Form.Control
              type="text"
              name="screenResolution"
              placeholder="Screen Resolution"
              value={formik.values.screenResolution}
              onChange={formik.handleChange}
              isValid={
                formik.touched.screenResolution &&
                !formik.errors.screenResolution
              }
              isInvalid={
                formik.touched.screenResolution &&
                !!formik.errors.screenResolution
              }
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.screenResolution}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="col-8">
            <Form.Label>Photo link</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo link"
              value={formik.values.photo}
              onChange={formik.handleChange}
              isValid={formik.touched.photo && !formik.errors.photo}
              isInvalid={formik.touched.photo && !!formik.errors.photo}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.photo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              isValid={formik.touched.price && !formik.errors.price}
              isInvalid={formik.touched.price && !!formik.errors.price}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.price}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group
            as={Col}
            className="mb-3"
            controlId={`exampleForm.ControlTextarea.TV`}
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              rows={3}
              style={{ resize: 'none' }}
              isValid={formik.touched.description && !formik.errors.description}
              isInvalid={
                formik.touched.description && !!formik.errors.description
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Button type="submit" className="ml-auto mr-2 mb-4">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </>
  )
}

export default FormTv
