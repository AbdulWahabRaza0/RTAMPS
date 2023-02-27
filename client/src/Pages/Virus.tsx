import React, { useState, useEffect } from "react";
import { Spacer } from "../Components/Spacer";
import { SearchBar, Wrapper } from "../Components/Layout";
import PaginationComp from "../Components/Pagination/PaginationComp";

const Virus = () => {
  const [mount, setMount] = useState(false);
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
      <Spacer height="30px" />
      <SearchBar />
      <Wrapper
        className="d-flex flex-column justify-content-center align-items-center mt-5"
        width="100%"
      >
        <PaginationComp data={data} pageName="bacteria" />
      </Wrapper>
    </>
  ) : (
    <>No Data</>
  );
};

export default Virus;
