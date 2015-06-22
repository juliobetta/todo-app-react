var TodoApp = React.createClass({
  render: function() {
    return (
      <div id='todo'>
        <TodoForm />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
});
