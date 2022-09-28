import React from 'react';

const Exercise = ({ exercise }) => {
    const { picture, name, age, about, time } = exercise;
    console.log(picture)

    let slicedTxt;
    if (about.length > 100) {
        slicedTxt = about.slice(0, 100) + '...';
    }
    else
        slicedTxt = about;

    return (
        <div>
            <div className='bg-gray-50'>
                <img className='object-cover h-64' src={picture} alt="fitness" />
                <h1 className="text-2xl font-semibold mt-2 mx-3">{name}</h1>
                <p className=" text-slate-600 mx-3 my-2">{slicedTxt}</p>
                <p className="font-semibold mx-3">For Age: {age}</p>
                <p className="font-semibold mx-3">Time required: {time}</p>
                <div className='text-center py-5'>
                    <button className="bg-cyan-400 px-16 py-2 hover:bg-blue-400">Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;