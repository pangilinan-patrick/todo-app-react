import Image from "next/image";
import { Inter, Maiden_Orange } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex justify-center items-center h-screen`}>
      <div>
        {/* input and button */}
        <div className={`mb-3`}>
          <input
            type="text"
            placeholder="Add Todo"
            className={`p-1 rounded-md`}
          />
          <button className={`bg-cyan-900 p-2 m-1 rounded-md`}>Add Todo</button>
        </div>

        {/* todo cards */}
        <div className={`bg-cyan-900 p-3 rounded-md`}>
          <div
            className={`flex justify-center items-center bg-cyan-700 rounded-md`}
          >
            Take care of cats.
          </div>
        </div>
      </div>
    </main>
  );
}
