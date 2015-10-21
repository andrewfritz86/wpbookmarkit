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
    console.log("rendering")

  	var inCart = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.inCart;
  	}), function(g) {
  		return (
  	<div key={g.name} className="row move">
  	  <div className="four columns">
  	    <img src={g.image} className="image"/>
  	  </div>
  	  <div className="four columns">
  	    <div className="large">{g.name}</div>
  	    <div className="small">{g.color}</div>
  	  </div>
  	  <div className="two columns">
  	    <img src="images/remove.png" className="remove"/>
  	    <img src="images/bookmark.png" alt="bookmark" onClick={this.cartToBookmarks.bind(this, g.id)} className="bookmark"/>
  	  </div>
  	  <div className="two columns">
  	    {g.price}
  	  </div>
  	</div>)
  	}, this);

  	var bookmarks = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.bookmarked;
  	}), function(g) {
  		return (
  	<div key={g.name} className="row move">
  	  <div className="four columns">
  	    <img src={g.image} className="image"/>
  	  </div>
  	  <div className="four columns">
  	    <div>{g.name}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two columns">
  	    <img src="images/remove.png" className="remove"/>
  	    <img src="images/cart.png" alt="Cart" onClick={this.bookmarksToCart.bind(this, g.id)} className="cart"/>
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
        <h1 className="shmee"> In your cart </h1>
        {inCart}
        </div>
        <div className="row">
        <h1 className="shmee"> Bookmarked </h1>
        {bookmarks}
        </div>
      </div>
	)
  }
});

React.render(<Demo />, document.querySelector("#main"));
