import React from 'react';
import styled from 'styled-components';
import EditorMenu from './EditorMenu.jsx';
import SubmissionMenu from './EditorSubmissionMenu.jsx';
import TextFields from './TextFields.jsx';

const EditorContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid white;
`;

const EditorMenuContainer = styled.div`
    display: block;
    align: top;
    width: 100%;
    height: 7%;
    border: 1px solid white;
`;

const SubmissionMenuContainer = styled.div`
    position: absolute;
    display: block;
    align: bottom;
    width: 100%;
    height: 10%;
    bottom: 0;
    border: 1px solid white;
`;


class CodeEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        };

        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
        console.log('event in codeeditor.jsx ', event.target.id);
        this.setState({activeTab: Number(event.target.id)})
    }

    render() {
        return (<EditorContainer>
            <EditorMenuContainer><EditorMenu handleClick={this.handleTabClick} activeTab={this.state.activeTab}/></EditorMenuContainer>
            <TextFields activeTab={this.state.activeTab}></TextFields>
            <SubmissionMenuContainer><SubmissionMenu /></SubmissionMenuContainer>
        </EditorContainer>);
    }
}

export default CodeEditor