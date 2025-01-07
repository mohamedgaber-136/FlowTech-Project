import { Form, Input, Button, Row, Col, Select } from 'antd';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().email('Invalid email address').required('Please enter your email'),
  phone: Yup.string().required('Please enter your phone number'),
  role: Yup.string().required('Please select a role'),
  date:Yup.date().required('Please select a date')
});

const PersonalData = ({ onFormDataChange, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues} // Use initialValues from the parent
      validationSchema={validationSchema}
      onSubmit={onFormDataChange}
    >
      {({ handleSubmit, setFieldValue }) => (
        <FormikForm layout="vertical" onSubmit={handleSubmit}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item style={{ marginBottom: '16px' }}>
                <label htmlFor="name" className="labelData">
                  Name <span style={{ color: 'rgba(2, 105, 128, 1)' }}>*</span>
                </label>
                <Field
                  name="name"
                  render={({ field }) => <Input {...field} />}
                />
                <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item style={{ marginBottom: '16px' }}>
                <label htmlFor="date" className="labelData">
                  Start Date <span style={{ color: 'rgba(2, 105, 128, 1)' }}>*</span>
                </label>
                <Field
                  name="date"
                  render={({ field }) => <Input type="date" {...field} />}
                />
                <ErrorMessage name="date" component="div" style={{ color: 'red' }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item style={{ marginBottom: '16px' }}>
                <label htmlFor="email" className="labelData">
                  Email <span style={{ color: 'rgba(2, 105, 128, 1)' }}>*</span>
                </label>
                <Field
                  name="email"
                  render={({ field }) => <Input {...field} />}
                />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item style={{ marginBottom: '16px' }}>
                <label htmlFor="phone" className="labelData">
                  Phone <span style={{ color: 'rgba(2, 105, 128, 1)' }}>*</span>
                </label>
                <Field
                  name="phone"
                  render={({ field }) => <Input {...field} />}
                />
                <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item className="" style={{ marginBottom: '16px' }}>
                <label htmlFor="role" className="labelData">
                  Role <span style={{ color: 'rgba(2, 105, 128, 1)' }}>*</span>
                </label>
                <Field name="role">
                  {({ field }) => (
                    <Select
                      {...field}
                      style={{
                        borderRadius: '50px !important',
                      }}
                      onChange={(value) => setFieldValue('role', value)}
                    >
                      <Option value="IT">IT</Option>
                      <Option value="Software">Software</Option>
                      <Option value="Data Entry">Data Entry</Option>
                    </Select>
                  )}
                </Field>
                <ErrorMessage name="role" component="div" style={{ color: 'red' }} />
              </Form.Item>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button type="primary" className="AddEmployee px-5" htmlType="submit">
              Next
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default PersonalData;
