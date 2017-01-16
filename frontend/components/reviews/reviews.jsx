import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: 0,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllReviews(this.props.bookId);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addReview(this.state, this.props.bookId);
  }

  render() {
    let reviewIds = Object.keys(this.props.reviews);
    let reviews = reviewIds.map((id, idx) => {
      return <li key={idx}>
        this.props.reviews[id].user_id
        this.props.reviews[id].title
        this.props.reviews[id].rating
        this.props.reviews[id].body
      </li>;
    });

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>

        </form>
        <h3>Reviews</h3>
        <div>
          { reviews }
        </div>
      </div>
    );
  }
}

export default Reviews;
