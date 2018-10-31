import React, { Component } from 'react';
import './App.css';

import Header  from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Exercises from './Components/Exercises/Exercises';

import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises: exercises,
    exercise :{
      id:"",
      title: "Welcome!",
      description: "Please select an exercise on the left pane."
    },
    onDelete:""
  }

  getExercisesByCategory = () => {

    const  initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})


    return Object.entries(this.state.exercises.reduce((accumulator, exercise) => {
      const { muscles } = exercise;

      accumulator[muscles] = [...accumulator[muscles], exercise]

      return accumulator;
      }, initExercises)
    )
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExercisDelete  = id => {
    this.setState(({exercises}) => ({
      exercises: exercises.filter( ex => ex.id !== id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {

    const exercises = this.getExercisesByCategory(),
    { category, exercise } = this.state;
    return (
      <div >
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExercisDelete}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />
      </div>
    );
  }
}

export default App;
