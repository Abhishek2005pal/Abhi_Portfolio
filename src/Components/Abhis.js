export default function Projects() {
    return (
      <section style={{ backgroundColor: "honeydew" }} id="projects"
        className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
        <h2 className="text-5xl text-emerald-500 font-bold text-center">
          My Projects
        </h2>
  
        <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center
        gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
          <div className="w-80 rounded">
            <a href="http://127.0.0.1:5500/React-Portfolio/portfolio/src/Components/weather.html" className="w-full h-full">
              <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                alt="Project 1"
                className="w-full h-full bg-cover rounded" />
            </a>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h3 className="font-bold text-3xl text-center">
              <a className="hover:underline" href='http://127.0.0.1:5500/React-Portfolio/portfolio/src/Components/weather.html'>Weather App</a>
            </h3>
            <p>
              I Created a dynamic Weather App utilizing APIs to provide real-time weather updates. The app features an intuitive user interface, displays current weather conditions, forecasts, and supports multiple locations. Implemented using HTML, CSS, JavaScript, and a weather API for accurate data retrieval. Enhanced with responsive design for mobile compatibility.
            </p>
          </div>
        </div>
  
        <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
        lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
          <div className="w-80 rounded">
            <a href='http://127.0.0.1:5500/Learning/React-Portfolio/portfolio/src/Components/temperature.html' className="w-full h-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlHocaDR-3ou3EPli4XU84zWTiolwExOJAQ&s"
                alt="Project 2"
                className="w-full h-full bg-cover rounded" />
            </a>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h3 className="font-bold text-3xl text-center">
              <a className="hover:underline" href='http://127.0.0.1:5500/Learning/React-Portfolio/portfolio/src/Components/temperature.html'>Temperature Converter</a>
            </h3>
            <p>
              I developed a Temperature Converter app to seamlessly switch between Celsius, Fahrenheit, and Kelvin. The app features a user-friendly interface and real-time conversion capabilities. Built using HTML, CSS, and JavaScript, it ensures accurate and instant temperature conversions, enhancing user experience with responsive design for accessibility across various devices.
            </p>
          </div>
        </div>
  
        <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center
        gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
          <div className="w-80 rounded">
            <a href="http://127.0.0.1:5500/Portfolio2/React-Portfolio/src/Components/dsa-tracker.html" className="w-full h-full">
              <img src="https://www.notion.so/en-us/front-api/og-image/templates/dsa-progress-tracker"
                alt="Project 1"
                className="w-full h-full bg-cover rounded" />
            </a>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h3 className="font-bold text-3xl text-center">
              <a className="hover:underline" href="http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/dsa-tracker.html">
                DSA Progress Tracker
              </a>
            </h3>
            <p>
              I Developed a DSA (Data Structures and Algorithms) Progress Tracker using React to monitor learning and practice. The app enables users to log completed topics, set goals, and visualize progress with interactive charts. It features a clean interface, responsive design, and efficient state management for seamless user experience across devices.
            </p>
          </div>
        </div>
  
        <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
        lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
          <div className="w-80 rounded">
            <a href="http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/puzzle-game.html" className="w-full h-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/15-puzzle_magical.svg/800px-15-puzzle_magical.svg.png"
                alt="Project 2"
                className="w-full h-full bg-cover rounded" />
            </a>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h3 className="font-bold text-3xl text-center">
              <a className="hover:underline" href="http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/puzzle-game.html">
                15 Puzzle Game
              </a>
            </h3>
            <p>
              Developed a 15 Puzzle Game using React for an engaging and interactive user experience. The game challenges players to arrange numbered tiles in order and features smooth animations and efficient state management. With a clean, responsive design, it ensures compatibility and playability across various devices.
            </p>
          </div>
        </div>
      </section>
    );
  }
  