import React from 'react'
import { Circles } from "react-loader-spinner";

function ButtonLoader() {
  return (
    <>
      <Circles
        height="50"
        width="50"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}

export default ButtonLoader
