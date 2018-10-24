import React from 'react';
import styled from 'styled-components';
import CodeEditor from './Interviewee/CodeEditor.jsx';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: gray;
    justify-content: center;
    align-items: center;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const Left = styled.div`
    order: 1;
    width: 50%;
    height: 95%;
    overflow: hidden;
    border: 1px solid red;
    background-color: blue;
`;

const Right = styled.div`
    order: 2;
    width: 40%;
    height: 95%;
    overflow: hidden;
    border: 1px solid green;
    background-color: pink;
`;

const Menu = styled.div`
    display: inline-block;
    width: 90%;
    height: 7vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    background-color: orange;
    border: 1px solid purple;
`;

class Instaviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Container>
            <Frame>
              <Menu />
              <BodyContainer>
                    <Left>
                        <CodeEditor></CodeEditor>
                    </Left>
                    <Right />
              </BodyContainer>
            </Frame>
          </Container>;
    }

}

export default Instaviews