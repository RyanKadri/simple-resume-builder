import { ResumeData } from "../types/types";
import { education } from "./education";
import { experience } from "./experience";
import { interests } from "./interests";
import { personal } from "./personal";
import { projects } from "./projects";
import { skills } from "./skills";

export const resumeData: ResumeData = {
    personal,
    interests,
    experience,
    education,
    projects,
    skills
}