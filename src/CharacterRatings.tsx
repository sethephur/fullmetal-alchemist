import React from 'react';
import './characterRatings.css';

type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

interface MyComponentProps {
  data: Character[];
}

export const CharacterRatings: React.FC<MyComponentProps> = ({ data }) => {
  const topRatedCharacters = data
    .slice()
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5)
    .map((topRatedCharacter: Character, index: number) => (
      <tr key={index} className={index % 2 === 0 ? 'dark' : 'light'}>
        <td>{`${topRatedCharacter.name}${topRatedCharacter.nickName ? ` "${topRatedCharacter.nickName}"` : ''}`}</td>
        <td>{topRatedCharacter.skillset.join(', ')}</td>
        <td>{topRatedCharacter.votes}</td>
      </tr>
    ));

  return (
    <>
      <section id='character-ratings'>
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>{topRatedCharacters}</tbody>
        </table>
      </section>
    </>
  );
};
