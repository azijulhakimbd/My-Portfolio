export const projects = [
  // Latest Project First
  // MA Shift Project
  {
    id: "1",
    name: "Parcel Delivery App",
    images: [
      "https://i.postimg.cc/g2srZ48L/MA-SHIFT-Banner.png",
      "https://i.postimg.cc/pXx2Jz2f/Visiable.png",
      "https://i.postimg.cc/Vkmdv2rc/Coverage.png",
      "https://i.postimg.cc/fbbyjXf2/MA-SHIFT.png",
    ],
    description:
      "A full-stack parcel delivery platform with role-based dashboards, parcel tracking, and delivery cost calculations.",
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
      "Implementing real-time parcel status, secure role-based access for admins and delivery agents.",
    improvements:
      "Integrate payment gateway, add delivery confirmation by OTP, and admin analytics dashboard.",
  },
  // MA Restaurant Project
  {
    id: "2",
    name: "Restaurant Management System",
    images: [
      "https://i.postimg.cc/B6Fg5NHs/Restaurant-Management-System-Google-Chrome-6-28-2025-8-31-46-AM.png",
      "https://i.postimg.cc/FzQxTcVS/Restaurant-Management-System-Google-Chrome-6-28-2025-8-31-52-AM.png",
      "https://i.postimg.cc/5tTgFDHn/Restaurant-Management-System-Google-Chrome-6-28-2025-8-31-55-AM.png",
      "https://i.postimg.cc/7LfXhqL5/Restaurant-Management-System-Google-Chrome-6-28-2025-8-32-13-AM.png",
      "https://i.postimg.cc/CMj7zPws/Restaurant-Management-System-Google-Chrome-6-28-2025-8-33-26-AM.png",
      "https://i.postimg.cc/RhQLyFgD/Restaurant-Management-System-Google-Chrome-6-28-2025-8-32-35-AM.png",
    ],
    description:
      "A restaurant app for managing foods, orders, and customer interactions with admin and user dashboards.",
    stack: [
      "HTML",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
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
      "Handling dynamic food items, filtering per user/admin, secure data flow.",
    improvements:
      "Add delivery scheduling, push notifications, and exportable reports.",
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
      "Welcome to HobbyHub, a platform to discover, join, and create local hobby groups like book clubs, painting circles, or hiking teams.",
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
    challenges: "Responsive UI and local data search/filter logic.",
    improvements:
      "User authentication, leaderboard system, and personalized quizzes.",
  },
  // Phudu Medical Appointment
  {
    id: "4",
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
      "A modern and user-friendly medical appointment booking web application built with React. Seamlessly search doctors, view their profiles, and book appointments with ease.",
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
      "Designing an intuitive user interface for both patients and doctors, and implementing reusable modal logic for booking without a backend.",
    improvements:
      "Add real-time appointment conflict detection, implement backend with database support for doctor schedules, and include login/authentication for better user experience.",
  },
];
