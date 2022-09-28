import React from 'react';

const Exercise = () => {
    return (
        <div>
            <div className='bg-gray-50'>
                <img src="https://placeimg.com/640/480/people" alt="fitness" />
                <h1 className="text-2xl font-semibold mt-2 mx-3">Exercise</h1>
                <p className=" text-slate-600 text-center mx-3 my-2"></p>
                <p className="font-semibold mx-3">For Age: </p>
                <p className="font-semibold mx-3">Time required: </p>
                <div className='text-center py-5'>
                    <button className="bg-cyan-400 px-16 py-2 hover:bg-blue-400">Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;