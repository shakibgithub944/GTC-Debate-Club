import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Practice from '../PracticeTopic/Practice';

const Home = () => {
    const [practices, setPractices] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setPractices(data))
    }, [])

    return (
        <div className=''>
            <div className="caption">
                <FontAwesomeIcon className='icon' icon={faCommentSlash}></FontAwesomeIcon>
                <h1>GTC-Debete-Club</h1>
            </div>

            <div className="Home-page">

                <div className="practice-details">
                    {
                        practices.map(practice => <Practice
                            key={practice._id}
                            practice={practice}
                        ></Practice>)
                    }

                </div>


                {/* my plan start */}
                <div className="my-plan">
                    <div className="my-name">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7O3z-vBCbOAdrGKWmXBxle1j8Q1GXeddf97sXeyxQvg&s" alt="" />
                        <h4>Nazmush Shakib</h4>
                    </div>
                    <div className="my-info">
                        <p><b>Weight: 65 kg</b></p>
                        <p><b>Height: 5'8 Inch</b></p>
                        <p><b>Age: 22 Years</b></p>
                    </div>
                    <h3>Break Time</h3>
                    <div className="break-times">
                        <div className="break-time"><p>20sec</p></div>
                        <div className="break-time"><p>30sec</p></div>
                        <div className="break-time"><p>40sec</p></div>
                        <div className="break-time"><p>50sec</p></div>
                    </div>
                    <h3>Practice Details</h3>
                    <div className="practice-time">
                        <p><b>Practice time: 2000Sec</b></p>
                    </div>
                    <div className="rest-time">
                        <p><b>Break time: 2000Sec</b></p>
                    </div>
                    <p className='complete-button'>Practice Complete</p>
                </div>
                {/* my plan end */}

            </div>

        </div>
    );
};

export default Home;