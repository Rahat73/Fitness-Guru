import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Calculations from '../Calculations/Calculations';

const Gym = () => {

    const [exercises, setExercises] = useState([]);
    const [calculation, setCalculation] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleAddToList = (exercise) => {
        const newCalculation = [...calculation, exercise];
        setCalculation(newCalculation);
    }



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
                                handleAddToList={handleAddToList}
                            ></Exercise>)
                        }
                    </div>
                </div>
                <div className='col-span-3 bg-gray-50'>
                    <Calculations calculation={calculation}></Calculations>
                </div>
            </div>
        </div >
    );
};

export default Gym;