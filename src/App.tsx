import { useState } from "react";

function App() {
  const [color, setColor] = useState("#6F6F6F");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Color Picker</h1>
        <div
          className="w-[300px] h-[300px] flex justify-center items-center rounded-2xl border-2 border-blue-500 mb-8"
          style={{ backgroundColor: color }}
        >
          <p className="text-3xl text-center ">{`Selected Color ${color}`}</p>
        </div>
      </div>
      <label htmlFor="colorPicker" className="text-lg">
        Select a Color:
      </label>
      <input
        type="color"
        name="color"
        id="colorPicker"
        className="w-[75px] h-[40px] p-0.5 border-2"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
