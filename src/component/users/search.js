import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text:''
    }
    
static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    usersClear: PropTypes.func.isRequired,
    showBtn: PropTypes.bool.isRequired,
    showAlert:PropTypes.func.isRequired,

}

    onChange = e => this.setState( { [e.target.name]: e.target.value } );

    onSubmit = e => {
            e.preventDefault();
           if (this.state.text==='')
                {this.props.showAlert('Please Enter Valid User Name', 'show')} else {
                    this.setState({text:''})
                    this.props.searchUsers(this.state.text)
                }
    }

    // showBtn = () => {this.state.text.length > 0 ? true : false}

    render() {

        const {showBtn,usersClear} = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit} className='searchBar'>
                    <input type="text" name='text' placeholder='Search Users' value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="search" className='btn-search'/>
                </form>

                {showBtn && (
                <button className='btn-clear' onClick={usersClear}  >Clear</button>
                ) }
            </div>
        )
    }
}

export default Search
