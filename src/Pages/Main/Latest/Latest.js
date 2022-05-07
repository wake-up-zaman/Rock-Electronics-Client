import React, { useEffect, useState } from 'react';
import LatestProduct from '../LatestProduct/LatestProduct';
import './Latest.css'
const Latest = () => {
    const [latest, setLatest] = useState([])

    useEffect(() => {
        fetch('Latest.json')
            .then(res => res.json())
            .then(data => setLatest(data));
    }, [])
    return (
        <div id='services' className='latest'>
            <h2 className='text-center mt-5 service-title'>Latest Devices</h2>
            <div id='services' className='container'>
                <div className='row'>
                    <div className='latest-container'>
                        {
                            latest.map(latest_product => <LatestProduct
                                key={latest_product.id}
                                latest_product={latest_product}
                            ></LatestProduct>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Latest;