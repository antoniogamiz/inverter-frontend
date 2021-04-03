import React from "react";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const CatalogItem = (props) => {
  const { displayableName, changeCatalogView } = props;

  return (
    <ListItem button key={displayableName} onClick={changeCatalogView}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={displayableName} />
    </ListItem>
  );
};

export default CatalogItem;
