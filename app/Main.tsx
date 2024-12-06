import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Hero from '@/components/Hero'

const MAX_PROJECTS = 5

const techStacks = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Prisma',
  'Git',
  'VS Code',
  'Tailwind CSS',
]

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Hero />

        <div className="py-12">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
            About Me
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              <p>
                I am a master student passionate about web development and software engineering.
                Currently focusing on building modern web applications using Next.js, React, and
                other cutting-edge technologies.
              </p>
              <p>
                Based in <span className="text-blue-500">IRVINE</span>,{' '}
                <span className="text-indigo-500">CA</span>,{' '}
                <span className="text-emerald-500">USA</span>
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Coding hours
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">1000+</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Fav. framework
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Next.js
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStacks.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">Connect</h3>
                <div className="flex space-x-4">
                  <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                  <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                  <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="flex flex-col items-start justify-between pb-6 md:flex-row md:items-center">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              All Projects &rarr;
            </Link>
          </div>
          <div className="-m-4 flex flex-wrap">
            {projectsData.slice(0, MAX_PROJECTS).map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
