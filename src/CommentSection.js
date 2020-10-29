import React, { Component } from "react";
import logo from "./logo.png";
// import "bootstrap/dist/css/bootstrap.css";
import "./CommentSection.css";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    const loadingSpin = this.state.loading ? "CommentSection-logo Spin" : "CommentSection-logo";
    return (
      <div className="CommentSection container bg-light shadow">
        <header className="CommentSection-header">
          <img src={logo} className={loadingSpin} alt="logo" />
          <h1 className="CommentSection-title">
            React Comments
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
         </header>

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about React</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;