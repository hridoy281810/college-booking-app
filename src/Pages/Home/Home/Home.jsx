import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedColleges from '../FeaturedColleges/FeaturedColleges';
import GroupImage from '../GroupImg/GroupImage';
import ResearchPapers from '../ResearchPapers/ResearchPapers';
import ReviewSection from '../Review/ReviewSection';
import FeedbackForm from '../FeedBack/FeedbackForm';

const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <FeaturedColleges></FeaturedColleges>
           <GroupImage></GroupImage>
           <ResearchPapers></ResearchPapers>
           <ReviewSection></ReviewSection>
           <FeedbackForm></FeedbackForm>
        </div>
    );
};

export default Home;