import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import iShop from "@/public/iShop.png";
import infotify from "@/public/infotify.png";
import healthFusion from "@/public/health_fusion.png";
import eCommerce from "@/public/e-commerce-app.png";
import mzDownloadManager from "@/public/MZDownloadManager.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "iOS and Mobile Tech Lead",
    location: "Vention",
    description:
      "- Defined and implemented the initial app architecture and framework.*- Grew the iOS team to three people and onboarded them with project architecture.*- Delivered a POC and an MVP on an incredibly tight schedule.*- Guided back-end and Android teams with respect to mobile API definition and implementation details.*- Set up remote logging and observability and assisted with finding bugs in third-party hardware remotely.*- Used and contributed to the back-end and DevSup projects (PostgreSQL, gRPC, Node.js, and Google Cloud).",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - November 2023",
  },
  {
    title: "Mobile Engineer",
    location: "Skyscanner",
    description:
      "- Took part in the complete rewriting of the Skyscanner iOS app with analytics, localization, remote configurations, experiments, and high unit test coverage in both Objective-C and Swift.*- The app is used by more than 1 million daily users.*- Worked on the exploration flow of the Skyscanner iOS app displaying Pinterest like layouts using Facebook's Async Display Kit (today it's called Texture).*- Contributed to the implementation of authentication and user profile in the Skyscanner iOS, Android apps, and web microsite; I also supported the migration of user data from data centers to AWS.*- Worked on the onboarding experience for the Skyscanner iOS app solving challenges as user privacy policy consent handling, flows with remotely configurable steps, and handling app start delays caused by e.g., deferred deep links.*- Led the software design and implementation of trip planning experiences in the Skyscanner iOS app with the additional responsibility of bringing the team's iOS delivery up to speed.*- Rebranded the Skyscanner iOS app leveraging Skyscanner's design system implementation Backpack (see the open-source project: Backpack.github.io). Also contributed to Backpack.*- Coached, as part of the company's program, to help peers achieve their goals.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2016 - August 2021",
  },
  {
    title: "iOS Developer",
    location: "Freelance",
    description:
      "- Developed an app for a cinema chain from scratch, allowing clients to buy tickets from their iPhones.*- Created an app with 3D tours for users to be able to check out the interior of different venues.*- Built an app that saved a person's life by sending location to lifeguards.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2014 - March 2016",
  },
  {
    title: "Junior iOS Developer  ",
    location: "Creativesoft",
    description:
      "Worked on the most popular, at the time, personal finance product.*- Researched voice assistant functionality before Siri existed.*- Completed app development to the release mode, one of the existing but not published apps.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2012 - June 2014",
  },
] as const;

export const projectsData = [
  {
    title: "iShop",
    description:
      "iShop is a versatile mobile shopping app designed for a seamless experience. It offers an engaging interface with light and dark mode options, adaptive UI, and responsive design. Users can enjoy authentication features, shop by category, and utilize advanced search and filtering options. The app supports account management, order processing, and secure payments through Stripe. Built on Firebase, iShop ensures a robust backend. For administrators, the app provides an admin interface to manage products, categories, discounts, and monitor user activity efficiently. Overall, iShop prioritizes user satisfaction, security, and efficient administration.",
    tags: ["React", "Express.js", "AWS"],
    icons: [
      "logos:javascript",
      "logos:react",
      "logos:redux",
      "logos:firebase",
      "logos:nodejs-icon",
    ],
    imageUrl: iShop,
    githubLink: "https://github.com/AndreiFlorea04/flutter-iShop-App",
  },
  {
    title: "Infotify",
    description:
      "Infotify is an Android application for broadcasting news from different popular newspaper streams, it allows Internet users to stay connected to news 24/7 through their smartphone. They include many sections including news items, sport, technology, economics ...",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: ["logos:kotlin-icon"],
    imageUrl: infotify,
    githubLink: "https://github.com/AndreiFlorea04/Infotiy",
  },
  {
    title: "Health Fusion",
    description:
      "A mobile app built to help manage life. Allows users to manage all of their medications, with an enjoyable calendar view is available for all users so they can view their medication historyfrom the past or look to the future and see what they need to take. Finally, users are also given a map view so that they have no problem finding any nearby pharmacies or hostiptals if needed.",
    icons: [
      "logos:javascript",
      "logos:typescript-icon",
      "logos:firebase",
      "logos:google-maps",
    ],
    imageUrl: healthFusion,
    githubLink: "https://github.com/AndreiFlorea04/health-Infusion",
  },
  {
    title: "E-Commerce UI Kit",
    description: "Flutter e-commerce App is a UI Kit for e-commerce App.",
    icons: ["logos:dart"],
    imageUrl: eCommerce,
    githubLink: "https://github.com/AndreiFlorea04/ecommerce-app",
  },
  {
    title: "MZDownloadManager",
    description:
      "MZDownloadManager is an iOS download manager app with advanced features for seamless and efficient file handling. It allows users to download large files in the background, manage multiple downloads simultaneously, and resume interrupted downloads. The app also offers pause and resume functionality, along with the option to retry downloads in case of errors. With its user-friendly interface, MZDownloadManager provides a comprehensive solution for users looking to enhance their file download experience on iOS devices.",
    icons: ["logos:swift", "logos:ruby"],
    imageUrl: mzDownloadManager,
    githubLink: "https://github.com/AndreiFlorea04/MZDownloadManager",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Swift",
    icon: "logos:swift",
  },
  {
    name: "Kotlin",
    icon: "logos:kotlin-icon",
  },
  {
    name: "Dart",
    icon: "logos:dart",
  },
  {
    name: "Flutter",
    icon: "logos:flutter",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
] as const;
