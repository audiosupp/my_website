import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({hi, messages}) {

  const randomHi = () => hi[(Math.floor(Math.random() * hi.length))];
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(hi[0]);
  const [thx, setThx] = useState(messages[0]);

  return (
    <div class="container">
      <h3 class="h3-index">{greeting}! {thx}!</h3>
        {/* <a href="#a" class="outline" role="button" onClick={setGreeting(randomHi())}> New Hi!</a> */}
      <a href="#a" class="outline outline-index" role="button" onClick={() => {setThx(randomMessage()); setGreeting(randomHi())}}> New Greeting</a>
    </div>
  );
}

