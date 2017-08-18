import React,  { Component } from 'react';
import { actionCreators } from '../redux/reduxsetup';
import { connect } from 'react-redux';

import SearchBox from './searchBox.js';
import ListItem from './listItem.js';

const mapStateToProps = (state) => ({
  list: state.listreducer.list,
  filterstring: state.listreducer.filterstring,
  filteredlist: state.listreducer.filteredlist,
  isLoading: state.listreducer.isLoading
})

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        //dispath network request    

        dispatch(actionCreators.loadlist());
    }
    handleSearch = (data) => {
        const { dispatch } = this.props;        
        dispatch(actionCreators.filter(data));
    }
    render() {
        if (this.props.isLoading) {
            return (
                <div> Loading </div>
            );
        }

        let originallist = this.props.list;
        let filteredlist = this.props.filteredlist;
        let filterstring = this.props.filterstring;
        let list = (filteredlist.length == 0 && filterstring.length == 0) ? originallist : filteredlist;            
        return (            
            <div className="App">
                <div className="App-intro">                    
                     <SearchBox value={filterstring} handleChange={this.handleSearch} />
                    {list.length>0 ? list.map((x, i) => <ListItem key={i} name={x.name} filterstring={this.props.filterstring}/>) : "No matching libraries"} 
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);
