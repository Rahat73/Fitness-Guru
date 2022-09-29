import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Calculations from '../Calculations/Calculations';
import QnA from '../QnA/QnA';


const Gym = () => {

    const [exercises, setExercises] = useState([]);
    const [calculation, setCalculation] = useState([]);
    const [breakTime, setBreak] = useState([0])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleAddToList = (exercise) => {
        const newCalculation = [...calculation, exercise];
        setCalculation(newCalculation);
    }

    const handleBreak = (value) => {
        localStorage.setItem('breakTime', value)
        setBreak(value);
    }

    return (
        <div>
            <div>
                <div className='grid grid-cols-9 lg:grid-cols-12'>
                    <div className='col-span-9 w-11/12 mx-auto'>
                        <Header></Header>
                        <div className='block lg:hidden bg-gray-50 py-1 mb-10'>
                            <Calculations
                                calculation={calculation}
                                breakTime={breakTime}
                                handleBreak={handleBreak}
                            ></Calculations>
                        </div>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                            {
                                exercises.map(exercise => <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    handleAddToList={handleAddToList}
                                ></Exercise>)
                            }
                        </div>
                    </div>
                    <div className='col-span-3 bg-gray-50 hidden lg:block'>
                        <Calculations
                            calculation={calculation}
                            breakTime={breakTime}
                            handleBreak={handleBreak}
                        ></Calculations>
                    </div>
                </div>
            </div>
            <div>
                <QnA></QnA>
            </div>
        </div >
    );
};

export default Gym;