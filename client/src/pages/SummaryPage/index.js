import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import API from "../../utils/API.js"
import moment from "moment";
import "./summaryStyles.scss"

function SummaryPage() {
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
  <div className="height back-summary">
    <div className="summary-container">
        <div className="row justify-content-center">
            <div className="col-9 col-sm-9 col-md-7 col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg summaryCard">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-1">{tripInfo.trip_name}</h3></div>
                        <div className="card-body summaryBody">
                          <img src="" alt="place holder"/>
                          {/* <h3>{tripInfo.trip_name}</h3> */}
                          <h4>{moment.utc(tripInfo.start_date).format("MM-DD-YYYY") + ' to ' + moment.utc(tripInfo.end_date).format("MM-DD-YYYY")}</h4>
                          {/* <h4>Upcoming Trip</h4>                                               */}
                        </div>
                </div>
            </div>
        </div>
    </div>
  
  <Table dataSource={reservations} columns={columns} rowKey="id" className="summaryTable"/>

 </div>
  </>
);
}

export default SummaryPage;




