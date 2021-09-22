import React from "react";
import { Table, Tag, Space } from "antd";
import "./userStyles.scss"

function UserTripPage() {

const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },  
  {
    title: 'Trip',
    dataIndex: 'trip',
    key: 'trip',
    filters: [
        {
          text: '1',
          value: '1',
        },
    ],
    render: text => <span>{text}</span>,
    width: '40%',
  },
  {
    title: 'Start Date',
    dataIndex: 'startdate',
    key: 'startdate',
  },
  {
    title: 'End Date',
    dataIndex: 'enddate',
    key: 'enddate',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Actions',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <button className="userTripPageButton">Delete</button>
        <button className="userTripPageButton">Edit Trip</button>
        <button className="userTripPageButton">Add Details</button>
      </Space>
    ),
  },
];

  

const dataSource = [
  {
    key: '1',
    trip: 'Hawaii',
    startdate: '8/10/21',
    enddate: '9/01/21',
    tags: ['breeze', 'surfing', 'weather'],
  },
  {
    key: '2',
    trip: 'Jamaica',
    startdate: '8/10/21',
    enddate: '9/01/21',
    address: 'Marley House',
    tags: ['islands'],
  },
  {
    key: '3',
    trip: 'Utopia',
    startdate: '8/10/21',
    enddate: '9/01/21',
    address: 'Atlantis',
    tags: ['water', 'mystery'],
  },
];

  return (
    <>
    <Table dataSource={dataSource} columns={columns}/>;
    </>
  );
}

export default UserTripPage;
