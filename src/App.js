import React from "react";
import Layout from "./componentes/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            source="https://avatars.githubusercontent.com/u/89225210?v=4"
            alt="User Avatar"
          />
          <h1>Maurício</h1>
          <h3>Username:</h3>
          <span>Mujapira</span>
          <div>
            <h4> Followers</h4>
            <span></span>
          </div>
        </div>

        <div> Repositorios </div>
        <div> Starreds </div>
      </Layout>
    </main>
  );
}

export default App;
