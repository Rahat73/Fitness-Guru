import React from 'react';

const QnA = () => {
    return (
        <div>
            <div className='bg-slate-50 w-11/12 mx-auto my-10 px-6 py-4'>
                <div className='my-6'>
                    <h1 className='font font-semibold text-2xl'>How does react work?</h1>
                    <p className='px-6'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
                <div className='my-6'>
                    <h1 className='font font-semibold text-2xl'>What are the difference between props and state?</h1>
                    <div>
                        <h1 className='text-lg font-semibold mx-5 underline'>props</h1>
                        <ul className='list-disc px-10'>
                            <li>The Data is passed from one component to another.</li>
                            <li>It is Immutable (cannot be modified).</li>
                            <li>Props can be used with state and functional components.</li>
                            <li>Props are read-only.</li>
                        </ul>
                        <h1 className='text-lg font-semibold mx-5 underline'>state</h1>
                        <ul className='list-disc px-10'>
                            <li>The Data is passed within the component only.</li>
                            <li>It is Mutable ( can be modified).</li>
                            <li>State can be used only with the state components/class component (Before 16.0).</li>
                            <li>State is both read and write.</li>
                        </ul>
                    </div>
                </div>
                <div className='my-6'>
                    <h1 className='font font-semibold text-2xl'>What are the uses of useEffect except data load?</h1>
                    <ul className='list-disc px-10'>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default QnA;