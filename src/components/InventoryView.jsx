import React, { useState, useEffect } from "react";
import EnhancedTable from "./InventoryTable/InvenntoryTable";

const fields = {
  brand: {
    type: "string",
  },
  model: {
    type: "string",
  },
  description: {
    type: "string",
  },
  ratedPower: {
    type: "string",
  },
  currentType: {
    type: "string",
  },
  efficiency: {
    type: "number",
  },
  provider: {
    type: "string",
  },
  discount: {
    type: "number",
  },
  pvp: {
    type: "number",
  },
  price: {
    type: "number",
  },
};

async function fetchInventoryData(resourceName, offset, limit) {
  const res = await fetch(
    `http://188.166.172.4/${
      resourceName || "inverters"
    }?limit=${limit}&offset=${offset}`
  );
  const json = await res.json();
  return json;
}

const InventoryView = (props) => {
  const { resourceName } = props;
  return (
    <EnhancedTable
      title={"Inverters"}
      resourceName={resourceName}
      fields={fields}
      requestNewPage={fetchInventoryData}
    />
  );
};

export default InventoryView;
