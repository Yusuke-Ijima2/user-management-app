import axios from "axios";
import { useState, useCallback } from "react";

import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users") //取得するAPI
      .then((res) => setUsers(res.data)) //次の処理
      .catch(() => {
        showMessage({
          title: "ユーザー取得に失敗しました",
          status: "error",
        });
      }) //エラー時の処理
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);

  return { getUsers, loading, users };
};
