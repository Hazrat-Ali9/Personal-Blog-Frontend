"use client";
import { getAllUsers } from "@/lib/firebase/user";
import { Button, Form, Input, Popover, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import UpdateUser from "./_UI/UpdateUser";

const Page = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <Table
      rowKey={"id"}
        dataSource={users}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Role",
            dataIndex: "role",
            key: "role",
          },
          {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, record: any) => (
              <Popover
                trigger={"click"}
                content={<UpdateUser record={record} />}
              >
                <Button
                  danger
                  type="primary"
                  onClick={() => {
                    console.log(record);
                  }}
                >
                  Edit
                </Button>
              </Popover>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Page;
