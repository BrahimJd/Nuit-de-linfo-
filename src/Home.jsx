const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden flex flex-col items-center font-heading-desktop-h2">
      {/* Navigation Bar */}
      <div className="w-full flex justify-center mt-[21px] px-4">
        <div className="w-full max-w-[1265px] shadow-[2px_2px_5px_rgba(0,_0,_0,_0.05),_1px_1px_1px_rgba(0,_0,_0,_0.05)] rounded-xl bg-azure-radiance-50 flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-16 gap-4 md:gap-0">
          <img className="w-[141.8px] h-[27.9px]" alt="" src="logo.svg" />
          <div className="flex items-center justify-center p-2 gap-4 md:gap-8 text-sm md:text-base text-azure-radiance-950">
            <div className="leading-[150%]">Ocean Insights</div>
            <div className="leading-[150%]">Body Connections</div>
            <div className="leading-[150%]">Explore</div>
          </div>
          <div className="flex items-center gap-1 text-base md:text-lg font-label-large">
            <div className="rounded-lg border-azure-radiance-600 border-[0.5px] border-solid py-2 md:py-3 px-4 md:px-6">
              <b className="leading-[120%]">Learn</b>
            </div>
            <div className="rounded-lg bg-azure-radiance-600 py-2 md:py-3 px-4 md:px-6 text-button-primary-regular-text">
              <b className="leading-[120%]">Join</b>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full rounded-b-13xl [background:linear-gradient(180deg,_rgba(240,_247,_254,_0),_#f0f7fe_99.99%)] min-h-[800px] md:h-[1276.7px] flex flex-col items-center px-4">
        <div className="max-w-[768px] text-center mt-[100px] md:mt-[195.69px] mb-8 md:mb-16">
          <b className="text-3xl md:text-[56px] leading-[120%] text-azure-radiance-950 block mb-4 md:mb-6">
            Explore the Ocean&apos;s Impact on Your Health
          </b>
          <div className="text-base md:text-lg leading-[150%]">
            Dive into our interactive web application that reveals the profound
            connections between ocean functions and human body systems.
          </div>
        </div>
        <img
          className="w-full max-w-[483.9px] h-auto md:h-[621.8px] object-contain"
          alt=""
          src="freepik__35mm-film-photography-exhibit-a-human-anatomy-body__48301 1.png"
        />
      </div>

      {/* Discovery Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-[144px] mt-20 md:mt-40">
        <b className="text-2xl md:text-29xl leading-[120%] block mb-4 md:mb-8">
          Discover the Ocean-Body Connection
        </b>
        <div className="text-base md:text-lg leading-[150%] mb-8 md:mb-16 max-w-[768px]">
          Our interactive web application allows you to delve into the
          fascinating links between ocean functions and human body systems.
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              title: "Step 1: Start Your Exploration",
              desc: "Begin by selecting an ocean function that interests you.",
            },
            {
              title: "Step 2: Make the Connection",
              desc: "Discover how this function impacts human systems.",
            },
            {
              title: "Step 3: Engage with Interactive Content",
              desc: "Interact with visuals and data to deepen your understanding.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="rounded-xl bg-eunry-50 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="h-40 md:h-60 bg-azure-radiance-100 transition-colors duration-300 hover:bg-azure-radiance-200" />
              <div className="p-4 md:p-6 text-center">
                <b className="text-sm md:text-base block mb-2 leading-[130%] text-azure-radiance-950">
                  {step.title}
                </b>
                <div className="text-sm md:text-base leading-[150%] text-azure-radiance-800">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
