import { ExperienceData } from "../types/types";

export const experience: ExperienceData = {
    major: [
        {
            organization: "Capital One",
            location: "Wilmington, DE",
            position: "Full Stack Developer",
            duration: "April 2019 - Present",
            duties: [
                "Implemented a frontend redesign for a Knowledge Management app",
                "Refactored the codebase to improve static analysis in Typescript"
            ]
        },
        {
            organization: "XSRT (Open Source)",
            location: "Eagleville, PA",
            position: "Project Maintainer",
            duration: "September 2018 - April 2019",
            duties: [
                "Designed and built a session recording tool for web applications",
                "Worked with React, Typescript, and Webpack to build a fast, modern frontend",
                "Used MongoDB, Express, and Docker to build a scalable, flexible backend"
            ]
        },
        { 
            organization: 'SEI Investments',
            location: 'Oaks, PA',
            position: "Platform Developer / Platform Tech Lead",
            duration: "June 2015 - September 2018",
            duties: [
                "Provided technical designs for Java Spring and PL/SQL projects (among others)",
                "Used Angular, Tomcat, and MySQL to develop tools for improving testing efficiency",
                "Acted as a Tech Lead while the Test Automation team grew from 3 to 28 developers",
            ]
        }
    ],
    minor: [{
        position: "NYI - Data Center Technician",
        summary: "Managed physical and virtual servers based on helpdesk requests"
    }]
}