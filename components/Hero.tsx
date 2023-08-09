const Hero = () => {
  return (
    <div className="space-y-6 md:my-16">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-4 md:max-w-lg">
          <h1 className="text-4xl font-bold text-accent-fg">Han Wang</h1>
          <h2 className="text-lg font-medium text-accent-5">Full-stack Developer</h2>
          <p className="text-lg">
            I am a graduate, currently learning web development skills such as Next.js, Node.js,
            Prisma, and database management.
          </p>
        </div>
        <div className="h-20 w-20 md:h-28 md:w-28">
          {/* <Image
            src="/static/images/avatar.png"
            width={112}
            height={112}
            alt="Hong"
            rounded="rounded-full"
            loading="eager"
            priority
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
