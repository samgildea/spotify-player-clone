import React from "react";
import { useStateValue } from "./StateProvider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";
import CardActionArea from "@material-ui/core/CardActionArea";

const ArtistCard = styled(Card)`
  height: 22rem;
`;

const CardContainer = styled(Box)`
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

function Body({ spotify }) {
  const [{ top_artists }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <Container>
      <h1>Your Top Artists</h1>
      <Flex flexWrap="wrap">
        {top_artists?.items.map((artist) => (
          <CardContainer width={[1, 1 / 4]}>
            <ArtistCard>
              <CardActionArea>
                <CardContent>
                  <CardMedia
                    style={{ height: "8rem", paddingTop: "50%" }}
                    image={artist.images[0].url}
                  />

                  <Typography gutterBottom variant="h5" component="h2">
                    {artist.name}
                  </Typography>
                </CardContent>
                {console.log(artist.images[0].url)}
              </CardActionArea>
            </ArtistCard>
          </CardContainer>
        ))}
      </Flex>

      {console.log(top_artists?.items)}
    </Container>
  );
}

export default Body;
