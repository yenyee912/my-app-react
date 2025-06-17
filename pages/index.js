// export default function Home() {
//   return (
//     <div>
//       <p>Hello React App</p>
//       <h1 class="happy-color">this my first try from scrtach</h1>
//     </div>


//   )
// }
import Profile from './profile'

// data
const person = {
  name: 'Hedy Lamarr',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  pfp: 'https://i.imgur.com/yXOvdOSs.jpg',
  achivement: ['Invent new traffic lights', 'Rehearse a movie scene', 'Improve spectrum technology']
};

export default function Portfolio() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.pfp}
        alt={person.name}
      />

      {/* <p>{person.fav}</p> */}

      <ul>
        {person?.achivement?.map((el) => (
          <li key={el}>{el.toLowerCase()}</li>
        ))}
      </ul>


      <p>She did {person?.achivement?.map(item => item.split(' ')).join(' | ')}</p>
      <section>
        <Profile></Profile>
      </section>

    </div>
  );
}
