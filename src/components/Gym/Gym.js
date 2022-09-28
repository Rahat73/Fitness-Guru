import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import profile from '../../images/DSC_0061 (1) (1).jpg'

const Gym = () => {

    const [exercises, setExercises] = useState([]);
    //const [calculation, setCalculation] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-9 w-11/12 mx-auto'>
                    <Header></Header>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                exercise={exercise}
                            ></Exercise>)
                        }
                    </div>
                </div>
                <div className='col-span-3 bg-gray-50'>
                    <div className='w-5/6 mx-auto my-10'>
                        <div className='flex'>
                            <div className='w-16 mr-5'>
                                <img className='rounded-full' src={profile} alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h1 className='font-semibold'>Rahat</h1>
                                <p className=' text-slate-600'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='bg bg-sky-200 flex justify-evenly rounded-lg my-5 py-3'>
                            <div>
                                <h1 className='font-bold text-2xl'>75<span className='font font-normal text-sm'>kg</span></h1>
                                <p>Weight</p>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>6.5</h1>
                                <p>Height</p>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>25<span className='font font-normal text-sm'>yrs</span></h1>
                                <p>Age</p>
                            </div>
                        </div>
                        <h1 className='text-2xl'>Add A Break</h1>
                        <div className='bg bg-sky-200 flex justify-evenly py-3 my-5 rounded-lg'>
                            <div className='bg-slate-50 rounded-full p-3'>10</div>
                            <div className='bg-slate-50 rounded-full p-3'>20</div>
                            <div className='bg-slate-50 rounded-full p-3'>30</div>
                            <div className='bg-slate-50 rounded-full p-3'>40</div>
                            <div className='bg-slate-50 rounded-full p-3'>50</div>
                        </div>
                        <h1 className='text-2xl '>Exercise Details</h1>
                        <div className='bg bg-sky-200 flex items-center px-3 py-3 my-5 rounded-lg'>
                            <h1 className='font-semibold pr-5 text-xl'>Exercise Time:</h1>
                            <p className='font-semibold text-slate-500'>200 <span>seconds</span></p>
                        </div>
                        <div className='bg bg-sky-200 flex items-center px-3 py-3 my-5 rounded-lg'>
                            <h1 className='font-semibold pr-5 text-xl'>Break Time:</h1>
                            <p className='font-semibold text-slate-500'>20 <span>seconds</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gym;