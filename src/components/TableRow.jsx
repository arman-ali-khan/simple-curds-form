import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const TableRow = ({ info, handleCheckbox }) => {
  const [showModal, setShowModal] = useState(false);
  const [updateModal,setUpdateModal] = useState(false)
  const { id, name, email, hobbies, phone } = info;

  return (
  <>
    <tr name="trow">
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex justify-center items-center">
            <input
              type="checkbox"
              onClick={(e) => handleCheckbox(e)}
              name=""
              value={id}
              className="h-4 w-4 cursor-pointer appearance-none border-[1px] border-gray-400 shadow-lg rounded-md checkbox"
            />
          </div>
        </div>
      </td>
      {/* ID */}
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-left font-medium text-green-500">{id}</div>
        </div>
      </td>
      {/* NAME */}
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-800">{name}</div>
        </div>
      </td>
      {/* PHONE NUMBER */}
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{phone}</div>
      </td>
      {/* EMAIL */}
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{email}</div>
      </td>
      {/* HOBBIES */}
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{hobbies}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">
          <button onClick={()=>setUpdateModal(!updateModal)} className="text-sm bg-blue-100 text-blue-600 px-4 py-1 rounded hover:bg-blue-200 transition-all duration-150">
            Update
          </button>
          <button onClick={()=>setShowModal(!showModal)} className="text-sm bg-rose-100 text-rose-600 px-4 py-1 rounded hover:bg-rose-200 transition-all duration-150">
            Delete
          </button>
        </div>
      </td>
    </tr>
      <DeleteModal info={info} showModal={showModal} setShowModal={setShowModal} />
      <UpdateModal info={info} updateModal={updateModal} setUpdateModal={setUpdateModal} />
      </>
  );
};

export default TableRow;
