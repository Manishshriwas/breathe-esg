import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const [message, setMessage] = useState("");

  const handleUpload = async () => {

    if (!file) {

      alert("Please select a file");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload/",
        formData
      );

      setMessage(response.data.message);

    } catch (error) {

      console.log(error);

      setMessage("Upload failed");
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Upload ESG CSV
          </h1>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Dashboard
          </button>

        </div>

        {/* File Input */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded-lg w-full"
        />

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="bg-black text-white px-5 py-2 rounded-lg mt-4 hover:opacity-80"
        >
          Upload CSV
        </button>

        {/* Success Message */}
        <p className="mt-4 text-green-600">
          {message}
        </p>

      </div>

    </div>
  );
}

export default Upload;