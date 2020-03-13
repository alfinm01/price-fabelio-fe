import React from "react"
import { Link, withRouter } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import FabelioLogo from "../fabelio-icon.png"

class HeaderComponent extends React.Component {
  render() {
    const path = this.props.location.pathname
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ spacing: 2 }}
            >
              <img src={FabelioLogo} alt="Fabelio Logo" width="48" height="48" />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Price Monitoring
            </Typography>
            <Button 
              component={Link} 
              to="/submission" 
              color="inherit" 
              style={path === "/submission" ? { color: "yellow", textTransform: "none" } : { color: "white", textTransform: "none" }}
            >
              Submission
            </Button>
            <Button 
              component={Link} 
              to="/item-list" 
              color="inherit" 
              style={path === "/item-list" ? { color: "yellow", textTransform: "none" } : { color: "white", textTransform: "none" }}
            >
              Item List
            </Button>
            <Button 
              component={Link} 
              to="/detail/1" 
              color="inherit" 
              style={{ color: "white", textTransform: "none" }}
            >
              Detail
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const Header = withRouter(props => <HeaderComponent {...props}/>)
export default Header