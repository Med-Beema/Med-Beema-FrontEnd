import React, { useState } from "react";
import "./design.css";
import { Form, Input, Upload, Checkbox, Button, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export default function Design() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      name: "Yunip Lal Shrestha",
      fatherName: "Ram Shrestha",
      permanentAddress: "Hetauda",
      occupation: "Engineer",
      contactNum: "9876545278",
      identificationNum: "0276786969",
      idType: "Citizenship",
      issuedPlace: "Hetauda",
    });
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fatherName"
        label="Father Name"
        rules={[
          {
            required: true,
            message: "Please input your father name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="dob"
        label="DOB"
        rules={[
          {
            type: "object",
            required: true,
            message: "Please select date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="permanentAddress"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="occupation"
        label="Occupation"
        rules={[
          {
            required: true,
            message: "Please input your occupation!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="contactNum"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="idType"
        label="ID Type"
        rules={[
          {
            required: true,
            message: "Please input your ID Type!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="identificationNum"
        label="Identification"
        rules={[
          {
            required: true,
            message: "Please input your Identification!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="issuedDate"
        label="Issued Date"
        rules={[
          {
            type: "object",
            required: true,
            message: "Please select date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="issuePlace"
        label="Issued Place"
        rules={[
          {
            required: true,
            message: "Please input your Issued Place!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="photo"
        label="Photo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="identificationPhoto"
        label="Identification Photo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="signature"
        label="Signature"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error("You must agree before submitting.")
                  ),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
}
