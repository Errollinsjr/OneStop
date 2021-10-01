import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import API from "../../utils/API.js"
import moment from "moment";
import "./userStyles.scss"

function UserTripPage() {
  const history = useHistory();

  //setting component's initial state
  const [trips, setTrips] = useState();

  //load trips and store them with setTrips
  // let isRendered = useRef(false);
  useEffect(() => {
    loadTrips();
  }, []);

  //make api call to get all user trips
  function loadTrips() {
    API.getTrips()
      .then(res => {
        // console.log(res.data.trips)
        setTrips(res.data.trips)
      })
      .catch(err => console.log(err))  
  };

  //make api call to delete selected trip
  function deleteTrip(id) {
    API.deleteTrip(id)
      .then(res => loadTrips())
      .catch(err => console.log(err));
  }

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
      render: (text) => moment.utc(text).format("MM-DD-YYYY"),
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
      render: (text) => moment.utc(text).format("MM-DD-YYYY"),
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
            })
          } 
        </>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: (datasource) => (
        <Space size="middle">
          <button 
            className="userTripPageButton btn btn-primary btn-sm" 
            onClick={() => deleteTrip(datasource.id)}>
            Delete 
          </button>
          <button 
            className="userTripPageButton btn btn-primary btn-sm"
            onClick={() => history.push("/edit_trip/" + datasource.id)}>
            Edit Trip
          </button>
          <button 
            className="userTripPageButton btn btn-primary btn-sm" 
            onClick={() => history.push("/AddDetails/" + datasource.id)}>
                Reservations
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
    <Table dataSource={trips} columns={columns} rowKey="id"/>,
    </>
  );
}

export default UserTripPage;
