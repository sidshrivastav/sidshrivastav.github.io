export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#191724] text-[#e0def4]">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-[#f6c177]"></div>
              <h1 className="text-3xl font-bold">Siddhant Shrivastav</h1>
            </div>
            <nav className="flex items-center gap-6">
              <div className="relative group">
                <span className="text-[#e0def4] hover:text-[#f6c177] transition-colors cursor-pointer">writings</span>
                <div className="absolute right-0 mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[#1f1d2e] rounded-md shadow-lg py-2">
                    <a href="/writings/learning-logs" className="block px-4 py-2 text-[#e0def4] hover:text-[#f6c177] hover:bg-[#26233a] transition-colors">learning logs</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="space-y-16">
          {/* About Section */}
          <section className="grid grid-cols-[200px_1fr] gap-12">
            <h2 className="text-[#908caa] text-lg">About</h2>
            <div className="space-y-8">
              <div className="space-y-6 text-[#e0def4] leading-relaxed">
                <p>
                  I'm a backend engineer who loves building things that work at scale. Most of my days are spent crafting APIs, wrangling databases, and making sure systems don't fall apart when things get interesting.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-[#ebbcba] mb-3">What I Do</h3>
                  <p>
                    I work primarily as a Software Development Engineer, focusing on backend systems. Whether it's designing APIs with Flask and FastAPI, architecting database solutions with MongoDB and PostgreSQL, or orchestrating containers with Docker and Kafka, I enjoy the challenge of building robust, scalable systems.
                  </p>
                  <p className="mt-3">
                    Right now, I'm also dabbling in AI and ML - not just using the tools, but understanding what's actually happening under the hood.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#ebbcba] mb-3">What I'm Learning</h3>
                  <p>I believe in going deep, not just wide. Lately, I've been:</p>
                  <ul className="list-none space-y-2 mt-3">
                    <li><span className="font-medium">Learning the math behind machine learning</span> - Because understanding the foundations of AI and ML makes everything else click into place</li>
                    <li><span className="font-medium">Exploring low-level coding with C</span> - There's something satisfying about getting closer to the metal</li>
                    <li><span className="font-medium">Studying large-scale systems</span> - I want to really understand how things work when you're dealing with serious scale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#ebbcba] mb-3">Beyond Code</h3>
                  <p>
                    When I'm not at my computer, you might find me attempting to play guitar (still learning!), playing outdoor sports (enthusiasm {'>'} skill), or passionately defending Manchester United's honor.
                  </p>
                  <p className="mt-3">
                    Fair warning: I hop around interests a lot. One week it might be photography, the next it could be book reviews, and who knows what after that. That's just how I roll.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#ebbcba] mb-3">Experience</h3>

                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-[#e0def4] mb-2">Cognida</h4>
                    <div className="flex justify-between items-start">
                      <p className="text-[#e0def4]">Senior Software Engineer</p>
                      <p className="text-[#6e6a86] text-sm">Jun'25 — Present</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#e0def4] mb-2">Nykaa</h4>
                    <div className="flex justify-between items-start">
                      <p className="text-[#e0def4]">Software Development Engineer 2</p>
                      <p className="text-[#6e6a86] text-sm">May'24 — Dec'24</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#e0def4] mb-2">Indian Institute of Technology, Madras</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <p className="text-[#e0def4]">Senior Software Engineer</p>
                        <p className="text-[#6e6a86] text-sm">Dec'21 — May'24</p>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="text-[#e0def4]">Software Engineer</p>
                        <p className="text-[#6e6a86] text-sm">Sep'20 — Dec'21</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#e0def4] mb-2">Collegedunia</h4>
                    <div className="flex justify-between items-start">
                      <p className="text-[#e0def4]">Software Developer</p>
                      <p className="text-[#6e6a86] text-sm">Oct'18 — Sep'20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Contacts Footer */}
        <footer className="mt-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-[#908caa] text-sm">© {currentYear} Siddhant Shrivastav</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/sidshrivastav" target="_blank" rel="noopener noreferrer" className="text-[#e0def4] hover:text-[#f6c177] transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="http://linkedin.com/in/siddhantshrivastav/" target="_blank" rel="noopener noreferrer" className="text-[#e0def4] hover:text-[#f6c177] transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#e0def4] hover:text-[#f6c177] transition-colors" aria-label="X">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="mailto:sidshrivastav1002@gmail.com" className="text-[#e0def4] hover:text-[#f6c177] transition-colors" aria-label="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
