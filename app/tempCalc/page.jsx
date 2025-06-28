"use client"
import { useState } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

// 🔁 Convert functions
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 🔁 Try conversion safely
function tryConvert(value, convertFn) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return '';
  const output = convertFn(input);
  return Math.round(output * 1000) / 1000;
}

function BoilingVerdict({ temp, scale }) {
  if (temp >= 100) {
    return (<p>The water is boiling!!</p>)
  }

  return (<p>Still cooking at {temp} {scaleNames[scale]} </p>)

}

// ✅ Parent component holds the state
export default function SyncedInputs() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  function handleChange(value, currentScale) {
    setTemperature(value);
    setScale(currentScale);
  }

  // Convert based on which input was last edited
  // can even pass function with function
  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <>
      <Input
        label="Celsius Input"
        scale="c"
        value={celsius}
        onChange={(val) => handleChange(val, 'c')} // val == value of this <Input>

      />
      <Input
        label="Fahrenheit Input"
        scale="f"
        value={fahrenheit}
        onChange={(val) => handleChange(val, 'f')}
      />

      {/* the data is already done process and pass to each child, like how you did in vue */}
      <BoilingVerdict scale="c" temp={celsius} />
      <BoilingVerdict scale="f" temp={fahrenheit} />
    </>
  );
}


// ✅ Child Input component
// the outline and border need to use tgt for beauty purpose, tried only apply one, line too thin
function Input({ label, scale, value, onChange }) { // the label, scale dynamic
  return (
    <label style={{ display: 'block', marginBottom: '1rem' }}>
      {label}:
      <input
        type="number"
        className="border border-gray-300 rounded px-2 py-1 focus:border-sky-500 focus:outline focus:outline-sky-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ marginLeft: '0.5rem' }}
      />
      {' '}({scaleNames[scale]})
    </label>
  );
}

// They look similar but:
// border is inside the box → shrinks content slightly
// outline is outside the box → no layout impact
