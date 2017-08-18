import React, { Component } from 'react';
import { actionCreators } from '../redux/reduxsetup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    info: state.detailsreducer.info,
    isLoading: state.detailsreducer.isLoading
})

class Details extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const params = this.props.match.params;
        //dispath network request    
        dispatch(actionCreators.loaddetails(params));
    }
    render() {
        const info = this.props.info;
        if (this.props.isLoading) {
            return (
                <div> Loading </div>
            );
        }

        return (
            <div style={detailsComponent}>
                <div style={container}>
                    <h1><a href={info.homepage} target="_blank">{info.name} {info.version}</a></h1>
                    <h5>{info.description}</h5>
                    <h6>{info.filename}</h6>
                    <h6>{info.license}</h6>
                     <Link to={`/analytics/${info.name}`} > Analytics </Link> 
                    {/* <h6>{info.author ? info.author : info.author.name}</h6> */}
                </div>
                <div style={container2}>
                    {info.assets && info.assets.map((item, i) =>
                        <div key={i} style={box}>
                            <h5>{item.version} </h5>
                            {item.files.map((file, index) => (
                                <h6 key={index} >{file} </h6>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const detailsComponent = {
    margin: '0px auto',
    width: '80%',
    color: "rgba(0,0,0,.6)",
    fontWeight: "100"
}

const box = {
    backgroundColor: '#e2e2e2',
    padding: "12px",
    display: "inline-block",
    margin: "1px",
    cursor: "pointer",
    fontWeight: "100",
    color: "rgba(0,0,0,.6)"
};

const container = {
    width: '100%',
    padding: '20px',
    textAlign: 'center',
    boxShadow: "1px 1px 1px 1px",
    marginBottom: "20px"
}

const container2 = Object.assign(
    { height: "400px", overflow: "scroll" }
    , container);

export default connect(mapStateToProps)(Details);