import React from "react"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"

function Submission() {
  const [link, setLink] = React.useState()
  return (
    <form>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Typography color="inherit" variant="h6">
            Submission
          </Typography>
          <Typography color="inherit" variant="subtitle1">
            Masukkan link product page yang valid dari{" "}
            <Link href="http://fabelio.com" target="_blank">
              fabelio.com
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Link product page"
            onChange={e => setLink(e.target.value)}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            style={{ textTransform: "none" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Submission
