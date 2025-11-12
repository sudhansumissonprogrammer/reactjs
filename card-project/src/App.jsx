import React from 'react'
import Card from './components/card'
import card from './components/card';

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$454/hour',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$354/hour',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/facebook.com",
    company: "Meta",
    datePosted: "3 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$154/hour',
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "10 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$594/hour',
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$854/hour',
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "1 day ago",
    post: "Site Reliability Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$549/hour',
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "6 days ago",
    post: "Logistics Coordinator",
    tag1: "Part Time",
    tag2: "Entry Level",
    pay: '$54/hour',
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "8 days ago",
    post: "AI/ML Researcher",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$94/hour',
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "4 weeks ago",
    post: "Cloud DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$94/hour',
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 days ago",
    post: "Product Marketing Analyst",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: '$54/hour',
    location: "Bangalore, India"
  },
   {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "7 days ago",
    post: "Cloud Security Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$100/hour',
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://logo.clearbit.com/tencent.com",
    company: "Tencent",
    datePosted: "2 weeks ago",
    post: "Backend Developer - Gaming",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$54/hour',
    location: "Shenzhen, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "4 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$54/hour',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/alibaba.com",
    company: "Alibaba",
    datePosted: "8 days ago",
    post: "Site Reliability Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$54/hour',
    location: "Hangzhou, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    company: "IBM",
    datePosted: "3 weeks ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: '$54/hour',
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    company: "Salesforce",
    datePosted: "5 days ago",
    post: "Customer Success Manager",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: '$54/hour',
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/sap.com",
    company: "SAP",
    datePosted: "1 day ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$54/hour',
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/siemens.com",
    company: "Siemens",
    datePosted: "10 weeks ago",
    post: "Embedded Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$54/hour',
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    company: "Intel",
    datePosted: "2 weeks ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$54/hour',
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$54/hour',
    location: "San Jose, USA"
  }
  
  
];
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card
          brandLogo={elem.brandLogo}
          company={elem.company}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
        </div>
        
      }
      )}
    </div>
  )
}

export default App
