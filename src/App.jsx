import Players from "./components/Players";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players intialName="Player 1" symbol="X" />
          <Players initialName="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
