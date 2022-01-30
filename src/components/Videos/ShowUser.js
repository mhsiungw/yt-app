import React from 'react'

import { connect } from 'react-redux'

const ShowUser = (props) => {
    return <span>Hi {props.userName || 'Strangers'}</span>
}

const mapStateToProps = (state) => {
    return { userName: state.auth.userName }
}

export default connect(mapStateToProps)(ShowUser)
