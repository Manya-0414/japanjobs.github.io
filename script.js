let currentLanguage = 'en';
    const englishAboutInfoText = [
        {
            heading: 'History of Japan',
            content: 'Japan has a long and storied history, with influences from China, Korea, and other neighboring cultures. Feudal Japan, with its samurai warriors and shogun rulers, is a particularly fascinating period. In the modern era, Japan went through rapid industrialization and militarization, culminating in its involvement in World War II.'
        },
        {
            heading: 'Geography',
            content: 'Japan is an archipelago consisting of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—as well as numerous smaller islands. It is situated in the Pacific Ocean, east of the Korean Peninsula and China.'
        },
        {
            heading: 'Culture and Traditions',
            content: 'Japanese culture is rich and diverse, blending ancient traditions with modern influences. Traditional arts such as tea ceremony, flower arranging (ikebana), and calligraphy are still practiced alongside contemporary pop culture phenomena like anime and manga. Japan is also known for its cuisine, including sushi, tempura, ramen, and more.'
        },
        {
            heading: 'Technology',
            content: 'Japan is a global leader in technology and innovation. It\'s home to many well-known companies in electronics, automotive, robotics, and other high-tech industries. Cities like Tokyo, Osaka, and Kyoto are hubs of technological advancement and research.'
        },
        {
            heading: 'Economy',
            content: 'Japan has the third-largest economy in the world by nominal GDP. It\'s highly industrialized and technologically advanced, with major industries including automotive manufacturing, electronics, and precision machinery. The Japanese yen (JPY) is its currency.'
        },
        {
            heading: 'Work Opportunities',
            content: 'Japan offers a wide range of job opportunities across various industries, making it an attractive destination for both domestic and international job seekers.'
        }
    ];
   
    const translations = {
        en: {
            home: 'Home',
            jobListings: 'Job Listings',
            aboutJapan: 'About Japan'
        },
        jp: {
            home: 'ホーム',
            jobListings: '求人リスト',
            aboutJapan: '日本について'
        }
    };
    
    const japaneseAboutInfoText = [
        {
            heading: '日本の歴史',
            content: '日本は中国、韓国、および他の近隣文化の影響を受けた長い歴史を持っています。武士道の時代、その武士や幕府の支配者とともに、特に魅力的です。現代では、日本は急速な工業化と軍国主義を経験し、第二次世界大戦に参戦しました。'
        },
        {
            heading: '地理',
            content: '日本は、本州、北海道、九州、四国の4つの主要な島と、多数の小さな島から成る列島国家です。朝鮮半島と中国の東に位置しています。'
        },
        {
            heading: '文化と伝統',
            content: '日本の文化は豊かで多様であり、古代の伝統と現代の影響が融合しています。茶道、生け花、書道などの伝統芸術は今でも行われており、アニメやマンガなどの現代のポップカルチャー現象と並存しています。寿司、天ぷら、ラーメンなどの料理でも知られています。'
        },
        {
            heading: '技術',
            content: '日本は技術とイノベーションのグローバルリーダーです。電子機器、自動車、ロボティクス、その他のハイテク産業でよく知られた企業が多く存在します。東京、大阪、京都などの都市は、技術革新と研究の拠点です。'
        },
        {
            heading: '経済',
            content: '日本は名目GDPで世界第3位の経済を持っています。自動車製造、電子機器、精密機械などの主要産業を中心に、高度に産業化され、技術革新が進んでいます。日本円（JPY）が通貨です。'
        },
        {
            heading: '仕事の機会',
            content: '日本はさまざまな産業で幅広い求人機会を提供しており、国内外の求職者にとって魅力的な目的地となっています。'
        }
    ];

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'jp' : 'en';
    setTranslations(currentLanguage);
}

function setTranslations(language) {
    const translations = {
        en: {
            english: 'English',
            japanese: '日本語',
            home: 'Home',
            aboutJapan: 'About Japan',
            jobListings:'Job Listings'
        },
        jp: {
            english: '英語',
            japanese: '日本語',
            home: 'ホーム',
            aboutJapan: '約',
            jobListings:'求人情報'
        }
    };
    // Set text content for language selection options
    document.querySelectorAll('.language-option').forEach(function(item) {
        const translationKey = item.dataset.translationKey;
        if (translationKey && translations[language][translationKey]) {
            item.textContent = translations[language][translationKey];
        }
    });
    document.querySelectorAll('.nav-item').forEach(function(item) {
        const translationKey = item.dataset.translationKey;
        if (translationKey && translations[language][translationKey]) {
            item.textContent = translations[language][translationKey];
        }
    });
    const welcomeMessage = document.getElementById('welcome-message');
    const searchInput = document.getElementById('search-input');
    const aboutJapanHeading = document.getElementById('about-japan').querySelector('h2');
    const listItems = document.querySelectorAll('.container ul li');
    const container = document.querySelectorAll('.container');
    const aboutInfos = document.querySelectorAll('.about-info');
    const footerText = document.querySelector('footer p');

    const aboutInfoText = language === 'en' ? englishAboutInfoText : japaneseAboutInfoText;
    
    welcomeMessage.textContent = language === 'en' ? 'Welcome to our job portal!' : '私たちの求人ポータルへようこそ！'; 
    searchInput.placeholder = language === 'en' ? 'Search jobs...' : '仕事を検索...';
    aboutJapanHeading.textContent = language === 'en' ? 'About Japan' : '日本について';
    
    listItems.forEach(function(item, index) {
        const translationKey = item.dataset.translationKey;
        if (translationKey && translations[language][translationKey]) {
            item.textContent = translations[language][translationKey];
        }
    });

    container.forEach((item) => item.setAttribute('lang', language));
        
    aboutInfos.forEach((info, index) => {
        const aboutInfo = aboutInfoText[index];
        info.querySelector('h3').textContent = aboutInfo.heading;
        info.querySelector('p').textContent = aboutInfo.content;
    });

    footerText.textContent = language === 'en' ? '© 2024 Work Opportunities in Japan' : '© 2024 日本の仕事の機会';
}

