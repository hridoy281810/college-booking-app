import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedColleges from '../FeaturedColleges/FeaturedColleges';
import GroupImage from '../GroupImg/GroupImage';
import ResearchPapers from '../ResearchPapers/ResearchPapers';
import ReviewSection from '../Review/ReviewSection';
import FeedbackForm from '../FeedBack/FeedbackForm';
import AdmissionAndAid from '../AdmisionAndAid/AdmissionAndAid';
import './Home.css'
import Companies from '../Companis/companies';
const Home = () => {
    return (
        <div className='background-img' >
            <Banner></Banner>
            <FeaturedColleges></FeaturedColleges>
            <GroupImage></GroupImage>
            <ResearchPapers></ResearchPapers>
            <AdmissionAndAid></AdmissionAndAid>
            <ReviewSection></ReviewSection>
            <FeedbackForm></FeedbackForm>
            <Companies></Companies>
        </div>
    );
};

export default Home;