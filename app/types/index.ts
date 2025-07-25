export interface Link {
    name: string;
    path: string;
}

export interface IProject {
    name: string;
    tags: string[];
    description: string;
    image: string;
    link?: string;
    previewImage?: string;
}