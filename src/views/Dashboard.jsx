import React, { useState, useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import TableElement from "../component/ux/Table";
import { useDispatch, useSelector } from "react-redux";
import { employeeGetAction } from "../store/action/employeeAction";

const Dasboard = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { employee } = useSelector(state => state.employee);

  useEffect(() => {
    dispatch(employeeGetAction());
  }, []);

  useEffect(() => {
    setData(employee.data);
  }, [employee]);

  return (
    <AppLayout>
      <TableElement data={data} />
    </AppLayout>
  );
};

export default Dasboard;