// Event listener for language selection options
document.querySelectorAll('.language-option').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        switchLanguage();
    });
});
setTranslations(currentLanguage);

// Sample job listings data
const jobListingsData = [
    { title: 'Data Analyst', location: 'Osaka', description: 'Seeking a detail-oriented individual to analyze large datasets and derive actionable insights.', language: 'en' },
    { title: 'Marketing Manager', location: 'Kitakyushu', description: 'Responsible for developing and implementing strategic marketing plans to drive brand awareness and sales growth.', language: 'en' },
    { title: 'Graphic Designer', location: 'Osaka', description: 'Create visually appealing designs for print and digital media, ensuring brand consistency and message clarity.', language: 'en' },
    { title: 'Financial Analyst', location: 'Fujisawa', description: 'Conduct financial analysis, forecasts, and reporting to support business decisions and optimize financial performance.', language: 'en' },
    { title: 'HR Coordinator', location: 'Hiroshima', description: 'Assist with recruitment, onboarding, and employee relations activities to maintain a positive and productive work environment.', language: 'en' },
    { title: 'Customer Support Specialist', location: 'Fujisawa', description: 'Provide timely and effective support to customers via phone, email, and chat channels, resolving inquiries and issues.', language: 'en' },
    { title: 'Product Manager', location: 'Sendai', description: 'Lead cross-functional teams in the development and launch of new products, from ideation to market release.', language: 'en' },
    { title: 'Content Writer', location: 'Kyoto', description: 'Produce high-quality written content for websites, blogs, and marketing materials, adhering to brand voice and style guidelines.', language: 'en' },
    { title: 'Operations Coordinator', location: 'Hiroshima', description: 'Coordinate day-to-day operations, logistics, and administrative tasks to ensure smooth business processes and customer satisfaction.', language: 'en' },
    { title: 'UI/UX Designer', location: 'Hachioji', description: 'Design intuitive and visually appealing user interfaces and experiences for web and mobile applications.', language: 'en' },
    { title: 'Software Developer', location: 'Tokushima', description: 'Develop and maintain software applications, ensuring high performance and reliability.', language: 'en' },
    { title: 'Digital Marketing Specialist', location: 'Nagasaki', description: 'Plan and execute digital marketing campaigns to increase brand visibility and drive online traffic.', language: 'en' },
    { title: 'Network Engineer', location: 'Sendai', description: 'Design, implement, and troubleshoot network infrastructure to ensure seamless connectivity and security.', language: 'en' },
    { title: 'Supply Chain Analyst', location: 'Hiroshima', description: 'Analyze supply chain data to optimize inventory levels, reduce costs, and improve delivery efficiency.', language: 'en' },
    { title: 'UX Researcher', location: 'Kawasaki', description: 'Conduct user research and usability testing to inform the design and development of user-centric products.', language: 'en' },
    { title: 'IT Support Technician', location: 'Hiroshima', description: 'Provide technical assistance and troubleshooting support to end-users, resolving hardware and software issues.', language: 'en' },
    { title: 'Digital Content Creator', location: 'Matsuyama', description: 'Create engaging digital content including videos, graphics, and written posts to attract and retain online audiences.', language: 'en' },
    { title: 'Quality Assurance Engineer', location: 'Kitakyushu', description: 'Develop and execute test plans to ensure software quality and reliability, identifying and documenting defects.', language: 'en' },
    { title: 'Business Development Manager', location: 'Hachioji', description: 'Identify and pursue new business opportunities, negotiate contracts, and cultivate client relationships.', language: 'en' },
    { title: 'Cybersecurity Analyst', location: 'Fujisawa', description: 'Monitor and analyze security threats, implement protective measures, and respond to security incidents.', language: 'en' }
];


function generateJobListingHTML(job) {
    return `
        <div class="job" data-location="${job.location}">
            <h3>${job.title}</h3>
            <p>${job.description}</p>
            <p>Location: ${job.location}</p>
        </div>
    `;
}

// Function to render job listings
function renderJobListings(jobListings) {
    const jobListingsContainer = document.getElementById('job-listings');
    jobListingsContainer.innerHTML = '';

    jobListings.forEach(job => {
        jobListingsContainer.innerHTML += generateJobListingHTML(job);
    });
}

// Initial render of job listings
renderJobListings(jobListingsData);

// Add event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredJobs = jobListingsData.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) ||
               job.description.toLowerCase().includes(searchTerm) ||
               job.location.toLowerCase().includes(searchTerm);
    });
    renderJobListings(filteredJobs);
});

// Add event listener to the location filter
const locationFilter = document.getElementById('location-filter');
locationFilter.addEventListener('change', function() {
    const selectedLocation = locationFilter.value;
    if (selectedLocation === 'all') {
        renderJobListings(jobListingsData);
    } else {
        const filteredJobs = jobListingsData.filter(job => job.location === selectedLocation);
        renderJobListings(filteredJobs);
    }
});

// Add event listener to the reset filters button
const resetFiltersButton = document.getElementById('reset-filters');
resetFiltersButton.addEventListener('click', function() {
    searchInput.value = ''; // Clear search input
    locationFilter.value = 'all'; // Reset location filter
    renderJobListings(jobListingsData); // Render all job listings
});

