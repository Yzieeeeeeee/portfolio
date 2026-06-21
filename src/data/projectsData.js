const projectsData = {
    "fest-hub": {
        title: "Fest Hub",
        subtitle: "Cultural Festival Management Platform",
        shortDescription: "An end-to-end platform designed to completely digitize and streamline the execution of educational and cultural festivals. Features dedicated modules for participants, judges, and real-time live leaderboards.",
        featured: false,
        accentColor: "#f97316",
        phoneScreenshot: "legacy/festhub/student home .jpg",
        features: [
            "Real-time leaderboards & judge scoring",
            "QR-based participant verification",
            "Offline-first event data caching",
            "Multi-role access (Admin, Judge, Participant)"
        ],
        projectStatus: "Production",
        timeline: "5 Months",
        platformSupport: ["Android"],
        tags: ["Native Android", "Java", "Django"],
        heroImage: "legacy/festhub/festhub logo main .png",
        heroImageType: "logo",
        screenshots: [
            "legacy/festhub/screen recording.mp4",
            "legacy/festhub/festhub logo main .png",
            "legacy/festhub/ADMIN HOME .jpg",
            "legacy/festhub/admin login.jpg",
            "legacy/festhub/admin functions .jpg",
            "legacy/festhub/college home .jpg",
            "legacy/festhub/college login .jpg",
            "legacy/festhub/college functions .jpg",
            "legacy/festhub/student home .jpg",
            "legacy/festhub/student login .jpg",
            "legacy/festhub/student functions .jpg",
            "legacy/festhub/judge home .jpg",
            "legacy/festhub/judge functions.jpg",
            "legacy/festhub/sign up page .jpg",
            "legacy/festhub/admin add  item .jpg",
            "legacy/festhub/admin add  judge .jpg",
            "legacy/festhub/admin add schedulle .jpg",
            "legacy/festhub/admin participants list .jpg",
            "legacy/festhub/admin send notification .jpg",
            "legacy/festhub/admin verify collage .jpg",
            "legacy/festhub/admin view item.jpg",
            "legacy/festhub/admin view judge .jpg",
            "legacy/festhub/college add student .jpg",
            "legacy/festhub/college item allocation .jpg",
            "legacy/festhub/college sign up .jpg",
            "legacy/festhub/college view notification .jpg",
            "legacy/festhub/college view student .jpg",
            "legacy/festhub/judge view schedule .jpg",
            "legacy/festhub/view notification .jpg"
        ],
        downloadLink: "#",
        repoLink: "https://github.com/Yzieeeeeeee/fest-hub--frontend",
        liveDemoLink: "#",
        
        keyFeatures: [
            "Event Registration & Ticketing",
            "Real-time Judge Module & Scoring",
            "College & Identity Verification System",
            "Django Backend with RESTful APIs",
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
        shortDescription: "A premium, enterprise-grade CRM Dashboard application built as a machine test submission. Designed with massive scalability and modern SaaS aesthetics in mind, delivering high-performance analytics, global company directories, and unified activity feeds. This is a demonstrative copy — not the original production build.",
        featured: false, 
        projectStatus: "Machine Test",
        timeline: "Machine Test",
        platformSupport: ["Android", "iOS", "Desktop", "Web"],
        tags: ["Flutter", "Dart", "Riverpod", "GoRouter", "Hive", "Dio", "Clean Architecture"],
        heroImage: "legacy/crm dash board app/crm_logo.jpg",
        heroImageType: "logo",
        screenshots: [
            "legacy/crm dash board app/screen recording.mp4",
            "legacy/crm dash board app/crm_hero.png",
            "legacy/crm dash board app/homepage.jpeg",
            "legacy/crm dash board app/home page dark mode.jpeg",
            "legacy/crm dash board app/login section.jpeg",
            "legacy/crm dash board app/company and details page.jpeg",
            "legacy/crm dash board app/company details page dark mode.jpeg",
            "legacy/crm dash board app/responsivness.jpeg",
            "legacy/crm dash board app/settings page.jpeg",
            "legacy/crm dash board app/setting page dark mode.jpeg",
            "legacy/crm dash board app/settitngs page dark mode with changed language.jpeg",
            "legacy/crm dash board app/notification section.jpeg",
            "legacy/crm dash board app/profile details page.jpeg"
        ],
        downloadLink: "legacy/crm dash board app/crm dash (1).apk",
        repoLink: "https://github.com/Yzieeeeeeee/crm-pro-dashboard",
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
    

    "vigilant": {
        title: "Vigilant",
        subtitle: "Incident Alert App",
        shortDescription: "A Flutter-based mobile application designed to report, manage, and monitor incidents efficiently. It allows everyday users to quickly raise alerts about incidents while giving administrators the tools to manage, track, and respond to these reports in real time.",
        featured: true,
        accentColor: "#ef4444",
        phoneScreenshot: "/legacy/vigilant/user dash board .jpeg",
        features: [
            "Real-time incident reporting with GPS",
            "Live status tracking & admin dashboard",
            "Hardware alerts (vibration + audio)",
            "Role-based access control"
        ],
        projectStatus: "Completed",
        timeline: "Completed",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Firebase", "GetX", "Geolocation", "Cloud Firestore"],
        heroImage: "legacy/vigilant/user dash board .jpeg",
        heroImageType: "screenshot",
        screenshots: [
            "legacy/vigilant/login Screen .jpeg",
            "legacy/vigilant/register.jpeg",
            "legacy/vigilant/permisiions screen .jpeg",
            "legacy/vigilant/user dash board .jpeg",
            "legacy/vigilant/user report incident scrnee.jpeg",
            "legacy/vigilant/user inicideht screen .jpeg",
            "legacy/vigilant/user  incident screen .jpeg",
            "legacy/vigilant/user news scren .jpeg",
            "legacy/vigilant/user profile page .jpeg",
            "legacy/vigilant/admin dash board .jpeg",
            "legacy/vigilant/admin command center .jpeg",
            "legacy/vigilant/admin add inicident page .jpeg",
            "legacy/vigilant/admin manage incienet enews .jpeg",
            "legacy/vigilant/admin sent broad cast .jpeg",
            "legacy/vigilant/admin user page.jpeg",
            "legacy/vigilant/ADMIN MANAG E user .jpeg"
        ],
        downloadLink: "legacy/vigilant/Vigilant.apk",
        repoLink: "https://github.com/Yzieeeeeeee/Vigilant-Incident-Alert-App",
        liveDemoLink: null,
        
        keyFeatures: [
            "User & Admin Dual Module Architecture",
            "Real-time Incident Reporting with Images",
            "Live GPS Location Fetching via geolocator",
            "Real-time Status Tracking (Pending, In Progress, Resolved)",
            "Admin Dashboard with Incident and User Management"
        ],
        technicalAchievements: [
            { icon: "ph-map-pin-line", title: "Geolocation & Maps", description: "Integrated geolocator for real-time GPS coordinates and flutter_map for displaying incident locations interactively." },
            { icon: "ph-shield-check", title: "Role-Based Access Control", description: "Securely differentiated standard Users and Admins using Firebase Auth, routing them to distinct dashboards." },
            { icon: "ph-bell-ringing", title: "Hardware Feedback", description: "Utilized audioplayers and vibration plugins to provide audible alerts and haptic feedback when incidents are reported." },
            { icon: "ph-tree-structure", title: "GetX State Management", description: "Engineered scalable state and dependency management using GetX, alongside oc_liquid_glass for premium UI components." }
        ],
        firebaseIntegration: {
            title: "Comprehensive Firebase Integration",
            description: "Leverages Firebase Auth for secure login, Cloud Firestore for real-time NoSQL incident streams, and Firebase Storage for uploading and serving incident evidence images."
        },
        backendArchitecture: {
            title: "Real-time NoSQL Architecture",
            description: "Built on top of Cloud Firestore, enabling live updates to both user and admin apps without requiring manual data fetching or polling."
        },
        deploymentInfo: "Packaged as a standalone application.",
        impact: "Provides a robust, scalable tool for community safety and rapid emergency response, demonstrating the ability to integrate hardware features with real-time cloud databases."
    },

    "snap-shop": {
        title: "Snap Shop",
        subtitle: "Seamless Shopping, Smarter Deliveries.",
        shortDescription: "A robust, production-ready eCommerce application engineered with a scalable layered architecture using GetX. It unifies three distinct user experiences: a consumer shopping interface, an admin dashboard, and a live-tracking delivery module.",
        featured: true,
        accentColor: "#06b6d4",
        phoneScreenshot: "/legacy/ecommerce snapshop App/user home page.jpeg",
        features: [
            "Multi-role system (Customer, Admin, Delivery)",
            "Native UPI payment integration",
            "AI-powered shopping assistant",
            "Live map-based delivery tracking"
        ],
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
            "legacy/ecommerce snapshop App/cart page.jpeg",
            "legacy/ecommerce snapshop App/admin edit products.jpeg",
            "legacy/ecommerce snapshop App/check out page fixed .jpeg",
            "legacy/ecommerce snapshop App/contact page.jpeg",
            "legacy/ecommerce snapshop App/detaied products page .jpeg",
            "legacy/ecommerce snapshop App/FAQ page.jpeg",
            "legacy/ecommerce snapshop App/ggogle pay card check out .jpeg",
            "legacy/ecommerce snapshop App/goog le pay upi check out .jpeg",
            "legacy/ecommerce snapshop App/Login.jpeg",
            "legacy/ecommerce snapshop App/Onboard.jpeg",
            "legacy/ecommerce snapshop App/order check out .jpeg",
            "legacy/ecommerce snapshop App/splashscreen.jpeg",
            "legacy/ecommerce snapshop App/user edit profile.jpeg",
            "legacy/ecommerce snapshop App/user profile page.jpeg",
            "legacy/ecommerce snapshop App/architecture snapshop.png",
            "legacy/ecommerce snapshop App/architecture snapshop version 2.png",
            "legacy/ecommerce snapshop App/uml digrams.png"
        ],
        downloadLink: "https://drive.google.com/YOUR_LINK_HERE",
        repoLink: "https://github.com/Yzieeeeeeee/ecommerce_project",
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
    },

    "rent4u": {
        title: "RENT4U",
        subtitle: "Personal Belongings Rental Platform",
        shortDescription: "A full-lifecycle rental platform engineered to facilitate peer-to-peer sharing. Features a complete transaction flow including item listing, secure requests, real-time messaging, checkout, and an admin moderation dashboard.",
        featured: true,
        accentColor: "#8b5cf6",
        phoneScreenshot: "/legacy/Rent4u- apersonal belongings rental app/user home page .jpeg",
        features: [
            "Peer-to-peer rental marketplace",
            "Real-time Firestore messaging",
            "Neumorphic design system",
            "Complete transaction lifecycle"
        ],
        projectStatus: "Completed",
        timeline: "2-3 Months",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Firebase", "GetX", "Neumorphic UI", "Clean Architecture"],
        heroImage: "legacy/Rent4u- apersonal belongings rental app/rent4u_logo.jpg",
        heroImageType: "logo",
        screenshots: [
            "legacy/Rent4u- apersonal belongings rental app/about the app user .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/admin app reviews page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/admin broadcast message .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/admin dash board.jpeg",
            "legacy/Rent4u- apersonal belongings rental app/admin manage users page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/admin review items page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/help and support user.jpeg",
            "legacy/Rent4u- apersonal belongings rental app/Login page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/notification settings user .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/onboard1 (2).jpg",
            "legacy/Rent4u- apersonal belongings rental app/onboard2 (2).jpg",
            "legacy/Rent4u- apersonal belongings rental app/onboard3 (2).jpg",
            "legacy/Rent4u- apersonal belongings rental app/rate app user.jpeg",
            "legacy/Rent4u- apersonal belongings rental app/register  page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user account settings page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user add item page.jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user chat box .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user edit profile page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user home page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user items on rent page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user meaagaes page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user notificatins page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user privacy and security page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user product details page.jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user request an item page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/user settings page .jpeg",
            "legacy/Rent4u- apersonal belongings rental app/WhatsApp Image 2026-04-16 at 3.31.18 PM.jpeg"
        ],
        downloadLink: "legacy/Rent4u- apersonal belongings rental app/Rent4u.apk",
        repoLink: "https://github.com/Yzieeeeeeee/RENT4U-a-Personal-belongings-rental-app",
        liveDemoLink: null,
        
        keyFeatures: [
            "Peer-to-Peer Rental Marketplace",
            "Real-time Chat via Firestore",
            "Comprehensive Admin Dashboard",
            "Complete Transaction & Request Lifecycle",
            "Neumorphic UI/UX Design System"
        ],
        technicalAchievements: [
            { icon: "ph-paint-brush-broad", title: "Neumorphic UI Engine", description: "Replaced standard Material Design with flutter_neumorphic_plus to create a striking, soft-UI aesthetic with custom shadows, depths, and light sources." },
            { icon: "ph-chat-circle-dots", title: "Real-time Messaging", description: "Engineered low-latency chat capabilities using Firebase Cloud Firestore for instant communication between renters and owners." },
            { icon: "ph-shield-check", title: "Enum-Driven State Safety", description: "Implemented strict type-safety over string-based statuses using enums for request lifecycles and payment methods." },
            { icon: "ph-users", title: "Multi-Role Environment", description: "Segregated user, seller, and admin interfaces natively to optimize the experience based on user roles and permissions." }
        ],
        firebaseIntegration: {
            title: "Scalable Firebase Backend",
            description: "Leverages Firebase Authentication for OAuth, Cloud Firestore for real-time document sync and chat, and Firebase Storage for managing high-res product imagery."
        },
        backendArchitecture: {
            title: "Service-Oriented Architecture",
            description: "Abstracted database calls into dedicated services (Auth, Product, Request, Admin) to decouple UI widgets from data layers, ensuring high testability and clean domain logic."
        },
        deploymentInfo: "Uses GetX for unified state management, dependency injection, and declarative routing.",
        impact: "Provides a highly polished and scalable foundation for circular economy marketplaces, demonstrating mastery over modern Flutter UI design and real-time backend synchronization."
    },

    "revvo": {
        title: "Revvo",
        subtitle: "Automotive Rental & E-Commerce App",
        shortDescription: "A premium Flutter application integrated with Firebase that unites car rentals, a recycled auto-parts marketplace, and an interactive 3D virtual showroom under a single ecosystem.",
        featured: true,
        accentColor: "#eab308",
        phoneScreenshot: "legacy/revvo/user dash board .jpeg",
        features: [
            "Immersive 3D & 360 Showroom",
            "ScrapNet Auto Parts Marketplace",
            "Multi-Role Portals",
            "Geolocation-Based Booking"
        ],
        projectStatus: "Completed",
        timeline: "2-3 Months",
        platformSupport: ["Android", "iOS", "Web", "Desktop"],
        tags: ["Flutter", "Firebase", "Riverpod", "GoRouter", "3D Showroom", "Clean Architecture"],
        heroImage: "legacy/revvo/revvo_logo.png",
        heroImageType: "logo",
        screenshots: [
            "legacy/revvo/admin add vehichle.jpeg",
            "legacy/revvo/admin broad cast center.jpeg",
            "legacy/revvo/admin dash board.jpeg",
            "legacy/revvo/admin manage cars.jpeg",
            "legacy/revvo/admin manage users.jpeg",
            "legacy/revvo/admin user feed back.jpeg",
            "legacy/revvo/edit profile seller.jpeg",
            "legacy/revvo/history seller.jpeg",
            "legacy/revvo/privacy page  seller.jpeg",
            "legacy/revvo/rate the app.jpeg",
            "legacy/revvo/reveneue seller.jpeg",
            "legacy/revvo/SELLER CHAT SECTION.jpeg",
            "legacy/revvo/seller dash borad.jpeg",
            "legacy/revvo/seller help and support.jpeg",
            "legacy/revvo/seller inverntory page.jpeg",
            "legacy/revvo/seller list item .jpeg",
            "legacy/revvo/seller notification.jpeg",
            "legacy/revvo/user chat screen.jpeg",
            "legacy/revvo/user dash board .jpeg",
            "legacy/revvo/user favorites.jpeg",
            "legacy/revvo/user profile .jpeg",
            "legacy/revvo/user rental vehichles.jpeg",
            "legacy/revvo/user request part .jpeg",
            "legacy/revvo/user scrap items.jpeg"
        ],
        downloadLink: "https://drive.google.com/YOUR_LINK_HERE",
        repoLink: "https://github.com/Yzieeeeeeee/Revvo-",
        liveDemoLink: null,
        
        keyFeatures: [
            "Multi-Role Portals (Customer, Seller, Admin)",
            "Immersive 3D & 360-Degree Showroom",
            "Smart Geolocation-Based Booking",
            "ScrapNet Recycled Auto Parts Marketplace",
            "Real-time Chat & KYC Verification Flow"
        ],
        technicalAchievements: [
            { icon: "ph-shield-check", title: "Role-Based Access Control", description: "Engineered dynamic GoRouter middleware guards restricting routes based on user authentication status and verified roles." },
            { icon: "ph-cube", title: "Virtual 3D Showroom", description: "Rendered interactive 3D models using model_viewer_plus and 360-degree virtual vehicle spin showrooms using cloudimage_360_view." },
            { icon: "ph-tree-structure", title: "Clean Riverpod Architecture", description: "Leveraged Riverpod for decoupled state management and dependency injection, ensuring clean testing boundaries." },
            { icon: "ph-map-pin", title: "Hardware & GPS Integration", description: "Integrated biometric local authentication, Geolocator GPS tracking, QR code confirmations, and custom haptic feedback." }
        ],
        firebaseIntegration: {
            title: "Firebase Ecosystem Engine",
            description: "Deeply integrated with Cloud Firestore for real-time data sync, Firebase Auth for security, and Firebase Storage for KYC documents and listing media."
        },
        backendArchitecture: {
            title: "Declarative Navigation & Dynamic Guards",
            description: "Structured navigation with GoRouter, mapping role boundaries seamlessly and redirecting unverified users automatically."
        },
        deploymentInfo: "Optimized for Android, iOS, Web, and Desktop, featuring shimmers and IndexedStack to ensure 60fps transitions.",
        impact: "Redefined automotive rentals and parts recycling by uniting them into a single, cohesive, high-performance ecosystem."
    },

    "expense-tracker": {
        title: "Expense Tracker",
        subtitle: "Personal Finance & Dual-Role Management App",
        shortDescription: "A production-quality Flutter + Firebase personal finance application featuring dual-role environments (User & Admin), real-time Firestore streams, biometric authentication, multi-wallet management, multi-currency support, live analytics, and a full admin control plane — all in a single cleanly architected codebase.",
        featured: true,
        accentColor: "#22c55e",
        phoneScreenshot: "/legacy/expense tracker/user home page.jpeg",
        features: [
            "Biometric fingerprint / face lock",
            "Multi-wallet atomic transfers",
            "Live analytics with fl_chart",
            "Dual-role (User & Admin) environments"
        ],
        projectStatus: "Completed",
        timeline: "2-3 Months",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Firebase", "Provider", "GetX", "Biometrics", "fl_chart", "Clean Architecture"],
        heroImage: "legacy/expense tracker/user home page.jpeg",
        heroImageType: "screenshot",
        screenshots: [
            "legacy/expense tracker/splash screen.jpeg",
            "legacy/expense tracker/login page.jpeg",
            "legacy/expense tracker/register page.jpeg",
            "legacy/expense tracker/set up savings page.jpeg",
            "legacy/expense tracker/user add bank balance page.jpeg",
            "legacy/expense tracker/user cuurnecny set up page.jpeg",
            "legacy/expense tracker/user home page.jpeg",
            "legacy/expense tracker/user add transacation page.jpeg",
            "legacy/expense tracker/user analytics page.jpeg",
            "legacy/expense tracker/user analytics page full.jpeg",
            "legacy/expense tracker/user wallet.jpeg",
            "legacy/expense tracker/user wallet transfer money page.jpeg",
            "legacy/expense tracker/user profile.jpeg",
            "legacy/expense tracker/user settings page.jpeg",
            "legacy/expense tracker/user notifications.jpeg",
            "legacy/expense tracker/user privacy policy.jpeg",
            "legacy/expense tracker/user rating.jpeg"
        ],
        downloadLink: "#",
        repoLink: "https://github.com/Yzieeeeeeee/expense-tracker",
        liveDemoLink: null,

        keyFeatures: [
            "Dual-Role System (User & Admin Environments)",
            "Biometric Fingerprint / Face Authentication",
            "Multi-Wallet Management with Atomic Transfers",
            "Multi-Currency Support with Live Rate Conversion",
            "Live Analytics Dashboard with fl_chart"
        ],
        technicalAchievements: [
            { icon: "ph-fingerprint", title: "Biometric Security", description: "Deep integration with the local_auth package for real hardware fingerprint/face lock — wrapping the full app behind a biometric gate on login." },
            { icon: "ph-arrows-left-right", title: "Atomic Wallet Transfers", description: "Money transfers between wallets use Firestore batch writes — both transactions are committed simultaneously. If one fails, both roll back. Zero data inconsistency." },
            { icon: "ph-chart-bar", title: "Real-Time Stream Analytics", description: "All balances, budgets and transactions are live Firestore streams. No manual refresh calls — the UI rebuilds automatically whenever data changes." },
            { icon: "ph-shield-check", title: "Role-Based Auth Gate", description: "A smart AuthGate reads the user's Firestore role field and routes them to either the User dashboard or the Admin control plane with zero shared UI." }
        ],
        firebaseIntegration: {
            title: "Firebase Ecosystem",
            description: "Firestore offline persistence enabled for offline-first capability. Real-time streams for transactions, wallets, budgets, and global currencies. Firebase Auth handles email/password and Google Sign-In. Firebase Storage manages profile photos."
        },
        backendArchitecture: {
            title: "Provider + Repository Pattern",
            description: "Three root-level providers (ExpenseProvider, AdminProvider, ThemeProvider) manage all state reactively. Batch writes ensure atomic operations. GetX handles routing and dependency injection. SharedPreferences persists theme across restarts."
        },
        deploymentInfo: "Offline-first via Firestore persistence. Portrait orientation locked. Lottie animated splash screen on launch.",
        impact: "Demonstrates mastery over real hardware integrations (biometrics), reactive streaming architectures, atomic database operations, and dual-role app design — all packaged in a polished, production-ready interface."
    },

    "inav-technologies": {
        title: "Payment Collection System",
        subtitle: "Loan & EMI Management Platform",
        shortDescription: "A full-stack, cross-platform Flutter mobile application built for iNav Technologies to manage loans, EMI schedules, and payment collections. Built as a machine test submission — this is a demonstrative copy, not the original production build.",
        featured: true,
        accentColor: "#eab308",
        phoneScreenshot: "legacy/inav/onboard.jpeg",
        features: [
            "Full-stack Flutter + Node.js + MySQL",
            "EMI scheduling & partial payments",
            "Deployed on AWS EC2 with CI/CD",
            "Dark/light theme with persistence"
        ],
        projectStatus: "Machine Test",
        timeline: "Machine Test",
        platformSupport: ["Android", "iOS", "Web"],
        tags: ["Flutter", "Node.js", "MySQL", "AWS EC2", "REST API", "GoRouter", "FinTech"],
        heroImage: "legacy/inav/inav_logo.png",
        heroImageType: "logo",
        screenshots: [
            "legacy/inav/WhatsApp Video 2026-06-21 at 1.20.46 PM.mp4",
            "legacy/inav/inav_logo.png",
            "legacy/inav/onboard.jpeg",
            "legacy/inav/onboard 2.jpeg",
            "legacy/inav/login page.jpeg",
            "legacy/inav/register page .jpeg",
            "legacy/inav/loans section .jpeg",
            "legacy/inav/paymenet section .jpeg",
            "legacy/inav/profile page.jpeg",
            "legacy/inav/support page.jpeg",
            "legacy/inav/WhatsApp Image 2026-06-21 at 1.27.20 PM.jpeg",
            "legacy/inav/WhatsApp Image 2026-06-21 at 1.27.21 PM.jpeg"
        ],
        downloadLink: "legacy/inav/inav.apk",
        repoLink: "https://github.com/Yzieeeeeeee/inav-frontend",
        liveDemoLink: null,

        keyFeatures: [
            "Loan Account Management & EMI Scheduling",
            "Full / Partial EMI Payment Submission",
            "Payment History & Transaction Tracking",
            "Browse Available Loan Offers",
            "Dark / Light Theme with Session Persistence"
        ],
        technicalAchievements: [
            { icon: "ph-bank", title: "Full-Stack Architecture", description: "Flutter frontend connected to a Node.js/Express REST API backed by MySQL, hosted on AWS EC2 — a complete production-grade deployment stack." },
            { icon: "ph-map-trifold", title: "GoRouter v17 Navigation", description: "Implemented declarative URL-based routing with 15+ named routes using GoRouter v17, enabling deep-linking and browser-compatible navigation for the web target." },
            { icon: "ph-moon", title: "Persistent Theme Engine", description: "Custom ThemeProvider with ChangeNotifier persists light/dark mode selections across sessions using shared_preferences." },
            { icon: "ph-calendar-check", title: "EMI Schedule & Payment Flow", description: "Complete EMI repayment calendar, full or partial payment submission, real-time payment status updates, and a polished payment success confirmation screen." }
        ],
        firebaseIntegration: null,
        backendArchitecture: {
            title: "Node.js + MySQL REST API on AWS EC2",
            description: "The backend is a Node.js/Express server running on AWS EC2 (Ubuntu 22.04), connected to a MySQL database. pm2 manages the process, with Nginx serving the Flutter Web build. GitHub Actions CI/CD validates both frontend and backend on every push to main."
        },
        deploymentInfo: "Deployed on AWS EC2 with pm2 (backend) and Nginx (frontend). Flutter Web build served statically. GitHub Actions automates build validation.",
        impact: "Demonstrates end-to-end full-stack mobile development — from Flutter UI to REST API design and cloud deployment — within a real-world FinTech context. Built as a machine test for iNav Technologies; this portfolio entry is a demonstrative copy of that submission."
    },

    "herody-todo": {
        title: "Herody Todo App",
        subtitle: "TaskFlow — Smart Task Management",
        shortDescription: "A production-quality Flutter task management app built as a machine test for Herody. Features real-time Firestore sync, Google Sign-In, live countdown alarms, a Focus Mode, optimistic UI updates, swipe gestures, and an in-app activity log — all in a clean feature-first architecture.",
        featured: false,
        projectStatus: "Machine Test",
        timeline: "Machine Test",
        platformSupport: ["Android", "iOS"],
        tags: ["Flutter", "Firebase", "GoRouter", "Provider", "Lottie", "Material 3"],
        accentColor: "#3b82f6",
        phoneScreenshot: "legacy/todo app/homepage.jpeg",
        features: [
            "Live countdown alarms",
            "Real-time Firestore sync",
            "Optimistic UI updates",
            "In-app activity log"
        ],
        heroImage: "legacy/todo app/homepage.jpeg",
        heroImageType: "screenshot",
        screenshots: [
            "legacy/todo app/scrren recording .mp4",
            "legacy/todo app/splash screen .jpeg",
            "legacy/todo app/login.jpeg",
            "legacy/todo app/homepage.jpeg",
            "legacy/todo app/home page dark mode .jpeg",
            "legacy/todo app/focus section.jpeg",
            "legacy/todo app/focus mode dark mode .jpeg",
            "legacy/todo app/edit task section.jpeg",
            "legacy/todo app/notification.jpeg",
            "legacy/todo app/notification page .jpeg",
            "legacy/todo app/profile page .jpeg",
            "legacy/todo app/profile page dark mode .jpeg"
        ],
        downloadLink: "legacy/todo app/Todo.apk",
        repoLink: "https://github.com/Yzieeeeeeee/Todo-App--Herody",
        liveDemoLink: null,

        keyFeatures: [
            "Email / Password + Google Sign-In Auth",
            "Real-time Firestore Task CRUD with Optimistic UI",
            "Live Countdown Alarm Timer (ticks every second)",
            "Priority Tagging (Low / Medium / High)",
            "In-App Activity Log & Performance Analytics"
        ],
        technicalAchievements: [
            { icon: "ph-lightning", title: "Optimistic UI Updates", description: "Tasks appear and disappear instantly in the UI. Firebase writes happen in the background with automatic rollback on network failure — zero perceived latency." },
            { icon: "ph-timer", title: "Live Countdown Timer", description: "A Timer.periodic(1 second) ticks only when tasks with alarms exist, rebuilding the UI each second without unnecessary overhead." },
            { icon: "ph-bell-ringing", title: "Session-Aware Activity Log", description: "The in-app notification log resets per login session and automatically analyzes task completion milestones to surface performance insights." },
            { icon: "ph-tree-structure", title: "3-Provider Chain Architecture", description: "ThemeProvider, AuthProvider, and NotificationProvider all feed into TaskProvider via ProxyProvider2, ensuring auto-init and auto-clear on login/logout with zero manual wiring." }
        ],
        firebaseIntegration: {
            title: "Firebase Real-time Backend",
            description: "Firestore powers all task CRUD with real-time sync. Firebase Auth handles email/password and Google Sign-In. Firebase Realtime DB is used alongside Firestore for lightweight state signals."
        },
        backendArchitecture: {
            title: "Feature-First Architecture + GoRouter",
            description: "Clean feature-first folder structure separating auth, tasks, notifications, and profile modules. GoRouter v14 handles all declarative navigation. SharedPreferences persists the theme across restarts. Microtask safety prevents setState during build cycles."
        },
        deploymentInfo: "Lottie animated splash screen, flutter_slidable swipe gestures, Google Fonts typography, and Material 3 design system.",
        impact: "Demonstrates clean architecture discipline, real-time streaming patterns, optimistic UI engineering, and practical machine test readiness — delivered as a polished, production-quality submission."
    }
};

export default projectsData;
