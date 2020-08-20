import React from "react";
import styled from "styled-components";
import { accessUrl } from "./spotify"
const LoginContainer = styled.div`
  display: grid;
  place-items: center;

  img {
  }
`;

function Login() {
  return (
    <LoginContainer>
      <img src="https://brandslogo.net/wp-content/uploads/2017/01/spotify-logo.png" />
      <a href={accessUrl}>Login With Spotify</a>
    </LoginContainer>
  );
}

export default Login;
