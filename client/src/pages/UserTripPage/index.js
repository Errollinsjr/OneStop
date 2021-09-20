import React from "react";
import { Table, Tag } from "antd";
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
    width: '25%',
  },
  {
    title: 'Location',
    dataIndex: 'address',
    key: 'address',
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
];

//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <Space size="middle">
//         <a>Invite {record.trip}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },

const dataSource = [
  {
    key: '1',
    trip: 'Hawaii',
    address: 'Honolulu',
    tags: ['breeze', 'surfing'],
  },
  {
    key: '2',
    trip: 'Jamaica',
    address: 'Marley House',
    tags: ['ganja'],
  },
  {
    key: '3',
    trip: 'Utopia',
    address: 'Atlantis',
    tags: ['water', 'mystery'],
  },
];

  return (
    <>
    <h1 className="userTripPageTitle">User Trip Page</h1>
    <Table dataSource={dataSource} columns={columns}/>;
    </>
  );
}

export default UserTripPage;
