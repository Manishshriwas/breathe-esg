import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
    const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/records/"
      );

      setRecords(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const approveRecord = async (id) => {

    try {

      await axios.patch(
        `http://127.0.0.1:8000/api/approve/${id}/`
      );

      fetchRecords();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchRecords();

  }, []);

  const totalRecords = records.length;

  const approvedRecords = records.filter(
    (record) => record.status === "APPROVED"
  ).length;

  const suspiciousRecords = records.filter(
    (record) => record.status === "SUSPICIOUS"
  ).length;

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        ESG Dashboard
      </h1>
      <button
    onClick={() => navigate("/upload")}
    className="bg-black text-white px-5 py-3 rounded-xl hover:opacity-80"
  >
    Upload CSV
  </button>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-sm">
            Total Records
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalRecords}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-sm">
            Approved
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {approvedRecords}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-500 text-sm">
            Suspicious
          </h3>

          <p className="text-3xl font-bold text-red-600 mt-2">
            {suspiciousRecords}
          </p>
        </div>

      </div>

      {/* Table */}
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
                  {record.status}
                </td>

                <td className="p-3">

                  {record.status !== "APPROVED" && (

                    <button
                      onClick={() => approveRecord(record.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
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