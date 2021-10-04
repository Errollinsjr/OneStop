import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Table, Space } from "antd";
import API from "../../utils/API.js"
import moment from "moment";
import "./summaryStyles.scss"

function SummaryPage() {
  const history = useHistory();
  const { id } = useParams()

  //setting component's initial state
  const [tripInfo, setTripInfo] = useState({
    trip_name:"",
    start_date:"",
    end_date:"",
    tags:""
  });
  const [reservations, setReservations] = useState();

  //load reservations and store them with setReservations
  useEffect(() => {
   loadSummary()
  }, []);

  //make api call to get all user reservations
  function loadSummary() {
    console.log(id)
    API.getSummary(id)
      .then(res => {
        console.log(res.data)
        setTripInfo({
          trip_name:res.data.trip_name,
          start_date: res.data.start_date,
          end_date: res.data.end_date,
          tags: res.data.tags
        })
        setReservations(res.data.reservations)
      })
      .catch(err => console.log(err))  
  };


  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },  
    {
      title: 'Reservation',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Confirmation',
      dataIndex: 'confirmation',
      key: 'confirmation',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: text => <span>{text}</span>,
    },
    
  ];

  return (
    <>
    <div className="height back1"></div>
    <div className="justify-content-center ">
      <div className="header-color summary-header">
        <h1 className="text-center font-weight-bold mt-3">{tripInfo.trip_name}</h1>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <h4 className="text-center font-weight-bold">Start Trip:</h4>
            <p className="text-center font-weight-normal">{moment.utc(tripInfo.start_date).format("MM-DD-YYYY")}</p>
          </div>
          <div className="d-flex flex-column">
            <h4 className="text-center font-weight-bold">End Trip:</h4>
            <p className="text-center font-weight-normal">{moment.utc(tripInfo.end_date).format("MM-DD-YYYY")}</p>
          </div>
        </div>                   
      </div>
    </div>
    <Table dataSource={reservations} columns={columns} rowKey="id" className='summary-table'/> 
    </>
  );
}

export default SummaryPage;
