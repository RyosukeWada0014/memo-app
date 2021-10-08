import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<Array<string>>([]);

  const addTodo = useCallback((text: string) => {
    setMemos((prev) => {
      return [...prev, text];
    });
  }, []);

  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
