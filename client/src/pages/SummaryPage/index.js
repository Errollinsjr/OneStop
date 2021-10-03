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
    <div className="customWrapper">

        <div className="justify-content-center">
                {/* <div className="card shadow-lg border-0 rounded-lg mt-6"> */}
                  <div className="card-header header-color">
                    <h1 className="text-center font-weight-light my-4">{tripInfo.trip_name}</h1>
                    <h2 className="text-center font-weight-light my-4">{moment.utc(tripInfo.start_date).format("MM-DD-YYYY")}</h2>
                    <h2 className="text-center font-weight-light my-4">{moment.utc(tripInfo.end_date).format("MM-DD-YYYY")}</h2>    
                    <Table dataSource={reservations} columns={columns} rowKey="id"/>

                  
                  </div>
                {/* </div> */}
         </div>
    
   </div>
    </>
  );
}

export default SummaryPage;
