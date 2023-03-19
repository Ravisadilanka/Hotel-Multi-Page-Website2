import React from 'react'
import AllItem from '../../Destination/AllItem'

function DestinationHome() {
  return (
    <>
        <section className='popular top'>
            <div className="full_container">
                <div className="heading">
                    <h1>
                    Most Popular Destinations
                    </h1>
                    <div className="line"></div>
                </div>

                <div className="content">
                    <AllItem/>
                </div>
            </div>
        </section>
    </>
  )
}

export default DestinationHome