import React,{ Component } from "react";
import { connect } from "react-redux";
import TrackService from '../../service/trackService';

class TrackComponent extends React.Component{
    render(){
        return (
            <div style={{display:this.props.inline?'inline':''}} onClick={() => this.props.handleClick()}>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleClick(){
            TrackService.record({
                pageId:props.page,
                ctrlId:props.ctrl,
                eventType:props.type
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrackComponent);