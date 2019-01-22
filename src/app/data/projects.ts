import { ProjectDefinition } from "../types/types";

export const projects: ProjectDefinition[] = [
    { 
        name: "XSRT",
        summary: "An open-source session-recording tool",
        skills: ['ts', 'html', 'css', 'dock', 'mongo', 'react', 'webpack'],
        link: 'https://github.com/ryankadri/xsrt',
    },
    {
        name: "SEI Test Automation Orchestrator",
        summary: "A test runner and workflow management tool for end-to-end automated tests at SEI",
        skills: ['ts', 'java', 'html', 'css', 'mysql', 'angular']
    },
    {
        name: "SEI Angular Component Documentation Tool",
        summary: "A static-analysis tool for creating documentation from Angular projects",
        skills: ['ts', 'angular']
    },
    {
        name: "This resume",
        summary: "Built from scratch with love",
        skills: ['ts', 'html', 'css', 'webpack'],
        link: "https://github.com/ryankadri/simple-resume-builder"
    }
];