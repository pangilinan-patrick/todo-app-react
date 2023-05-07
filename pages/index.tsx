import Image from "next/image";
import { Inter, Maiden_Orange } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div
        className={`flex justify-center items-center h-screen flex-col mx-20`}
      >
        {/* input and button */}
        <div className={`mb-3`}>
          <input
            type="text"
            placeholder="Add Todo"
            className={`p-1 rounded-md mr-1 my-2`}
          />
          <button className={`bg-cyan-900 p-2 m-1 rounded-md`}>Add Todo</button>
        </div>

        {/* todo cards */}
        <div className={`bg-cyan-900 p-3 rounded-md`}>
          <div
            className={`flex justify-center items-center bg-cyan-700 rounded-md`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </div>
        </div>
      </div>
    </main>
  );
}
