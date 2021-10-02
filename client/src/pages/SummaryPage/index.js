import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Table, Space } from "antd";
import API from "../../utils/API.js"
// import moment from "moment";
import "./summaryStyles.scss"

function SummaryPage() {
  const history = useHistory();
  const { id } = useParams()

  //setting component's initial state
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
        console.log(res)
        setReservations(res.data.reservations)
      })
      .catch(err => console.log(err))  
  };

  //make api call to delete selected trip
  // function deleteReservation(id) {
  //   API.deleteReservation(id)
  //     .then(res => loadReservations())
  //     .catch(err => console.log(err));
  // }

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
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-6">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Add Reservation Details</h3></div>
                        <div className="card-body" style= {{display: 'flex'}}>
                          <h1>YOOOOO</h1>
                        <Table dataSource={reservations} columns={columns} rowKey="id"/>,
                                     
                        </div>


                    <div className="card-footer text-center py-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
      <p>hi</p>
    </div>
    </>
  );
}

export default SummaryPage;
