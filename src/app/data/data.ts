import { ResumeData } from "../types/types";

export const resumeData: ResumeData = {
    personal: {
        name: "Ryan Kadri",
        profession: "Software Developer",
        email: "ryankadri1@gmail.com",
        phone: "908-294-3740",
        address: `
401 Conestoga Way
Apt V103
Eagleville, PA 19403`,
        github: "github.com/RyanKadri",
    },
    interests: `
I love the web as a platform for software development. 
If I could only pick one language to work in for the next few years,
it would be TypeScript. I like hacking around with new browser APIs
and love how much there already is out there.`,
    experience: {
        major: [
            { 
                organization: 'SEI Investments',
                location: 'Oaks PA',
                position: "Automation Engineer / Tech Lead",
                duration: "June 2015 - September 2018",
                duties: [
                    "Created an in-house test orchestration framework",
                    "Acted as a tech lead as my team grew from 3 to 28 developers",
                    "Provided technical designs for upcoming agile development"
                ]
            },
            {
                organization: 'NYI',
                location: 'Bridgewater NJ',
                position: 'Data Center Technician',
                duration: 'October 2013 - May 2015',
                duties: [
                    "Set up and maintained clients' physical and virtual servers",
                    "Responded to service tickets on NYI's helpdesk"
                ]
            }
        ],
        minor: [
            {
                position: "Paintball Instructor",
                summary: "Helped develop a paintball course at a Boy Scout Camp"
            },
            {
                position: "Archery Instructor",
                summary: "Taught kids archery and kept them safe in the process"
            },
            {
                position: "Warehouse Assistant",
                summary: "Helped process orders and quality-test products"
            }
        ]
    },
    education: [
        { 
            institution: "Rutgers University",
            field: "Computer Engineering",
            location: "Piscataway, New Jersey",
            duration: "September 2012 - May 2015",
            gpa: "3.92",
            highlights: [
                "Received the Rutgers Presidential Scholarship",
                "Honors Engineering"
            ]
         }
    ],
    projects: [
        { 
            name: "XSRT",
            summary: "An open-source session recording tool",
            skills: ['ts', 'html', 'css', 'dock', 'mongo', 'react', 'webpack'],
            link: 'https://github.com/RyanKadri/xsrt',
        },
        {
            name: "SEI Test Automation Orchestrator",
            summary: "A test runner and workflow management tool for end-to-end automated tests at SEI",
            skills: ['ts', 'java', 'html', 'css', 'mysql', 'angular']
        },
        {
            name: "Angular Documentation Tool",
            summary: "A static-analysis tool for creating documentation from Angular projects",
            skills: ['ts', 'angular']
        },
        {
            name: "This resume",
            summary: "Built with love",
            skills: ['ts', 'html', 'css', 'webpack'],
            link: "https://github.com/RyanKadri/simple-resume-builder"
        }
    ],
    skills: [
        { id: 'ts', name: "TypeScript", confidence: 100 },
        { id: 'angular', name: "Angular", confidence: 100 },
        { id: 'react', name: "React", confidence: 100 },
        { id: 'webpack', name: "Webpack", confidence: 100 },
        { id: 'java', name: "Java", confidence: 95 },
        { id: 'html', name: "HTML", confidence: 70 },
        { id: 'css', name: "CSS", confidence: 70 },
        { id: 'dock', name: "Docker", confidence: 60 },
        { id: 'mysql', name: "MySQL", confidence: 60 },
        { id: 'mongo', name: "MongoDB", confidence: 60 },
        { id: 'aws', name: "AWS", confidence: 60 },
        { id: 'gql', name: "GraphQL", confidence: 15 },
    ]
}