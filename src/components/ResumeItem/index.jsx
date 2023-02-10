import React from "react";
import { Header, HeaderTitle, Container, Total } from "./styles";

function ResumeItem({title, Icon, value}) {
  return (
    <Container>
      <Header>
        <HeaderTitle>{ title }</HeaderTitle>
        <Icon />
      </Header>
      <Total>{ value }</Total>
    </Container>
  );
}

export default ResumeItem;
