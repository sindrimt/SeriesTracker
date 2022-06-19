import React from "react";

import { PanelItem, Text, Icon } from "./SidebarButtonStyles";

const SidebarButton = ({ text, icon }) => {
  return (
    <PanelItem>
      <Icon src={icon} alt={text} />
      <Text>{text}</Text>
    </PanelItem>
  );
};

export default SidebarButton;
