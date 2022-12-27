import React from 'react'
import { IResume } from '../../data/resume'
import List from './List'
import Text from './Text'
import Events from './Events'
import Header from './Header'
import Footer from './Footer'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const mobile = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.8rem 0.9rem 0.9rem 0.9rem;

  header {
    text-align: center;
  }

  footer {
    text-align: center;
  }

  > div,
  > aside {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const desktop = css`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'hl hr'
    'l  r'
    'f  f';
  column-gap: 3rem;
  row-gap: 2rem;
  padding: 2rem;

  > header:nth-of-type(1) {
    grid-area: hl;
    text-align: right;
  }

  > section:nth-of-type(1) {
    grid-area: hr;
  }

  > aside {
    grid-area: l;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    text-align: right;

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
  }

  > div {
    grid-area: r;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
  }

  > footer {
    grid-area: f;
    text-align: center;
  }

  .Infos {
    h2 {
      display: none;
    }

    li span {
      flex-direction: row-reverse;
    }
  }
`

const Article = styled.article`
  @media print {
    @page {
      size: A4;
      margin: 0;
    }

    body {
      margin: 0;
      width: 991px;
      height: 1387px;
    }

    width: 991px;
    height: 1387px;
  }

  * {
    font-family: sans-serif;
  }

  .Profile {
    h2 {
      display: none;
    }
  }

  @media screen {
    footer {
      visibility: hidden;
      position: relative;
    }
    footer:after {
      content: 'Ce CV est imprimable au format A4 grâce à votre navigateur';
      visibility: visible;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-align: center;
    }
  }

  @media screen and (max-width: 750px) {
    ${mobile}
  }

  @media screen and (min-width: 750px) {
    ${desktop}
  }

  @media print {
    ${desktop}
  }
`

interface ResumeProps {
  className?: string
  resume: IResume
}

const Resume: React.FC<ResumeProps> = ({ className, resume }) => {
  return (
    <>
      <Article className={className}>
        <Header data={resume.header} />
        <Text className="Profile" data={resume.profile} />

        <div>
          <Events data={resume.experiences_pro} />
          <Events data={resume.projects_perso} />
          <Events data={resume.experiences_other} />
          <Events data={resume.educations} />
        </div>

        <aside>
          <List className="Infos" data={resume.infos} />
          <List data={resume.skills} />
          <List data={resume.qualities} />
          <List data={resume.langs} />
          {/* <List data={resume.hobbies} /> */}
        </aside>

        <Footer data={resume.footer} />
      </Article>
    </>
  )
}

export default Resume
