import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({}));

const InventoryView = () => {
  const classes = useStyles();
  const [entities, setEntities] = useState({});

  useEffect(() => {
    async function fetchInventoryData() {
      const res = await fetch("http://188.166.172.4/inverters");
      const json = await res.json();
      setEntities(json);
    }
    fetchInventoryData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entities.results?.map((row) =>
            _renderRow(row)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventoryView;

const _renderRow = row => {
    return (
      <TableRow key={row.name}>
        <TableCell align="right">{row.calories}</TableCell>
      </TableRow>
    );
}