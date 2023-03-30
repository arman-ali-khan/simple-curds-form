import React, { useContext, useEffect, useState } from "react";
import AddModal from "./components/AddModal";
import TableRow from "./components/TableRow";
import axios from "axios";
import { UpdateProvider } from "./context/ContextProvider";
import Loading from "./components/Loading";

const App = () => {
  // loading
  const [loading,setLoading] = useState(true)
  // Context
  const {update} = useContext(UpdateProvider)
  // add new data modal show and hide 
  const [showModal, setShowModal] = useState(false);
  // selected row data 
  const [selectedRows, setSelectedRows] = useState([]);

  // send data store
  const [sendData,setSendData] = useState([])

  // send data to email by clicking send button
  const handleGetSelectedRows = () => {
        const selectedData = tableData.filter((row) => selectedRows.includes(row.id));
        selectedData.map(row=>{
          const data = 
          ` ID:${row.id} - Name: ${row.name} -  Email: ${row.email} - Hobbies: ${row.hobbies} `
            setSendData([...sendData,data])
        })
      };

      // table data
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/tableData`)
      .then((res) => {
        setTableData(res.data)
        setLoading(false)
      });
  }, [update]);

  return (
    <section className="antialiased bg-gray-100  text-gray-600 h-screen px-4">
      <div className="py-12 h-full">
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
          {
                    loading ? <div className="flex flex-col gap-2">
                    <div className="bg-gray-200 py-3 rounded-md justify-center items-center h-4 w-auto flex px-3 gap-3">
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                    </div>
                    <div className="bg-gray-200 py-3 rounded-md justify-center items-center h-4 w-auto flex px-3 gap-3 animate-pulse">
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                      <div className="h-4 w-full animate-pulse rounded-2xl bg-gray-300"></div>
                    </div>
                    </div>
                    :
                      <table className="table-auto  w-full ">
                <thead className="text-xs font-semibold  uppercase text-gray-400 bg-gray-50">
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
                  
                    {tableData.map((rowData) => (
                      <TableRow
                        key={rowData._id}
                        rowData={rowData}
                        selectedRows={selectedRows}
                        setSelectedRows={setSelectedRows}
                        handleGetSelectedRows={handleGetSelectedRows}
                      />
                    ))}
                  </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <a onClick={handleGetSelectedRows} href={`mailto:info@redpositive.in?body=${sendData}`} className="px-4 py-2 disabled:bg-gray-200 rounded-sm bg-blue-500 hover:bg-blue-600 text-white">
                        Send
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
                  }
            
          </div>
        </div>
      </div>
      <AddModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default App;
