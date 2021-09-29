import React from "react";
import { Table, Space } from "antd";
import "./modalTable.scss";

const Modal = props => {
    if (!props.show) {
        return null;
    }

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
        
        {
          title: 'Actions',
          key: 'action',
          render: () => (
            <Space size="middle">
              <button 
                className="userTripPageButton btn btn-primary btn-sm" 
                >
                Delete 
              </button>
              <button 
                className="userTripPageButton btn btn-primary btn-sm" >
                    Edit Reservation   
              </button>
            </Space>
          ),
        },
      ];

      const dataSource = [
        {
          id: '1',
          name: 'Airplane',
          confirmation: 654321,
          description: 'Soul plane',
        },
      ];

    return (
     <div className="modal">
         <div className="modal-content">
             <div className="modal-header">
                 <h4 className="modal-title">Current Reservations</h4>
             </div>

             <div className="modal-body">
                 <Table dataSource={dataSource} columns={columns} rowKey="id"/>
             </div>

             <div className="modal-footer">
                 <button onClick={props.onClose} className="button">Close</button>
             </div>
         </div>
     </div>
    )
}

export default Modal;