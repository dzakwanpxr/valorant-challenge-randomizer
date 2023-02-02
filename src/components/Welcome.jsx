function Welcome(props) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen text-white">
      <button className="text-5xl" onClick={props.handleClick}>
        Randomize!
      </button>
    </div>
  );
}

export default Welcome;
