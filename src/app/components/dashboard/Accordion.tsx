import { CircleIcon } from "../icons/CircleIcon";
import EyeIcon from "../icons/EyeIcon";

export default function Accordion() {
  return (
    <>
      <div className="rounded-md bg-gray-600 flex text-white font-bold p-2">
        <EyeIcon />
        <span className="ml-2">Dashboard</span>
      </div>
      <div className="text-white pl-8 mt-2">
        <ul className="space-y-2">
          <li className="flex items-center">
            <CircleIcon size="2" /> <span className="ml-2">CRM</span>
          </li>
          <li className="flex items-center">
            <CircleIcon size="2" /> <span className="ml-2">Ecommerce</span>
          </li>
          <li className="flex items-center">
            <CircleIcon size="2" /> <span className="ml-2">Crypto</span>
          </li>
        </ul>
      </div>
    </>
  );
}
