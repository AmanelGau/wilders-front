import React from "react";

const CardLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const styles: any = {
    card: {
      border: "1px solid grey",
      boxShadow: "3px 1px 5px 0px grey",
      borderRadius: 5,
      padding: 8,
    },
  };
  return <div style={styles.card}>{children}</div>;
};

export default CardLayout;
