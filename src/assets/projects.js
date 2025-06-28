export const projects = [
  {
    id: "1",
    name: "Parcel Delivery App",
    image: "https://i.postimg.cc/Dy4vHrmb/parcel.png",
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
    live: "https://parcel-app-live.netlify.app",
    client: "https://github.com/yourusername/parcel-client",
    server: "https://github.com/yourusername/parcel-server",
    challenges:
      "Implementing real-time parcel status, secure role-based access for admins and delivery agents.",
    improvements:
      "Integrate payment gateway, add delivery confirmation by OTP, and admin analytics dashboard.",
  },
  {
    id: "2",
    name: "Restaurant Management System",
    image: "https://i.postimg.cc/0jWy63b7/restaurant.png",
    description:
      "A restaurant app for managing foods, orders, and customer interactions with admin and user dashboards.",
    stack: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    live: "https://restaurant-management.netlify.app",
    client: "https://github.com/yourusername/restaurant-client",
    server: "https://github.com/yourusername/restaurant-server",
    challenges:
      "Handling dynamic food items, filtering per user/admin, secure data flow.",
    improvements:
      "Add delivery scheduling, push notifications, and exportable reports.",
  },
  {
    id: "3",
    name: "English Janala",
    image: "https://i.postimg.cc/qRPxvJZ0/english.png",
    description:
      "An educational platform focused on learning English vocabulary, grammar tips, and user-friendly interaction.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "https://english-janala.netlify.app",
    client: "https://github.com/yourusername/english-janala",
    server: "",
    challenges: "Responsive UI and local data search/filter logic.",
    improvements:
      "User authentication, leaderboard system, and personalized quizzes.",
  },
];
