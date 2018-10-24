import React from 'react';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
    width: 100%;
    height: 83%;
    overflow: hidden;
`;

const CodeInput = styled.textarea`
    height: 100%;
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    autocomplete: off;
    autocorrect: off;
    autocapitalize: off;
    spellcheck: false;
`

class TextFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeField: 'oice',
            oice: 'Placeholder oice text as an example',
            pseudocode: 'Some pseudocode to get us started off',
            code: `console.log('hello world')`
        };
        this.renderStoredInput = this.renderStoredInput.bind(this);
    }

    renderStoredInput() {
        //add oninput to capture keystrokes and store accordingly preventdefault
        if(this.state.activeField === 'oice') {
            return (<CodeInput autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">{this.state.oice}</CodeInput>);
        } else if (this.state.activeField === 'pseudo') {
            return (<CodeInput autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">{this.state.pseudocode}</CodeInput>);
        } else if (this.state.activeField === 'code') {
            return (<CodeInput autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">{this.state.code}</CodeInput>);
        }
    }

    render() {
        return (<TextFieldContainer>
            {this.renderStoredInput()}
        </TextFieldContainer>);
    }
}

export default TextFields;