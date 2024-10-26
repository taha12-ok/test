import React from 'react';
const blogContent = {
  title: 'Generative AI in Tech',
  description:
    'AI tools like ChatGPT are transforming content creation and programming, making them a hot topic in tech.',
  content: (
    <div>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Generative AI is revolutionizing the tech landscape, providing tools that enhance creativity and productivity. Technologies such as ChatGPT are reshaping how we approach content creation, making it more accessible and efficient. These AI-driven platforms allow users to generate high-quality content in a fraction of the time it would take manually.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Additionally, the implications for programming are profound, as AI can assist in writing code, debugging, and automating repetitive tasks, thus enabling developers to focus on more strategic aspects of their projects.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        The surge of interest in generative AI has also led to discussions around ethical implications and the future of jobs in tech. Companies are leveraging AI to streamline operations, but there's a growing concern about job displacement and the need for upskilling the workforce. As generative AI continues to evolve, professionals in the industry must adapt and embrace this technology to remain competitive.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Furthermore, generative AI is not just limited to writing or coding; it's also being applied in creative fields such as art and music. Artists are now collaborating with AI tools to enhance their creative process, resulting in unique works that blend human and machine creativity. This fusion opens up new possibilities for innovation and exploration in various domains.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        In conclusion, the impact of generative AI in technology is profound and multifaceted. It offers immense potential for enhancing productivity and creativity, while also presenting challenges that society must address as we move forward in this rapidly evolving landscape. Embracing this change is crucial for anyone looking to thrive in the tech industry.
      </p>
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-2">
        Key Takeaways:
      </h2>
      <ul className="list-disc list-inside text-gray-800 text-base md:text-lg mb-4">
        <li>Generative AI enhances content creation efficiency.</li>
        <li>AI tools assist in coding and debugging tasks.</li>
        <li>Applications extend to creative fields like art and music.</li>
        <li>Ethical implications and job displacement concerns are prevalent.</li>
        <li>Upskilling is necessary to adapt to new technologies.</li>
      </ul>
    </div>
  ),
};

function BlogPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-20 overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(b1.png)',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <div className="relative w-full max-w-lg md:max-w-2xl bg-gray-100 shadow-lg rounded-lg overflow-hidden border-4 border-transparent hover:border-[rgba(255,0,255,0.5)] transition-all duration-300 group z-5">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
          <h1 className="text-2xl md:text-4xl font-bold">{blogContent.title}</h1>
        </div>
        <div className="p-4 md:p-6 bg-customGreen">
          <p className="text-gray-800 text-base md:text-lg mb-4">
            {blogContent.description}
          </p>
          {blogContent.content}
        </div>
      </div>
      <div className="m-6 md:m-10 font-semibold flex justify-center pb-4 z-10">
        <a
          href="/blog"
          className="text-sm md:text-lg text-white bg-gray-700 px-3 md:px-4 py-2 rounded hover:underline hover:text-yellow-400 transition-colors duration-300"
        >
          Back To Blogs
        </a>
      </div>
    </div>
  );
}

export default BlogPage;
