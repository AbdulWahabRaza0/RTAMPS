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
  const [selectedOption, setSelectedOption] = useState(0);
  const [searchVal, setSearchVal] = useState("");

  const [data, setData] = useState<any>();
  const [filteredList, setFilteredList] = useState(data ? data : null);

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

  const filterBySearch = () => {
    console.log("This is value or option ", selectedOption);
    // Access input value
    const query = searchVal;
    // Create copy of item list
    var updatedList = [...data];
    // Include all elements which includes the search query

    updatedList = updatedList.filter((item) => {
      if (selectedOption == 2) {
        return (
          item.ref.Accession.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      } else if (selectedOption == 1) {
        return item.ref.GI.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      } else {
        return item.headline.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    });

    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  return mount ? (
    <>
      <Spacer height="70px" />
      <SearchBar
        switchState={switchState}
        setSwitchState={setSwitchState}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        filterBySearch={filterBySearch}
      />
      <Wrapper className="d-flex flex-column justify-content-center align-items-center mt-5">
        <PaginationComp
          data={filteredList ? filteredList : data}
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
