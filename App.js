import React, { Component } from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import "firebase/firestore";
import "./App.css";
import { messaging } from "./init-fcm";
import axios from "axios";
import MovieList from "./Component/MovieList";
import MoviesProvider from "./Component/MoviesContext";
import Nav from "./Component/Nav";
class App extends Component {
  componentDidMount() {
    this.apiCall();

    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", message =>
      console.log(message)
    );
  }

  apiCall = () => {
    axios
      .get("http://localhost:1234/api")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };
  render() {
    return (
      <MoviesProvider>
        <div className="App">
          <Nav />
          <MovieList />
        </div>
      </MoviesProvider>
    );
  }
}

export default App;
