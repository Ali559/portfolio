export interface IProject {
  title: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  image?: string
}


export interface ISkill {
  name: string
  level: number
  category: 'Languages' |'Tools' | 'Frameworks' | 'Databases' | 'Other';
}

export interface IExperience {
  title: string
  company: string
  description: string
  period: string
}

export interface IAchievement {
  title: string
  issuer: string
  year: string
  description: string
}

export interface INavLink {
  name: string
  href: string
}


export interface ISocials {
  name: string
  link: string
}


