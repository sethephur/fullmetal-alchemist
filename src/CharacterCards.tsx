import React from 'react';
import { Component } from 'react';
import './characterCards.css';

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

export class CharacterCards extends Component<MyComponentProps> {
  render() {
    const { data } = this.props;
    const characters = data.map((character: Character) => (
      <div className='card' key={character.name}>
        <div className='card-titles'>
          <h3>{character.name}</h3>
          <h4>{character.nickName}</h4>
        </div>
        <img src={character.imageUrl} alt='' />
        <p>{character.background}</p>
      </div>
    ));

    return (
      <>
        <section id='character-cards'>{characters}</section>
      </>
    );
  }
}
