import "./App.css";
import GitHubButton from "./component/GitHubButton/GitHubButton";

function App() {
  console.log(this, "this");

  return (
    <>
      <div>
        <GitHubButton
          variant="primary"
          size="large"
          bgColor="#4CAF50"
          textColor="#ffffff"
          onClick={() => alert("Button clicked!")}
        >
          Hex Color Example
        </GitHubButton>
        <br />
        <br />
        {/* Using an rgb color */}
        <GitHubButton
          variant="secondary"
          size="medium"
          bgColor="rgb(255, 99, 71)"
          textColor="rgb(255, 255, 255)"
        >
          RGB Color Example
        </GitHubButton>

        <br />
        <br />
        {/* Using an hsl color */}
        <GitHubButton
          variant="danger"
          size="small"
          bgColor="hsl(120, 100%, 50%)"
          textColor="hsl(0, 0%, 100%)"
        >
          HSL Color Example
        </GitHubButton>

        <br />
        <br />
        {/* Using a named color */}
        <GitHubButton variant="default" size="large" textColor="black">
          Named Color Example
        </GitHubButton>
        <br />
        <br />
        <GitHubButton>HI MALAIKA</GitHubButton>
        <br />
        <br />
        <GitHubButton border="none">HI MALAIKA</GitHubButton>
      </div>
    </>
  );
}

export default App;
