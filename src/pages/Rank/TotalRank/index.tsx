import type {FC} from 'react';
import React from 'react';
import {getAllUsers} from "@/services/api";
import {Avatar, List, Space, Tag} from 'antd';
import {Link} from 'umi';

const data = await getAllUsers();
const  TotalRank: FC = () => {

  let sortNum = 1;

  return (
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Space>
                <Tag color="#cd201f">{sortNum++}</Tag>
                <Avatar src={item.avatarUrl} />
              </Space>}
              title={
              <Space>
                <Link to={`/us/${item.id}`}>{item.username}</Link>
                <Tag color="gold" visible={item.userRole===1} >管理员</Tag>
              </Space>
            }
            />
              <div>{item.score}</div>
          </List.Item>
        )}
      />

  );
};

export default TotalRank;
