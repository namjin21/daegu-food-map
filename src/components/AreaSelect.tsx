import { useState } from "react";

function AreaSelect() {
  const [filter, setFilter] = useState("");

  function handleChangeFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <select
        name="filterArea"
        id=""
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="수성구">수성구</option>
        <option value="중구">중구</option>
      </select>
    </div>
  );
}

export default AreaSelect;
