// Author : LyhourChhen
// Find Row Index base on State with customeHook
import React, { useState } from "react";

// rowProps : for the props of each row
// stateDate : data from state
// id : sth or id which equivalent together

const useFindIndex = (rowProps, stateData, id) => {
  const row = stateData.findIndex(row => row.id === rowProps.id);
  return [row];
};

export default useFindIndex;
