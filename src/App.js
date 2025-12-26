import Header from "./components/Header";
import CharacterName from "./components/CharacterName";
import ClassSelector from "./components/ClassSelector";
import StatsEditor from "./components/StatsEditor";
import CharacterPreview from "./components/CharacterPreview";

function App() {

  const styles = {
    app: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Arial, sans-serif"
    },

    container: {
      width: "800px",
      background: "rgba(255,255,255,0.1)",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
    },

    section: {
      background: "rgba(255,255,255,0.15)",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "15px"
    },

    preview: {
      border: "2px solid #ffcc70",
      padding: "20px",
      borderRadius: "15px",
      textAlign: "center"
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Header />
        </div>

        <div style={styles.section}>
          <CharacterName />
        </div>

        <div style={styles.section}>
          <ClassSelector />
        </div>

        <div style={styles.section}>
          <StatsEditor />
        </div>

        <div style={styles.preview}>
          <CharacterPreview  />
        </div>

      </div>
    </div>
  );
}

export default App;
