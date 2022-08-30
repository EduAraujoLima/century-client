import { Flex, Icon, Input } from "native-base";
import React from "react";

export const PageHeader: React.FC<PageHeaderProps> = ({
  icon,
  find,
  placeholder,
}) => {
  return (
    <Flex direction="row" px={8} mt={12}>
      <Input
        w={{
          base: "100%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon name={icon} size={5} ml="2" color="muted.400" />
        }
        placeholder={placeholder}
        backgroundColor="white"
      />
    </Flex>
  );
};

type PageHeaderProps = {
  placeholder: string;
  icon: string;
  find: () => void;
};
