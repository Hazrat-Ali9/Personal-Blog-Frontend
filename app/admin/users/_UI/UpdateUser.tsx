import { updateUser } from "@/lib/firebase/user";
import { Button, Form, Input, Select } from "antd";
import React from "react";
import toast from "react-hot-toast";

const UpdateUser = ({ record }: { record: any }) => {
  console.log(record);
  const onFinish = (values: any) => {
    try {
      const result = updateUser(record.id, values);
      toast.success("User updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      name="form_in_modal"
      initialValues={{ ...record }}
      className="w-[300px]"
    >
      <Form.Item label="Name" name="name">
        <Input disabled />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input disabled />
      </Form.Item>
      <Form.Item label="Role" name="role">
        <Select>
          <Select.Option value="user">User</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateUser;
