import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import culturalKnowledgeExchange from "./assets/cultural-knowledge-exchange.jpg";
import localAndInternationalConference from './assets/local-and-international-conference.jpg';
import treePlanting from './assets/tree-planting.jpg';
import fashionShow from './assets/fashion-show.jpg';
import culturalFoodMaking from './assets/cultural-food-making.jpg';
import panelDiscussion from './assets/panel-discussion.jpg';
import peaceAndLove from './assets/peace-and-love.png';
import culturalUnity from './assets/cultural-unity.png';
import childrenFestival from './assets/children-festival.png';
import tradeEvent from './assets/trade-event.jpg';
import beautyCompetition from './assets/beauty-competition.jpg';
import eventOrganizer from './assets/event-organizer.jpg';
import agent from './assets/agent.jpg';
import carRental from './assets/car-rental.jpg';
import gallery1 from './assets/Gallery/gallery-image1.jpg';
import gallery2 from './assets/Gallery/gallery-image2.jpg';
import gallery3 from './assets/Gallery/gallery-image3.jpg';
import gallery4 from './assets/Gallery/gallery-image4.jpg';
import gallery5 from './assets/Gallery/gallery-image6.jpg';
import gallery6 from './assets/Gallery/gallery-image7.jpg';
import gallery7 from './assets/Gallery/gallery-image9.jpg';
import gallery8 from './assets/Gallery/gallery-image10.jpg';
import gallery9 from './assets/Gallery/gallery-image11.jpg';
import gallery10 from './assets/Gallery/gallery-image12.jpg';
import gallery11 from './assets/Gallery/gallery-image13.jpg';
import testimonial1 from "./assets/testimonials/testimonial1.jpg";
import testimonial2 from "./assets/testimonials/testimonial2.jpg";
import testimonial3 from "./assets/testimonials/testimonial3.jpg";
import dashenLogo from './assets/dashen.jpg';
import ethiopianAirlines from './assets/etAir.png';
import africanUnion from './assets/AfricanUnion.png';
import cocacola from './assets/coca.png';
import kana from './assets/kana.jpg';
import twoFiveOne from './assets/Twofiveone.png';
import peaceJourneyAfrica from './assets/pja.png';
import moct from './assets/Moct.png';
import AfricanTB from './assets/Atb.jpeg';
import afscLogo from './assets/afsc.jpg';

import firstVideo from './assets/videos/D.mp4'
import secondVideo from './assets/videos/H.mp4'
import thirdVideo from './assets/videos/R.mp4'
import fourthVideo from './assets/videos/S.mp4'

import { FaHandshake , FaUsers, FaLightbulb, FaBullhorn, FaRocket } from 'react-icons/fa';
import { MdEqualizer } from 'react-icons/md';

export const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
];

export const socialLinks = [
    { name: <FaFacebookF />, path: 'https://www.facebook.com/profile.php?id=61563590353141' },
    { name: <FaInstagram />, path: 'https://www.instagram.com/puagmae_fest?igsh=emE3ZWg0bnNyYWkx' },
    { name: <FaTiktok />, path: 'https://www.tiktok.com/@puagmae.festival?_t=8opgfYASYNh&_r=1' },
];

