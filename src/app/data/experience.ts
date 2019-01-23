import { ExperienceData } from "../types/types";

export const experience: ExperienceData = {
    major: [
        { 
            organization: 'SEI Investments',
            location: 'Oaks, PA',
            position: "Automation Engineer / Platform Tech Lead",
            duration: "June 2015 - September 2018",
            duties: [
                "Led design and development for an automated test orchestration framework",
                "Acted as Tech Lead while automation team grew from 3 to 28 developers",
                "Trained technical and non-technical team members onshore and offshore in automated testing",
            ]
        },
        {
            organization: 'NYI',
            location: 'Bridgewater, NJ',
            position: 'Data Center Technician',
            duration: 'October 2013 - May 2015',
            duties: [
                "Managed physical and virtual servers",
                "Responded to service tickets on the company helpdesk"
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
        }
    ]
}