import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100%;
`;

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

const ActiveTab = styled.div`
    width: 33.33%;
    height: 100%;
    border: 1px solid red;
    background-color: red;
`;


class EditorMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        
        this.renderTabs = this.renderTabs.bind(this);
    }

    renderTabs() {
        if(this.props.activeTab === 0) {
            return (<EditorMenuContainer><ActiveTab id={0} onClick={(e) => {this.props.handleClick(e);}}>O.I.C.E</ActiveTab>
            <Tab id={1} onClick={(e) => {this.props.handleClick(e);}}>Pseudocode</Tab>
            <Tab id={2} onClick={(e) => {this.props.handleClick(e);}}>Code</Tab></EditorMenuContainer>);
        } else if(this.props.activeTab === 1) {
            return (<EditorMenuContainer><Tab id={0} onClick={(e) => {this.props.handleClick(e);}}>O.I.C.E</Tab>
            <ActiveTab id={1} onClick={(e) => {this.props.handleClick(e);}}>Pseudocode</ActiveTab>
            <Tab id={2} onClick={(e) => {this.props.handleClick(e);}}>Code</Tab></EditorMenuContainer>);
        } else if (this.props.activeTab === 2) {
            return (<EditorMenuContainer><Tab id={0} onClick={(e) => {this.props.handleClick(e);}}>O.I.C.E</Tab>
            <Tab id={1} onClick={(e) => {this.props.handleClick(e);}}>Pseudocode</Tab>
            <ActiveTab id={2} onClick={(e) => {this.props.handleClick(e);}}>Code</ActiveTab></EditorMenuContainer>);
        }
    }

    render() {
        return <Container>{this.renderTabs()}</Container>;
    }
}

export default EditorMenu;