import './App.css';
import { XFollowCard } from './XFollowCard';

const users = [
  { isFollowing: true, userName: 'MaJazminFeliu', name: 'Jazmin Feliu' },
  { isFollowing: true, userName: 'gaunas', name: 'Sebastian David Gauna' },
  { isFollowing: false, userName: 'johndoe', name: 'John Doe' },
  { isFollowing: false, userName: 'janedoe', name: 'Jane Doe' }
];

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ isFollowing, userName, name }) => {          
          return (
            <XFollowCard 
              key={userName} 
              initialIsFollowing={isFollowing} 
              userName={userName}>
              {name}
            </XFollowCard>
          )
        })
      }

    </section>

  )
}