import React from 'react';
import '../../../styles/about.scss'

const About = props => {
    return (
        <div className='about-container'>
            <div className='about-inner-container'>
                <div className='about-header'>
                    About me
                </div>
                <div className='about-description'>
                        Howdy! My name is Tarik, and I am a 25 year old Software Engineer with a passionate love for the outdoors, and
                        an appreciation for mathematics, and computer science. I have spent the last few years long distance hiking, and have cumulated more than 10,000 miles under my feet.
                        During those times, i have been developing a network of incredible friends, and community around the world while narrowing down what I love about life. 
                        I spend a lot of my time either at the computer hiking, outside excercising, or playing billiards at the pool hall. During these tough, i find myself joining hackathons, coding a lot, writing, and 
                        playing go. When it comes to my current projects, I am working on developing an API, visualizer. I have always been into visualizing mathematical concepts, and algorithms. This is my way of expanding my knowledge, and 
                        understanding of data.
                </div>
            </div>
        </div>
    )
}

export default About;