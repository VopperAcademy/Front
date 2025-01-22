import Flecha from "./Flecha";

export type Option = {
  label: string;
  value: string;
};

export type dropdownType = {
  options: Option[];
};

export default function Dropdown({ options }: dropdownType) {
  return (
    <form action="#">
      <div className="relative flex items-center">
        <select
          name="cursos"
          aria-label="Filtrar cursos"
          className="appearance-none w-[92px] h-[27px] pl-3 border bg-[#1E1F23] rounded-md"
        >
          <option value="selecciona">Curso</option>
          {options?.map(function (option, index) {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <div className="absolute right-3 pointer-events-none">
          <Flecha href="#" colorHex="#FFFFFF" direction="down" size="small" />
        </div>
      </div>
    </form>
  );
}
