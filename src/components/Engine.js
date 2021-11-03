import React from 'react'
import mockData from '../data/MOCK_DATA.json'
import './Engine.css'

const Engine = () => {

    return (
        <div className="engine-div">
            <div className="mb-2" style={{width: '40%', marginTop: 20}}>
                <input type="text" className="form-control" placeholder="Enter the term" />
            </div>
        </div>
    )
}

export default Engine
