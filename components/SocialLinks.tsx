import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai"

const SocialLinks = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-28">
        <h2 className="text-center font-bold text-4xl">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-600 border-0 rounded"></hr>
        </h2>

        <div className="flex flex-row items-center justify-center mt-10 md:space-x-12 space-x-4 mb-1">
          <a href="https://github.com/sudaisansari" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={28}
            />
          </a>
          <a
            href="https://twitter.com/sudaisansari07?t=iR0fKEXLXQ8GgqC6FLq_MQ&s=08"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={28}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sudais-ansari-907930247"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={28}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8ukHnuglKfkQ_wpWbE6pNw"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={28}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialLinks