# A collection of React interview questions

## What we will cover?

* Questions that I could be asked as a front-end developer about React
* A few examples of answers and my thoughts on these answers
* A junior code test
* A senior code test

## Notes

This is a personal experience of mine and the goal is not to try to figure out how "good" the candidates is with code but rather how likely they are to be able to get productive in a short time. 

## Question list

* Why does React need a root element?
* What is the difference between props and state?
* What is context?
* What are prop types and what are the benefits / drawbacks of them?
* Which life cycle event is the most common from your perspective?
* When do you use a pure component and when do you use a class?
* Explain how React rendering works in your own terms
* What is Redux?
* Explain how Redux works in your own terms.
* When do you use Redux?
* What is a container component?
* What is a view component?
* What components make for a good container candidates?

## Why does React need a root elements?

Red flag: I don't know

Decent answer: React needs a DOM element to hook into

Good answer: Since React is all JavaScript it needs an element where it can render out its own DOM tree. 

## What is difference between props and state?

Red flag: I don't know

Decent answer: State is where you can store stuff that is internal. Props is where you can store stuff that is going to the next components.

Good answer: State is a way for a component to store an internal state and it is perfect for when we need to store a field value or perhaps toggle a modal. On the other hand, props is what is being passed to the component from the parent element, this is how we most commonly work with data in React. 

## What is context?

Red flag: I don't know

Decent answer: Context is like a global props

Good answer: Context is a globally available prop that should only be used on occations when we need data that is going to be everywhere in the application, for example when we need to translate text or something like that.

## What are prop types, and what are the benefits/ drawbacks of them?

Red flag: I don't know

Decent answer: Prop types is a way for us to know what type a component is expecting. 

Good answer: Prop type is a way for us to know what type a component is expecting. They often become legacy documentation and people forget to keep them updated or they put ".required" on the wrong things and often I see people use '.object' instead of '.shapeOf'.

## What life cycle event is the most common from your perspective?

Red flag: I don't know/ I never use them

Decent answer: "componentWillMount" and "componentDidMount"

Good answer: "componentWillMount" and "componentDidMount". "componentWillReceiveProps" it is often that I find I need to do something when my component is getting a new state. 

## When do you use a pure component and when do you use a class?

Red flag: I only use pure components/ class

Decent answer: I use pure components when I want to optimize for performance.

Good answer: I favour using pure components cause there is often no reason to use a class if I'm not storing a state or using a life cycle event.  

## Explain how the React rendering works in your own terms.

Red flag: I don't know

Decent answer: React listens for DOM updates and rerenders the DOM tree on every change.

Good answer: React listens for DOM updates and rerenders the DOM tree on every change. However, React can do this very quickly and because it checks if there has been a change to the component and only rerenders it if there is. 

## What is Redux?

Red flag: I don't know

Decent answer: Redux is popular tool for storing state in React

Good answer: Redux is popular tool for storing state in React. It is build on the sub/pub pattern or Flux and the idea is that we store our state in a big object and use actions to change the states. 

## Explain how Redux works in your own terms.

Red flag: I don't know

Decent/ Good answer: You declare a reducer that takes in an action and a state, when you dispath an action, the state gets updated and React rerenders the DOM with the state change. 

## When do you use Redux?

Red flag: I don't known

Decent answer: Most projects as it's very common that you need some global state that is shared among different components.

Good answer: Most projects as it's very common that you need some global state that is shared among different components but I only wire up components need access to the global state. Only in applications that need to share to global state, it doesn't make sense to use Redux if our applications don't share the states.

## What is a container component?

Red flag: I don't know

Decent answer: A container component is a popular way to separate the JSX from the logic of a component

Good answer: A container component is a popular way to separate the JSX  from the logic of a component but I only use it when my component is doing more than showing some information of passing things through to the view. 

## What is a view component?

Red flag: I don't know

Decent answer: The view component is the dumb part of a component where you simply put the passed in props into JSX.

Good answer: The view component is the dumb part of a component where you simply put the passed in props into JSX, the view is now separate from the logic and some people will argue that this makes it reusable but that is very rarely true. 

## What components make for a good container candidate?

Red flag: I don't know

Decent answer: Almost components except perhaps for non-logic component

Good answer: I try to only use containers on components that are a bit more complex because the container itself makes the component more complex and if we are only making a small component without any extra complexity the cost of the container is greater than simply not using it.

## Code test: 

Present the candidate with a skeleton project and explain they are not allowed to use any other libraries than the ones in `package.json`

Junior: will have to build a Todo list application using Node and the goal is to have a Todo list that allows the users add/delete/edit todos.

Senior: will have the junior test and when a todo is clicked there should be a React modal that shows the todo.
