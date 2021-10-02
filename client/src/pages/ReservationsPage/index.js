import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Table } from "antd";
import API from "../../utils/API.js"
// import moment from "moment";
import "./reservationStyles.scss"

function ReservationsPage() {
  const history = useHistory();

  //setting component's initial state
  const [reservations, setReservations] = useState();

  //load reservations and store them with setReservations
  let isRendered = useRef(false);
  useEffect(() => {
    isRendered = true;
    API.getReservations()
    .then(res => {
      if(isRendered) {
          // console.log(res.data.reservations)
          setReservations(res.data.reservations)
        }
        return null;
    })
    .catch(err => console.log(err))
    return () => {
      isRendered = false;
    }
  }, [reservations]);

  //make api call to get all user reservations
  function loadReservations() {
    API.getReservations()
      .then(res => {
        console.log(res.data.reservations)
        setResevations(res.data.reservations)
      })
      .catch(err => console.log(err))  
  };

  //make api call to delete selected trip
  function deleteReservation(id) {
    API.deleteReservation(id)
      .then(res => loadReservations())
      .catch(err => console.log(err));
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },  
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
        title: 'Confirmation',
        dataIndex: 'confirmation',
        key: 'confirmation',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
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
      title: 'Actions',
      key: 'action',
      render: (datasource) => (
        <Space size="middle">
          <button 
            className="userTripPageButton btn btn-primary btn-sm" 
            onClick={() => deleteReservation(datasource.id)}>
            Delete 
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
    <Table dataSource={reservations} columns={columns} rowKey="id"/>,
    </>
  );
}

export default ReservationsPage;
