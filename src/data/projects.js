export const projectsData = [
    {
        id: 'blood-stock',
        title: 'Hospital Blood Stock Management',
        category: 'Full Stack',
        shortDesc: 'A platform for hospitals to manage blood inventory, track stock levels, and handle emergency requests using FIFO logic.',
        fullDesc: 'The Hospital Blood Stock Management System is a comprehensive platform designed to streamline blood inventory management for hospitals. It enables hospitals to track stock levels accurately, handle emergency requests efficiently, and manage blood expirations using FIFO (First-In-First-Out) logic. By automating these critical processes, it ensures life-saving blood is available when needed while minimizing wastage.',
        problem: 'Many hospitals still manage blood stock manually or using basic spreadsheets. This causes stock mismanagement, blood expiry wastage, delays during emergencies, and no real-time visibility of inventory. In critical situations, even a few minutes delay can cost a life.',
        solution: 'I built a centralized web-based system where admins or hospitals can manage blood inventory and request blood units. Stock automatically reduces when approved, FIFO logic ensures older blood is used first, and emergency alerts are triggered instantly. This ensures transparency, reduced wastage, and faster emergency response.',
        challenges: [
            {
                title: 'Concurrency Issue',
                description: 'When two hospitals request the same blood group at the same time, stock was going negative.',
                solution: 'Implemented transaction-safe stock deduction logic, added backend validation before approval, and used atomic operations in MongoDB to prevent race conditions.'
            },
            {
                title: 'Expiry Handling',
                description: 'Ensuring expired blood units are not shown in available stock.',
                solution: 'Added expiry date filtering in queries, automated logic to mark expired units, and applied FIFO sorting before deduction.'
            }
        ],
        learnings: [
            'Real-world backend validation is critical',
            'Handling race conditions in databases',
            'Designing scalable REST APIs',
            'Production deployment using Railway',
            'Environment variable security handling'
        ],
        architecture: 'Used MongoDB with separate collections: users (Hospital profiles), blood_inventory (Blood group, units, expiry date), requests (Hospital blood requests), and transactions (Approved stock movements). Stock deduction is handled at backend level through validated request flow.',
        dependencies: [
            { category: 'Backend (Django)', items: ['Django REST Framework', 'djongo / pymongo', 'corsheaders', 'python-dotenv'] },
            { category: 'Frontend (React)', items: ['Axios (API calls)', 'React Router', 'Tailwind CSS'] }
        ],
        techStack: ['Django', 'React.js', 'MongoDB', 'REST APIs', 'JWT', 'Tailwind CSS'],
        features: [
            'Real-time blood stock monitoring across multiple hospital branches.',
            'FIFO-based inventory dispensing to prevent blood expiration.',
            'Emergency request broadcasting system with instant notifications.',
            'Role-based access control (Admin, Hospital Staff).',
            'Secure JWT authentication.'
        ],
        liveLink: 'https://blood-donation-frontend-dyrt.onrender.com/',
        githubLink: null,
        featured: true,
        imageFolder: '/images/projects/blood-stock',
        images: ['H-1.png', 'H-2.png', 'H-3.png', 'H-4.png']
    },
    {
        id: 'lala-halwa',
        title: 'Lala Halwa Karan E-Commerce',
        category: 'Full Stack',
        shortDesc: 'A fully functional traditional sweets e-store with category filtering, cart management, and JWT authentication.',
        fullDesc: 'Lala Halwa Karan is a modern e-commerce platform built for a traditional sweets business. The application provides a seamless shopping experience allowing users to browse sweets by category, add items to their cart, and checkout securely. The backend handles order processing and inventory management, providing the store owner with an easy-to-use dashboard.',
        problem: 'Traditional sweet shops struggle to expand their reach beyond physical locations. Managing inventory, tracking orders, and handling multiple franchises manually is prone to errors and doesn’t scale well. There was a need to digitize a traditional business to meet modern consumer expectations.',
        solution: 'I built a fully functional, full-stack e-commerce platform that digitizes the entire shopping experience. It allows customers to browse products, manage their cart, and securely place orders online. Crucially, the system is designed with a Franchise model at its core—allowing seamless branch management and precise order routing.',
        challenges: [
            {
                title: 'The Cart & Global State Challenge',
                description: 'Managing the shopping cart using Redux Toolkit alongside standard React state required careful architecture.',
                solution: 'Ensured cart updates (adding items, updating quantities) instantly reflected across the UI without unnecessary re-renders, establishing predictable local state management.'
            },
            {
                title: '3D WebGL Integration',
                description: 'Incorporating genuine 3D visualization using @react-three/fiber and loading compressed .glb baked files while maintaining performance.',
                solution: 'Handled dynamic viewport resizing for the 3D canvas on mobile vs. desktop, and reacted to color/material changes dynamically in the browser without dropping frame rates.'
            },
            {
                title: 'Multi-Role Authentication',
                description: 'Securing the backend where users aren’t just customers, but defined by specific roles (user, franchise, admin).',
                solution: 'Implemented strict JWT authentication where API endpoints are heavily protected and scoped based on the specific permissions of the logged-in user.'
            }
        ],
        learnings: [
            'Mastered Django REST Framework for building robust APIs',
            'Deep understanding of relational database design using Django ORM',
            'Advanced proficiency in React and Redux Toolkit state management',
            'Bridging traditional 2D web interfaces with WebGL 3D rendering'
        ],
        architecture: 'The backend utilizes MySQL seamlessly integrated through Django ORM, structured around a normalized relational model. A custom User model overrides Django defaults to use phone as the primary identifier. A Franchise model acts as a parent to Products to identify fulfillment branches. The checkout flow converts Cart items into Orders tied to an OrderStatus timeline.',
        dependencies: [
            { category: 'Frontend (React)', items: ['@reduxjs/toolkit', '@react-three/fiber', '@react-three/drei', 'axios', '@mui/material', 'swiper'] },
            { category: 'Backend (Django)', items: ['djangorestframework', 'djangorestframework_simplejwt', 'mysqlclient', 'Pillow', 'django-cors-headers'] }
        ],
        techStack: ['React', 'Django', 'MySQL', 'Axios', 'Redux', 'Three.js'],
        features: [
            'Dynamic product catalog with category filtering.',
            'Persistent shopping cart functionality.',
            'User registration and secure JWT-based login.',
            'Order tracking and history dashboard.',
            'Responsive design for mobile and desktop shopping.'
        ],
        liveLink: 'https://www.lalashalwakaran.com/',
        githubLink: null,
        featured: false,
        imageFolder: '/images/projects/lala-halwa',
        images: ['L-1.png', 'L-2.png', 'L-3.png', 'L-4.png']
    },
    {
        id: 'donor-app',
        title: 'Donor Mobile Application',
        category: 'Full Stack',
        shortDesc: 'Mobile app for blood donors to manage donation history, receive emergency notifications, and pre-book appointments.',
        fullDesc: 'The Donor Mobile Application serves as the user-facing counterpart to the hospital management system. Built with Flutter, it empowers individuals to track their donation history safely, find nearby blood drives or hospitals in need, and book donation slots. Crucially, it pushes emergency notifications to eligible donors when their specific blood type is urgently required nearby.',
        problem: 'Even when blood is needed urgently, donors are not informed immediately. There is no centralized donor tracking and poor communication between hospitals and donors. Many donors are willing to donate but don’t know when help is needed.',
        solution: 'I developed a Flutter-based mobile app where donors can register with their blood group, view donation history, receive emergency push notifications, and accept or respond to urgent requests. I integrated Firebase Cloud Messaging for real-time alerts.',
        challenges: [
            {
                title: 'Push Notification Setup',
                description: 'Integrating Firebase with the Django backend was tricky. Faced problems with token registration issues, notification delivery failure, and background handling differences on the Android lifecycle.',
                solution: 'Stored device tokens in MongoDB, created a specific backend API endpoint to trigger notifications, and properly configured the Firebase service account.'
            },
            {
                title: 'API Integration & Error Handling',
                description: 'Handling different server response codes and showing proper UI states.',
                solution: 'Implemented a structured API service layer in Flutter, added loading states and retry logic, and centralized error handling.'
            }
        ],
        learnings: [
            'Mobile-to-backend communication architecture',
            'Push notification lifecycle in Android/iOS',
            'Clean architecture folder structuring in Flutter',
            'Environment configuration management',
            'App deployment and build management'
        ],
        architecture: 'MongoDB collections: donors (Name, blood group, eligibility status), donation_history (Past donation records), device_tokens (For push notifications), and emergency_alerts (Notification logs). Each donor is linked via a unique ID to their respective transaction histories.',
        dependencies: [
            { category: 'Flutter (Frontend)', items: ['flutter_dotenv', 'http / dio', 'firebase_messaging', 'provider / riverpod'] },
            { category: 'Backend (Django)', items: ['Django REST Framework', 'Firebase Admin SDK', 'python-dotenv'] }
        ],
        techStack: ['Flutter', 'Firebase', 'Django REST', 'MongoDB', 'Dart'],
        features: [
            'Cross-platform mobile application (iOS & Android).',
            'Firebase Cloud Messaging for instant emergency alerts.',
            'Geolocation-based search for nearest hospitals/blood drives.',
            'Personalized donation history and eligibility tracking.',
            'Secure API integration with the hospital backend.'
        ],
        liveLink: null,
        githubLink: 'https://github.com/saravanakumarj2004/Blood-donor-App',
        featured: false,
        imageFolder: '/images/projects/donor-app',
        images: ['M-1.jpeg', 'M-2.jpeg', 'M-3.jpeg', 'M-4.jpeg']
    },
    {
        id: 'url-detector',
        title: 'Malicious URL Detection Web App',
        category: 'Machine Learning',
        shortDesc: 'Real-time detection of malicious URLs integrating a machine learning backend (Logistic Regression, TF-IDF) with an interactive UI.',
        fullDesc: 'This application provides real-time security analysis by classifying whether a submitted URL is benign, phishing, malware, or spam. The system uses a machine learning model trained on hundreds of thousands of URLs, utilizing TF-IDF vectorization to extract lexical features. A streamlined Streamlit interface allows users to check suspicious links instantly.',
        problem: 'With cyber threats becoming increasingly sophisticated, relying purely on traditional, static blocklists is slow and reactive, leaving users vulnerable to newly created malicious domains. There was a critical need for a proactive, intelligent solution capable of analyzing a web address in real-time before a user\'s system is compromised.',
        solution: 'Developed an AI-powered URL detection platform that evaluates web addresses dynamically. By leveraging a custom deep learning model, it analyzes structural patterns and character sequences, instantly classifying it as either "Safe" or "Malicious" with a visual confidence score.',
        challenges: [
            {
                title: 'Meaningful Feature Extraction',
                description: 'Extracting meaningful features from raw URL strings since web addresses do not follow standard natural language grammar rules.',
                solution: 'Pivoted to a character-level tokenization approach paired with a 1D Convolutional Neural Network (Conv1D) to automatically learn underlying spatial patterns without hard-coded rules.'
            },
            {
                title: 'Data Imbalance',
                description: 'Addressing the inherent data imbalance between millions of benign URLs and the smaller set of malicious ones.',
                solution: 'Required careful data sampling during the training phase to ensure the AI wouldn’t become biased toward predicting external sites as automatically safe.'
            }
        ],
        learnings: [
            'Expanded expertise in applying deep learning specifically to text and sequence classification',
            'Gained hands-on experience designing and training CNNs for Natural Language Processing tasks',
            'Mastered the end-to-end integration process: model serialization, async REST APIs, and async frontend UIs'
        ],
        architecture: 'The platform relies on a stateless, real-time inference architecture rather than a CRUD database constraint. The deep learning weights and character tokenizer are loaded into the backend memory at startup to eliminate cold-start latency. The FastAPI backend receives HTTP POST requests, preprocesses strings into padded sequences, runs neural network inference, and returns a JSON payload.',
        dependencies: [
            { category: 'Deep Learning', items: ['TensorFlow', 'Keras', 'Scikit-learn'] },
            { category: 'Backend (Python)', items: ['FastAPI', 'Uvicorn', 'Pydantic', 'Pandas', 'NumPy'] },
            { category: 'Frontend', items: ['Vanilla JS (Fetch API)', 'CSS Glassmorphism'] }
        ],
        techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NLTK'],
        features: [
            'Real-time URL inference using a pre-trained Logistic Regression model.',
            'TF-IDF feature extraction for lexical analysis of web links.',
            'Interactive web interface for drag-and-drop or text-based URL submission.',
            'High accuracy classification against phishing and malware domains.',
            'Detailed probability breakdown for predictions.'
        ],
        liveLink: 'https://malicious-url-detection-ml-o3lh.onrender.com/',
        githubLink: null,
        featured: true,
        imageFolder: '/images/projects/url-detector',
        images: ['U-1.png', 'U-2.png', 'U-3.png', 'U-4.png']
    },
    {
        id: 'lung-cancer',
        title: 'Lung Cancer Prediction System',
        category: 'Machine Learning',
        shortDesc: 'A web app utilizing a trained regression model to predict lung cancer risk in real-time based on user health data input.',
        fullDesc: 'The Lung Cancer Prediction System is a healthcare tool designed to assess a patient’s risk level based on lifestyle and clinical data (e.g., smoking habits, age, fatigue, coughing). The backend uses a finely-tuned regression model to output a probability score. The lightweight front-end allows medical professionals or individuals to input data via a simple form to receive immediate risk assessments.',
        problem: 'Lung cancer is one of the most common and fatal types of cancer, largely because it is often diagnosed in its later stages. Access to preliminary screening tools can be restricted, and individuals often ignore early warning signs like persistent coughing or fatigue, delaying crucial medical consultations.',
        solution: 'Built a fast, accessible web application that acts as an early warning screening tool. Users input demographic details, lifestyle habits, and physical symptoms. A trained Machine Learning model delivers an instant assessment of their lung cancer risk with a confidence score, empowering proactive medical steps.',
        challenges: [
            {
                title: 'Feature Alignment for Inference',
                description: 'Seamlessly integrating raw web form input with the strict data requirements of the trained Machine Learning model which expected exact feature names and order.',
                solution: 'Deliberately reconstructed the incoming JSON payload into a structured data format with explicitly named feature columns before passing it to the prediction function.'
            },
            {
                title: 'Handling Model State in Web Context',
                description: 'Ensuring the serialized ML model loaded correctly on server initialization and handling exceptions without crashing the application.',
                solution: 'Implemented robust error-handling and proper API error responses to handle missing or corrupted model files gracefully.'
            }
        ],
        learnings: [
            'End-to-End ML Pipeline Integration linking Data Science with Web Dev',
            'Mastered Model Serialization using joblib for production inference',
            'Full-Stack Application Flow handling async JS with a Python backend'
        ],
        architecture: 'Employs a lightweight Client-Server Architecture. The frontend uses a modern form to send async requests. The Flask backend cleans data, transforms it into a 1D structure mapped to 15 features, and feeds it into the Logistic Regression model. The application is entirely stateless—it does not use a database to store live input, prioritizing user privacy, relying solely on the serialized model file.',
        dependencies: [
            { category: 'Web Framework', items: ['Flask', 'gunicorn'] },
            { category: 'Machine Learning', items: ['scikit-learn'] },
            { category: 'Data Processing', items: ['pandas', 'numpy'] },
            { category: 'Serialization', items: ['joblib'] }
        ],
        techStack: ['Flask', 'Python', 'Scikit-learn', 'HTML/CSS', 'Bootstrap'],
        features: [
            'Predictive modeling based on key physiological indicators.',
            'RESTful Flask API to serve model predictions.',
            'Simple, accessible web form for data entry.',
            'Instant risk probability scoring.',
            'Model trained on validated medical datasets.'
        ],
        liveLink: 'https://lung-cancer-prediction-ml.onrender.com/',
        githubLink: null,
        featured: false,
        imageFolder: '/images/projects/lung-cancer',
        images: ['ML-1.png', 'ML-2.png', 'ML-3.png', 'ML-4.png']
    },
    {
        id: 'recruitment-system',
        title: 'Recruitment System',
        category: 'Full Stack',
        isMiniProject: true,
        shortDesc: 'A web-based recruitment platform automating the job hiring workflow for administrators and job seekers (College Level Mini Project).',
        fullDesc: 'This College Level Mini Project is a robust application designed to simplify and automate the job hiring process. It provides a centralized platform for both administrators and job seekers. Admins can effortlessly create, update, and manage job postings, while also reviewing and approving or rejecting candidate applications. Job seekers receive a streamlined experience where they can register, browse available jobs, apply by uploading resumes, and track their application status in real-time through personalized role-based dashboards.',
        techStack: ['JavaFX', 'MySQL', 'Apache NetBeans', 'Java', 'SQL'],
        features: [
            'Comprehensive administrative controls for job posting management.',
            'Applicant tracking system with approve/reject workflows.',
            'User registration and secure login functionality.',
            'Resume upload and real-time application status tracking.',
            'Role-based dashboards (Admin, Job Seeker) for transparent recruitment.'
        ],
        liveLink: null,
        githubLink: 'https://github.com/saravanakumarj2004/Recruitment-System-Using-JavaFX-and-MySQL',
        featured: true,
        imageFolder: '/images/projects/recruitment-system',
        images: ['R-1.png', 'R-2.png', 'R-3.png', 'R-4.png']
    }
];
