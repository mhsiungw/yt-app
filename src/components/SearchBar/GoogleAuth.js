import React from 'react'

import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '268192771-sl169v22tnjokrj97sdsq8kbj53hfndr.apps.googleusercontent.com',
                    scope: 'profile',
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange)
                })
        })
    }

    onAuthChange = (isSignIn) => {
        if (isSignIn) {
            this.props.signIn({
                userId: this.auth.currentUser.get().getBasicProfile().getId(),
                userName: this.auth.currentUser.get().getBasicProfile().getName(),
            })
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if (this.props.auth.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    <span>Sign Out</span>
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    <span>Sign In with Google</span>
                </button>
            )
        }
    }

    render() {
        return <div className="google-auth">{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
