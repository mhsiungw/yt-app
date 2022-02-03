import React from 'react'
import ShowUser from './ShowUser'
import SearchForm from './SearchForm'
import GoogleAuth from './GoogleAuth'

import '../../stylesheets/SearchBar.scss'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <ShowUser />
                <SearchForm />
                <GoogleAuth />
            </div>
        )
    }
}

export default SearchBar
