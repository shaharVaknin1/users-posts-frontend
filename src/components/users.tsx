import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { getUsers, User } from "../api/users";

export const Users = () => {
  const [data, setData] = useState<User[]>();

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers(1);
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <Table
      pagination={{
        onChange: async page => {
          const users = await getUsers(page);
          setData(users);
        },
        pageSize: 4,
        total: 10
      }}
      onRow={({ id }, rowIndex) => {
        return {
          onClick: event => console.log(`clicked row ${rowIndex} with id ${id}`)
        };
      }}
      dataSource={data}
      columns={[
        {
          title: "name",
          dataIndex: "fullName",
          key: "name"
        },
        {
          title: "email",
          dataIndex: "email",
          key: "email"
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address"
        }
      ]}
    />
  );
};
