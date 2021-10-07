import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>かんたんメモアプリ</h1>
      <div>
        <input type="text" className="border-2 border-gray-500" />
        <button className='ml-2 p-2 border bg-gray-200 hover:bg-gray-300 rounded '>追加</button>
      </div>
    </div>
  );
};

export default Home;
