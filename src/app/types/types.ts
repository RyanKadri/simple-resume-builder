export interface ResumeData {
    personal: PersonalData;
    interests: string;
    experience: ExperienceData;
    education: EducationDetail[];
    skills: SkillDefinition[];
    projects: ProjectDefinition[];
}

export interface PersonalData {
    name: string;
    profession: string;
    address: string;
    phone: string;
    email: string;
    github: string;
}

export interface ExperienceData {
    major: MajorExperience[];
    minor: MinorExperience[];
}

export interface MajorExperience {
    organization: string;
    location: string;
    position: string;
    duration: string;
    duties: string[];
}

export interface MinorExperience {
    position: string;
    summary: string;
}

export interface EducationDetail {
    institution: string;
    field:  string;
    location:  string;
    duration: string;
    highlights: string[];
    gpa: string;
}

export interface SkillDefinition {
    id: string; //Short description for cross references
    name: string;
    confidence: number;
}

export interface ProjectDefinition {
    name: string;
    summary: string;
    skills: string[];
    link?: string;
}