export default function DoubleDice() {
    const randidx1 = Math.floor(Math.random() * 3 ) + 1;
    const randidx2 = Math.floor(Math.random() * 3 ) + 1;

    return (
    <div className>
        <h1>Dice Rolling</h1>
      <h1>
        Dice one says {randidx1}
      </h1>
      <h1>
        Dice two says {randidx2}
      </h1>
      <h2>
        {randidx1===randidx2 && <p>You win ! </p> }
      </h2>
    </div>
  )
}
