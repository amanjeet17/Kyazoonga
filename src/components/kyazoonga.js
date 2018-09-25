import React, { Component } from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import Categories from './categories';
import Hottictkets from './tickets';
import Blogsection from './blogsection';
import Featured from './featured';
import Footer from './footer';

const Kyazoonga = (props) =>{
  const ticketsData=[
  {
    "image":"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
    "price":"INR 50 - 2,500",
    "time":"SAT, FEB 10, 2018 20:00 Onward",
    "title":"JamshedpurFC - ISL Season 4",
    "venue":"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
  },
  {
    "image":"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
    "price":"INR 50 - 2,500",
    "time":"SAT, FEB 10, 2018 20:00 Onward",
    "title":"JamshedpurFC - ISL Season 4",
    "venue":"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
  },
  {
    "image":"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
    "price":"INR 50 - 2,500",
    "time":"SAT, FEB 10, 2018 20:00 Onward",
    "title":"JamshedpurFC - ISL Season 4",
    "venue":"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
  },
  {
    "image":"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
    "price":"INR 50 - 2,500",
    "time":"SAT, FEB 10, 2018 20:00 Onward",
    "title":"JamshedpurFC - ISL Season 4",
    "venue":"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
  },
  {
    "image":"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
    "price":"INR 50 - 2,500",
    "time":"SAT, FEB 10, 2018 20:00 Onward",
    "title":"JamshedpurFC - ISL Season 4",
    "venue":"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
  },
  {
    "image":"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
    "price":"INR 50 - 2,500",
    "time":"SAT, FEB 10, 2018 20:00 Onward",
    "title":"JamshedpurFC - ISL Season 4",
    "venue":"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
  }
]

  const topcategories = [
    {
      "title":"Concerts",
      "image":"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg"
    },
    {
      "title":"Cricket",
      "image":"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg"
    },
    {
      "title":"Theatre & Arts",
      "image":"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg"
    },
    {
      "title":"Amusement Parks",
      "image":"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg"
    },
    {
      "title":"Sports",
      "image":"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg"
    },
    {
      "title":"Restaurants",
      "image":"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg"
    },
  ]

const featureds =[
    {
      "link":"https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg",
      "alt":"Forbes"
    },
    {
      "link":"https://tech.co/technology-upgrading-events-industry-2017-06",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg",
      "alt":"Forbes"
    },
    {
      "link":"https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg",
      "alt":"INC"
    },
    {
      "link":"http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/inc-logo.jpg",
      "alt":"INC"
    },
    {
      "link":"https://www.entrepreneur.com/article/289909",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/entrepreneur-magazine.jpg",
      "alt":"Entrepreneur Magazine"
    },
    {
      "link":"https://www.youtube.com/watch?v=1aSuorjmrRs",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/cnbc.jpg",
      "alt":"CNBC"
    },
    {
      "link":"http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/z-news.jpg",
      "alt":"Z News"
    },
    {
      "link":"http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/the-economic-times.jpg",
      "alt":"The Economic Times"
    },
    {
      "link":"http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg",
      "alt":"Times of India"
    },
    {
      "link":"http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/business-standard.jpg",
      "alt":"Business Standard"
    },
    {
      "link":"http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/news18.jpg",
      "alt":"News 18"
    },
    {
      "link":"https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446",
      "imageURL":"https://static3.kyazoonga.com/Images/featured-logo/ndtv.jpg",
      "alt":"NDTV"
    }
  ]

const footersocials=[
  {
    "link":"https://www.facebook.com/kyazoonga",
    "imageURL":"images/facebook.png",
    "alt":"Facebook",
    "class":"f"
  },
  {
    "link":"https://twitter.com/kyazoonga",
    "imageURL":"images/twitter.png",
    "alt":"Twitter",
    "class":"t"
  },
  {
    "link":"https://www.instagram.com/kyazoonga/",
    "imageURL":"images/instagram.png",
    "alt":"Instagram",
    "class":"ig"
  },
  {
    "link":"https://www.snapchat.com/add/kyazoonga",
    "imageURL":"images/snapchat.png",
    "alt":"Snapchat",
    "class":"sc"
  },
  {
    "link":"https://www.linkedin.com/company/kyazoonga",
    "imageURL":"images/in.png",
    "alt":"Linkedin",
    "class":"in"
  },
  {
    "link":"https://www.youtube.com/user/kyazoongachannel",
    "imageURL":"images/youtube.png",
    "alt":"Youtube",
    "class":"yt"
  },
  {
    "link":"https://plus.google.com/+kyazoongachannel",
    "imageURL":"images/google.png",
    "alt":"Google Plus",
    "class":"g"
  },
  {
    "link":"https://www.pinterest.com/kyazoonga/",
    "imageURL":"images/pinterest.png",
    "alt":"Pinterest",
    "class":"p"
  }
]

    return(
      <div>
      < Navbar />
      < Carousel />
      < Hottictkets  ticketsData={ticketsData} />
      < Categories  topcategories={topcategories}/>
      < Blogsection />
      < Featured featureds={featureds}/>
      < Footer footersocials={footersocials} />
      </div>
    )

}

export default Kyazoonga;
