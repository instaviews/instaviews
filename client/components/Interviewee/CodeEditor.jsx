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
        this.state = {};
    }

    render() {
        return (<EditorContainer>
            <EditorMenuContainer><EditorMenu/></EditorMenuContainer>
            <TextFields></TextFields>
            <SubmissionMenuContainer><SubmissionMenu /></SubmissionMenuContainer>
        </EditorContainer>);
    }
}

export default CodeEditor