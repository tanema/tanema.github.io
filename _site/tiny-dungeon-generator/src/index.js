import React, { useState } from 'react';
import { render } from 'react-dom';
import { newCharacter, characterString } from './data/character';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Tile, Table } from 'react-bulma-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const App = ({}) => {
  const [character, setCharacter] = useState(newCharacter());
  const [copied, setCopied] = useState(false);

  const {heritage, weapon, traits, attrs} = character;

  return (<div>
    <Tile>
      <Tile kind="parent" vertical>
        <Tile className="is-primary" kind="child" notification>
          <p className="title">
            Character Generator
          </p>
          <p className="subtitle">
            <Button onClick={() => {
              setCharacter(newCharacter())
              setCopied(false)
            }}>
              Generate a new Character
            </Button>
            <CopyToClipboard text={characterString(character)} onCopy={() => setCopied(true)}>
              <Button>{copied ? "Copied" : "Copy Character"}</Button>
            </CopyToClipboard>
          </p>
          <p className="subtitle">
            You are a {attrs.adjective} {heritage.name} from {attrs.homeland} that {attrs.backstory} and grew up learning to be a {attrs.trade}
          </p>
        </Tile>
        <Tile kind="child" notification>
          <p className="title">Traits</p>
          <Table striped>
            <tbody>
              {traits.map((trait) => {
                const parts = trait.split(": ");
                return (<tr key={trait}>
                  <td><b>{parts[0]}</b></td><td>{parts[1]}</td>
                </tr>)
              })}
            </tbody>
          </Table>
        </Tile>
      </Tile>
      <Tile kind="parent" vertical>
        <Tile kind="child" notification>
          <p className="title">Character</p>
          <Table striped>
            <tbody>
              <tr><td><b>Belief</b></td><td>{attrs.belief}</td></tr>
              <tr><td><b>Homeland</b></td><td>{attrs.homeland}</td></tr>
              <tr><td><b>Trade</b></td><td>{attrs.trade}</td></tr>
            </tbody>
          </Table>
        </Tile>

        <Tile kind="child" notification>
          <p className="title">Heritage ({heritage.name})</p>
          <Table striped>
            <tbody>
              <tr><td><b>HP</b></td><td>{heritage.hp}</td></tr>
              <tr><td><b>Heritage Trait</b></td><td>{heritage.trait}</td></tr>
              <tr><td><b>Mastery</b></td><td>{heritage.mastered}</td></tr>
            </tbody>
          </Table>
        </Tile>
        <Tile kind="child" notification>
          <p className="title">Weapons Mastery ({weapon.type})</p>
          <ul className="list">
            {weapon.mastered.map((weapon) => (<li key={weapon} className="list-item">
              {weapon}
            </li>))}
          </ul>
        </Tile>
      </Tile>
    </Tile>

  </div>)
}

render(
  <App />,
  document.getElementById('root')
);
