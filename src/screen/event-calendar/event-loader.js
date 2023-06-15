import { Skeleton } from "@mui/material";
const EventLoader = () => {
  return (
    <>
      <div className="flex items-start w-full h-full ">
        <div className=" flex flex-col gap-2 items-center  pt-2 w-[400px] h-[400px] rounded-md bg-[#ffffff20] border-[1px] border-[#8080800b]">
          <div className="flex items-center justify-center w-full gap-3 ">
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"80%"}
              height={60}
            />
          </div>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"93%"}
            height={"80%"}
          />
        </div>
      </div>
    </>
  );
};

export default EventLoader;
