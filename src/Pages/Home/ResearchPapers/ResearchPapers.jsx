import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPapers = () => {
    // Sample recommended research papers data (you can replace this with your actual data)
    const recommendedPapers = [
        {
            title: 'Advancements in Artificial Intelligence: A Comprehensive Review',
            author: 'John Doe',
            year: '2021',
            link: 'https://moonpreneur.com/blog/latest-developments-in-artificial-intelligence/'
        },
        {
            title: 'Sustainable Energy Solutions for the Future',
            author: 'Jane Smith',
            year: '2022',
            link: 'https://www.crbgroup.com/insights/sustainable-energy-solutions'
        },
        {
            title: 'Data Privacy and Security in the Digital Age',
            author: 'Michael Johnson',
            year: '2023',
            link: 'https://www.imperva.com/blog/why-data-security-and-privacy-in-the-digital-age-are-crucial/'
        },
        {
            title: 'Innovations in Biotechnology: A Paradigm Shift',
            author: 'Emily Davis',
            year: '2022',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC99005/'
        },
        {
            title: 'The Impact of Social Media on Society',
            author: 'William Brown',
            year: '2021',
            link: 'https://example.com/paper5'
        },
        {
            title: 'Climate Change and Its Effects: A Global Perspective',
            author: 'Sophia Anderson',
            year: '2023',
            link: 'https://www.slideshare.net/gokulck/global-perspectives-website-resource-list'
        }
    ];

    return (
        <div className='container '>
          <div >
          <div className='grid grid-cols-1 md:grid-cols-4'>
                {recommendedPapers.map((paper, index) => (
                    <div className=''  key={index}>
                      <div className='card w-80 h-60 mb-4 bg-base-100 shadow-xl'>
                     <div className='card-body flex flex-col justify-between'>
                   <div>
                   <h2 className="card-title ">{paper.title}</h2> 
                       <h4>{paper.author}</h4>
                        <p>{paper.year}</p>
                   </div>
                        <div >
                        <Link to={paper.link} target="_blank" rel="noopener noreferrer"><button className='btn btn-primary'>Read Paper</button></Link>
                        </div>
                     </div>
                      </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
    );
};

export default ResearchPapers;
