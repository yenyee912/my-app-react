"use client"; // ✅ must be the first line

// App.jsx
import { useState, useEffect, useRef, useCallback, useMemo, useId, useReducer, useContext, createContext } from 'react';

// 🧠 useContext setup
const UserContext = createContext(null);

// 🧠 useReducer setup
function counterReducer(state, action) {
  console.log("from reducer: ", state, action)

  switch (action.type) {
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    default: return state;
  }

}

// 🧠 Custom hook
function useWindowWidth() {
  const [width, setWidth] = useState(0); // set initial width to 0 or null

  useEffect(() => {
    // now this runs only on the client, so window is safe to use
    const handleResize = () => setWidth(window.innerWidth);

    // set width on mount
    handleResize();

    // add event listener
    window.addEventListener('resize', handleResize);

    // clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // run once

  return <p>Window width: {width}px</p>;
}

export default function HooksDemo() {
  // 🧠 useState — for local state (like Vue's `ref()` or `data()`)
  const [count, setCount] = useState(0);

  // 🧠 useEffect — runs when component mounts/updates (like Vue's `watch` or `mounted`)
  useEffect(() => {
    console.log("Component mounted or count changed:", count);
  }, [count]);

  // 🧠 useRef — stores a mutable DOM reference (like Vue's `ref` + `template ref`)
  const inputRef = useRef(null);

  // 🧠 useCallback — memoizes a function (Vue: `watchEffect` + `defineEmits`-like)
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  const handleClick = useCallback(() => {
    alert(`Input value: ${inputRef.current.value}`);
  }, []);

  // 🧠 useMemo — memoizes a calculated value (Vue: `computed`)
  const doubled = useMemo(() => count * 2, [count]); // for every changes of count!

  // 🧠 useId — unique ID (Vue: not really needed, often handled via props or `:key`)
  const id = useId();

  // 🧠 useReducer — advanced state management (like Vue's `pinia/store` or Vuex)
  const [reducedCount, dispatch] = useReducer(counterReducer, 0);

  // 🧠 useContext — global shared state (Vue: `provide/inject`)
  const username = "YenYee";

  // 🧠 Custom hook
  const width = useWindowWidth();

  return (
    <UserContext.Provider value={username}>
      <div className="p-4">
        <h2 id={id}>React Hook Demo element ID: {id.toString()}</h2>

        <div className='border background background--active m-2'>
          <p className='text-green-500 bold'>Set state and computed : useMemo hook</p>
          {/* useState */}
          <p>Count: {count}</p>
          <button className='border' onClick={() => setCount(count + 1)}>+1</button>

          {/* useMemo */}
          <p>Doubled Count (useMemo): {doubled}</p>
        </div>


        {/* useRef + useCallback */}
        <input ref={inputRef} placeholder="Type something..." className="border px-2" />
        <button className="border focus:rings-4" onClick={handleClick}>Show Input (useRef + useCallback)</button>

        {/* useReducer */}
        <p>Reduced Count: {reducedCount}</p>
        <button className="border focus:rings-4" onClick={() => dispatch({ type: 'inc' })}>Reducer +1</button>
        <button className="border focus:rings-4 mx-2" onClick={() => dispatch({ type: 'dec' })}>Reducer -1</button>

        {/* useContext */}
        <GreetUser />

        {/* Custom Hook */}
        {/* <p>Window Width (custom hook): {width}px</p> */}
      </div>
    </UserContext.Provider>
  );
}

// A child component using useContext
function GreetUser() {
  const name = useContext(UserContext);
  return (<p>Hello, {name} (from useContext)</p>);
}

function FetchUser() {
  const [users, setUsers] = useState() // can be empty as well

  //write api fetch
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // setUsers(response)
        return response.json
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()

  }, [])
}