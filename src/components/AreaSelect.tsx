import Select from "react-select";

import { AreaOption, areaOptions } from "@/data/areaOptions";

interface AreaSelectProps {
  value?: AreaOption;
  onChange: (value: AreaOption) => void;
}

function AreaSelect({ value, onChange }: AreaSelectProps) {
  return (
    <div>
      <Select
        defaultValue={areaOptions[0]}
        options={areaOptions}
        value={value}
        onChange={(value) => onChange(value as AreaOption)}
        className="m-2"
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary: "#216121",
            primary25: "#d7f1de",
            primary50: "#bcd6c2",
          },
        })}
      />
    </div>
  );
}

export default AreaSelect;
