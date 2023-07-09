import { Button, Input, Table } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { deletePost, getPosts, Post } from "../api/posts";

export const Posts = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>();
  const [filterInput, setFilterInput] = useState<string>("");

  const { userId } = useParams();

  const { data: posts, refetch } = useQuery(["posts", userId], () => getPosts(userId as string));

  useEffect(() => {
    setFilteredPosts(posts?.filter(post => post.title.includes(filterInput)));
  }, [filterInput, posts]);

  return (
    <Table
      dataSource={filteredPosts}
      columns={[
        {
          title: (
            <>
              <div>title</div>
              <Input onInput={event => setFilterInput(event.currentTarget.value)} />
            </>
          ),
          dataIndex: "title",
          key: "title"
        },
        {
          title: "body",
          dataIndex: "body",
          key: "body"
        },
        {
          title: "Action",
          key: "action",
          render: (_, { id }) => (
            <Button
              onClick={async () => {
                await deletePost(id);
                refetch();
              }}
            >
              Delete
            </Button>
          )
        }
      ]}
    />
  );
};
