import React, { useState } from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import { DatePicker, Space, Input, Button, Form, DatePickerProps } from "antd";
import dayjs from 'dayjs';
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const Discounts = () => {
  const [form] = Form.useForm();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleStartDateChange = (
    date: React.SetStateAction<null>,
    dateString: any,
  ) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (
    date: React.SetStateAction<null>,
    dateString: any,
  ) => {
    setSelectedEndDate(date);
  };
  6  
  const handleFormSubmit = (values: any) => {
    // Here, you can handle the form submission, including the form values
    console.log("Form values:", values);
  };

  const handleFormClear = () => {
    form.resetFields();
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  return (
    <div className="min-h-screen min-w-fit bg-gray-100">
      <Dash_header />
      <div className="flex flex-grow">
        <Admin_Sidebar />
        <div className="m-5 flex flex-grow">
          <Form
            form={form}
            onFinish={handleFormSubmit}
            className="col-span-1 overflow-auto rounded-lg bg-white p-4"
            style={{
              width: "75%",
              maxWidth: "800px",
              margin: "0 auto",
              height: "70%",
              padding: "20px",
            }}
          >
            <div className="-mx-3 mb-6 flex flex-wrap">
              <h1 className="block pl-2 font-extrabold uppercase text-black">
                New Discount
              </h1>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: "Please enter a name" }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="w-1/2 pl-2">
                <Form.Item
                  name="percentage"
                  label="Percentage"
                  rules={[
                    { required: true, message: "Please enter a percentage" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <Form.Item name="startDate" label="Created Date">
                  <Space direction="vertical">
                    <DatePicker
                      style={{ width: "100%" }}
                      onChange={handleStartDateChange }
                      value={selectedStartDate}
                    />
                  </Space>
                </Form.Item>
              </div>
              <div className="w-1/2 pl-2">
                <Form.Item name="endDate" label="Expire Date">
                  <Space direction="vertical">
                    <DatePicker
                      style={{ width: "100%" }}
                      onChange={handleEndDateChange}
                      value={selectedEndDate}
                    />
                  </Space>
                </Form.Item>
              </div>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="mb-4 flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="mr-2 rounded-lg border bg-green-500  text-white hover:bg-green-800"
              >
                Submit
              </Button>
              <Button
                type="primary"
                onClick={handleFormClear}
                className="mr-2 rounded-lg border bg-red-500  text-white hover:bg-red-800"
              >
                Clear
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
