import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const UnlockButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: red;
`;

const SubmitButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: green;
`;


class EditorSubmissionMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unlocked: false};
        this.renderSubmission = this.renderSubmission.bind(this);
        this.unlockSubmission = this.unlockSubmission.bind(this);
    }

    unlockSubmission() {
        if(this.state.unlocked === false) {
            this.setState({unlocked: true});
        }
    }

    renderSubmission() {
        //TODO: Add onclick submitSolution to submitButton
        if(this.state.unlocked === false) {
            return (<UnlockButton onClick={(e) => {
                e.preventDefault();
                this.unlockSubmission();
            }}>Unlock Submission</UnlockButton>)
        } else {
            return (<SubmitButton>Submit Solution!</SubmitButton>)
        }
    }

    render() {
        return (<ButtonContainer>
            {this.renderSubmission()}
        </ButtonContainer>);
    }
}

export default EditorSubmissionMenu;