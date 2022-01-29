import React from 'react'

import {connect} from 'react-redux'
import {fetchVideos} from '../actions'

import '../stylesheets/SearchBar.css'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.fetchVideos(this.state.term)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input onChange={this.onInputChange} type="text" />
                <button>
                    <i className="search icon" />
                </button>
            </form>
        )
    }
}

export default connect(null,{fetchVideos})(SearchBar)
