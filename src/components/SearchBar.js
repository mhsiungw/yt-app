import React from 'react'
import '../stylesheets/SearchBar.css'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input onChange={this.onInputChange} type="text" />
                <button>
                    <i class="search icon" />
                </button>
            </form>
        )
    }
}

export default SearchBar
