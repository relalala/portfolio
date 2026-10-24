export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    image: string;
    skills: string[];
}

export interface Eligibility {
    id: number;
    title: string;
    issuer: string;
    date: string;
    licenseNo?: string;
    description: string;
}

export interface ExperienceItem {
    id: number;
    role: string;
    organization: string;
    period: string;
    location: string;
    type: string;
    description: string[];
    badgeColor: string;
}