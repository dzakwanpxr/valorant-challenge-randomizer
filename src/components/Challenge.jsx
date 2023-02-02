function Challenge(props) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg text-white 2xl:px-20">
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex flex-col gap-10 justify-center p-12 border-4 rounded-xl 2xl:flex-row 2xl:gap-36">
          <div className="flex flex-col gap-5 items-center justify-end mt-auto">
            <img src={props.agent.icon} alt="" className="w-36 h-36" />
            <h2 className="">{props.agent.name.toUpperCase()}</h2>
          </div>
          <div className="flex flex-col gap-5 items-center justify-end">
            <img src={props.rank.icon} alt="" className="w-36 h-36" />
            <h2 className="">{props.rank.name}</h2>
          </div>
          <div className="flex flex-col gap-5 flex-wrap items-center justify-end">
            <img src={props.weapon.icon} alt="" className="w-48" />
            <h2 className="">{props.weapon.name.toUpperCase()}</h2>
          </div>
        </div>
        <h1 className="text-3xl max-w-3xl text-center">
          YOU NEED TO REACH{" "}
          <span className="font-bold ">{props.rank.name}</span> WITH ONLY USING{" "}
          <span className="font-bold "> {props.agent.name.toUpperCase()} </span>{" "}
          AND{" "}
          <span className="font-bold ">{props.weapon.name.toUpperCase()}</span>
        </h1>
        <button onClick={props.handleClick} className="text-center text-3xl">
          Reroll!
        </button>
      </div>
    </div>
  );
}

export default Challenge;
