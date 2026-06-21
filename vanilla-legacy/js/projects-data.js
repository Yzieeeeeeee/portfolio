const projectsData = {
    "fest-hub": {
        title: "Fest Hub",
        subtitle: "Cultural Festival Management Platform",
        shortDescription: "An end-to-end platform designed to completely digitize and streamline the execution of educational and cultural festivals. Features dedicated modules for participants, judges, and real-time live leaderboards.",
        projectStatus: "Production",
        timeline: "5 Months",
        platformSupport: ["Android", "iOS", "Web"],
        tags: ["Flutter", "Firebase", "Dart", "Clean Architecture", "Cloud Firestore"],
        heroImage: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=800&auto=format&fit=crop"
        ],
        downloadLink: "#",
        repoLink: "https://github.com/Yzieeeeeeee/fest-hub",
        liveDemoLink: "#",
        
        keyFeatures: [
            "Event Registration & Ticketing",
            "Real-time Judge Module & Scoring",
            "College & Identity Verification System",
            "WAMP Server Integration for Local Sync",
            "Automated Result Management & Leaderboards"
        ],
        technicalAchievements: [
            { icon: "ph-qr-code", title: "QR Code Verification", description: "Implemented highly optimized local QR generation and scanning for instantaneous participant check-ins." },
            { icon: "ph-users-three", title: "Role-Based Access Control", description: "Secure, hierarchical user management segregating Admins, Judges, Participants, and Audiences." },
            { icon: "ph-wifi-slash", title: "Offline Support", description: "Local caching mechanisms ensuring critical event data is available even in low-connectivity venues." }
        ],
        firebaseIntegration: {
            title: "Firebase Ecosystem Engine",
            description: "Deeply integrated with Cloud Firestore for real-time leaderboards, Firebase Authentication for secure access, and Cloud Storage for multimedia management."
        },
        backendArchitecture: {
            title: "Hybrid Cloud/Local Architecture",
            description: "Employed a hybrid strategy using WAMP Server for localized high-speed data transfer alongside Firebase for global synchronization."
        },
        deploymentInfo: "Deployed via AWS EC2 for backend services and Firebase Hosting for the web admin portal.",
        impact: "Successfully replaced chaotic spreadsheet workflows for multiple institutions, streamlining multi-day festival operations flawlessly."
    },
    
    "crm-dashboard": {
        title: "Enterprise CRM Dashboard",
        subtitle: "Analytics & KPI Monitoring",
        shortDescription: "A premium, enterprise-grade CRM Dashboard application. Designed with massive scalability and modern SaaS aesthetics in mind, delivering high-performance analytics, global company directories, and unified activity feeds.",
        projectStatus: "Completed",
        timeline: "4 Months",
        platformSupport: ["Android", "iOS", "Desktop", "Web"],
        tags: ["Flutter", "Dart", "Riverpod", "GoRouter", "Hive", "Dio", "Clean Architecture"],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        screenshots: [
            "legacy/crm dash board app/homepage.jpeg",
            "legacy/crm dash board app/home page dark mode.jpeg",
            "legacy/crm dash board app/login section.jpeg",
            "legacy/crm dash board app/company and details page.jpeg",
            "legacy/crm dash board app/responsivness.jpeg",
            "legacy/crm dash board app/settings page.jpeg"
        ],
        downloadLink: "legacy/crm dash board app/crm dash (1).apk",
        repoLink: "https://github.com/Yzieeeeeeee",
        liveDemoLink: null,
        
        keyFeatures: [
            "High-performance Analytics Dashboard",
            "KPI Monitoring & Data Visualization",
            "Global Company Directories",
            "Unified Activity Feeds",
            "Custom Runtime Localization Engine"
        ],
        technicalAchievements: [
            { icon: "ph-cpu", title: "Advanced State Management", description: "Unidirectional data flow using Riverpod (AsyncNotifier) for seamless loading skeletons and error handling." },
            { icon: "ph-map-trifold", title: "Declarative Navigation", description: "Integrated GoRouter with StatefulShellRoute for a premium SPA desktop-like experience." },
            { icon: "ph-database", title: "Offline-First Initialization", description: "Responsive startup flow using Hive NoSQL to instantly load sessions and themes." },
            { icon: "ph-devices", title: "Adaptive UI Layouts", description: "Dynamic transitions from bottom-navigation on mobile to wide-drawers on desktop using Slivers." }
        ],
        firebaseIntegration: null,
        backendArchitecture: {
            title: "RESTful API Integration",
            description: "Architected a robust networking layer using Dio with global interceptors. Intelligent data degradation and offline state handling via connectivity_plus."
        },
        deploymentInfo: "Distributed across platforms as highly optimized binaries via internal CI/CD pipelines.",
        impact: "Showcased the ability to architect scalable state management solutions and intricate responsive layouts that align with modern enterprise standards."
    },
    
    "ecommerce": {
        title: "E-Commerce Application",
        subtitle: "Scalable Shopping Experience",
        shortDescription: "A fully-featured e-commerce application modeled after industry leaders. Supports complex product variants, fluid shopping carts, seamless authentication, and a frictionless checkout flow.",
        projectStatus: "Completed",
        timeline: "3 Months",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Firestore", "Cloud Functions", "State Management", "UI/UX"],
        heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
        ],
        downloadLink: "#",
        repoLink: "https://github.com/Yzieeeeeeee",
        liveDemoLink: null,
        
        keyFeatures: [
            "Dynamic Product Catalog & Variants",
            "Real-time Cart Management",
            "Order Processing & History",
            "User Authentication & Profile Management",
            "Responsive Cross-Device Layout"
        ],
        technicalAchievements: [
            { icon: "ph-shopping-cart", title: "Reactive Cart System", description: "State management handled flawlessly to ensure cart totals and inventory remain accurate across multiple screens." },
            { icon: "ph-image", title: "Image Optimization", description: "Lazy loading and caching mechanisms for massive product image catalogs to maintain 60fps scrolling." }
        ],
        firebaseIntegration: {
            title: "Firestore Backend & Cloud Functions",
            description: "Powered heavily by Firebase. Utilizing Cloud Functions to securely process orders off-device, and Firestore for highly scalable NoSQL product management."
        },
        backendArchitecture: null,
        deploymentInfo: "Ready for App Store and Play Store distribution using standard deployment tools.",
        impact: "Demonstrated the capability to build high-converting, consumer-facing mobile applications with real-time backend dependencies."
    },

    "music-player": {
        title: "Music Player",
        subtitle: "Modern Audio Experience",
        shortDescription: "A sophisticated, highly optimized music player featuring a sleek dark theme, robust media controls, playlist management, and buttery-smooth micro-interactions.",
        projectStatus: "Beta",
        timeline: "2 Months",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Audio Processing", "Animations", "Local Storage", "UI Design"],
        heroImage: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1200&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
        ],
        downloadLink: "#",
        repoLink: "https://github.com/Yzieeeeeeee",
        liveDemoLink: null,
        
        keyFeatures: [
            "Modern Audio Experience & Controls",
            "Premium Dark Theme Design",
            "Advanced Playlist Management",
            "Background Audio Playback",
            "Optimized Performance for low-end devices"
        ],
        technicalAchievements: [
            { icon: "ph-wave-sine", title: "Audio Engine Integration", description: "Deep integration with native audio plugins for gapless playback and system-level media controls." },
            { icon: "ph-magic-wand", title: "Fluid UI Animations", description: "Custom Hero animations and explicit physical spring-based transitions for the now-playing screen." }
        ],
        firebaseIntegration: null,
        backendArchitecture: {
            title: "Local-First Architecture",
            description: "Focuses heavily on device-side media indexing, leveraging optimized local databases to search and load thousands of tracks instantly."
        },
        deploymentInfo: "Packaged as a standalone application.",
        impact: "Showcases extreme attention to UI/UX detail and the ability to handle complex device hardware integrations in Flutter."
    },

    "snap-shop": {
        title: "Snap Shop",
        subtitle: "Seamless Shopping, Smarter Deliveries.",
        shortDescription: "A robust, production-ready eCommerce application engineered with a scalable layered architecture using GetX. It unifies three distinct user experiences: a consumer shopping interface, an admin dashboard, and a live-tracking delivery module.",
        projectStatus: "Production",
        timeline: "4-6 Weeks",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Firebase", "GetX", "flutter_map", "UPI Pay", "Clean Architecture", "AI"],
        heroImage: "legacy/ecommerce snapshop App/snapshop logo.png",
        heroImageType: "logo",
        screenshots: [
            "legacy/ecommerce snapshop App/screen recoding.mp4",
            "legacy/ecommerce snapshop App/user home page.jpeg",
            "legacy/ecommerce snapshop App/admin home .jpeg",
            "legacy/ecommerce snapshop App/Delivery boy Homepage.jpeg",
            "legacy/ecommerce snapshop App/goog le pay upi check out .jpeg",
            "legacy/ecommerce snapshop App/cart page.jpeg"
        ],
        downloadLink: "#",
        repoLink: "https://github.com/Yzieeeeeeee",
        liveDemoLink: null,
        
        keyFeatures: [
            "Multi-Role System (Customer, Admin, Delivery)",
            "Native UPI Payment Integration",
            "Real-time Reactive Cart Synchronization",
            "Live Map-based Delivery Tracking",
            "AI-Powered Shopping Assistant Chatbot"
        ],
        technicalAchievements: [
            { icon: "ph-users-three", title: "Role-Based Architecture", description: "Engineered an RBAC system routing users into distinct environments based on Firebase Authentication roles." },
            { icon: "ph-robot", title: "Interactive AI Chatbot", description: "Developed a context-aware local assistant parsing natural language to inject purchasable product cards natively in chat." },
            { icon: "ph-map-pin-line", title: "Live Logistics Tracking", description: "Integrated flutter_map and geolocator to track and display real-time turn-by-turn navigation." },
            { icon: "ph-tree-structure", title: "Reactive State Management", description: "Utilized GetX for zero-context routing, dependency injection, and decoupling business logic from UI components." }
        ],
        firebaseIntegration: {
            title: "Optimized Firebase Backend",
            description: "Powered by Cloud Firestore using a NoSQL schema with subcollections to restrict document size, minimize read costs, and scale efficiently."
        },
        backendArchitecture: {
            title: "Layered Clean Architecture",
            description: "Architected a Service-Repository pattern, strictly separating the UI layer (Views), Domain layer (Models), and Data layer (Services), ensuring strong adherence to SOLID principles."
        },
        deploymentInfo: "Production-ready, highly optimized by utilizing cached network images, limiting initial query payloads, and obfuscating Dart code.",
        impact: "Successfully solved the fragmented experience between buyers, store owners, and delivery agents by unifying workflows into a single highly scalable, performant codebase."
    }
};

window.projectsData = projectsData;
