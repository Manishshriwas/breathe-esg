import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

  const navigate = useNavigate();

  const [records, setRecords] = useState([]);

  // Fetch Records
  const fetchRecords = async () => {

    try {

      const response = await axios.get(
        "https://breathe-esg-yfrx.onrender.com/api/records/"
      );

      setRecords(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Approve Record
  const approveRecord = async (id) => {

    try {

      await axios.patch(
        `https://breathe-esg-yfrx.onrender.com/api/approve/${id}/`
      );

      fetchRecords();

    } catch (error) {

      console.log(error);
    }
  };

  // Load data on page load
  useEffect(() => {

    fetchRecords();

  }, []);

  // Dashboard Stats
  const totalRecords = records.length;

  const approvedRecords = records.filter(
    (record) => record.status === "APPROVED"
  ).length;

  const suspiciousRecords = records.filter(
    (record) => record.status === "SUSPICIOUS"
  ).length;

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">
          ESG Dashboard
        </h1>

        <button
          onClick={() => navigate("/upload")}
          className="bg-black text-white px-5 py-3 rounded-xl hover:opacity-80"
        >
          Upload CSV
        </button>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        {/* Total */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h3 className="text-gray-500 text-sm">
            Total Records
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalRecords}
          </p>

        </div>

        {/* Approved */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h3 className="text-gray-500 text-sm">
            Approved
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {approvedRecords}
          </p>

        </div>

        {/* Suspicious */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h3 className="text-gray-500 text-sm">
            Suspicious
          </h3>

          <p className="text-3xl font-bold text-red-600 mt-2">
            {suspiciousRecords}
          </p>

        </div>

      </div>

      {/* Records Table */}
      <div className="bg-white p-6 rounded-2xl shadow-md overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-200 text-left">

              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>

            </tr>

          </thead>

          <tbody>

            {records.map((record) => (

              <tr
                key={record.id}
                className={`border-b ${
                  record.status === "SUSPICIOUS"
                    ? "bg-red-100"
                    : "bg-white"
                }`}
              >

                <td className="p-3">
                  {record.category}
                </td>

                <td className="p-3">
                  {record.description}
                </td>

                <td className="p-3">
                  {record.amount}
                </td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      record.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : record.status === "SUSPICIOUS"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {record.status}
                  </span>

                </td>

                <td className="p-3">

                  {record.status !== "APPROVED" && (

                    <button
                      onClick={() => approveRecord(record.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Approve
                    </button>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;