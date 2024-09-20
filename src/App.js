import { useState } from "react";
import Counter from "./Component/Counter";
import { names } from "./Component/Name";
import "./styles.css";

export default function App() {
  const [Search, setSearch] = useState("");
  const [filterDatas, setfilterData] = useState([]);

  const NameSuggest = (e) => {
    let namesvalue = e.target.value;
    setSearch(namesvalue);
    if (namesvalue) {
      const filterData = names.filter((name) =>
        name.toLowerCase().includes(namesvalue.toLowerCase())
      );
      setfilterData(filterData);
    } else {
      setfilterData([]);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search.."
        value={Search}
        onChange={NameSuggest}
      />
      {filterDatas?.length > 0 && (
        <>
          {filterDatas?.map((suggest, index) => (
            <li key={index}>{suggest}</li>
          ))}
        </>
      )}

      {/* <Counter color="red" />
      <Counter color="blue" />
      <Counter color="yellow" /> */}
    </div>
  );
}
