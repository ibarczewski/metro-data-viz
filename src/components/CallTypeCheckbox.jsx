import React, { Component } from 'react';

class CallTypeCheckbox extends Component {

    static defaultProps = {
        CheckedStatus: false,
        OnChangeFunc: () => { console.error('No OnChangeFunction'); }
    }

    ClickBox = (evt) => {
        evt.preventDefault();
        const { CallType, CheckedStatus } = this.props;
        this.props.OnChangeFunc(CallType, !CheckedStatus);
    }
    
    render() {
        const CapitalizeStyle = {textTransform:'capitalize'};
        const ThisCallType = this.props.CallType;
        const CallTypeDisplayText = ThisCallType.toLowerCase();

        return <div className={`call-container ${this.props.CheckedStatus ? 'selected' : ''}` } label={ThisCallType} onClick={this.ClickBox}>
            <input type='checkbox' value={ThisCallType} checked={this.props.CheckedStatus} onChange={(evt) => {evt.preventDefault();} }/>
            <span style={CapitalizeStyle}>{CallTypeDisplayText}</span> 
        </div>;
    }
}

export default CallTypeCheckbox;