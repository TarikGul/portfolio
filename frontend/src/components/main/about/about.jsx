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
                    Howdy! My name is Tarik and I am a 25 year old Software Engineer with a passion for the outdoors, mathematics, cryptography, web development and computer science. I currently work as a Typescript Developer focusing on API tooling in regards to blockchain development. I have spent the last few years long-distance hiking and have accumulated more than 10,000 miles under my feet. During those times, I have developed a network of incredible friends around the world and narrowed down what I love about life. I spend a lot of my time coding, hiking, exercising, and playing billiards.  I have always been interested in visualizing mathematical concepts and algorithms <a style={{ color: 'red' }} href='https://github.com/TarikGul/math-vis'>Link Here</a>. Recently I have built my own interpretation of a home Bot such as Alexa from scratch. I am using a Raspberry Pi 3B+, along with a AdaFruit LS2 Audio Bonnet module for the text to speech and speech to text. Heres a  <a style={{ color: 'red' }} href='https://github.com/TarikGul/raspberry-pi-node-speech-bot'>Link Here</a> to the repo. 
                </div>
            </div>
        </div>
    )
}

export default About;