import React, {useState, useEffect} from 'react'
import './SinglePage.css'
import HeadTitle from '..//common/HeadTitle/HeadTitle'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../components/Destination/SData'
import EmptyFile from '../common/EmptyFile/EmptyFile'

function SinglePage() {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))

        if(item) {
            setItem(item)
        }
    },[id])
  return (
    <>
        <HeadTitle />
        {item ? (
            <section className='single-page top'>
                <div className="container">
                    <Link to='/destinations' className='primary-btn back'>
                        <i className='fas fa-long-arrow-alt-left'></i> Go Back
                    </Link>

                    <article className='content flex'>
                        <div className="main-content">
                            <img src={item.image} alt="" />
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>

                            <div className="para flex-space">
                                <p>{item.sidepara}</p>
                                <p>{item.sidepara}</p>
                            </div>
                            <h1>What is the {item.title} CIty?</h1>
                            <p>{item.desc}</p>

                            <div className="image grid1">
                                <img src={item.paraImage_one} alt="" />
                                <img src={item.paraImage_two} alt="" />
                                <p>{item.desc}</p>
                            </div>
                        </div>

                        <div className="side-content">
                            <div className="box">
                                <h2>How we can help you?</h2>
                                <p>{item.sidepara}</p>
                                <button className='outline-btn'>
                                    <i className='fa fa-phone-alt'></i>
                                    Contact Us
                                </button>
                            </div>

                            <div className="box2">
                                <p>{item.sidepara}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        ) : (
            <EmptyFile />
        )}
    </>
  )
}

export default SinglePage