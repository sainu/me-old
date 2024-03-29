import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from 'zenn-markdown-html';
import { profileApiClient } from '@/shared/lib/httpClient';
import {
  DEFAULT_PER_PAGE,
  getTotalPages,
  paging,
} from '@/shared/lib/pagination';
import { Experience, Project, Technology } from '@/type/api/experience';
import { LifeEvent } from '@/type/api/lifeEvent';
import { Post } from '@/type/api/post';
import { Profile } from '@/type/api/profile';
import { Skill } from '@/type/api/skill';
import { SocialLink } from '@/type/api/socialLink';

type IndexParams = {
  page?: number;
  perPage?: number;
};

type IndexResponse<T> = {
  data: T[];
  meta: {
    totalCount: number;
    totalPages: number;
    perPage: number;
  };
};

export const fetchProfile = async (): Promise<Profile> => {
  const res = await profileApiClient.get('/api/v1/profile');
  return mapProfile(res.data);
};

const mapProfile = (data: any): Profile => {
  return {
    familyNameKanji: data['familyNameKanji'],
    givenNameKanji: data['givenNameKanji'],
    familyNameKana: data['familyNameKana'],
    givenNameKana: data['givenNameKana'],
    familyNameEn: data['familyNameEn'],
    givenNameEn: data['givenNameEn'],
    nickname: data['nickname'],
    job: data['job'],
    email: data['email'],
    bio: data['bio'],
    location: data['location'],
    profileImageUrl: data['profileImage']['url'],
  };
};

export const fetchSkills = async (params?: {
  orders: '-score';
}): Promise<Skill[]> => {
  const res = await profileApiClient.get('/api/v1/skills', { params: params });
  return res.data.contents.map(mapSkill);
};

const mapSkill = (data: any): Skill => {
  return {
    id: data['id'],
    name: data['name'],
    score: data['score'],
  };
};

export const fetchSocialLinks = async (): Promise<SocialLink[]> => {
  const res = await profileApiClient.get('/api/v1/social_links');
  return res.data.contents.map(mapSocialLink);
};

const mapSocialLink = (data: any): SocialLink => {
  return {
    name: data['name'],
    url: data['url'],
    iconUrl: data['icon']['url'],
  };
};

export const fetchExperiences = async (params?: {
  orders: '-startDate';
}): Promise<Experience[]> => {
  const res = await profileApiClient.get('/api/v1/experiences', { params });
  return res.data.contents.map(mapExperience);
};

const mapExperience = (data: any): Experience => {
  return {
    id: data['id'],
    companyName: data['companyName'],
    employmentType: data['employmentTypes'][0],
    startDate: data['startDate'],
    endDate: data['endDate'] ? data['endDate'] : null,
    projects: data.projects.map(mapProject),
  };
};

const mapProject = (data: any): Project => {
  return {
    description: data['description'],
    technologies: data.technologies.map(mapTechnology),
  };
};

const mapTechnology = (data: any): Technology => {
  return {
    name: data['technology']['name'],
    versions: data['versions'] ? [data['versions']] : null,
  };
};

export const fetchPosts = async (
  params?: IndexParams
): Promise<IndexResponse<Post>> => {
  const { page = 1, perPage = DEFAULT_PER_PAGE } = params || {};

  const fileNames = fs.readdirSync(
    path.join(process.cwd(), './contents/posts')
  );
  const sortedFileNames = fileNames.reverse();
  const fileNamesInPage = paging(sortedFileNames, page, perPage);

  const promises = fileNamesInPage.map(async (fileName) => {
    const filepath = path.join(process.cwd(), `./contents/posts/${fileName}`);
    return mapPost(filepath);
  });

  return {
    data: await Promise.all(promises),
    meta: {
      totalCount: fileNames.length,
      totalPages: getTotalPages(fileNames.length, perPage),
      perPage: perPage,
    },
  };
};

export const fetchPost = async (slug: string): Promise<Post> => {
  const filepath = path.join(process.cwd(), `./contents/posts/${slug}.md`);
  return mapPost(filepath);
};

const mapPost = (filepath: string): Post => {
  const slug = path.basename(filepath, path.extname(filepath));
  const md = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(md);
  const html = markdownToHtml(content);
  return {
    slug: slug,
    title: data.title,
    publishedAt: data.published_at,
    content: html,
  };
};

export const fetchLifeEvents = async (): Promise<LifeEvent[]> => {
  const res = await profileApiClient.get('/api/v1/life_events');
  return res.data.contents.map(mapLifeEvent);
};

const mapLifeEvent = (data: any): LifeEvent => {
  return {
    id: data['id'],
    title: data['title'],
    date: data['date'],
  };
};
