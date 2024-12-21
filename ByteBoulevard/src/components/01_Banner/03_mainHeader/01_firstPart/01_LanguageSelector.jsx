import React from 'react'

function LanguageSelector() {
  const languageOptions = ['English', 'Spanish', 'French'];
  return (
    <select className=" rounded text-xs bg-transparent text-black md:bg-white md:p-2 ">
    {languageOptions.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
  )
}

export default LanguageSelector