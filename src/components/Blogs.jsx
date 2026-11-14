import React from 'react';

export default function Blogs() {
  return (
    <section className="section-container" id="page5">
      {/* Title in red color container with black title text (outside the cards) */}
      <div className="section-header-wrap">
        <div className="blogs-title-container">
          <h2>MY BLOGS</h2>
        </div>
      </div>

      {/* Blogs Grid (2x2) */}
      <div className="blogs-grid">
        {/* Blog 1: Linux */}
        <article className="blog-card">
          <div>
            <div className="blog-card-header">
              <span className="blog-category-badge"><i className="fa-brands fa-linux"></i> Operating Systems</span>
              <span className="blog-read-time"><i className="fa-regular fa-clock"></i> 4 min read</span>
            </div>
            <h3 className="blog-title">Linux: The Kernel That Powers the World</h3>
            <p className="blog-desc">
              Linux is an open-source operating system that is based on the Unix kernel. It was created by a
              Finnish student named Linus Torvalds in 1991, who wanted to make a free and better version of
              Unix for his personal computer. He released the source code of Linux on the internet and invited
              other programmers to join him in developing and improving it. Since then, Linux has grown into a
              huge and diverse community of developers and users, who contribute to various versions or
              distributions of Linux, such as Ubuntu, Fedora, Mint, Debian, and many more. Linux is popular
              among tech enthusiasts, programmers, hackers, and anyone who loves freedom and customization.
              Linux is also widely used in servers, supercomputers, embedded devices, and smartphones. You can
              run Linux on almost any hardware, from a Raspberry Pi to a NASA rover. Linux is also known for
              its stability, security, and performance. It rarely crashes, gets infected by viruses, or slows
              down over time.
            </p>
          </div>
          <div className="blog-footer">
            <div className="blog-tags">
              <span className="blog-tag">Kernel</span>
              <span className="blog-tag">Open Source</span>
              <span className="blog-tag">Ubuntu</span>
              <span className="blog-tag">Linus Torvalds</span>
            </div>
          </div>
        </article>

        {/* Blog 2: Unix */}
        <article className="blog-card">
          <div>
            <div className="blog-card-header">
              <span className="blog-category-badge"><i className="fa-solid fa-server"></i> System Architecture</span>
              <span className="blog-read-time"><i className="fa-regular fa-clock"></i> 4 min read</span>
            </div>
            <h3 className="blog-title">Unix: The Origin of Modern Computing</h3>
            <p className="blog-desc">
              Unix is an older operating system that was developed by AT&T Bell Labs in the 1970s. It was
              designed to be a portable, multi-user, and multi-tasking system that could run on different
              types of machines. Unix was also the first operating system to use a graphical user interface
              (GUI), which made it easier to interact with the computer using a mouse and windows. Unix was
              revolutionary for its time, and influenced many other operating systems, including Linux, MacOS,
              and Windows. Unix is still used today, mainly in academic, scientific, and industrial settings.
              Some of the most common variants of Unix are BSD, Solaris, AIX, and HP-UX. Unix is also the
              basis of iOS and Android, the operating systems that power most of the smartphones in the world.
            </p>
          </div>
          <div className="blog-footer">
            <div className="blog-tags">
              <span className="blog-tag">Bell Labs</span>
              <span className="blog-tag">POSIX</span>
              <span className="blog-tag">Multi-Tasking</span>
              <span className="blog-tag">BSD</span>
            </div>
          </div>
        </article>

        {/* Blog 3: AI in Mobile App Development */}
        <article className="blog-card">
          <div>
            <div className="blog-card-header">
              <span className="blog-category-badge"><i className="fa-solid fa-mobile-screen-button"></i> Mobile & AI Reality</span>
              <span className="blog-read-time"><i className="fa-regular fa-clock"></i> 4 min read</span>
            </div>
            <h3 className="blog-title">"AI is Going to Kill Mobile App Development!"</h3>
            <div className="blog-desc">
              <p>
                I hear this every single day. People honestly believe you can just type <em>"Build me an app"</em> and AI will do all the work. Here is what that "vibe coding" dream actually looks like versus reality:
              </p>
              <p>
                <strong>The Non-Dev Expectation:</strong><br />
                Prompt: <em>"Build me a React Native screen that loads a list of 500 items with images."</em><br />
                • <strong>The Reality:</strong> AI generates a simple <code>.map()</code> function or basic component. It works fine on a high-end iPhone with 5 items, but on a normal Android phone with 500 items, the screen instantly freezes, memory usage spikes, and the app crashes.
              </p>
              <p>
                <strong>The Developer Reality:</strong><br />
                • We know that rendering large lists requires optimized virtualized lists, memoized items, and lazy image loading. We can ask AI for boilerplate code, but when performance drops or memory leaks happen, AI has no idea why—it just keeps suggesting the exact same broken code over and over.
              </p>
              <p>
                Let's be clear: AI is far from perfect. It hallucinates outdated packages, creates infinite re-render loops, and gets hopelessly stuck on critical bugs.
              </p>
              <p>
                When your React Native or Flutter app freezes, AI doesn't know how to inspect the bridge or profile memory usage. You still need an actual developer who understands how mobile hardware works to fix the mess. <strong>Prompting gets you a static screen. Engineering gets you an app that actually runs without crashing.</strong>
              </p>
              <p style={{ marginTop: '14px', color: '#ff2a2a', fontWeight: 600 }}>
                How often has AI given you code that looked right on paper but completely broke in real testing?
              </p>
            </div>
          </div>
          <div className="blog-footer">
            <div className="blog-tags">
              <span className="blog-tag">React Native</span>
              <span className="blog-tag">Mobile Engineering</span>
              <span className="blog-tag">AI vs Reality</span>
              <span className="blog-tag">Performance</span>
            </div>
          </div>
        </article>

        {/* Blog 4: Programming & AI */}
        <article className="blog-card">
          <div>
            <div className="blog-card-header">
              <span className="blog-category-badge"><i className="fa-solid fa-microchip"></i> Future of Tech</span>
              <span className="blog-read-time"><i className="fa-regular fa-clock"></i> 5 min read</span>
            </div>
            <h3 className="blog-title">Programming: The Evolution Beyond Manual Code</h3>
            <p className="blog-desc">
              I believe that the conventional idea of "writing a program" is headed for extinction, and
              indeed, for all but very specialized applications, most software, as we know it, will be
              replaced by AI systems that are trained rather than programmed. In situations where one needs a
              "simple" program (after all, not everything should require a model of hundreds of billions of
              parameters running on a cluster of GPUs), those programs will, themselves, be generated by an AI
              rather than coded by hand. I don't think this idea is crazy. No doubt the earliest pioneers of
              Computer Science, emerging from the (relatively) primitive cave of Electrical Engineering,
              stridently believed that all future Computer Scientists would need to command a deep
              understanding of semiconductors, binary arithmetic, and microprocessor design to understand
              software.
            </p>
          </div>
          <div className="blog-footer">
            <div className="blog-tags">
              <span className="blog-tag">Artificial Intelligence</span>
              <span className="blog-tag">Software Evolution</span>
              <span className="blog-tag">Future of Tech</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

