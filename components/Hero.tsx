'use client'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
/* eslint-disable no-useless-escape */
export default function Hero() {
  const [text] = useTypewriter({
    words: [
      `
while (alive) {
  coffee.drink()
  if (bugs) {
    panic()
    coffee.drink()
    keepCoding()
  }
  success.celebrate()
}`,
      `
while (life.continues) {
  hymn.sing()
  if (challenges) {
    keepFaith()
    spirit.lift()
    harmony.find()
  }
  joy.celebrate()
}`,
      `
const skills = {
  frontend: ['React', 'Next.js', 'TypeScript'],
  backend: ['Node.js', 'Python', 'Java'],
  learning: Infinity,
  coffeeLevel: '☕️'.repeat(3)
}`,
      `
function weekend() {
  const hobbies = [
    'gym',
    'reading',
    'exploring new places'
  ]
  return enjoy(hobbies)
}`,
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 30,
  })

  const highlightCode = (code: string) => {
    return (
      code
        // 注释
        .replace(/(\/\/[^\n]*)/g, '<span >$1</span>')
        // 字符串
        .replace(/(['"][^'"]*['"])/g, '<span style="color: #CE9178">$1</span>')
        // 关键字
        .replace(
          /\b(const|let|var|function|while|if|return|async|await)\b/g,
          '<span style="color: #569CD6">$1</span>'
        )
        // 函数调用和方法
        .replace(
          /\b(coffee|bugs|panic|keepCoding|success|skills|hobbies|enjoy)\b(?=\s*[()])/g,
          '<span style="color: #DCDCAA">$1</span>'
        )
        // 属性
        .replace(
          /\.(drink|celebrate|frontend|backend|learning|coffeeLevel)\b/g,
          '.<span style="color: #9CDCFE">$1</span>'
        )
        // 数字
        .replace(/\b(\d+)\b/g, '<span style="color: #B5CEA8">$1</span>')
        // 括号和标点
        .replace(/([{}[\]().,;])/g, '<span style="color: #D4D4D4">$1</span>')
    )
  }

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute left-1/2 top-4 h-32 w-32 -translate-x-1/2 transform rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/30" />

      <div className="relative grid items-center gap-14 py-20 md:grid-cols-2">
        {/* 左侧：文字内容 */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Han Wang
              </span>
            </h1>
            <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Computer Science Engineer & Full Stack Developer
            </h2>
            <p className="prose max-w-none text-gray-500 dark:text-gray-400">
              I build things for the web. Currently focused on building accessible, human-centered
              products using Next.js and modern web technologies.
            </p>
          </div>

          {/* CTA 按钮 */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Contact Me
            </Link>
          </div>

          {/* 社交链接 */}
          <div className="flex gap-4">
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          </div>
        </div>

        {/* 右侧：代码展示 */}
        <div className="h-[260px] rounded-lg bg-[#1e1e1e] p-4">
          <div className="font-mono text-sm text-gray-300">
            <span
              className="whitespace-pre"
              dangerouslySetInnerHTML={{ __html: highlightCode(text) }}
            />
            <Cursor cursorBlinking={true} cursorStyle="|" />
          </div>
        </div>
      </div>
    </div>
  )
}
