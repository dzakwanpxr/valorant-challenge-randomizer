function Rules() {
  return (
    <div className="rules flex justify-center items-center text-white h-screen">
      <div className="p-20 text-left max-w">
        <h1 className="text-4xl text-center p-5">Rules</h1>
        <ul>
          <li className="text-xl pb-3">
            1. You need to reach the rank you got with only using the agent and
            the weapon you got.
          </li>
          <li className="text-xl pb-3">
            2. If the agent is not available, you need to reroll.
          </li>
          <li className="text-xl pb-3">
            3. If the rank is lower than your current rank, you need to throw
            the game and derank to the rank you roll.
          </li>
          <li className="text-xl pb-3">
            4. If you get the same rank with your current rank, you need to
            reroll.
          </li>
          <li className="text-xl pb-3">
            5. If the weapon is expensive, you need to use the classic and buy
            nothing untill you can buy the weapon.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
