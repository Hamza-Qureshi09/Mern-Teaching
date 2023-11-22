import React, { useState } from 'react'
import HomeModal from './Modal/HomeModal'

const Home = () => {
    const [intialState, setinitialState] = useState(false)

    // handle modal function
    const handleModalToggle = () => {
        setinitialState(!intialState)
    }

    // rendernig static dynamic
    // DOM=> document object modal


    return (
        <div>
            <h1 className=''>
                <div className='flex flex-col justify-center items-center h-screen w-full'>
                    {
                        intialState === true ? <HomeModal modalStateToggle={setinitialState} modalInitialVal={intialState} /> : ''
                    }
                </div>
                <br />
                <button onClick={handleModalToggle} className='bg-gray-800 text-white'>click to open modal</button>
            </h1>
        </div>
    )
}

export default Home
