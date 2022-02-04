import React, { useState } from "react";
import "./policyholderform.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Descriptions, Spin } from "antd";

import axios from "axios";

export default function PolicyHolderForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
            setLoading(false);
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
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setValidated(true);
  }
  return (
    <Container>
      {!isSubmitted && (
        <Spin size="large" spinning={loading}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <Row className="align-items-center">
              <Col sm={3}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    value={values.name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    hasfeedback="true"
                    rules={[
                      { required: true, message: "Please enter valid name" },
                    ]}
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
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
              </Col>
              <Col sm={3}>
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
              </Col>
              <Col sm>
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
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
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
              </Col>
              <Col sm={3}>
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
              </Col>
              <Col sm={3}>
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
              </Col>
              <Col sm={3}>
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
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
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
              </Col>
              <Col sm={3}>
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
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="photo"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
                {values.photo && (
                  <img src={values.photo} width={200} height={200} alt="" />
                )}
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Identification Photo</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="identificationPhoto"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
                {values.identificationPhoto && (
                  <img
                    src={values.identificationPhoto}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Signature</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="signature"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
                {values.signature && (
                  <img src={values.signature} width={200} height={200} alt="" />
                )}
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Spin>
      )}
      {isSubmitted && (
        <div>
          <Descriptions
            bordered
            column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            contentStyle={{ backgroundColor: "#fff" }}
            labelStyle={{ backgroundColor: "#eee", fontWeight: "bold" }}
          >
            <Descriptions.Item label="Name:" span={2}>
              Cloud Database
            </Descriptions.Item>

            <Descriptions.Item label="Date of Birth" span={1}>
              2022.07.23
            </Descriptions.Item>
            <Descriptions.Item label="Father's Name" span={2}>
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Contact Number" span={1}>
              $ <span>1800</span>
            </Descriptions.Item>

            <Descriptions.Item label="Address" span={2}>
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Occupation" span={2}>
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Photo" span={3}>
              <img
                src="https://storageapi.fleek.co/685aaae9-5f7e-49dd-8fb6-72491d601510-bucket/MedBeema/image-1643737815117.png"
                height="200"
                alt=""
              ></img>
            </Descriptions.Item>
            <Descriptions.Item label="ID Type" span={2}>
              Citizinship
            </Descriptions.Item>
            <Descriptions.Item label="Issued Date" span={2}>
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Identification Number" span={2}>
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Issued Place" span={2}>
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Identification Photo" span={3}>
              <img
                src="https://storageapi.fleek.co/685aaae9-5f7e-49dd-8fb6-72491d601510-bucket/MedBeema/image-1643737815117.png"
                height="200"
                alt=""
              ></img>
            </Descriptions.Item>
            <Descriptions.Item label="Documents Submitted" span={3}>
              <img
                src="https://storageapi.fleek.co/685aaae9-5f7e-49dd-8fb6-72491d601510-bucket/MedBeema/image-1643737815117.png"
                height="200"
                alt=""
              ></img>
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}
    </Container>
  );
}
