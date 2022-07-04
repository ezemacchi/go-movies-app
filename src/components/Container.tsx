import { ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';

const Container = ({children}: any) => {
    return (
        <Router>
        <div className='container'>

            <div className='row'>
                <h1 className='mt-3'>
                    Go Watch a Movie!
                </h1>
                <hr className='mb-3' />
            </div>

            <div className='row'>

                <nav className='col-md-2'>
                    <Navbar />
                </nav>

                <div className='col-md-10'>
                    {children}
                </div>

            </div>

        </div>
        </Router>
    )
}

export default Container;