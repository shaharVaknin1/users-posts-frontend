import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { getUsers, getUsersCount, User } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const pageSize = 4;

export const Users = () => {
  const [data, setData] = useState<User[]>();
  const { data: usersCount } = useQuery("usersCount", getUsersCount);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers(0, pageSize);
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <Table
      pagination={{
        onChange: async page => {
          const users = await getUsers((page - 1) * pageSize, pageSize);
          setData(users);
        },
        pageSize,
        total: usersCount
      }}
      onRow={({ id }) => {
        return {
          onClick: event => navigate(`/posts/${id}`)
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
