import React, { useState } from "react";
import "./App.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CustomDrawer from "./components/CustomDrawer";
import InventoryView from "./components/InventoryView";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function CustomAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Machinery
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  const classes = useStyles();
  const [state, setState] = useState({
    resourceName: null,
    fields: {},
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar />
      <CustomDrawer
        changeCatalogView={(resourceName, fields) =>
          setState({ resourceName, fields })
        }
      />
      <main className={classes.content}>
        <Toolbar />
        {state.resourceName && (
          <InventoryView
            resourceName={state.resourceName}
            fields={state.fields}
          />
        )}
      </main>
    </div>
  );
}

export default App;
