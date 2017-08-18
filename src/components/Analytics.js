import React, { Component } from 'react';
import { actionCreators } from '../redux/reduxsetup';
import { connect } from 'react-redux';
import Map from './Map';
import SearchBox from './searchBox';

const mapStateToProps = (state) => ({
    info: state.analyticsreducer.info,
    isLoading: state.analyticsreducer.isLoading,
    filterstring: state.analyticsreducer.filterstring
})

class Analytics extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        const params = this.props.match.params;
       if (params.name) {
           this.handleSearch(params.name);
           this.handleEnter(params.name);
       } else {
            dispatch({ type: "RESETSTATE" })
       }
    }
    handleSearch(data) {          
        const { dispatch } = this.props;        
        dispatch(actionCreators.setAnalyticsString(data));
    }
    handleEnter(data) {        
        const { dispatch } = this.props;        
        dispatch(actionCreators.searchAnalyticsString(data));
    }
    render() {
        const info = this.props.info;
        const relatedQueries = info.relatedQueries.rankedList && info.relatedQueries.rankedList[0].rankedKeyword;
        // if (this.props.isLoading) {
        //     return (
        //         <div> Loading </div>
        //     );
        // }    

        return (            
            <div>
                <SearchBox value={this.props.filterstring} handleChange={this.handleSearch} handleEnter={this.handleEnter} />                 
                <div style={detailsComponent}>
                    <div style={container}>
                        <Map info={info} />
                    </div>
                    <div style={container}>
                        {relatedQueries && relatedQueries.length > 0 ? relatedQueries.map((item, i) =>
                            <div key={i} style={box}>
                                <h5>{item.query} </h5>                           
                            </div>
                        ): "No related terms"}
                    </div>
                </div>
            </div>

        );
    }
}

const detailsComponent = {
    margin: '0px auto',
    width: '80%',
    color: "rgba(0,0,0,.6)"
}

const box = {
    backgroundColor: '#e2e2e2',
    padding: "12px",
    display: "inline-block",
    margin: "1px",    
    fontWeight: "100",
    color: "rgba(0,0,0,.6)"
};

const container = {
    width: '100%',
    padding: '1px',
    textAlign: 'center',
    boxShadow: "1px 1px 1px 1px",
    marginBottom: "20px"
}

export default connect(mapStateToProps)(Analytics);