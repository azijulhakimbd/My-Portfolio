export const projects = [
  // Petsera Project
  {
    id: "1",
    name: "Petsera — MERN Pet Adoption & Donation Platform",
    images: [
      "https://i.postimg.cc/2S8nCtww/Petsera-Banner.jpg",
      "https://i.postimg.cc/XNdfLdqw/Feature.jpg",
      "https://i.postimg.cc/DyhqM04R/About.jpg",
      "https://i.postimg.cc/28x4RY4y/All-Pets-1.jpg",
      "https://i.postimg.cc/hvLVGW6C/Donations-1.jpg",
      "https://i.postimg.cc/yxdntG2k/Dashboard.jpg",
      "https://i.postimg.cc/j5RMQ2X6/All-User.jpg"
    ],
    description:
      "Petsera is a full-featured, secure, and responsive pet adoption and donation platform built with the MERN stack. It connects animal lovers with pets in need while enabling secure online donations via Stripe. Users can adopt pets, create & manage donation campaigns, and access personalized dashboards. The admin panel allows comprehensive management of users, pets, and campaigns. Designed with accessibility and performance in mind, Petsera empowers communities to help animals find loving homes through technology.",
    stack: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
    ],
    live: "https://petsera.netlify.app/",
    client: "https://github.com/azijulhakimbd/Petsera-Client-Side",
    server: "https://github.com/azijulhakimbd/Petsera-Server-Side",
    features: [
      "Firebase Authentication with Email, Google & GitHub",
      "JWT-protected routes with role-based access",
      "Pet adoption with modal-based request system",
      "Create and donate to campaigns via Stripe",
      "User dashboard to manage pets and donations",
      "Admin panel to manage users, pets, and campaigns",
      "Infinite scrolling for pets and donations",
      "WYSIWYG Markdown editor for campaigns",
    ],
    challenges:
      "Integrating secure Stripe payments while maintaining PCI compliance, building infinite scrolling without hurting performance, creating a robust role-based access system for different user types, handling large image uploads efficiently, ensuring SEO optimization despite heavy client-side rendering.",
    improvements:
      "Add automated email notifications for adoption status changes, implement an adoption request approval workflow, add pet success stories section, optimize backend queries with indexing and caching, introduce AI-powered pet matching recommendations.",
  },

  // MA Restaurant Project
  {
    id: "2",
    name: "Restaurant Management System",
    images: [
      "https://i.postimg.cc/1XWRBX8J/MA-Banner.jpg",
      "https://i.postimg.cc/5y9N8L2X/Top-Food.png",
      "https://i.postimg.cc/Jn5zyPMw/Offer-Page.jpg",
      "https://i.postimg.cc/HxgLsfG4/ALL-Foods.jpg",
      "https://i.postimg.cc/wBJvz9rj/Food-Gallery.jpg",
      "https://i.postimg.cc/L6ChBCf2/Dashboard-MA.jpg",
      "https://i.postimg.cc/P50x0C27/MY-Foods.jpg",
      "https://i.postimg.cc/2S1yHQFv/My-Order.png",
    ],
    description:
      "A comprehensive restaurant management web application enabling admins to add, update, and delete food items, track orders, and manage customers. Customers can browse the menu, place orders, and view their order history. Built with a mobile-first approach, it ensures a smooth experience across devices.",
    stack: [
  
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "JWT",
      "Express JS"
      
    ],
    live: "https://ma-restaurant.netlify.app/",
    client: "https://github.com/azijulhakimbd/MA-Restaurant-Client",
    server: "https://github.com/azijulhakimbd/MA-Restaurant-Server",
    features: [
      "Add and manage food items",
      "User-specific order history",
      "Admin panel for food & user management",
      "Food filtering by category",
      "Responsive UI with clean layout",
    ],
    challenges:
      "Implementing dynamic filtering and search without overloading the database, ensuring smooth order management in real-time, handling secure image uploads for food items, and building a unified responsive design for both admin and customer views.",
    improvements:
      "Integrate live order tracking, enable scheduled deliveries, add push notifications for order status changes, implement loyalty points system, and support multi-language menus.",
  },

  // HobbyHub Project
  {
    id: "3",
    name: "HobbyHub - A Local Hobby Group Organizer",
    images: [
      "https://i.postimg.cc/yxwZ8zkz/hobbyhub-03.png",
      "https://i.postimg.cc/wMtNzBxV/hobby.png",
      "https://i.postimg.cc/9MQTxpvs/h-02.png",
    ],
    description:
      "HobbyHub is a platform to discover, join, and create local hobby groups. Whether it's a book club, hiking group, or painting circle, users can connect with like-minded individuals in their area. The platform features group profiles, activity feeds, and event organization tools, making community engagement easy and fun.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "JWT",
    ],
    live: "https://b11-a10-papiya.netlify.app/",
    client: "https://github.com/azijulhakimbd/HobbyHub-Client",
    server: "https://github.com/azijulhakimbd/HobbyHub-Server",
    features: [
      "Join or create local hobby groups",
      "Search hobbies by category/location",
      "Group activity feed and updates",
      "Clean UI optimized for mobile users",
      "Firebase authentication",
    ],
    challenges:
      "Implementing efficient location-based filtering, designing a mobile-first UI with consistent performance, managing group event scheduling, and handling spam prevention in public group feeds.",
    improvements:
      "Add private messaging between group members, integrate calendar sync with Google/Outlook, support group image galleries, and implement AI-based hobby recommendations.",
  },

  // MA Shift Project
  {
    id: "4",
    name: "Parcel Delivery App",
    images: [
      "https://i.postimg.cc/g2srZ48L/MA-SHIFT-Banner.png",
      "https://i.postimg.cc/pXx2Jz2f/Visiable.png",
      "https://i.postimg.cc/Vkmdv2rc/Coverage.png",
      "https://i.postimg.cc/fbbyjXf2/MA-SHIFT.png",
    ],
    description:
      "A full-stack parcel delivery platform featuring real-time parcel tracking, cost estimation, and role-based dashboards for admins, agents, and users. Built to handle high volumes of deliveries with accuracy and transparency.",
    stack: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
    ],
    live: "https://ma-shift.netlify.app/",
    client: "https://github.com/azijulhakimbd/MA-Shift-Client",
    server: "https://github.com/azijulhakimbd/MA-Shift-Server",
    features: [
      "Role-based login: Admin, Agent, and User",
      "Real-time parcel tracking",
      "Cost calculation by weight & distance",
      "Dashboard with parcel status analytics",
      "Secure JWT-based route protection",
    ],
    challenges:
      "Building accurate delivery cost algorithms, ensuring real-time updates for parcel status without delays, managing secure access across multiple roles, and scaling the backend for high request volumes.",
    improvements:
      "Integrate mobile push notifications, add OTP-based delivery confirmation, implement live map tracking for couriers, and offer payment integration for prepaid orders.",
  },

  // Phudu Medical Appointment
  {
    id: "5",
    name: "Medical Appointment System",
    images: [
      "https://i.postimg.cc/L5CYxgMV/Phudu.png",
      "https://i.postimg.cc/J04H3cSn/Doctor.png",
      "https://i.postimg.cc/Z513kNv7/Review.png",
      "https://i.postimg.cc/gJpZjPD3/Doctor-Details.png",
      "https://i.postimg.cc/wBLN9Bh6/Booking.png",
      "https://i.postimg.cc/PxM88F39/Blog.png",
    ],
    description:
      "Phudu is a modern and user-friendly medical appointment booking web app that allows patients to browse doctor profiles, check ratings, view experience details, and book appointments seamlessly. The system is designed to work without a backend but can easily integrate with APIs for real-time scheduling.",
    stack: [
      "React",
      "React Router",
      "React Recharts",
      "Tailwind CSS",
      "JavaScript",
    ],
    live: "https://phudu-medical-appointment.netlify.app/",
    client: "https://github.com/azijulhakimbd/Phudu-Medical-Appointment",
    server: "",
    features: [
      "View doctor profiles with image, rating, experience, and fee",
      "Book appointments with one click",
      "Data visualization using charts",
      "Fully responsive layout",
      "Fast, intuitive, and modern UI",
    ],
    challenges:
      "Designing a smooth booking experience without backend APIs, creating reusable modal components for appointment scheduling, ensuring the charts load quickly on low-end devices, and balancing UI responsiveness with visual richness.",
    improvements:
      "Add backend integration with database for doctor schedules, enable appointment conflict detection, support video consultation links, and allow patients to leave verified reviews.",
  },
];
