import React from 'react'

export default function Footer(props) {
    return (
        <div className='row fixed-bottom'>
            <button className='btn btn-danger col-2' onClick={() => {
                props.resetData()
            }}>Reset</button>
            <div className='bg-dark col-8 text-white text-centre'>{props.totalAmount}</div>
            <button className='btn btn-primary col-2'>Pay</button>
        </div>
    )
}
