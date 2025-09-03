import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>AffordMeds Technologies</h1>
        <p className="tagline">Affordable healthcare solutions for everyone</p>
      </header>

      {/* Main Content */}
      <main>
        <h2>Welcome!</h2>
        <p>Click the button below to know more:</p>
        <button onClick={() => setMessage("We care about your health!")}>
          Learn More
        </button>
        {message && <p className="message">{message}</p>}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AffordMeds Technologies | Contact: support@affordmeds.com</p>
      </footer>
    </div>
  );
}

export default App;
