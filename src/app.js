import React from 'react';
import './styles/app.scss';
import PageView from './components/pageview'
import ImageView from './components/imageView'

const App = () => {
    return (
        <div className="wrapper">
            <ImageView />
            <PageView />
        </div>
    )
}

export default App;