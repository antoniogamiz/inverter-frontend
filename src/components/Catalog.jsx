import React, { useState, useEffect } from "react";

import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const Catalog = () => {
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
          <ListItem button key={text}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Catalog;
