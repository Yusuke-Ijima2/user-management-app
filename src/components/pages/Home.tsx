import { memo, VFC } from "react";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

export const Home: VFC = memo(() => {
  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" my="20">
        ユーザー管理アプリへ
        <br />
        ようこそ
      </Heading>
      <Heading as="h6" size="sm" textAlign="center" m="5">
        使い方
      </Heading>
      <Text textAlign="center">
        ユーザーはユーザー一覧を確認することができ、
        <br />
        管理者はそれに加えてユーザー一覧の名前などを変えることができます。
        <br />
        ※バックエンド側は書いていないので一時的に変えることはできますが更新はできません。
      </Text>
    </>
  );
});
