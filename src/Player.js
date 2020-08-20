import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import Body from "./Body";
import Playlist from "./Playlist";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const PlayerContainer = styled.div`
  background-color: #e6e8e6;
  display: flex;
`;
function Player({ spotify }) {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <Router>
      <PlayerContainer>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Body spotify={spotify} />
          </Route>
          {playlists?.items?.map((playlist) => (
            <Route exact path={`/${playlist.name}`}>
              <Playlist playlist={playlist} />
            </Route>
          ))}
        </Switch>
      </PlayerContainer>
    </Router>
  );
}

export default Player;
