import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <h2 style={style}>
            404 NotFound: The URL you're visiting doesn't exist.
            <br />
            <Link style={{ color: 'gray' }} to="/">
                back to home page.
            </Link>
        </h2>
    )
}

const style = {
    color: 'white',
    'text-align': 'center',
}

export default NotFound
