import { Button, Form, Input, Typography } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { useTitle } from "../../hooks/useTitle";

export default function ForgotPassword() {
  useTitle("Forgot Password");
  return (
    <div className="w-full h-full flex flex-col justify-center lg:w-1/2 mx-auto">
      <Typography.Title
        level={4}
        className="font-poppins flex items-center py-8"
      >
        <AiOutlineMail className="mr-2" /> Forgot Password
      </Typography.Title>
      <Form labelCol={{ span: 8 }} labelAlign="left">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input autoFocus />
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button
            type="primary"
            className="text-xs ml-4"
            icon={<AiOutlineMail size={10} />}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
