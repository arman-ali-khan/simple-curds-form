import React, { useContext, useEffect, useState } from "react";
import AddModal from "./components/AddModal";
import TableRow from "./components/TableRow";
import axios from "axios";
import { UpdateProvider } from "./context/ContextProvider";

const App = () => {
  const {update} = useContext(UpdateProvider)
  const [showModal, setShowModal] = useState(false);
  const [getRow, setGetRow] = useState();

  const [selectedRows, setSelectedRows] = useState();
  const handleCheckbox = (event) => {
    let selected = [];
    selected.push(...selected, event.target.value);
    if (event.target.checked) {
      console.log(selected);
    }
  };

  const [tableData, setTableData] = useState([]);
  console.log(tableData);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/tableData`)
      .then((res) => setTableData(res.data));
  }, [update]);

  return (
    <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center h-full">
        {/* Table  */}
        <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
          <header className="px-5 py-4 border-b border-gray-100 flex justify-between">
            <h2 className="font-semibold text-gray-800">Simple CURDS Table</h2>
            {/*  */}
            <button
              onClick={() => setShowModal(!showModal)}
              className="bg-teal-100 text-teal-600 px-3 py-1 rounded"
            >
              Add
            </button>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left"></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">ID</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Phone Number
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Hobbies</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Update/delete
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {tableData.map((info, index) => (
                    <TableRow
                      key={info._id}
                      info={info}
                      handleCheckbox={handleCheckbox}
                    />
                  ))}
                </tbody>
                {/* <tfoot>
                  <tr>
                    <td>
                      {" "}
                      <a  className="px-4 py-2 rounded-sm bg-blue-500 hover:bg-blue-600 text-white">
                        Send
                      </a>
                    </td>
                  </tr>
                </tfoot> */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default App;
