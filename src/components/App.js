import React from 'react'
import Videos from './Videos/Videos'
import NotFound from './NotFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/yt-app" element={<Videos />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
