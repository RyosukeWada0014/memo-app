import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { MemoList } from "src/components/MemoList";
import { useMemoList } from "src/hooks/useMemoList";

const Home: NextPage = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>("");

  const onClickAdd = (text: string) => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <h1 className="m-2 text-4xl">かんたんメモアプリ</h1>
      <div className="m-2">
        <input
          type="text"
          className="w-60 p-1 border border-gray-500 rounded"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className="ml-2 p-1 border bg-gray-200 hover:bg-gray-300 active:bg-gray-300
         rounded"
          onClick={() => onClickAdd(text)}
        >
          追加
        </button>
        <MemoList onClickDelete={onClickDelete} memos={memos} />
      </div>
    </div>
  );
};

export default Home;
