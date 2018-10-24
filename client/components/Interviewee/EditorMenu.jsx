import React from 'react';
import styled from 'styled-components';

const EditorMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`
const Tab = styled.div`
    width: 33.33%;
    height: 100%;
    border: 1px solid red;
    background-color: gray;
`;


class EditorMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (<EditorMenuContainer>
            <Tab>O.I.C.E</Tab>
            <Tab>Pseudocode</Tab>
            <Tab>Code</Tab>
        </EditorMenuContainer>);
    }
}

export default EditorMenu;