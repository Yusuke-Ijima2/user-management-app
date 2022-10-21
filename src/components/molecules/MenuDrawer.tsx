import { memo, VFC } from "react";

import { Button } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickLogout } =
    props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              w="100%"
              h="16%"
              _focus={{ boxShadow: "none" }}
              borderRadius="none"
              onClick={onClickHome}
            >
              TOP
            </Button>
            <Button
              w="100%"
              h="16%"
              _focus={{ boxShadow: "none" }}
              borderRadius="none"
              onClick={onClickUserManagement}
            >
              ユーザー一覧
            </Button>
            <Button
              w="100%"
              h="16%"
              _focus={{ boxShadow: "none" }}
              borderRadius="none"
              onClick={onClickLogout}
            >
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
