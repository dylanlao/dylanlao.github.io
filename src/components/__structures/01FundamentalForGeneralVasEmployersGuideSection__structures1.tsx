import React from 'react';

const 01FundamentalForGeneralVasEmployersGuideSection__structures1: React.FC = () => {
    return (
        <div className="container mx-auto">
  <div>
    {/* Floating TOC Side Menu */}
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Toggle Button */}
      <button className="toc-toggle bg-[#024570] text-white w-10 h-10 rounded-r-xl flex items-center justify-center shadow-lg hover:bg-[#035a8a] transition-colors duration-200" aria-label="Table of Contents">
        <img src="https://placehold.co/20x20/ffffff/ffffff" alt="" className="hidden" />
        <span className="toc-icon-open">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
          </svg>
        </span>
        <span className="toc-icon-close hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>
      {/* Side Panel */}
      <div className="toc-panel w-0 overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-2xl rounded-r-2xl border border-[#d8e6f0] border-l-0">
        <div className="w-64 p-5">
          <h3 className="text-base font-bold text-[#024570] mb-4 uppercase tracking-wide flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
            </svg>
            Table of Contents
          </h3>
          <nav>
            <ul className="space-y-1 text-sm">
              <li><a href="#toc-expectations" className="toc-link block py-1.5 px-3 rounded-lg text-neutral-700 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150 font-medium">Expectations from Employers</a></li>
              <li>
                <a href="#toc-identify" className="toc-link block py-1.5 px-3 rounded-lg text-neutral-700 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150 font-medium">How to Identify the VA</a>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><a href="#qualities" className="toc-link block py-1 px-3 rounded-lg text-neutral-500 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150">Qualities of a good VA</a></li>
                  <li><a href="#questions" className="toc-link block py-1 px-3 rounded-lg text-neutral-500 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150">Questions during hiring</a></li>
                </ul>
              </li>
              <li><a href="#exam" className="toc-link block py-1.5 px-3 rounded-lg text-neutral-700 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150 font-medium">Virtual Assistant Exam</a></li>
              <li>
                <a href="#management" className="toc-link block py-1.5 px-3 rounded-lg text-neutral-700 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150 font-medium">Managing Your VA</a>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><a href="#management" className="toc-link block py-1 px-3 rounded-lg text-neutral-500 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150">Communication &amp; reporting</a></li>
                  <li><a href="#management" className="toc-link block py-1 px-3 rounded-lg text-neutral-500 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150">Performance expectations</a></li>
                  <li><a href="#management" className="toc-link block py-1 px-3 rounded-lg text-neutral-500 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150">Tools &amp; documentation</a></li>
                </ul>
              </li>
              <li><a href="#management" className="toc-link block py-1.5 px-3 rounded-lg text-neutral-700 hover:bg-[#f4f8fb] hover:text-[#024570] transition-colors duration-150 font-medium">Best Practices</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <section className="flex">
        <div className="container mx-auto px-2">
          <div className="w-full mt-10 bg-[#024570] rounded-2xl text-white text-center px-6 py-6 md:py-32">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold">Fundamentals for General VAs</h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-4">Employer Guide</h2>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="container mx-auto pt-12 pb-4 px-4 md:px-36">
          <div className="w-full">
            <div className="text-lg text-neutral-700 pt-4">
              <div className="border-b mb-6 pb-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Expectations from Employers</h4>
              </div>
              <div className="border-b mb-6 pb-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">How to identify the VA that you need</h4>
                <ul className="list-disc text-lg ml-9 text-[#024570] leading-8">
                  <li><a href="#qualities" className="underline hover:decoration-double">Qualities of a good VA</a></li>
                  <li><a href="#questions" className="underline hover:decoration-double">Questions to ask during hiring</a></li>
                </ul>
              </div>
              <div className="border-b mb-6 pb-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Virtual Assistant Exam</h4>
                <ul className="list-disc text-lg ml-9 text-[#024570] leading-8">
                  <li><a href="#exam" className="underline hover:decoration-double">Administrative / Clerical / Project Management</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Customer Service</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Web Design and Development</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Software / Programming</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Finance and Management</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Sales and Marketing</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Writing</a></li>
                  <li><a href="#exam" className="underline hover:decoration-double">Arts and Multimedia</a></li>
                </ul>
              </div>
              <div className="border-b mb-6 pb-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Managing Your VA for Success</h4>
                <ul className="list-disc text-lg ml-9 text-[#024570] leading-8">
                  <li><a href="#management" className="underline hover:decoration-double">Communication and reporting</a></li>
                  <li><a href="#management" className="underline hover:decoration-double">Performance expectations</a></li>
                  <li><a href="#management" className="underline hover:decoration-double">Tools and documentation</a></li>
                </ul>
              </div>
              <div className="mb-6 pb-2">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Best Practices for Long-Term Working Relationships</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="container mx-auto pt-12 pb-4 px-4 md:px-36">
          <div className="w-full">
            <h2 id="toc-expectations" className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 text-center mb-2">Expectations from Employers</h2>
            <div className="text-base text-neutral-700 pt-4">
              <p className="pb-6">When you decide to finally get a VA to aid you on your goals, there is also a level of commitment from yourself to assist them in functioning as you intend them to. This includes the following:</p>
            </div>
            <div className="text-base text-neutral-700 pt-4">
              <ul className="list-disc text-lg ml-9 leading-8 text-neutral-700 mb-10">
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Briefing and onboarding</h4>
                  <p className="pb-6">Your VA should be properly informed not only about the specifics of his/ her task, but also the general background of your business. This includes the products or services you offer, how it's operating, short and long-term goals, and the reason you need a VA.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Access to files, databases, and logins</h4>
                  <p className="pb-6">For your VA to work effectively he/she needs to be given direct access to files, databases, and logins of your business for tasks that requires it to. Ensure security of your items with limited access, but minimize the added layer of everything going through you or something else when it's unnecessary to avoid delays and bottlenecks.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Assets and business materials</h4>
                  <p className="pb-6">Needless to say that assets and business materials such as logos, resources, and reference materials are needed to an extent depending on your requirements. If you need them to create posts, then you will have to send them high resolution files of your logos and templates. If you need them to write content, then they will need to know your product line.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Specific task training</h4>
                  <p className="text-base pb-6">While your VA likely has basic knowledge, it is important for you to tell them what tasks they are expected to do and how to do them, so it aligns with your business needs. This includes formats, necessary information they need to produce output, people they need to talk to, resources they can or need to use, as well as timings for each deliverable. This ensures that they are equipped to do them correctly in standards that you already have instead of trial and error.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Regular communication and feedback</h4>
                  <p className="text-base pb-6">Virtual assistants live online for most of their tasks. Which means that you need to keep constant communication with them so they understand how they can help and how to help you. Weekly alignment calls should do the trick in making sure both of you are on the same page.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Clear expectations and measurable outcomes</h4>
                  <p className="text-base pb-6">Define what success looks like. Give your VA deadlines, quality standards, and key priorities so they can make decisions confidently and stay aligned with your goals.</p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
              <div>
                <img src="https://static.shuffle.dev/uploads/files/3d/3dff90de81cacc06902134ed9c718dbcec7f8496/Illustrations-143.png" alt="Employer onboarding a virtual assistant" className="w-full rounded-2xl shadow-md object-cover" />
              </div>
              <div className="bg-[#f4f8fb] rounded-2xl p-6 md:p-8 border border-[#d8e6f0]">
                <h3 className="text-2xl md:text-3xl font-bold text-[#024570] mb-4">A good VA setup starts with a good employer setup</h3>
                <p className="text-neutral-700 leading-8">The more clarity, access, and direction you provide, the faster your VA becomes productive. Strong support during onboarding reduces confusion, avoids rework, and sets the tone for a healthy long-term relationship.</p>
              </div>
            </div>
            <h2 id="toc-identify" className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 text-center mt-14 mb-2">How to identify the VA that you need</h2>
            <div className="text-base text-neutral-700 pt-4">
              <p className="pb-6">Hiring a VA is more than just a question of who you can afford. Like any other job, there are skill sets and characteristics that you would want to eye for, depending on what you need. This section will help you answer those questions and be able to pick out the most suitable VA among the lot.</p>
            </div>
            <h3 id="qualities" className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900">Qualities of a good VA</h3>
            <div className="text-base text-neutral-700 pt-4">
              <p className="pb-6">Selecting a VA for your personal or business starts with knowing exactly why you need one upfront. But there are qualities that you should look out for as you communicate with them.</p>
              <ul className="list-disc text-lg ml-9 leading-8 text-neutral-700 mb-10">
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Honest</h4>
                  <p className="pb-6">Works without being monitored and communicates with honesty even when there are errors.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Proactive</h4>
                  <p className="pb-6">Doesn't need spoon feeding, or step-by-step hand-holding. Has a good understanding of his/ her role that enables him/ her to function as he/ she should.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Solution-oriented</h4>
                  <p className="pb-6">Exhausts possible solutions for a problem before escalating.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Requires minimal supervision</h4>
                  <p className="text-base pb-6">Doesn't require someone to guide every step of the way, and can learn and adapt without extensive guidance and training.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Great time management skills</h4>
                  <p className="text-base pb-6">Able to handle different tasks with grace, and knows the difference between urgent, priority, and important.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Organized</h4>
                  <p className="text-base pb-6">Has thoughts articulated well, and keeps files and information easy to retrieve without wasting time searching.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Detail-oriented</h4>
                  <p className="text-base pb-6">Can complement what is lacking in you or the rest of the team, spots gaps in-between, and pays attention to the little things while you look at the bigger view.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Excellent follow-through skills</h4>
                  <p className="text-base pb-6">Knows how to chase people when needed and doesn't let you do all the follow-up for tasks and deliverables expected of them.</p>
                </li>
                <li>
                  <h4 className="text-xl text-neutral-900 pb-2 font-bold">Strong communication skills</h4>
                  <p className="text-base pb-6">Asks the right questions, gives updates clearly, and knows when to escalate issues before they become problems.</p>
                </li>
              </ul>
            </div>
            <div className="bg-[#024570] rounded-2xl px-6 py-8 md:px-10 md:py-10 text-white my-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Tip for employers</h3>
              <p className="text-lg leading-8">Hire for role fit, communication style, and reliability—not just technical skill. Skills can be trained faster than mindset, consistency, and accountability.</p>
            </div>
            <h3 id="questions" className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mt-14">Questions to ask during hiring</h3>
            <div className="text-base text-neutral-700 pt-4">
              <p className="pb-6">The interview process should help you assess both capability and work attitude. Ask practical questions that reveal how the applicant thinks, communicates, solves problems, and manages deadlines.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-[#024570] mb-3">Role and experience</h4>
                  <ul className="list-disc ml-6 leading-8 text-neutral-700">
                    <li>What types of VA work have you handled before?</li>
                    <li>Which tasks are you most confident doing on your own?</li>
                    <li>What tools and platforms have you used recently?</li>
                    <li>What kind of clients or industries have you supported?</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-[#024570] mb-3">Work style and communication</h4>
                  <ul className="list-disc ml-6 leading-8 text-neutral-700">
                    <li>How do you organize tasks and priorities?</li>
                    <li>How often do you prefer to send updates?</li>
                    <li>What do you do when instructions are incomplete?</li>
                    <li>How do you handle feedback or revisions?</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-[#024570] mb-3">Problem solving</h4>
                  <ul className="list-disc ml-6 leading-8 text-neutral-700">
                    <li>Tell me about a time you solved a problem without waiting for instructions.</li>
                    <li>How do you handle a missed deadline or unexpected delay?</li>
                    <li>What steps do you take before escalating an issue?</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-[#024570] mb-3">Commitment and fit</h4>
                  <ul className="list-disc ml-6 leading-8 text-neutral-700">
                    <li>Why are you interested in this role?</li>
                    <li>What type of employer do you work best with?</li>
                    <li>What hours are you available, and how stable is your setup?</li>
                    <li>What would help you succeed in the first 30 days?</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 id="exam" className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 text-center mt-14 mb-4">Virtual Assistant Exam</h2>
            <div className="text-base text-neutral-700 pt-2">
              <p className="pb-6">A skills exam can help validate an applicant's strengths and identify which type of work they are best suited for. Depending on the role you are hiring for, you may evaluate candidates in one or more of these areas.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Administrative / Clerical / Project Management</h4>
                  <p className="text-neutral-700 leading-7">Tests organization, scheduling, file management, research, documentation, and coordination skills.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Customer Service</h4>
                  <p className="text-neutral-700 leading-7">Evaluates empathy, written communication, issue handling, and customer response quality.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Web Design and Development</h4>
                  <p className="text-neutral-700 leading-7">Measures website building, maintenance, design understanding, and front-end or CMS familiarity.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Software / Programming</h4>
                  <p className="text-neutral-700 leading-7">Assesses logic, coding ability, debugging, and technical problem-solving skills.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Finance and Management</h4>
                  <p className="text-neutral-700 leading-7">Checks bookkeeping knowledge, reporting, data accuracy, and operations support capability.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Sales and Marketing</h4>
                  <p className="text-neutral-700 leading-7">Reviews lead generation, outreach, campaign support, social media, and conversion-focused thinking.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Writing</h4>
                  <p className="text-neutral-700 leading-7">Evaluates grammar, structure, clarity, research, and the ability to write for different audiences.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5 bg-[#f8fbfd]">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Arts and Multimedia</h4>
                  <p className="text-neutral-700 leading-7">Looks at design sense, editing, creative execution, and familiarity with visual content tools.</p>
                </div>
                <div className="rounded-2xl border border-dashed border-[#024570] p-5 bg-white">
                  <h4 className="text-lg font-bold text-[#024570] mb-2">Why use an exam?</h4>
                  <p className="text-neutral-700 leading-7">A practical test helps you compare candidates objectively and reduce the risk of hiring based on interviews alone.</p>
                </div>
              </div>
            </div>
            <h2 id="management" className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 text-center mt-14 mb-4">Managing Your VA for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pt-4">
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-[#024570] mb-3">Communication and reporting</h4>
                <p className="text-neutral-700 leading-8">Set a rhythm for daily or weekly updates, define preferred channels, and agree on how completed work and blockers should be reported.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-[#024570] mb-3">Performance expectations</h4>
                <p className="text-neutral-700 leading-8">Be clear about turnaround time, quality standards, responsibilities, and what ownership looks like for each recurring task.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-[#024570] mb-3">Tools and documentation</h4>
                <p className="text-neutral-700 leading-8">Use shared SOPs, task trackers, folders, and templates so your VA can work independently and maintain consistency over time.</p>
              </div>
            </div>
            <div className="bg-[#f4f8fb] rounded-3xl p-6 md:p-10 border border-[#d8e6f0] mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Best Practices for Long-Term Working Relationships</h3>
              <ul className="list-disc ml-6 text-lg leading-8 text-neutral-700">
                <li>Start with documented processes for recurring tasks.</li>
                <li>Give context, not just instructions, so your VA can make better decisions.</li>
                <li>Encourage questions early to prevent mistakes later.</li>
                <li>Recognize good work and provide constructive feedback consistently.</li>
                <li>Review workload regularly and adjust priorities when needed.</li>
                <li>Protect access and security while still enabling efficient work.</li>
                <li>Invest in training when the role expands or tools change.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto pb-12 text-center">
          <div className="w-full px-4" />
        </div>
      </section>
    </div>
  </div>
</div>


    );
};

export default 01FundamentalForGeneralVasEmployersGuideSection__structures1;