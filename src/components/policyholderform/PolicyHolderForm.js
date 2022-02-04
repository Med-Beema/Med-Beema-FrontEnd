import React, { useState } from "react";
import "./policyholderform.css";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export default function PolicyHolderForm() {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState({
    name: "",
    fatherName: "",
    dob: "",
    permanentAddress: "",
    occupation: "",
    contactNum: "",
    photo: "",
    identificationNum: "",
    idType: "",
    issuedDate: "",
    issuedPlace: "",
    identificationPhoto: "",
    signature: "",
  });
  function handleChange(e) {
    const data = e.target.value;
    setValues({
      ...values,
      [e.target.name]: data,
    });
  }

  function handleImageChange(e) {
    if (e.target.files.length) {
      let formData = new FormData();
      formData.set("image", e.target.files[0]);
      axios
        .post("http://localhost:5000/api/uploadImage", formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setValues((prevState) => ({
              ...prevState,
              [e.target.name]: res.data.image,
            }));
          }
        });
    }
  }

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      console.log(values);
      axios
        .post("http://localhost:5000/api/data", values)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setValidated(true);
  }
  return (
    <Container>
      <Form
        className="row g-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            value={values.name}
            name="name"
            type="text"
            onChange={handleChange}
            hasfeedback="true"
            rules={[{ required: true, message: "Please enter valid name" }]}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fathers Name</Form.Label>
          <Form.Control
            required
            value={values.fatherName}
            name="fatherName"
            type="text"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            required
            value={values.dob}
            name="dob"
            type="date"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            value={values.permanentAddress}
            name="permanentAddress"
            type="text"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            required
            value={values.occupation}
            name="occupation"
            type="text"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            required
            value={values.contactNum}
            name="contactNum"
            type="tel"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Photo</Form.Label>
          {values.photo && (
            <img src={values.photo} alt="" width={200} height={200} />
          )}
          <Form.Control
            required
            type="file"
            name="photo"
            onChange={handleImageChange}
            accept="image/*"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Identification</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.identificationNum}
            name="identificationNum"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ID Type</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.idType}
            name="idType"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Issued Date</Form.Label>
          <Form.Control
            required
            type="date"
            value={values.issuedDate}
            name="issuedDate"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Issued Place</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.issuePlace}
            name="issuePlace"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Identification Photo</Form.Label>
          {values.identificationPhoto && (
            <img
              src={values.identificationPhoto}
              alt=""
              width={200}
              height={200}
            />
          )}
          <Form.Control
            required
            type="file"
            name="identificationPhoto"
            onChange={handleImageChange}
            accept="image/*"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Signature</Form.Label>
          {values.signature && (
            <img src={values.signature} alt="" width={200} height={200} />
          )}
          <Form.Control
            required
            type="file"
            name="signature"
            onChange={handleImageChange}
            accept="image/*"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}
