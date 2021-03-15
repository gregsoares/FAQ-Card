import faqImg from "./images/illustration-woman-online-desktop.svg";
import squareImg from "./images/illustration-box-desktop.svg";

function App() {
  return (
    <div className="py-12 text-center bg-gray-500 App">
      <div className="py-10 mx-auto FAQ-Card">
        <section className="h-auto py-4 mx-20 my-4 border border-gray-400 rounded-lg shadow-lg card-container">
          <div className="flex max-w-sm min-w-full mx-4 my-8">
            <div className="relative flex-col mr-8" id="imgContainer">
              <img
                className="border border-blue card-containe"
                src={faqImg}
                alt="female cartoon in front of a monitor"
              />{" "}
              <img
                className="absolute w-32 -left-10 top-44"
                src={squareImg}
                alt="square with @ sign on top"
              />{" "}
            </div>
            <div className="flex-col border ">
              <h1 className="text-2xl text-left text-gray-700 bold ">FAQ</h1>
              <p className="px-4 py-3 my-2 border border-gray-300">
                Lorem ipsum dolor sit amet.{" "}
              </p>
              <p className="px-4 py-3 my-2 border border-gray-300">
                Lorem ipsum dolor sit amet.{" "}
              </p>
              <p className="px-4 py-3 my-2 border border-gray-300">
                Lorem ipsum dolor sit amet.{" "}
              </p>
              <p className="px-4 py-3 my-2 border border-gray-300">
                Lorem ipsum dolor sit amet.{" "}
              </p>
              <p className="px-4 py-3 my-2 border border-gray-300">
                Lorem ipsum dolor sit amet.{" "}
              </p>
            </div>
          </div>
        </section>
        {/* to add scroll bar */}
        <footer className="min-h-screen">
          <ul className="my-4">
            <li className="my-1">Lorem ipsum dolor sit. </li>
            <li className="my-1">Lorem ipsum dolor sit. </li>
            <li className="my-1">Lorem ipsum dolor sit. </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
