import React from "react";
import Main from "../MainLayout/MainContent/Main";
import "./ContentBox.css";
import { Container, Header } from "semantic-ui-react";

export default function ContentBox({ title, content }) {
  console.log(content);
  return (
    <React.Fragment>
      <Container className='contentBox-wrap' fluid textAlign='left'>
        <Header className="contentBox-header" style={{color: '#fff'}} as='h1' dividing>{title}</Header>
        {/* <div className="contentBox-wrap"> */}
          {/* <h1 className="contentBox-header">{title}</h1> */}
          <div>{content}</div>
        {/* </div> */}
      </Container>
    </React.Fragment>
  );
}
