var Demo = React.createClass({
  getInitialState: function() {
    return {
      glasses: [{
	    name: "Name 1",
        image: "images/eyes1.png",
        color: "blue",
        price: "$95.00",
        bookmarked: false,
        inCart: true,
        id: 1
      }, {
	    name: "Name 2",
        image: "images/eyes2.png",
        color: "red",
        price: "$95.00",
        bookmarked: true,
        inCart: false,
        id: 2
      }]
	}
  },

  cartToBookmarks: function(id) {
  	var newState = this.state.glasses
  	//manipulate old state
    var frame = _.find(newState, function(g) {
    	return g.id === id;
    });
    console.log(frame)
    frame.inCart = false;
    frame.bookmarked = true;
   	this.setState({glasses: newState});
  },

  bookmarksToCart: function(id) {
  	var newState = this.state.glasses
  	//manipulate old state
    var frame = _.find(newState, function(g) {
    	return g.id === id;
    });

    frame.inCart = true;
    frame.bookmarked = false;

   	this.setState({glasses: newState});
  },

  render: function() {
    console.log("rendering")

  	var inCart = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.inCart;
  	}), function(g) {
  		console.log("inCart id "  + g.id);
  		return (
  	<div key={g.name} className="row">
  	  <div className="four columns">
  	    <img src={g.image}/>
  	  </div>
  	  <div className="four columns">
  	    <div>{g.name}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two columns">
  	    <img src="images/remove.png"/>
  	    <img src="images/bookmark.png" alt="bookmark" onClick={this.cartToBookmarks.bind(this, g.id)}/>
  	  </div>
  	  <div className="two columns">
  	    {g.price}
  	  </div>
  	</div>)
  	}, this);

  	var bookmarks = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.bookmarked;
  	}), function(g) {
  		console.log("bookmarked id "  + g.id);
  		return (
  	<div key={g.name} className="row">
  	  <div className="four columns">
  	    <img src={g.image}/>
  	  </div>
  	  <div className="four columns">
  	    <div>{g.name}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two columns">
  	    <img src="images/remove.png"/>
  	    <img src="images/cart.png" alt="cart" onClick={this.bookmarksToCart.bind(this, g.id)}/>
  	  </div>
  	  <div className="two columns">
  	    {g.price}
  	  </div>
  	</div>)
  	}, this);

    console.log(bookmarks)
    console.log(inCart)
    return (
      <div className="container">
        <div className="row">
        <h1> In your cart </h1>
        {inCart}
        </div>
        <div className="row">
        <h1> Bookmarked </h1>
        {bookmarks}
        </div>
      </div>
	)
  }
});

React.render(<Demo />, document.querySelector("#main"));
