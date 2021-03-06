import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import API from "../../utils/API.js"
import moment from "moment";
import "./userStyles.scss";
import { EditTripContext } from "../../EditTripContext";


function UserTripPage() {
  const history = useHistory();
  const { setEditTrip } = useContext(EditTripContext);


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
        setEditTrip(false);
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
    // {
    //   title: 'Id',
    //   dataIndex: 'id',
    //   key: 'id',
    // },  
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
      width: '20%',
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      render: (text) => moment.utc(text).format("MM-DD-YYYY"),
      responsive: ['sm','md'],
      width: '15%'
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
      render: (text) => moment.utc(text).format("MM-DD-YYYY"),
      responsive: ['sm','md'],
      width: '15%'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      width:'10%',
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
      responsive: ['md']
    },
    {
      title: 'Actions',
      key: 'action',
      width:'40%',
      render: (dataSource) => (
        <Space size="middle">
          <button 
            className="userTripPageButton btn btn-primary btn-sm" 
            onClick={() => deleteTrip(dataSource.id)}>
              Delete 
          </button>
          <button 
            className="userTripPageButton btn btn-primary btn-sm"
            onClick={() => history.push("/edit_trip/" + dataSource.id)}>
              Edit
          </button>
          <button 
            className="userTripPageButton btn btn-primary btn-sm" 
            onClick={() => history.push("/AddDetails/" + dataSource.id)}>
              Reservations
          </button>
          <button 
            className="userTripPageButton btn btn-primary btn-sm" 
            onClick={() => history.push("/Summary/" + dataSource.id)}>
              Summary
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
    <div className='height back-trip'>
      <Table className='user-trip-container' dataSource={trips} columns={columns} rowKey="id"/>
    </div>
    </>
  );
}

export default UserTripPage;
