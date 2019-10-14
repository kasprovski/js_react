import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Osoby from './Osoby/Osoby';

class App extends Component {

  state= {
    osoby: [
      {name: "Kasper z dzisiaj", age: "28", job: "w tym momencie pisze jakis kod" },
      {name: "Kasia z dzisiaj", age: "28", job: "teraz jestem w pracy" }
    ],
    ludzie: [
      {imie: "nieokreślony"}
    ]
  }

  switchNameHandler = () => {
    console.log("zostało klikniete")
    this.setState({
      osoby: [
        {name: "Kasper z przyszłości", age: "41", job: "na co dzień ciesze się życiem" },
        {name: "Kasia z przyszłości", age: "41", job: "na co dzień również z Kasprem to robie" }
      ]
    })
  }

  switchNameHandler2 = () => {
    console.log("zostało klikniete")
    this.setState({
      osoby: [
        {name: "Kasper z przeszłości", age: "18", job: "na co dzień chodzę do szkoły" },
        {name: "Kasia z przeszłości", age: "18", job: "na co dzień jeżdżę  na desce" }
      ]
    })
  }

  switchNameHandler3 = () => {
    console.log("zostało klikniete")
    this.setState({
      osoby: [
        {name: "Kasper z dzisiaj", age: "28", job: "w tym momencie pisze jakis kod" },
      {name: "Kasia z dzisiaj", age: "28", job: "teraz jestem w pracy" }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      ludzie: [
        {imie: event.target.value, age: "41", job: "na co dzień ciesze się życiem" },
        {name: "Kasia z przyszłości", age: "41", job: "na co dzień również z Kasprem to robie" }
      ]
    })
  }

  
  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: " 2px solid green",
      padding: "8px",
      borderRadius: "5%",
      cursor: "pointer",
      margin: "4px",
    };

    return ( 
      <div className="App">

       <div>
         <h3>przykład 1, w którym kod jest zapisany na sztywno, jest to przypisane w nazwie i w tym miejscu dodajemy propsy bezpośrednio </h3>
         <Person name="Kasper" age="28" ><p>w tym momencie koduję</p></Person>
         <Person name="Kasia" age="28" >
             <div className="KasiaStyle">
               <p>w tym momencie jestem w pracy</p>
               <p>i zastanawiam się co robi Kasper</p>
             </div> 
           </Person>
       </div>

            <hr></hr>


      <div>
        <h3>przykład 2, w którym wykorzystujemy state, który może zostać zmieniony, tutaj propsy dodawane są przez state</h3>
        <Person 
          name={this.state.osoby[0].name} 
          age={this.state.osoby[0].age} 
          job={this.state.osoby[0].job}
          click={this.switchNameHandler} /> 
          {/* ten click pozwoli nam skorzystać w pliku Person.js z przejscia bezposredniego do tej funkcji wyzej w tym pliku stworzonej */}
        <Person 
          name={this.state.osoby[1].name} 
          age={this.state.osoby[1].age} 
          job={this.state.osoby[1].job}
          click={this.switchNameHandler2} /> 
        <h5>guzik zmienia props, za wykorzystaniem funkcji switchNameHandler ktora jest napisana wyżej, w pierwszej lini jest dodana tez mozliwosc zmiany tych wartosci, przez dodanie kolejenj wartosci, ktora przenosi do clicka</h5>
        <div className="Guziki">
          <button style={style} onClick={this.switchNameHandler2}>przeszłość(mozna tez nacisnac na linie z Kasprem)</button>
          <button style={style} onClick={this.switchNameHandler3}>teraźniejszość</button>
          <button style={style} onClick={this.switchNameHandler}>przyszłość(mozna tez nacisnac na linie z Kasią)</button>
        </div>
      </div>

          <hr></hr>

      <div>
         <h3>przykład 3, dodanie kolejej listy, która korzysta z innego araya i ma swoje włąściwości, imię można zmienić na bieżąco,stylowanie inline</h3>
         <Osoby className="osoba"
        name={this.state.ludzie[0].imie} 
        changed={this.nameChangeHandler} />
       </div>

      </div>
    );
  }
}

export default App;
