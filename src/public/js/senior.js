const React = require("react");
const ReactDOM = require("react-dom");

// know about ES6
class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = { todos: [], open: false }; // know about state
  this.isOpen = this.isOpen.bind(this); // know about this
  this.isClose = this.isClose.bind(this);
  this.saveTodo = this.saveTodo.bind(this); 
  this.inputRef = React.createRef(); // know about refs
 }

 // know about async/await
 async componentDidMount() {
  // know about fetch and json
  const res = await fetch("http://localhost:5000/todos");
  const json = await res.json();
  this.setState({ todos: json });
 }

 async saveTodo(e) {
  e.preventDefault(); // know about form submission
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

 isOpen() {
  this.setState(Object.assign({}, this.state, { open: true, clickedItem: item }));
 }

 isClose() {
  this.setState(Object.assign({}, this.state, { open: false }));
 }

 render() {
  return (
   <form onSubmit={this.saveTodo}>
    <ul>
     {this.state.todos.map((todo, i) => (
      <li key={i} onClick={() => this.isOpen(todo)}>
       {todo}
      </li>
     ))}
    </ul>
    <input placeholder="Add Todo" ref={this.inputRef} />
    <Modal 
     open={this.state.open}
     isClose={this.isClose}
     content={this.state.clickedItem}
    />
   </form>
  );
 }
}

// know that we can put things outside the class
let node = null;

class Modal extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 // know about static methods
 static getDerivedStateFromProps(next, prev) {
  // render since we are outside of the React tree
  node && ReactDOM.render(<ModalBox {...next} />, node);
  return next;
 }

 componentDidMount() {
  node = document.createElement("div"); // know when to use native js
  document.body.appendChild(node);
  // render since we are outside of our React tree
  ReactDOM.render(<ModalBox {...this.props} />, node);
 }

 // know about DOM clean up
 componentWillMount() {
  ReactDOM.unmountComponentAtNode(node);
  node.parentNode && node.parentNode.removeChild(node);
 }

 render() {
  return <script />; // return a placeholder that ignores css styles
 }
}

/**
 * Why the child component?
 * Because we need to add the modal to the body so we can be sure
 * that it will always be on the top of all other elements of the page
 */
const ModalBox = ({ content, isClose, open }) => {
 const className = open ? "click-catcher--open" : "click-catcher";
 return (
  <div className={className} onClick={isClose}>
   <div className="modal">{content}</div>
  </div>
 )
}


ReactDOM.render(<App />, document.getElementById("root"));