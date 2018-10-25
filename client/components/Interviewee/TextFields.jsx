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
const PseudoInput = styled.textarea`
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

const OICEInput = styled.textarea`
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
            oice: 'Placeholder oice text as an example',
            pseudocode: 'Some pseudocode to get us started off',
            code: `console.log('hello world')`
        };
        this.renderStoredInput = this.renderStoredInput.bind(this);
    }

    renderStoredInput() {
        //add oninput to capture keystrokes and store accordingly preventdefault
        console.log('textfields', this.props.activeTab === 0)
        if(this.props.activeTab === 0) {
            console.log('OKAY 0', this.state.oice)
            return <CodeInput autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" defaultValue={this.state.oice}/>;
        } else if (this.props.activeTab === 1) {
            console.log('OKAY 1', this.state.pseudocode)
            return <PseudoInput autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" defaultValue={this.state.pseudocode} />;
        } else if (this.props.activeTab === 2) {
            console.log('OKAY 2', this.state.code)
            return <OICEInput autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" defaultValue={this.state.code} />;
        }
    }

    render() {
        return (<TextFieldContainer>
            {this.renderStoredInput()}
        </TextFieldContainer>);
    }
}

export default TextFields;