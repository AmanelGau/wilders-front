import React from "react";

const CardLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const styles: any = {
    card: {
      border: "1px solid grey",
    },
  };
  return <div style={styles.card}>{children}</div>;
};

export default CardLayout;
