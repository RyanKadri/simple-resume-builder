import { ExperienceData } from "../types/types";

export const experience: ExperienceData = {
    major: [
        { 
            organization: 'SEI Investments',
            location: 'Oaks PA',
            position: "Automation Engineer / Tech Lead",
            duration: "June 2015 - September 2018",
            duties: [
                "Helped build automated test orchestration framework",
                "Tech Lead as team grew from 3 to 28 developers",
        ]
        },
        {
            organization: 'NYI',
            location: 'Bridgewater NJ',
            position: 'Data Center Technician',
            duration: 'October 2013 - May 2015',
            duties: [
                "Helped manage physical and virtual servers",
                "Responded to service tickets on company helpdesk"
            ]
        }
    ],
    minor: [
        {
            position: "Paintball Instructor",
            summary: "Helped create and manage outdoor paintball course"
        },
        {
            position: "Archery Instructor",
            summary: "Taught archery at a Boy Scouts camp"
        },
        {
            position: "Warehouse Assistant",
            summary: "Helped process orders and quality-test products"
        }
    ]
}