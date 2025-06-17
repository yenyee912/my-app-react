import { getImageUrl } from './utils/utils.js'

const human = {
  name: 'Katsuko Saruhashi',
  imageId: 'QIrZWGIs.jpg'
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

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}


export default function Profile() {
  return (
    // <img
    //   src={getImageUrl(human, 100)}
    //   alt="Alan L. Hart"
    // />

    <div>
      <Avatar // like pass params
        size={300}
        person={human}
      />

      <Item
        name={human.name}
        isPacked={true}

      />

    </div>
  );
}