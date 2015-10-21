var Demo = React.createClass({
  getInitialState: function() {
    return {
      glasses: [{
	    name: "Winston",
        image: "images/frames/winston.png",
        color: "Old Fashioned Fade",
        price: "$95.00",
        bookmarked: false,
        inCart: true,
        id: 1
      }, {
	    name: "Grace",
        image: "images/frames/grace.png",
        color: "Jet Black",
        price: "$95.00",
        bookmarked: true,
        inCart: false,
        id: 2
      }, {
	    name: "Crane",
        image: "images/frames/crane.png",
        color: "Whiskey Tortoise",
        price: "$95.00",
        bookmarked: true,
        inCart: false,
        id: 3
      }, {
	    name: "Model X1",
        image: "images/frames/uncrate.png",
        color: "Jet Black Matte",
        price: "$95.00",
        bookmarked: false,
        inCart: true,
        id: 4
      }]
	}
  },

  cartToBookmarks: function(id) {
  	var newState = this.state.glasses
  	//manipulate old state
    var frame = _.find(newState, function(g) {
    	return g.id === id;
    });

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

  	var inCart = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.inCart;
  	}), function(g) {
  		return (
  	<div key={g.id}>
  	  <div className="six">
  	    <img src={g.image}/>
  	  </div>
  	  <div className="two">
  	    <div>{g.id}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two">
  	    <div><img src="images/remove.png"/></div>
  	    <div><img src="images/bookmark.png" alt="bookmark" onClick={this.cartToBookmarks.bind(this, g.id)}/></div>
  	  </div>
  	  <div className="two">
  	    {g.price}
  	  </div>
  	</div>)
  	}, this);

  	var bookmarks = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.bookmarked;
  	}), function(g) {
  		return (
  	<div key={g.name}>
  	  <div className="six">
  	    <img src={g.image}/>
  	  </div>
  	  <div className="two">
  	    <div>{g.name}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two">
  	    <img src="images/remove.png"/>
  	    <img src="images/cart.png" alt="cart" onClick={this.bookmarksToCart.bind(this, g.id)}/>
  	  </div>
  	  <div className="two">
  	    {g.price}
  	  </div>
  	</div>)
  	}, this);

    return (
      <div>
        <h1>Cart</h1>
        {inCart}
        <h1>Bookmarks</h1>
        {bookmarks}
      </div>
	)
  }
});

React.render(<Demo />, document.querySelector(".container"));
