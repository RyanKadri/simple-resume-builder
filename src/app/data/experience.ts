import { ExperienceData } from "../types/types";

export const experience: ExperienceData = {
    major: [
        {
            organization: "XSRT (Open Source)",
            location: "Eagleville, PA",
            position: "Project Maintainer",
            duration: "September 2018 - Present",
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
        },
        {
            organization: 'NYI',
            location: 'Bridgewater, NJ',
            position: 'Data Center Technician',
            duration: 'October 2013 - May 2015',
            duties: [
                "Managed physical and virtual servers based on helpdesk requests",
                "Created Apache and Nginx configurations to help clients meet web-hosting needs",
                "Updated firewall and monitoring tools to accommodate client networking needs"
            ]
        }
    ],
    minor: [
    ]
}