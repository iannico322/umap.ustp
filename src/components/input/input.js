import React, { useState } from "react";

const Input = (props) => {
  const [show, setshow] = useState(false);

  if (props.type == "password") {
    return (
      <div className="w-full " >
        <p className=" text-base text-[#323232] mb-1 font-semibold">{props.label}</p>

        <div className="relative flex items-center ">
          <span
            className="absolute right-0 pr-4 cursor-pointer material-symbols-outlined"
            onClick={() => {
              setshow(!show);
            }}
          >
            {show ? "visibility" : "visibility_off"}
          </span>
          <input
          
            onChange={props.onChange}
            value={props.value}
            type={show ? "text" : "password"}
            required
            placeholder={props.label}
            className=" p-2 pl-4 text-sm  outline-none focus:border-yellow   border-[1px] border-[#9494945a] rounded-md w-full box-border "
          />
        </div>

        <p className="pl-1 mt-1 text-xs " style={{color:props.warning=="Great Password!" || props.warning=="Password Matched,Great!" ?"green":"red"}} >{props.warning}</p>
      </div>
    );
  }

  return (
    <div className="w-full ">
      <p className=" text-base text-[#323232] mb-1 font-semibold">{props.label}</p>
      <input
        onChange={props.onChange}
       value={props.value}
        type={props.type}
        placeholder={props.label}
        required
        className=" p-2 pl-4 text-sm  outline-none focus:border-yellow   border-[1px] border-[#9494945a] rounded-md w-full box-border "
      />
      <p className="pl-1 mt-1 text-xs text-red-500 ">{props.warning}</p>
    </div>
  );
};

export default Input;
