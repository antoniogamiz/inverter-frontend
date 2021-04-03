import React from "react";
import EnhancedTable from "./InventoryTable/InvenntoryTable";

async function fetchInventoryData(resourceName, offset, limit) {
  const res = await fetch(
    `http://188.166.172.4/${resourceName}?limit=${limit}&offset=${offset}`
  );
  const json = await res.json();
  return json;
}

const InventoryView = (props) => {
  const { resourceName, fields } = props;
  return (
    <EnhancedTable
      title={resourceName}
      resourceName={resourceName}
      fields={fields}
      requestNewPage={fetchInventoryData}
    />
  );
};

export default InventoryView;
