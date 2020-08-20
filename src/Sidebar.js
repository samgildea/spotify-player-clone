import React from "react";

import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const SidebarContainer = styled.div`
  padding-left: 2rem;

  h1 {
    color: #080708;
  }

  img {
    width: 80%;
    display: grid;
    place-items: center;
  }
`;

const PlaylistItem = styled.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: solid 1px;
  color: #080708;
`;

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  const classes = useStyles();

  


  console.log(playlists);

  return (
    <>
      <SidebarContainer>
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <h2>Playlists</h2>
          <List>
            {playlists?.items?.map((playlist) => (
              <>
                {console.log(playlist?.tracks.href)}
                <Divider />
                <Link to={`/${playlist.name}`}>
                  <ListItem button>
                    <ListItemText>{playlist.name}</ListItemText>
                  </ListItem>
                </Link>
                <Divider />
              </>
            ))}
          </List>
        </Drawer>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