export const services = [
    {
        title: 'Cultural Knowledge Exchange',
        description: 'Promote cultural knowledge and exchange between different communities.',
        fullDescription: 'This service aims to promote cultural knowledge and exchange between different communities through various activities such as workshops, seminars, and cultural fairs.',
        image: culturalKnowledgeExchange,
    },
    {
        title: 'Organize Fashion Show',
        description: 'Showcase traditional and contemporary fashion from diverse cultures.',
        fullDescription: 'Our fashion shows bring together designers from diverse cultures to showcase both traditional and contemporary fashion, celebrating the rich tapestry of global attire.',
        image: fashionShow,
    },
    {
        title: 'Tree Planting Session',
        description: 'Contribute to the environment by planting trees.',
        fullDescription: 'Join us in our tree planting sessions to contribute to the environment, promote sustainability, and beautify our surroundings.',
        image: treePlanting,
    },
    {
        title: 'Car Rental and Tour',
        description: 'Enjoy convenient car rental services and guided tours.',
        fullDescription: 'Our car rental and tour services provide you with the convenience of renting vehicles and exploring destinations with experienced guides, ensuring a memorable travel experience.',
        image: carRental,
    },
    {
        title: 'Agent for International Company',
        description: 'Act as an agent for international companies in local markets.',
        fullDescription: 'We facilitate partnerships and business opportunities by acting as agents for international companies, helping them navigate local markets and establish their presence.',
        image: agent,
    },
    {
        title: 'Special Event Organizer',
        description: 'Plan and execute special events tailored to your needs.',
        fullDescription: 'Our special event organizing services include planning and executing tailored events, ensuring every detail is managed to create unforgettable experiences.',
        image: eventOrganizer,
    },
    {
        title: 'Local & International Conference',
        description: 'Bring together experts to discuss cultural and social topics.',
        fullDescription: 'We organize conferences that bring together experts, scholars, and community leaders to discuss various topics related to culture, heritage, and social development.',
        image: localAndInternationalConference,
    },
    {
        title: 'Cultural Food Making',
        description: 'Learn and share traditional cooking methods and recipes.',
        fullDescription: 'Participate in our cultural food making sessions to learn and share traditional cooking methods and recipes, preserving culinary heritage and promoting cultural exchange.',
        image: culturalFoodMaking,
    },
    {
        title: 'Panel Discussion',
        description: 'Engage in discussions on cultural and social issues.',
        fullDescription: 'Our panel discussions provide a platform for engaging and insightful conversations on cultural and social issues, featuring experts and community leaders.',
        image: panelDiscussion,
    },
   
];

export const scheduleData = [
    {
        date: 'September 6, 2024',
        title: 'Peace and Love',
        description: 'Celebrate peace and love across Africa and around the world. This day is dedicated to fostering harmony and unity through various events and activities.',
        detailDescription: (
            <>
                Activities to be conducted on that day:<br />
                1. A police march will be held, along with horse riding events.<br />
                2. A panel discussion will be held regarding peace and cultural traditions among various ethnic groups in our country and across Africa.<br />
                3. Musical performances from different ethnic groups will be presented.<br />
                4. We will reflect on challenges related to peace and love.<br />
                5. There will be a public address by collaborative ministers.<br />
                6. Various educational programs that promote peace and love within the community will be organized.
            </>
        ),
        image: peaceAndLove,
    },
    {
        date: 'September 7, 2024',
        title: 'Cultural and Africa Unity',
        description: 'Experience the rich culture and traditions of Africa. This day highlights the cultural heritage and unity of the African continent through performances and exhibitions.',
        detailDescription: (
            <>
                Activities to be conducted on that day:<br />
                1. A panel discussion will be held about culture. <br />
                2. Traditional foods and drinks will be served. <br />
                3. To showcase our country’s cultural heritage, a traditional fashion show featuring representatives from different regions will be organized. <br />
                4. Programs that highlight the cultural richness of our country and Africa will be presented. <br />
            </>
        ),
        image: culturalUnity,
    },
    {
        date: 'September 8, 2024',
        title: 'African Children Festival',
        description: 'A special day for children featuring games, activities, and events designed to celebrate and entertain the younger generation.',
        detailDescription: (
            <>
                Activities to be conducted on that day:<br />
                1. A grand race will be held in our country, even in the rain.<br />
                2. Various playing items for children have been prepared.<br />
                3. Traditional children's games will be conducted.<br />
                4. A program where children can learn about their country's game culture and history will be presented.<br />
            </>
        ),        
        image: childrenFestival,
    },
    {
        date: 'September 9, 2024',
        title: "Let's Trade on Puagmae",
        description: 'An exciting trading event for various production companies, traders, and entrepreneurs to showcase their products and services.',
        detailDescription: (
            <>
                Activities to be conducted on that day:<br />
                1. A Business-to-Business (B2B) networking event will be held.<br />
                2. A business panel discussion will be conducted.<br />
                3. Various businesses, including traditional ones, will be showcased.<br />
                4. An exhibition will be organized for Ethiopians to sell and market products for the New Year, featuring a marketplace where Africans can also participate.
            </>
        ),
        
        image: tradeEvent,
    },
    {
        date: 'September 10, 2024',
        title: "Puagmae's Beauty",
        description: 'A fashion show competition celebrating the pure beauty of Africa, featuring stunning designs and models from across the continent.',
        detailDescription: (
            <>
                Activities to be conducted on that day:<br />
                1. A discussion on how to preserve our identity through traditional practices.<br />
                2. Awards for the Puagmae winners and a recognition program for sponsors.<br />
                3. A competition for the most beautiful traditional attire.<br />
                4. Panel discussions focusing on tourism-related topics.
            </>
        ),
        
        image: beautyCompetition,
    },
];

