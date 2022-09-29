import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="blogs">
                <h1>Blog Section</h1>
                <h4>Q: How does react works?</h4>
                <p><b>ans:</b>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

                <h4>Q: Difference betwen Props and State?</h4>
                <p><b>ans:</b>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>

                <h4>Q: How many ways we will use UseEffect ,Exept Data load ?</h4>
                <p><b>ans:</b>You can have multiple useEffects in your code and this is completely fine! As hooks docs say, you should separate concerns. Multiple hooks rule also applies to useState - you can have multiple useState in one component to separate different part of the state, you don't have to build one complicated state object</p>
            </div>
        </div>
    );
};

export default Blog;