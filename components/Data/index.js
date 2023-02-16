export const userData = {
    links : [
        {
            icon:"uil-estate",
            title: "Home",
            link: "#home",
        },
        {
            icon:"uil-user",
            title: "About",
            link: "#about",
        },
        {
            icon:"uil-file-alt",
            title: "Experience",
            link: "#experience",
        },
        {
            icon:"uil-briefcase-alt",
            title: "Services",
            link: "#services",
        },
        {
            icon:"uil-scenery",
            title: "Porfolio",
            link: "#portfolio",
        },
        {
            icon:"uil-message",
            title: "Contact",
            link: "#contact",
        },
    ],
    intro: "Hi, my name is",
    name: "David Adeyemi",
    header: "I build things for the web.",
    title: "Software Engineer",
    description: "I’m a software engineer specialized in building (and also designing) exceptional digital experiences. Solving problems with up to date technologies and turning ideas into exceptional applications that are accessible is one of my favourite thing to do.",
    emailAddress: "dv.davidadeyemi@gmail.com",
    linkedIn: "https://www.linkedin.com/in/david-adeyemi-085a171b2",
    gitHub: "https://github.com/David-Ade-Creator",
    whatsapp: "+447442580406",
    aboutMeSubheader: "Dave the software Engineer",
    aboutPhoto: "/images/aboutphoto2.jpeg",
    aboutMeDescription1: "Hello! My name is David and I enjoy creating things that live on the internet. My interest in software engineering started back in 2019 when I decided to try creating a landing page for an ecommerce shoe platform — this taught me alot about HTML & CSS and JavaScript, from there i proceeded into advancing my knowledge as a software engineer in everyway possible, presently rounding up my masters as a data scientist.",
    aboutMeDescription2: "Hello! My name is David and I enjoy creating things that live on the internet.",
    skills: ["Html", "Css", "Javascript","Python","Typescript", "React", "Next", "Node js", "Graphql","MySql","MongoDB", "Docker", "Strapi"],
    experience: [{
        name: "Mind2mentor",
            companyName: "Junior Software Engineer @ Mind2Mentor",
            position: "Junior Software Engineer",
            duration: "2021, Jan 11 - 2021, April 27",
            responsibilities: [
                "Collaborated with team members to create applications' system analysis based on client requirements.",
                "Worked on creating a WhatsApp chatbot using botkit and WATI as the CRM provider.",
                "Built the API business logic and designed flexible database models.",
                "Worked on module which used google OAuth, and google Geolocation API.",
                "Operated in virtualised environment using Docker."
            ]
        },
        {
            name: "Datage Technologies",
            companyName: "Software developer @ Datage Technologies",
            position: "Software Developer",
            duration: "June 04,2021 to December 30,2021",
            responsibilities: [
                "Designed prototype and architect software system that work and meets global standards.",
                "Performed thorough application performance and function analysis, improving usability in line with client requirements.",
                "Integrated Paypal as payment gateway for the application with a receipt printed after each payment.",
                "Implemented an Auto-Backup feature that automatically saves changes made in the Inpage editor, allowing users to continue from the last edits."
            ]
        },
    ],
    services: [{
        icon: "uil-web-grid",
            title: "Web Applications",
            description: "Web development has been my major interest, makes me feel like i am bringing an idea to life, which i am. Can build ranging from static websites down to dynamic web apps."
        },
        {
            icon:"uil-globe",
            title: "Web Designs",
            description: "Designing of websites and web apps is something i love to do, making pixel perfect designs, responsive designs and also making sure my designs are browser compatible."
        },
        {
            icon:"uil-credit-card-search",
            title: "Data Science",
            description: "As a data scientist i aim to build algorithms and design experiments to merge, manage, interrogate and extract data to supply tailored reports to colleagues, customers or the wider organisation"
        }
    ],

    projects: [
        {
            title: "Bloomgraphy",
            isFeatured: true,
            description: "Bloomgraphy is a platform for photographers to showcase their photography skills and also for client to reach out to top level photographers.",
            image: "/images/bloom.png",
            url: "https://bloomgraphy.netlify.app",
            repo:"https://github.com/David-Ade-Creator/bloomgraphy-clientside",
            stacks: ["React","Redux", "Nodejs", "Graphql", "ApolloClient","Ant Design","Less" ,  "Heroku", "Amazon s3", "Heroku", "Netlify"]
        },
        {
            title: "Ecomvision",
            isFeatured: true,
            description: "Ecomvision provides important overview information using the dashboard and also provides other important pages that show detailed informations from informations fetched from the database",
            image: "/images/ecomvision.png",
            url: "https://ecomvision.netlify.app",
            repo:"https://github.com/David-Ade-Creator/dash-client",
            stacks: ["React","Redux", "Nodejs", "Express", "Material UI", "Render", "Netlify"]
        },
        {
            title: "Ecommersb",
            isFeatured: true,
            description: "A basic ecommerce web application with stripe payment checkout functionality",
            image: "/images/ecommersb.png",
            url: "https://ecommersb.netlify.app",
            repo:"https://github.com/David-Ade-Creator/strapi_ecom_client",
            stacks: ["React","Redux","Stripe Payment gateway","Material UI", "Render", "Netlify"]
        },
        {
            title: "Quea",
            isFeatured: false,
            description: "A web application to know, ask and learn from the community. Ask and get answers on Quea.",
            image: "/images/quea.png",
            url: "https://quea.netlify.app",
            repo:"https://github.com/David-Ade-Creator/quea",
            stacks: ["React","Redux", "Nodejs", "Express", "Ant-Design", "Aws-s3", "Heroku", "Netlify"],
        },
        // {
        //     title: "Clause Reservation",
        //     isFeatured: true,
        //     description: "Why make calls or stress over dinner reservations when it can be done with few clicks, Clause reservation offers online reservation alternative.",
        //     image: "/images/clause.png",
        //     url: "https://clause-reservation.herokuapp.com",
        //     repo:"https://github.com/David-Ade-Creator/dinner-reservation",
        //     stacks: ["React", "Redux", "Nodejs", "Express", "React-Bootstrap", "Aws-s3", "Heroku"],
        // },
        {
            title: "Halftimers Blog",
            isFeatured: false,
            description : "The Halftimers blog gives the latest sport updates and new from the sport world, a way to keep in touch with you favourite football updates.",
            image: "/images/halftimers.png",
            url: "https://halftimers.netlify.app",
            repo:"https://github.com/David-Ade-Creator/blog-client",
            stacks: ["Next", "Strapi", "Netlify", "Heroku"],
        },
        {
            title: "M3 movies",
            isFeatured: false,
            description: "What better than an application to watch your favourite tv shows at your free time, sign up to M3 movies.",
            image : "/images/m3movies.png",
            url: "https://m3movies.netlify.app",
            repo:"https://github.com/David-Ade-Creator/m3movieclient",
            stacks : ["React", "Nodejs", "Express","Heroku","Imdb Api", "Netlify"],
        },
        // {
        //     title: "Cryptoverse",
        //     isFeatured: false,
        //     description : "An applications that helps to keep user updated with all changes and current updates from the crypto worlds.",
        //     image: "/images/cryptoverse.png",
        //     url: "https://crytoverse.netlify.app",
        //     repo:"https://github.com/David-Ade-Creator/cryptoverse",
        //     stacks: ["React", "ReduxToolkit", "RapidApi"],
        // },
    ],
    webdesigns : [
        {
            title: "Startup Landing Page",
            description : "A pixel perfect responsive design of a travel website using html and css, this design is perfect regardless of which device it works on",
            image : "/images/startup.png",
            url: "https://m3startup.netlify.app",
            stacks: ["Next-js", "Css"],
        },
        {
            title: "Travel Design",
            description : "A pixel perfect responsive design of a travel website using html and css, this design is perfect regardless of which device it works on.",
            image : "/images/travel.png",
            url: "https://travel-round.netlify.app",
            stacks: ["Html", "Css"],
        },
        {
            title: "Restaurant Website",
            description : "Perfection has never been any better, a well design and responsive restaurant website using html and css.",
            image : "/images/restaurant.png",
            url: "https://grilleats.netlify.app",
            stacks: ["Html", "Css"],
        },
        {
            title: "Porfolio Website",
            description : "Almost all freelancing professions now need a porfolio, check out this simple responsive porfolio with html and css.",
            image : "/images/porfolio.png",
            url: "https://skporfolio.netlify.app",
            stacks: ["Html", "Css"],
        },
        {
            title:  "Delivery Website",
            description : "A pixel perfect responsive design of a delivery website using html and css, this design is perfect regardless of which device it works on.",
            image : "/images/delivery.png",
            url: "https://speeddrop.netlify.app",
            stacks: ["Html", "Css"],
        },
        {
            title:  "Headphones Landing Page",
            description : "A pixel perfect responsive design of a headphones website using html and css, this design is perfect regardless of which device it works on.",
            image : "/images/headphones.png",
            url: "https://solidears.netlify.app",
            stacks: ["Html", "Css"],
        },
    ]
}