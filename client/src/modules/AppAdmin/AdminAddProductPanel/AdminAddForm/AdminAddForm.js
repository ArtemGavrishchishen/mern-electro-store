import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FieldArray, Formik } from 'formik'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Feedback from 'react-bootstrap/Feedback'

import FormMobile from './FormMobile'
import FormTablets from './FormTablets'
import FormNotebooks from './FormNotebooks'
import FormTv from './FormTv'

import { addTechnics } from '../../../../store/actions/technics.actions'
import { base, types } from '../configs'

const AdminAddForm = ({ type }) => {
  const [fileName, setFileName] = useState('Upload file')
  const inputRef = useRef()
  const dispatch = useDispatch()

  const getFileArray = fileList => {
    return Array.from(fileList)
  }

  const handleFileChange = (event, values, arrayHelper) => {
    const arrFiles = getFileArray(event.target.files)
    const file = arrFiles.length ? arrFiles[0] : undefined

    if (!file) return
    arrayHelper.replace(0, { file })

    // if (Array.isArray(values)) {
    //   arrayHelper.replace(0, { file })
    // } else {
    //   arrayHelper.push({ file })
    // }

    setFileName(file.name)
    const dt = new DataTransfer()
    arrFiles.forEach(file => {
      dt.items.add(file)
    })

    inputRef.current.files = dt.files
  }

  const handleDelete = () => {
    const dt = new DataTransfer()
    inputRef.current.files = dt.files
  }

  if (type === types.MOBILE) {
    return <FormMobile />
  }

  if (type === types.TABLETS) {
    return <FormTablets />
  }

  if (type === types.NOTEBOOKS) {
    return <FormNotebooks />
  }

  if (type === types.TV) {
    return <FormTv />
  }

  return (
    <>
      <Formik
        initialValues={base.value}
        validateOnChange
        validateOnBlur
        validateOnMount
        onSubmit={(values, actions) => {
          console.log('Formik', values)
          dispatch(addTechnics(values))
          actions.resetForm()
          setFileName('Upload file')
          handleDelete()
        }}
        validationSchema={Yup.object(base.schema)}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Brand name</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  placeholder="Brand name"
                  value={values.brand}
                  onChange={handleChange}
                  isValid={touched.brand && !errors.brand}
                  isInvalid={touched.brand && !!errors.brand}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.brand}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  name="model"
                  placeholder="Model"
                  value={values.model}
                  onChange={handleChange}
                  isValid={touched.model && !errors.model}
                  isInvalid={touched.model && !!errors.model}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.model}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} className="col-8">
                <Form.Label>Photo</Form.Label>
                <FieldArray
                  name="files"
                  render={arrayHelper => (
                    <Form.File id="formcheck-api-custom" custom>
                      <Form.File.Input
                        ref={inputRef}
                        name="files"
                        onChange={event => {
                          handleFileChange(event, values.fileInput, arrayHelper)
                        }}
                        isValid={touched.files && !errors.files}
                        isInvalid={touched.files && !!errors.files}
                      />
                      <Form.File.Label>{fileName}</Form.File.Label>
                      <Feedback type="invalid">{errors.files}</Feedback>
                    </Form.File>
                  )}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={values.price}
                  onChange={handleChange}
                  isValid={touched.price && !errors.price}
                  isInvalid={touched.price && !!errors.price}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId={`exampleForm.ControlTextarea.${type}`}
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  value={values.description}
                  onChange={handleChange}
                  rows={3}
                  style={{ resize: 'none' }}
                  isValid={touched.description && !errors.description}
                  isInvalid={touched.description && !!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Button type="submit" className="ml-auto mr-2 mb-4">
                Submit
              </Button>
            </Form.Row>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AdminAddForm
