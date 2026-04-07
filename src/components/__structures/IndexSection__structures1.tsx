import React from 'react';

const IndexSection__structures1: React.FC = () => {
    return (
        <div className="container mx-auto">
  <div>
    {/* Floating TOC Side Menu */}
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-start">
      {/* Toggle Button */}
      <button id="toc-toggle" className="toc-toggle bg-[#024570] text-white p-3 rounded-r-lg shadow-lg flex flex-col items-center justify-center hover:bg-[#035a8f] transition-colors duration-200" title="Table of Contents">
        {/* List/TOC icon using pure HTML */}
        <span className="flex flex-col gap-1 w-5">
          <span className="block h-0.5 bg-white w-full" />
          <span className="block h-0.5 bg-white w-3/4" />
          <span className="block h-0.5 bg-white w-full" />
          <span className="block h-0.5 bg-white w-3/4" />
          <span className="block h-0.5 bg-white w-full" />
        </span>
        <span className="text-xs mt-1 font-semibold tracking-wide" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 9, letterSpacing: '0.08em'}}>Table of Contents</span>
      </button>
      {/* TOC Panel */}
      <div className="toc-panel bg-white shadow-2xl border border-slate-200 rounded-r-lg overflow-hidden transition-all duration-300 ease-in-out max-w-0 opacity-0" style={{maxHeight: '80vh', maxWidth: 0, opacity: 0}}>
        <div className="w-64 p-5 overflow-y-auto" style={{maxHeight: '80vh'}}>
          <h3 className="text-base font-bold text-[#024570] mb-4 border-b border-slate-200 pb-2">Table of Contents</h3>
          <ul className="space-y-3">
            <li>
              <a href="#section-general-va" className="toc-link block text-sm font-bold text-[#024570] hover:text-[#0069d9] transition-colors duration-150">General VA</a>
              <ul className="ml-3 mt-1 space-y-1">
                <li><a href="#toc-fundamentals" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Fundamentals for General VAs</a></li>
                <li><a href="#toc-communication" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Communication &amp; Email Management</a></li>
                <li><a href="#toc-task" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Task &amp; Project Management</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-specialized-va-1" className="toc-link block text-sm font-bold text-[#024570] hover:text-[#0069d9] transition-colors duration-150">Specialized VA (1)</a>
              <ul className="ml-3 mt-1 space-y-1">
                <li><a href="#toc-social-media" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Social Media Management</a></li>
                <li><a href="#toc-content-creation" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Content Creation &amp; Copywriting</a></li>
                <li><a href="#toc-customer-support" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Customer Support &amp; CRM</a></li>
              </ul>
            </li>
            <li>
              <a href="#section-specialized-va-2" className="toc-link block text-sm font-bold text-[#024570] hover:text-[#0069d9] transition-colors duration-150">Specialized VA (2)</a>
              <ul className="ml-3 mt-1 space-y-1">
                <li><a href="#toc-social-media-2" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Social Media Management</a></li>
                <li><a href="#toc-content-creation-2" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Content Creation &amp; Copywriting</a></li>
                <li><a href="#toc-customer-support-2" className="toc-link block text-xs text-slate-600 hover:text-[#0069d9] transition-colors duration-150 py-0.5">Customer Support &amp; CRM</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <section className="flex w-full bg-[#024570]">
        <div className="w-full">
          <div className="container mx-auto py-10 md:py-40">
            <div className="w-full px-4 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white pb-5">The VA Standard Operating Procedure</h1>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white pb-5">Training Course Library</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-white py-10">
        <div className="container mx-auto p-8">
          <div id="section-general-va" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">General VA</h2>
            {/* Accordion Item 1 */}
            <div id="toc-fundamentals" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Fundamentals for General VAs</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="/01-fundamental-for-general-vas-employers-guide" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="/01-fundamental-for-general-vas-course-outline" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href className="underline hover:text-[#0069d9]" target="_blank">Fundamentals for General VAs Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                  <p className="mb-4"><a href className="underline hover:text-[#0069d9]" target="_blank">Resources</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-communication" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Customer Support</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Customer Support Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-task" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Lead Generation for Premium Content (E-Books)</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Lead Generation using Premium Content (E-Books) Course</a><em className="text-neutral-700">- [password:LeadGenEBooksCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-social-media" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Podcast</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Podcast Course</a><em className="text-neutral-700">- [password: PodcastCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 5 */}
            <div id="toc-content-creation" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Content Writing</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Content Writing Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          <div id="section-specialized-va-1" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Website Creation / Management</h2>
            {/* Accordion Item 1 */}
            <div id="toc-customer-support" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Build an Attractive and Compelling Website with Wordpress</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Build an Attractive and Compelling Website with Wordpress Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-customer-support" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Wordpress</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Wordpress</a><em className="text-neutral-700">- [password: WordpressCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-customer-support" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Shopify</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Shopify Course</a><em className="text-neutral-700">- [password: ShopifyCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-customer-support" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">ECommerce Management</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">ECommerce Management</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 5 */}
            <div id="toc-customer-support" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Advanced ECommerce</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Advanced ECommerce</a><em className="text-neutral-700">- [password: AdvancedECommerceCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">SEO</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">SEO</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700">- [password: SEOEmployersGuide]</em></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">SEO Course</a><em className="text-neutral-700">- [password: SEOCourse] (give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">SEO Tools List</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Mininet</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Mininet Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Diagram</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-customer-support-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Forum Commenting and Posting</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Forum Commenting and Posting</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Social Media Marketing</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Social Media Marketing</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Social Media Marketing Course</a><em className="text-neutral-700">- [password: SocialMediaMarketingCourse] (give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Resources</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Social Media Marketing Fundamentals 1.1</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Social Media Marketing Fundamentals Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">LinkedIn Marketing</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">LinkedIn Marketing Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Resources</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Pinterest Marketing</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Pinterest Marketing Course</a><em className="text-neutral-700">- [password: PinterestMarketingCourse] (Give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Resources</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Email Marketing</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Email Marketing</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Email Marketing Course</a><em className="text-neutral-700">(give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Email Marketing using Klaviyo</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Email Marketing using Klaviyo Course</a><em className="text-neutral-700">- [password: EmailMarketingKlaviyoCourse] (Give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Report Template</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Creatives and Design</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Basic Photoshop</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Basic Photoshop Course</a><em className="text-neutral-700">- [password: BasicPhotoshopCourse] (give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Video Editing for Davinci Resolve</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Video Editing for Davinci Resolve Course</a><em className="text-neutral-700">- [password: VideoEditingDavinciCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Video Editing for iMovie</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Video Editing for iMovie Course</a><em className="text-neutral-700">- [password: VideoEditingiMovieCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Using Photoshop to Polish/Shine Jewelry Photos</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Using Photoshop to Polish/Shine Jewelry Photos Course</a><em className="text-neutral-700">- [password: PhotoshopPolishJewelry] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Advertising*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Advertising</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Digital Advertising</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Digital Advertising Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Facebook Ads &amp; Instagram Ads</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Facebook Ads &amp; Instagram Ads Course</a><em className="text-neutral-700">- [password: FBAdsandInstaAdsCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Google Ads</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Google Ads Course</a><em className="text-neutral-700">- [password: GoogleAdsCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">LinkedIn Ads</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">LinkedIn Ads Course</a><em className="text-neutral-700">- [password: LinkedInAdsCourse] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Community Management*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Community Management</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Community Management 101</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Community Management 101 Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Social Media*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Social Media</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">The 3 Steps to Quick &amp; Easy Social Media Content Creation</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">The 3 Steps to Quick &amp; Easy Social Media Content Creation Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Process Flow</a></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a Podcast Episode in under 35 minutes using Descript and Capsho</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Course Outline</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">The 3 Steps to Quick &amp; Easy Social Media Content Creation Course</a><em className="text-neutral-700">- [password: CPE35] (Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to promote YouTube Videos</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to promote YouTube Videos Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Recruit and Manage Social Media Influencers</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Recruit and Manage Social Media Influencers Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Content Management (Wordpress, WooCommerce)*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">How to Add Products and Make Coupons using WooCommerce</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Add Products and Make Coupons using WooCommerce</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Add Products and Make Coupons using WooCommerce Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Managing Orders using WooCommerce</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Managing Orders using WooCommerce Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating and Adding Product Data &amp; Product Layout using WooCommerce</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating and Adding Product Data &amp; Product Layout using WooCommerce Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating and Managing a Membership Website using WooCommerce</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating and Managing a Membership Website using WooCommerce Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 5*/}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Managing Wordpress Hotel Booking</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Managing Wordpress Hotel Booking Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 6 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Managing Membership Site (Member Payment and Registration) for Wordpress</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating and Managing a Membership Website using WooCommerce Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 7 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating and Managing a Membership Website using WooCommerce</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Managing Membership Site (Member Payment and Registration) for Wordpress Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 8 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Install Wordpress with the Cheapest GCP Service</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Install Wordpress with the Cheapest GCP Service Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 9 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Managing a WordPress Real Estate Marketplace</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Managing a WordPress Real Estate Marketplace Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 10 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a Customized Destinations Listing Website with Searchable Elements for Travel Agencies</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a Customized Destinations Listing Website with Searchable Elements for Travel Agencies Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 11 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating an On Page &amp; Off Page SEO for Wordpress</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating an On Page &amp; Off Page SEO for Wordpress Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 12 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a Landing Page Using Elementor</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a Landing Page Using Elementor Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Leads Acquisition*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Leads Acquisition</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Influencer Lead Generation and Outreach Campaign</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Influencer Lead Generation and Outreach Campaign Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Acquire Potential Leads and Sales</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Acquire Potential Leads and Sales Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Compute Social Media Metrics for Potential Influencers</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Compute Social Media Metrics for Potential Influencers Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Best Practices for Utilizing Filters and Labels in Commissions Inc CRM</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Best Practices for Utilizing Filters and Labels in Commissions Inc CRM Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 5*/}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Best Tools to use in Wordpress for Lead Generation</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Best Tools to use in Wordpress for Lead Generation Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Website Creation / Management (Wix, Shopify)*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Website Creation / Management (Wix, Shopify)</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a 1-Page Wix Portfolio Site</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a 1-Page Wix Portfolio Site Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a 2-Page Wix Portfolio Site</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a 2-Page Wix Portfolio Site Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a 5-Page Wix Portfolio Site</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a 5-Page Wix Portfolio Site Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a Wix Booking Site</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a Wix Booking Site Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a Wix Shop</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a Wix Shop Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 5*/}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating a Shopify Print-On Demand Store using Free Themes</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating a Shopify Print-On Demand Store using Free Themes Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 6*/}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Using Zipify App For Your Shopify</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Using Zipify App For Your Shopify Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Logistics*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Logistics</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Using CargoWise for Logistics Bookings and Reporting</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Using CargoWise for Logistics Bookings and Reporting Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Steps in Recording Goods Received at the Distribution Center</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Steps in Recording Goods Received at the Distribution Center Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Real Estate*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Real Estate</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to List a Property in LandWatch</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to List a Property in LandWatch Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Look and Contact Potential Buyers on Facebook</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Look and Contact Potential Buyers on Facebook Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Handling Multiple Tenant Issues</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Handling Multiple Tenant Issues Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Amazon*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Amazon</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Set-Up Replenishment/Inventory Alerts for FBA</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Set-Up Replenishment/Inventory Alerts for FBA Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Remove Negative Feedback for Amazon Seller Central</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Remove Negative Feedback for Amazon Seller Central Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Create a Manual Targeting Sponsored Product Ad Campaign on Amazon Seller Central</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Create a Manual Targeting Sponsored Product Ad Campaign on Amazon Seller Central Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 4 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Create an FBA Shipping Plan</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Create an FBA Shipping Plan Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 5 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Inventory Management for Amazon Seller Central</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Inventory Management for Amazon Seller Central Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 6 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Amazon Seller Central Basics</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Amazon Seller Central Basics Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Software-as-a-Service*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Software-as-a-Service</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Creating and Sending Campaigns through ActiveCampaign</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Creating and Sending Campaigns through ActiveCampaign Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Generating, Merging, and Organizing Tickets using ZenDesk</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Generating, Merging, and Organizing Tickets using ZenDesk Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">How to Use Karbon For Client’s Business</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">How to Use Karbon For Client’s Business Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Affiliate Marketing*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Affiliate Marketing</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Best Guide to Start an Affiliate Marketing With WordPress</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Best Guide to Start an Affiliate Marketing With WordPress Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
          {/*Bookkeeping/Accounting*/}
          <div id="section-specialized-va-2" className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Bookkeeping/Accounting</h2>
            {/* Accordion Item 1 */}
            <div id="toc-social-media-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Guidelines for Posting Payments and Generating SOA in QuickBooks</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a><em className="text-neutral-700" /></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Guidelines for Posting Payments and Generating SOA in QuickBooks Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Effective Bookkeeping and Inventory Management for VAs</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Effective Bookkeeping and Inventory Management for VAs Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div id="toc-content-creation-2" className="accordion-item border-b border-slate-200 text-lg md:text-2xl hover:border-slate-300">
              <button className="accordion-trigger w-full flex justify-between items-center py-5 text-slate-800">
                <span className="font-bold text-[#024570]">Xero Bank Reconciliation Process</span>
                <span className="accordion-icon text-[#024570] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg_e8e9ddd6ee690ebc9e1650a0f926e6d0" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" />
                </span>
              </button>
              <div className="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-base md:text-lg text-neutral-900">
                  <p className="mb-4"><a href="#" target="_blank" className="underline hover:text-[#0069d9]">Employer's Guide</a></p>
                  <p className="mb-4"><a href="#" className="underline hover:text-[#0069d9]" target="_blank">Xero Bank Reconciliation Process Course</a><em className="text-neutral-700">(Give this link to your VA)</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>


    );
};

export default IndexSection__structures1;