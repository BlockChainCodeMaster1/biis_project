import { Balance } from "@/components/balance";
import { Gas } from "@/components/gas";
import { Blocks } from "@/components/blocks";

export default function AppPage() {
  return (
    <>
      <div className=" w-16 h-full bg-white shadow-md shadow-gray-200">123</div>
      <div className=" w-full flex flex-row">
        <div className=" w-9/12 m-3 mr-0 py-2 px-4 bg-white rounded-lg shadow-lg">
          123
        </div>
        <div className=" w-3/12 m-3 py-2 px-4 bg-white rounded-lg shadow-lg">
          <Balance />
          <Gas />
          <Blocks />
        </div>
      </div>
    </>
  );
}
