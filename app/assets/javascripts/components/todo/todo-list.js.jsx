var TodoList = React.createClass({
  renderItems: function() {
    return this.props.todos.map(function(item) {
      return <TodoItem key={item.id} todo={item}/>;
    });
  },


  render: function() {
    return (
      <ul className='list-group'>
        {this.renderItems()}
      </ul>
    );
  }
});
