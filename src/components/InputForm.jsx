import { useState } from "react";

function InputForm() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height_ft, setHeightFt] = useState("");
  const [height_in, setHeightIn] = useState("");

  return (
    <>
      <form className="flex flex-col">
        <label for="age">Age:</label>
        <div>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>

        <div>
          <label for="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value={gender}
            onClick={(e) => setGender(e.target.value)}
          ></input>
          <label for="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value={gender}
            onClick={(e) => setGender(e.target.value)}
          ></input>
        </div>

        <div>
          <label for="height">Height:</label>
          <input
            type="number"
            id="height-ft"
            name="height-ft"
            placeholder="feet"
            value={height_ft}
            onChange={(e) => setHeightFt(e.target.value)}
          ></input>
          <input
            type="number"
            id="height-in"
            name="height-in"
            placeholder="inches"
            value={height_in}
            onChange={(e) => setHeightIn(e.target.value)}
          ></input>
        </div>
      </form>
    </>
  );
}

export default InputForm;