export const galleryData = [
    {
        image: gallery1,
        alt: 'Gallery Image 1',
    } ,
    {
        image: gallery2,
        alt: 'Gallery Image 2',
    } ,
    {
        image: gallery3,
        alt: 'Gallery Image 3',
    } ,
    {
        image: gallery4,
        alt: 'Gallery Image 4',
    } ,
    {
        image: gallery5,
        alt: 'Gallery Image 5',
    } ,
    {
        image: gallery6,
        alt: 'Gallery Image 6',
    } ,
    {
        image: gallery7,
        alt: 'Gallery Image 7',
    } ,
    {
        image: gallery8,
        alt: 'Gallery Image 8',
    } ,
    {
        image: gallery9,
        alt: 'Gallery Image 9',
    } ,
    {
        image: gallery10,
        alt: 'Gallery Image 10',
    } ,
    {
        image: gallery11,
        alt: 'Gallery Image 11',
    } ,
]

export const vendors = [
    { name: 'Dashen Bank', logo: dashenLogo },
  { name: 'American Friends Service Committee', logo: afscLogo },
    { name: 'Ethiopian Airlines', logo: ethiopianAirlines },
    { name: 'Ministry of culture and tourism', logo: moct },
    { name: 'Peace Journey Africa', logo: peaceJourneyAfrica },
    { name: 'African Union', logo: africanUnion },
    { name: 'African Tourism Board', logo: AfricanTB },
    { name: '251 Digital marketing', logo: twoFiveOne},
    { name: 'Coca cola', logo: cocacola },
    { name: 'Kana tv', logo: kana },
    
  ];

export const testimonials = [
    {
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: testimonial1,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus.',
    } ,
    {
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: testimonial2,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus.',
    } ,
    {
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: testimonial3,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec purus nec purus.',
    } ,
]

export const videos = [
    {
        title: 'Video Title 1',
        path: firstVideo
    } ,
    {
        title: 'Video Title 2',
        path: secondVideo
    } ,
    {
        title: 'Video Title 3',
        path: thirdVideo
    } ,
    {
        title: 'Video Title 4',
        path: fourthVideo
    } ,
]


export const reasons = [
    {
      icon: <FaHandshake className="text-4xl text-goldenrod" />,
      title: 'We Encourage the Ideals of Unity',
      description: 'We foster a collaborative and unified approach to achieve common goals.',
    },
    {
      icon: <MdEqualizer className="text-4xl text-goldenrod" />,
      title: 'We Never Compromise Equality',
      description: 'Equality is at the core of our values, ensuring fair treatment and opportunities for all.',
    },
    {
      icon: <FaUsers className="text-4xl text-goldenrod" />,
      title: 'Reliable Audience Relationship',
      description: 'We build and maintain strong, trustworthy relationships with our audience.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-goldenrod" />,
      title: 'Technology & Creativity',
      description: 'Combining cutting-edge technology with creative solutions to drive innovation.',
    },
    {
      icon: <FaRocket className="text-4xl text-goldenrod" />,
      title: 'We Are Highly Responsible',
      description: 'Our commitment to responsibility ensures that we deliver on our promises with integrity.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-goldenrod" />,
      title: 'Continuous Improvement',
      description: 'We are dedicated to continuous improvement and striving for excellence in everything we do.',
    },
  ];
