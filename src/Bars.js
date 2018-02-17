import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 50px;
`;

const MenuCnt = styled.div`
  height: 34px;
  position: absolute;
  cursor: pointer;
`;
const Bar = styled.div`
  margin-bottom: ${props => props.mg};
  background-color: #fff;
  width: 40px;
  height: 2px;
  position: relative;
`;
export class MenuBtn extends React.Component {
  state = {};
  componentDidMount() {
    TweenMax.to("#topBar", 1, {
      rotation: 45,
      top: 16
    });
    TweenMax.to("#midBar", 1, {
      rotation: -45
    });
    TweenMax.to("#botBar", 1, {
      top: 10
    });
  }

  render() {
    return (
      <Container>
        <MenuCnt>
          <Bar id="topBar" mg="14px" />
          <Bar id="midBar" mg="14px" />
          <Bar id="botBar" mg="0" />
        </MenuCnt>
      </Container>
    );
  }
}
