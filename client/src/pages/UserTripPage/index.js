import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import API from "../../utils/API.js"
import moment from "moment";
import "./userStyles.scss"

function UserTripPage() {

//setting component's initial state
const [trips, setTrips] = useState();

//load trips and store them with setTrips
useEffect(() => {
  loadTrips()
}, []
);

//make api call to get all user trips
function loadTrips() {
  API.getTrips()
    .then(res => {
      console.log(res.data.trips)
      setTrips(res.data.trips)
    }  
    )
    .catch(err => console.log(err))  
};


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },  
  {
    title: 'Trip',
    dataIndex: 'trip_name',
    key: 'trip_name',
    filters: [
        {
          text: '1',
          value: '1',
        },
    ],
    render: text => <span>{text}</span>,
    width: '30%',
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    render: (text) => moment(text).format("MM-DD-YYYY"),
  },
  {
    title: 'End Date',
    dataIndex: 'end_date',
    key: 'end_date',
    render: (text) => moment(text).format("MM-DD-YYYY"),
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            let visible = (tag==='None' || tag==="") ? false : true;
            return (
              <Tag color={color} key={tag} visible={visible}>
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
    render: () => (
      <Space size="middle">
        <button className="userTripPageButton btn btn-primary btn-sm">Delete</button>
        <button className="userTripPageButton btn btn-primary btn-sm">Edit Trip</button>
        <button className="userTripPageButton btn btn-primary btn-sm">Add Details</button>
      </Space>
    ),
  },
];



// const dataSource = [
//   {
//     id: '1',
//     trip_name: 'Hawaii',
//     start_date: '8/10/21',
//     end_date: '9/01/21',
//     tags: ['breeze', 'surfing', 'weather'],
//   },
//   {
//     id: '2',
//     trip_name: 'Jamaica',
//     start_date: '8/10/21',
//     end_date: '9/01/21',
//     tags: ['islands'],
//   },
//   {
//     id: '3',
//     trip_name: 'Utopia',
//     start_date: '8/10/21',
//     end_date: '9/01/21',
//     tags: ['water', 'mystery'],
//   },
// ];

  return (
    <>
    <Table dataSource={trips} columns={columns}/>,
    </>
  );
}

export default UserTripPage;
