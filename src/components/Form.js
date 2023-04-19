import React from "react";

const Form = ({ updateMainCat }) => {
  const [value, setValue] = React.useState("");
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(e) {
    const userValue = e.target.value;

    if (includesHangul(userValue)) {
      setErrorMessage("한글은 입력 x");
    }
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e) {
    setErrorMessage("");
    e.preventDefault();
    if (value === "") {
      setErrorMessage("빈 공백은 입력 x");
      return;
    }
    updateMainCat(value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={value}
        placeholder="영어 대사를 입력해주세요"
        onChange={handleInputChange}
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </form>
  );
};

export default Form;
