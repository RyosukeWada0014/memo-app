import { FC } from "react";

type Props = {
  memos: Array<string>;
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  return (
    <div className="m-2 p-4 border">
      <h2 className="mb-2">メモ一覧</h2>
      <ul className="list-disc list-inside space-y-2">
        {props.memos.map((memo, index) => {
          return (
            <li key={index.toString()}>
              <span>{memo}</span>
              <button
                type="button"
                className="ml-4 p-1 border bg-gray-200 hover:bg-gray-300 active:bg-gray-300 rounded"
                onClick={() => props.onClickDelete(index)}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
