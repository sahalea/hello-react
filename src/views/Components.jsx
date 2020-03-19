import React from "react";
import AppLayout from "../layout/AppLayout";
import AlertElement from "../component/ux/Alert";
import ButtonElement from "../component/ux/Button";

const Components = () => {
  return (
    <AppLayout>
      <AlertElement variant="success" />
      <ButtonElement variant="success" />
    </AppLayout>
  );
};

export default Components;
