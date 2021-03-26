import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ParsedUrlQuery } from 'querystring'

export const getPostSlugs = (locale?: string) => getDataSlugs('journal', locale)

export const getPostBySlug = (slug: string, locale?: string) =>
  getDataBySlug('journal', slug, locale)

export const getPostStaticPaths = (locales: string[] | undefined) =>
  getDataStaticPaths('journal', locales)

export const getPostStaticProps = (
  params: ApiQuery | undefined,
  locale: string | undefined
) => getDataStaticProps('journal', params, locale)

export const getPostAllSummariesStaticProps = (locale?: string) =>
  getDataAllSummariesStaticProps('journal', locale)

export const getProjectSlugs = (locale?: string) =>
  getDataSlugs('projects', locale)

export const getProjectBySlug = (slug: string, locale: string) =>
  getDataBySlug('projects', slug, locale)

export const getProjectStaticPaths = (locales: string[] | undefined) =>
  getDataStaticPaths('projects', locales)

export const getProjectAllSummariesStaticProps = (locale?: string) =>
  getDataAllSummariesStaticProps('projects', locale)

export const getProjectStaticProps = (
  params: ApiQuery | undefined,
  locale: string | undefined
) => getDataStaticProps('projects', params, locale)

const getDirectory = (dir: string, locale: string) =>
  join(process.cwd(), 'docs', locale, dir)

const getDataSlugs = (type: string, locale?: string) => {
  const dir = getDirectory(type, locale ?? 'fr')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .map((f) => f.replace(/.md/, ''))
}

interface FrontMatter {
  author?: string
  date?: Date | string
  title?: string
}

const moreRegex = /^\s*<!--\s*more\s*-->\s*$/
const getSummary = (content: string): string | null => {
  const lines = content.split('\n')

  let result = null
  lines.forEach((line, index) => {
    if (moreRegex.test(line)) {
      result = lines.slice(0, index).join('\n')
    }
  })

  return result
}

const authorRegex = /(?<username>.+)\s<(?<email>.+)>$/
const getDataBySlug = (type: string, slug: string, locale?: string) => {
  const dir = getDirectory(type, locale ?? 'fr')
  const path = join(dir, `${slug}.md`)
  const fileContents = fs.readFileSync(path, 'utf8')

  const { data: dataRaw, content: contentRaw } = matter(fileContents)
  const data = dataRaw as FrontMatter
  const { author: authorRaw, date: dateRaw, title: titleRaw } = data

  const matchAuthor = authorRegex.exec(authorRaw ?? '')
  const author =
    matchAuthor &&
    matchAuthor.groups &&
    matchAuthor.groups.username &&
    matchAuthor.groups.email
      ? {
          username: matchAuthor.groups.username,
          email: matchAuthor.groups.email,
        }
      : null

  const date = dateRaw instanceof Date ? dateRaw.toISOString() : null

  const title = titleRaw ? titleRaw : null

  const content = contentRaw
    .replaceAll('../../../public', '')
    .replaceAll('../projects', '/projects')

  const summary = getSummary(content)

  return {
    date,
    author,
    title,
    content,
    summary,
  }
}

export interface ApiQuery extends ParsedUrlQuery {
  slug: string
}

export interface ApiProps {
  slug: string
  content: string
  summary: string | null
  title: string | null
  date: string | null
  author: {
    username: string
    email: string
  } | null
}

const getDataStaticPaths = (
  type: string,
  locales: string[] | undefined
): Array<string | { params: ApiQuery; locale?: string }> => {
  if (!locales) {
    return []
  }

  const initialPaths: Array<string | { params: ApiQuery; locale?: string }> = []
  return locales.reduce((accu, locale) => {
    const slugs = getDataSlugs(type, locale)
    return [...accu, ...slugs.map((slug) => ({ params: { slug }, locale }))]
  }, initialPaths)
}

const getDataStaticProps = (
  type: string,
  params: ApiQuery | undefined,
  locale: string | undefined
): ApiProps => {
  if (!params) {
    throw Error('No params')
  }

  const { slug } = params
  const { title, author, date, content, summary } = getDataBySlug(
    type,
    slug,
    locale
  )

  return {
    slug,
    title,
    author,
    date,
    content,
    summary,
  }
}

const getDataAllSummariesStaticProps = (
  type: string,
  locale?: string
): Omit<ApiProps, 'content'>[] => {
  const slugs = getDataSlugs(type, locale)
  return slugs
    .map((slug) => getDataStaticProps(type, { slug }, locale))
    .map((i) => ({
      title: i.title,
      date: i.date,
      slug: i.slug,
      summary: i.summary,
      author: i.author,
    }))
}
