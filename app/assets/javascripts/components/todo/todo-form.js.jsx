var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.getFormData());
  },


  getFormData: function() {
    return {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value
    };
  },


  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p><input type="text" ref="title"/></p>
        <p><textarea ref="description"></textarea></p>
        <p><input type="submit" value="Ok"/></p>
      </form>
    );
  }
});
