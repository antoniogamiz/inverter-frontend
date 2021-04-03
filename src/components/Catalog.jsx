import React, { useState, useEffect } from "react";

import { Typography, Box, List } from "@material-ui/core";

import CatalogItem from "./CatalogItem";

const Catalog = (props) => {
  const { changeCatalogView } = props;
  const [entitiesDescription, setEntitiesDescription] = useState({});

  useEffect(() => {
    async function fetchInventoryData() {
      const res = await fetch("http://188.166.172.4/inventory");
      const json = await res.json();
      setEntitiesDescription(json);
    }
    fetchInventoryData();
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          height: "20px",
        }}
      >
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize="fontSize" m={1}>
            Catálogo
          </Box>
        </Typography>
      </div>
      <List>
        {Object.keys(entitiesDescription).map((text) => (
          <CatalogItem
            displayableName={text}
            changeCatalogView={() =>
              changeCatalogView(text, entitiesDescription[text])
            }
          />
        ))}
      </List>
    </React.Fragment>
  );
};

export default Catalog;
