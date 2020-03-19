import React from "react";
import { Table } from "react-bootstrap";

const TableElement = props => {
  console.log(props.data);
  const { data } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, idx) => {
          return (
            <tr>
              <td>{idx + 1}</td>
              <td>{val.employee_name}</td>
              <td>{val.employee_salary}</td>
              <td>{val.employee_age}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableElement;
