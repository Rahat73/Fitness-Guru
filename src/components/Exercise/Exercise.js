import React from 'react';

const Exercise = ({ exercise, handleAddToList }) => {
    const { picture, name, age, about, time } = exercise;

    let slicedTxt;
    if (about.length > 150) {
        slicedTxt = about.slice(0, 150) + '...';
    }
    else
        slicedTxt = about;

    return (
        <div>
            <div className='bg-gray-50'>
                <img className='lg:object-cover lg:h-64' src={picture} alt="fitness" />
                <h1 className="text-2xl font-semibold mt-2 mx-3">{name}</h1>
                <p className=" text-slate-600 mx-3 my-2">{slicedTxt}</p>
                <p className="font-semibold mx-3">For Age: {age} <span className='font-light'>yrs</span></p>
                <p className="font-semibold mx-3">Time required: {time} <span className='font-light'>seconds</span></p>
                <div className='text-center py-5'>
                    <button onClick={() => handleAddToList(exercise)} className="bg-cyan-400 px-16 py-2 hover:bg-blue-400">Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;