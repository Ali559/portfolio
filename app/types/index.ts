export interface Link {
    name: string;
    path: string;
}

export interface IProject {
    name: string;
    tags: string[];
    description: string;
    image?: string;
    link?: string;
    previewImage?: string;
    linkText?: string;
}

export interface ISkills {
    category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases' | 'Other';
    skills: string[]
}