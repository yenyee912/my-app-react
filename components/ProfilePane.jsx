import { getImageUrl } from '../app/utils/utils.js'
import { useState, useRef } from 'react'
import './globals.css' // optional CSS

const human = {
  namePP: 'Katsuko Saruhashi',
  imageId: 'QIrZWGIs.jpg'
}

let color = 'yellow'

let drink = {
  name: 'cola',
  isEdit: false
}

// html component template
function Avatar({ person, size }) {
  return (
    <div>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />

      <p>{person.name}</p>
    </div>

  );
}

function Receipt({ food, isEdit }) {
  isEdit = food.isEdit
  return (
    <div>
      {food.name}

      {
        isEdit ? (<p>gg we are edited </p>) : <h1>owh we are safe ternary</h1>
      }
    </div>
  )
}

function Item({ name, isPacked }) {
  const dialogRef = useRef(null); // ref for the element
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div>

      <li className="item">
        {/* &&: short-circuit rendering */}
        {name || 'Guest'} {isPacked && '✅'}
      </li>
      <button onClick={() => setShowDialog(true)}>Open Dialog</button>

      {showDialog &&
        (
          // stopPropagatiopn: It prevents the inner dialog from closing when you click inside it 
          // — because the outer overlay has a click handler to close the popup.
          // means click on dialog: no action, only click button or overlay will close the dialog
          // if remove means click everywhere will close the dialog
          <div className="overlay" onClick={() => setShowDialog(false)}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <h2>Popup Dialog</h2>
              <p>This is a modal-style popup.</p>
              <button style={{ border: '1px solid green' }} onClick={() => setShowDialog(false)}>Close</button>
            </div>
          </div>
        )
      }
    </div>
  );


}

// only execute for 1 time in N seconds
// only layan first call
function throttle(fn, delay) {
  let lastCall = 0

  return function (...args) {
    const now = Date.now(); // everytime function is called, jote down the timestamp
    if (now - lastCall >= delay) {

      lastCall = now // if ady call, rmb to update when the last call

      fn.apply(this, args) // do function
    }
  }
}

// only execute after N seconds passed
// clearTimeout() cancels that timer if another call comes in too soon.
// This way, only the last scheduled call actually runs. <-- only layan last call
function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    clearTimeout(timer) // if get click, reset timer, too aften
    timer = setTimeOut(() => {
      fn.apply(this, args) // do function
    }, delay)
  }
}

// only this the main component show
export default function Profile() {
  return (


    <div style={{ margin: '10rem' }}>
      <Avatar // like pass params
        size={300}
        person={human}
      />

      <Item
        name={human.name}
        isPacked={true}

      />

      <Receipt food={drink} // can pass one param even there are 2
      />

    </div>
  );
}