const React = require("react");
const ReactDOM = require("react-dom");

// know about es6
class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = { todos: [] }; // know about state
  this.saveTodo = this.saveTodo.bind(this); // know about "this"
  this.inputRef = React.createRef(); // know about refs
 }

 // know about async/await and life cycle
 async componentDidMount() {
  // know about fetch and json
  const res = await fetch("http://localhost:5000/todos");
  const json = await res.json();
  this.setState({ todos: json });
 }

 async saveTodo(e) {
  e.preventDefault();
  const options = {
   method: "post",
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
   },
   body: JSON.stringify({ todo: this.inputRef.current.value })
  };
  const res = await fetch("http://localhost:5000/todos", options);
  const json = await res.json();
  this.setState({ todos: json });
  this.inputRef.current.value = null;
  return false;
 }
 render() {
  return (
   <form onSubmit={this.saveTodo}>
    <ul>
     { this.state.todos.map((todo, i) => <li key={i}>{ todo }</li>) }
    </ul>
    <input placeholder="Add Todo" ref={this.inputRef}/>
   </form>
  );
 }
}

ReactDOM.render(<App />, document.getElementById("root"));