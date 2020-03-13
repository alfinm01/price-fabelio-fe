import React from "react"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grow from "@material-ui/core/Grow"
import { Bar } from "react-chartjs-2"

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  container: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}))

function Detail() {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={1}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setChecked(!checked)}
            >
              <ArrowBackIos />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <div className={classes.container}>
              <Grow in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Grow>
              {/* Conditionally applies the timeout prop to change the entry speed. */}
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Grow>
            </div>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setChecked(!checked)}
            >
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="inherit" variant="h5">
              <Link
                href="https://fabelio.com/ip/meja-makan-cessi-white-new.html"
                target="_blank"
              >
                Nama Produk
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="inherit" variant="h6">
              Current Price: Rp1.000.000,00
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="inherit" variant="subtitle1">
              Tentang Produk Ini Hangatkan Momen Bersantap Bersama Bersantap
              dengan keluarga membutuhkan meja yang sanggup memenuhi seluruh
              rangkaian menu favorit setiap anggota. Meja Makan Cessi
              menyediakan solusi tempat yang lapang untuk menempatkan seluruh
              hidangan dengan minimalis, namun tidak menjauhkannya dari kepuasan
              estetik. Dengan table top yang putih, Meja Makan Cessi menjadi
              lebih terlihat modern. Dari sarapan pagi hingga makan es krim di
              minggu siang, semuanya menjadi sedikit lebih seru dan semangat
              dengan Cessi Dining Table.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Detail
