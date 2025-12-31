
import { ExperienceItem, ProjectItem, EducationItem } from './types';

export const BIO = "I am a Product Manager who codes. I use AI tools to turn ideas into functional MVPs, focusing on solving real-life problems through rapid prototyping. This site is a collection of my experiments in combining user insights with AI engineering.";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Associate Consultant Intern',
    company: 'Mastercard',
    timeRange: 'Summer 2025',
    logoUrl: './mastercard.jpg'
  },
  {
    id: '2',
    role: 'Product Manager Intern',
    company: 'Tencent',
    timeRange: 'Summer 2024',
    logoUrl: './tencent.jpg'
  },
  {
    id: '3',
    role: 'Business Analysis Intern',
    company: 'Capgemini',
    timeRange: 'Summer 2023',
    logoUrl: './capgemini.jpg'
  },
  {
    id: '4',
    role: 'Marketing Intern',
    company: 'Leap Easy',
    timeRange: 'Summer 2023',
    logoUrl: './leapeasy.jpg'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'Master of Management',
    school: 'Yale School of Management',
    timeRange: '2025-2026',
    logoUrl: './yale.jpg'
  },
  {
    id: '2',
    degree: 'Master of Management',
    school: 'HEC Paris',
    timeRange: '2024-2025',
    logoUrl: './hec.jpg'
  },
  {
    id: '3',
    degree: 'B.S. in Media, Culture, and Communication',
    school: 'New York University',
    timeRange: '2020-2024',
    logoUrl: './nyu.jpg'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    name: 'Echo',
    description: 'A prototype that uses RAG to provide personalized user onboarding based on historical behavior and real-time sentiment analysis.',
    imageUrl: './echo.jpg'
  },
  {
    id: '2',
    name: 'Postcard',
    description: 'An internal tool designed to generate functional React boilerplate from low-fidelity wireframe screenshots using vision-to-code models.',
    imageUrl: './postcard.jpg'
  },
  {
    id: '3',
    name: 'Anchor',
    description: 'A community-driven experiment that identifies common user pain points from Twitter threads and suggests functional architecture solutions.',
    imageUrl: './anchor.jpg'
  }
];
