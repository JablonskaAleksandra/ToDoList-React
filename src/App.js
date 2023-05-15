import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "Przejść na REACT", done: false },
  { id: 2, content: "Nakarmić Lunkę", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        content={<Form />} />
      <Section
        title="Lista zadań"
        content={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeadercontent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>

  )
};

export default App;