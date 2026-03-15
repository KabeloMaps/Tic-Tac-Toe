import Players from "./components/Players";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Player 1" symbol="X" />
          <Players name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
