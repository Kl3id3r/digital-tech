// @Vendors
import React from "react";
import { saveAs } from "file-saver";

// @Styles
import "./App.css";

// @Components
import Button from "./components/button/button";

function App() {
  // Palabra de busqueda
  const [keyword, setKeyword] = React.useState("");

  const favorites = [
    { favorite: 1, name: "Some 1" },
    { favorite: 2, name: "Some 2" },
    { favorite: 3, name: "Some 3" },
    { favorite: 4, name: "Some 4" },
  ];

  /**
   * Exportar datos favoritos a archivo "json"
   * @function downloadFavorites
   * @param dataJson: {{favorite: number; name: string}[]}
   */
  const downloadFavorites =
    (dataJson: { favorite: number; name: string }[]) => () => {
      const fileToSave = new Blob([JSON.stringify(dataJson)], {
        type: "application/json",
      });
      saveAs(fileToSave, `FavoritesPosts_${new Date().getTime()}.json`);
    };

  /**
   * Buscar posts
   * @function handleSearch
   * @param e: {React.ChangeEvent}
   */
  const handleSearch = (e: React.ChangeEvent) => {
    const { target } = e;
    const value = (target as HTMLInputElement).value;
    setKeyword(value);
  };

  return (
    <div>
      <h2 className="text-black text-bold">Digital Tech</h2>
      <Button onClick={downloadFavorites(favorites)}>Click</Button>

      <hr />

      {/* Búsqueda */}
      <div>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Buscar..."
          value={keyword}
        />
      </div>
    </div>
  );
}

export default App;
