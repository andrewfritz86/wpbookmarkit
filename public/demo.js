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
  render: function() {

  	var inCart = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.inCart;
  	}), function(g) {
  		return (
  	<div>
  	  <div className="six">
  	    <img src={g.image}/>
  	  </div>
  	  <div className="two">
  	    <div>{g.name}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two">
  	    <img src="images/remove.png"/>
  	    <img src="images/bookmark.png"/>
  	  </div>
  	  <div className="two">
  	    {g.price}
  	  </div>
  	</div>)
  	});

  	var bookmarks = _.map(_.filter(this.state.glasses, function(g) {
  	  return g.bookmarked;
  	}), function(g) {
  		return (
  	<div>
  	  <div className="six">
  	    <img src={g.image}/>
  	  </div>
  	  <div className="two">
  	    <div>{g.name}</div>
  	    <div>{g.color}</div>
  	  </div>
  	  <div className="two">
  	    <img src="images/remove.png"/>
  	    <img src="images/bookmark.png"/>
  	  </div>
  	  <div className="two">
  	    {g.price}
  	  </div>
  	</div>)
  	});
  	console.log(inCart);
    return (
      <div>
        <h1>Cart</h1>
        {inCart}
        <h1>Bookmarks</h1>
        {bookmarks}
      </div>
	)
  }
})

React.render(<Demo />, document.querySelector(".container"));
