import { useState } from "react";
import '../src/App.css'
export default function App() {
  const [responseData, setResponseData] = useState([]);
  const [active, setActive] = useState(false);
  const [arrBody, setArrbody] = useState();
  const [apiUrl, setApiUrl] = useState();

  const fetchData = async () => {
    try {
      for (const [index, eachBody] of arrBody.entries()) {
        const startTime = performance.now();

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eachBody)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const endTime = performance.now();
        const timeTaken = endTime - startTime;

        setResponseData(prevData => [
          ...prevData,
          { index, success: true, timeTaken }
        ]);
      }
      setActive(true);
    } catch (error) {
      console.error(error);
      setResponseData(prevData => [
        ...prevData,
        { index: prevData.length, success: false, errorMessage: error.message }
      ]);
    }
  };

  const rowTimeTaken = () => {
    let sum = 0;
    responseData.forEach((data) => {
      sum += data.timeTaken;
    })
    let avg = sum / responseData.length;
    return avg;
  }
  

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const fileContent = await readFileContent(file);
      const jsonData = JSON.parse(fileContent);
      setArrbody(jsonData);
      console.log(jsonData, '===================');
    } catch (error) {
      console.error("Error reading or parsing JSON file:", error);
    }
  };

  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  const predefinedUrls = [
    "http://35.179.99.81:8000/dashboard/query_api/keyQuestions/self",
    // Add more predefined URLs here
  ];
  
  return (
    <>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
      <input
          type="text"
          list="urls"
          placeholder="Enter API URL"
          value={apiUrl}
          onChange={(e)=>setApiUrl(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <datalist id="urls">
          {predefinedUrls.map((url, index) => (
            <option key={index} value={url} />
          ))}
        </datalist>
      <button onClick={fetchData}>Call API</button>
      <div className="parent-container">
        <h2>Response Data</h2>
        <table className="table-container">
          <thead>
            <tr>
              <th>Index</th>
              <th>Success</th>
              <th>Time Taken (ms)</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((row, index) => (
              <tr key={index}>
                <td>{row.index}</td>
                <td>{row.success ? 'Yes' : 'No'}</td>
                <td>{row.timeTaken}</td>
              </tr>
            ))}
          </tbody>
          {active && <tfoot>
            <tr>
              <td colSpan={'3'} style={{ marginLeft: "auto", marginRight: 'auto', "textAlign": "-webkit-center" }}>{"Avg Time : " + rowTimeTaken()}</td>
            </tr>
          </tfoot>}
        </table>
      </div>
    </>
  );
}
