import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import MUILink from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white // "#ffeb3b"
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow)

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
]

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})

function ProductList() {
  const classes = useStyles()
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12}>
        <Typography color="inherit" variant="h6">
          Product List
        </Typography>
        <Typography color="inherit" variant="subtitle1">
          Berikut adalah produk-produk{" "}
          <MUILink href="http://fabelio.com" target="_blank">
            fabelio.com
          </MUILink>{" "}
          yang sedang di-monitor
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Latest price</StyledTableCell>
                <StyledTableCell align="right">Detail</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">Rp{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      component={Link}
                      to={`/detail/${row.carbs}`}
                      variant="outlined"
                      style={{ textTransform: "none" }}
                    >
                      See Detail
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default ProductList
