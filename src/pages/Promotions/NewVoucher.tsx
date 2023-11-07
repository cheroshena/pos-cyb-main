import React from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import { Form, Input, Button, DatePicker } from "antd";

const Vouchers = () => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values: any) => {
    // Here, you can handle the form submission, including the form values
    console.log("Form values:", values);
  };

  const handleFormClear = () => {
    form.resetFields();
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
            className="col-span-1 overflow-auto rounded-lg bg-white p-5"
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
                New Voucher
              </h1>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full pr-2 md:w-1/2">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: "Please enter a name" }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="w-full px-2 md:w-1/2">
                <Form.Item name="description" label="Description">
                  <Input.TextArea />
                </Form.Item>
              </div>
              <div className="w-full pl-2 md:w-1/2">
                <Form.Item
                  name="amount"
                  label="Amount"
                  rules={[
                    { required: true, message: "Please enter an amount" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full pr-2 md:w-1/2">
                <Form.Item name="issuedDate" label="Issued Date">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </div>
              <div className="w-full pl-2 md:w-1/2">
                <Form.Item name="expireDate" label="Expire Date">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </div>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="mb-4 flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="mr-2 rounded-lg border bg-green-500 text-white hover:bg-green-800"
              >
                Submit
              </Button>
              <Button
                type="primary"
                onClick={handleFormClear}
                className="mr-2 rounded-lg border bg-red-500 text-white hover:bg-red-800"
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

export default Vouchers;
