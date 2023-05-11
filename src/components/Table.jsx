import { useEffect, useState } from "react";
import { getAllOrders } from "../api/request";

import { Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  
  },
  {
    title: "customer Id",
    dataIndex: "customerId",
   

  
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",

  },
  {
    title: "Shipvin",
    dataIndex: "address",
    key: "3",
  },

  {
    title: "Delete",
    dataIndex: "address",
    key: "2",
    render: () => (
        <button >
          {"delete"}
        </button>
       ),

  },
  {
    title: "Update",
    dataIndex: "address",
    key: "3",
    render: () => (
        <button >
          {"update"}
        </button>
       ),
  },
];


const Tabled = () => {
  let [orders, setOrders] = useState([]);
  useEffect(() => { getAllOrders().then((data) => {
     setOrders(data)
          })}, []);
  return (
    <Table
      columns={columns}
      dataSource={orders}
      scroll={{
        x: 1300,
      }}
    />
  );
};

export default Tabled;