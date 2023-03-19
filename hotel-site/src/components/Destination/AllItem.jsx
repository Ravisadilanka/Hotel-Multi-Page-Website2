import React,{useState} from 'react'
import DCard from './DCard'
import Sdata from './SData'

function AllItem() {
    const [item, setItem] = useState(Sdata)

  return (
    <div>
        <section className='gallery desi mtop'>
            <div className="container">
                <div className="content grid">
                     {
                        item.map((item) => {
                            return <DCard key={item.id} item={item}/>
                        })
                     }
                </div>
            </div>
        </section>
    </div>
  )
}

export default AllItem