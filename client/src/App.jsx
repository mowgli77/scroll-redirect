import React, {useState} from 'react'
import './App.css'
import {Route, BrowserRouter} from "react-router-dom";

function App() {
    const [go, setGo] = useState(false)

    const goToSite = () => {
        setGo(true)
    }

    return (
        <BrowserRouter>
            <div className={"App"} onMouseMove={goToSite} onClick={goToSite}>
                {go &&
                    <Route path='/' component={() => { window.location = 'https://ad.admitad.com/g/r889udt5ea7ae3e44f49a499575f91/?ulp={lpurl}&pt=1'; return null;} }/>}
            </div>
        </BrowserRouter>
    )
}

export default App
