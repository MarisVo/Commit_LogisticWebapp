import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputMobile = () => {
  return (
    <div>
      <div className="px-[16px] w-[100%] flex items-center  lg:hidden mt-6">
        <input
          className="border p-[8px] w-[100%]"
          type="text"
          name=""
          id=""
          placeholder="Nhập vị trí ứng tuyển"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="pl-2 border p-[12px] "
        />
      </div>
    </div>
  );
};

export default InputMobile;
