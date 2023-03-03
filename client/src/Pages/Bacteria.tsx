import React, { useState, useEffect } from "react";
import { Wrapper, SearchBar } from "../Components/Layout";
import { P } from "../Components/Typography";
import PaginationComp from "../Components/Pagination/PaginationComp";
// import usePagination from "../Components/Pagination";
// import { default as data } from "../utils/MOCK_DATA.json";

import { useMediaQuery } from "react-responsive";
import { Spacer } from "../Components/Spacer";

const Bacteria = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  const [mount, setMount] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [data, setData] = useState<any>();

  const GettingData = async () => {
    const res = await fetch("http://localhost:5000/links_data", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const dataMain = await res.json();

    if (dataMain.message === "done") {
      setData(dataMain.data);

      setMount(true);
    } else {
      setMount(false);
    }
  };

  useEffect(() => {
    async function loadData() {
      await GettingData();
    }
    loadData();
    return () => {};
  }, []);

  return mount ? (
    <>
      <Spacer height="70px" />
      <SearchBar switchState={switchState} setSwitchState={setSwitchState} />
      <Wrapper className="d-flex flex-column justify-content-center align-items-center mt-5">
        <PaginationComp
          data={data}
          pageName="bacteria"
          switchState={switchState}
          setSwitchState={setSwitchState}
        />
      </Wrapper>
    </>
  ) : (
    <>No Data</>
  );
};

export default Bacteria;
