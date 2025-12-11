// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
'use client';
import { useState, useEffect } from "react";

export default function ThemeSelector() {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("");

  // Tema uygulama
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Tema Seçimi</h2>

      {/* Dark Mode Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Karanlık Mod (Dark Mode)
      </label>

      <hr />

      {/* Tema Radio Buttons */}
      <h3>Renk Teması Seç:</h3>

      <label>
        <input
          type="radio"
          value="blue"
          checked={theme === "blue"}
          onChange={handleThemeChange}
        />
        Mavi Tema
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="green"
          checked={theme === "green"}
          onChange={handleThemeChange}
        />
        Yeşil Tema
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="red"
          checked={theme === "red"}
          onChange={handleThemeChange}
        />
        Kırmızı Tema
      </label>

      <hr />

      <p>Seçilen Tema: <strong>{theme || "Henüz Seçilmedi"}</strong></p>
      <p>Karanlık Mod: <strong>{darkMode ? "Açık" : "Kapalı"}</strong></p>

      {/* Örnek Uygulama*/}
      <div style={{
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
        background:
          theme === "blue" ? "#cce0ff" :
          theme === "green" ? "#ccffdd" :
          theme === "red" ? "#ffcccc" :
          "#eee",
        color: darkMode ? "white" : "black"
      }}>
        Bu kutu seçilen temaya göre renk değiştirir.
      </div>
    </div>
  );
}
