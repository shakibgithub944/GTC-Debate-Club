import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Practice from '../PracticeTopic/Practice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [practices, setPractices] = useState([]);
    const [practiceTime, setPracticeTime] = useState([0]);
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setPractices(data))
    }, [])

    useEffect(() => {
        const getTime = localStorage.getItem('time');
        setBreakTime(getTime);
    }, [breakTime])

    const handlePracticeTime = (time) => {
        const newTime = parseFloat(practiceTime + time);
        setPracticeTime(newTime)
    }

    const getBreakTimeValue = (e) => {
        const getValue = e.target.innerText;
        localStorage.setItem('time', getValue);
        const getTime = localStorage.getItem('time');
        setBreakTime(getTime);
    }
    // toast function start
    const notify = () => {
        toast.success('Practice Complete', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // toast end

    return (
        <div className=''>
            <div className="caption">
                <FontAwesomeIcon className='icon' icon={faCommentSlash}></FontAwesomeIcon>
                <h1>GTC-Debate-Club</h1>
            </div>

            <div className="Home-page">

                <div className="practice-details">
                    {
                        practices.map(practice => <Practice
                            key={practice._id}
                            practice={practice}
                            handlePracticeTime={handlePracticeTime}
                        ></Practice>)
                    }

                </div>
                {/* my plan start */}
                <div className="my-plan">
                    <div className="my-name">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7O3z-vBCbOAdrGKWmXBxle1j8Q1GXeddf97sXeyxQvg&s" alt="" />
                        <h4 style={{ color: "#e3215e" }}>Nazmush Shakib</h4>
                    </div>
                    <div className="my-info">
                        <p><b>Weight: 65 kg</b></p>
                        <p><b>Height: 5'8 Inch</b></p>
                        <p><b>Age: 22 Years</b></p>
                    </div>
                    <h2 style={{ color: "#e3215e" }}>Break Time</h2>
                    <div className="break-times">
                        <div className="break-time" onClick={getBreakTimeValue}><p>20 Min</p></div>
                        <div className="break-time" onClick={getBreakTimeValue}><p>30 Min</p></div>
                        <div className="break-time" onClick={getBreakTimeValue}><p>40 Min</p></div>
                        <div className="break-time" onClick={getBreakTimeValue}><p>50 Min</p></div>
                    </div>
                    <h2 style={{ color: "#e3215e" }}>Practice Details</h2>
                    <div className="practice-time">
                        <p><b>Practice time: {practiceTime} Minute</b></p>
                    </div>
                    <div className="rest-time">
                        <p><b>Break time: {breakTime}</b></p>
                    </div>
                    <p className='complete-button' onClick={notify}>Practice Completed</p>
                </div>
                {/* my plan end */}

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;