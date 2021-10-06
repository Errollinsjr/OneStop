import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Table, Space } from "antd";
import API from "../../../utils/API";
import {useParams} from 'react-router-dom';
import "../../AddDetailsPage/addDetailsPageStyles.scss";
import { EditReservationContext } from "../../../EditReservationContext";

const Modal = props => {
    const history = useHistory();
    const {id} = useParams() 
    //setting component's initial state
    const [reservations, setReservations] = useState();
    const { setEditReservation } = useContext(EditReservationContext);

    //load trips and store them with setTrips
    useEffect(() => {
        loadReservations();
    }, []);

    //make api call to get all user trips
    function loadReservations() {
        API.getReservations(id)
        .then(res => {
            console.log(res)
            setReservations(res.data.reservations)
            setEditReservation(false);
        })
        .catch(err => console.log(err))  
    };

    //make api call to delete selected trip
    function deleteReservations(id) {
        API.deleteReservation(id)
        .then(res => loadReservations())
        .catch(err => console.log(err));
    }

    if (!props.show) {
        return null;
    }

    const columns = [
        // {
        //   title: 'Id',
        //   dataIndex: 'id',
        //   key: 'id',
        // },  
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
          responsive: ['sm']
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          render: text => <span>{text}</span>,
          responsive: ['md']
        },
        
        {
          title: 'Actions',
          key: 'action',
          render: (dataSource) => (
            <Space size="middle">
              <button 
                className="userTripPageButton btn btn-primary btn-sm" 
                onClick={() => deleteReservations(dataSource.id)}>
                    Delete 
              </button>
              <button 
                className="userTripPageButton btn btn-primary btn-sm" 
                onClick={() => history.push("/edit_reservations/" + dataSource.id)}>
                    Edit Reservation   
              </button>
            </Space>
          ),
        },
      ];

      //TODO: FIX EDIT RES BUTTON INSIDE MODAL

    return (
     <div className="modal">
         <div className="modal-content">
             <div className="modal-header">
                 <h4 className="modal-title">Current Reservations</h4>
             </div>

             <div className="modal-body">
                 <Table dataSource={reservations} columns={columns} rowKey="id"/>
             </div>

             <div className="modal-footer">
                 <button onClick={props.onClose} className="userTripPageButton btn btn-primary btn-sm">Close</button>
             </div>
         </div>
     </div>
    )
}

export default Modal;