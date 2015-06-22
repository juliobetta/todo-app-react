var TodoItem = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    done: React.PropTypes.bool
  },


  getInitialState: function() {
    return {
      done: false
    }
  },


  handleClick: function(e) {
    this.setState({ done: !this.state.done });
  },


  render: function() {
    return (
      <li onClick={this.handleClick} className={this.state.done ? 'done' : ''}>
        <div>Title: {this.props.todo.title}</div>
        <div>{this.props.todo.description}</div>
      </li>
    );
  }
});
