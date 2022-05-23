
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import withLayout from "hocs/withLayout";

import React from "react";

const ClientLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer/>
    </>
  );
};

export default withLayout(ClientLayout);
