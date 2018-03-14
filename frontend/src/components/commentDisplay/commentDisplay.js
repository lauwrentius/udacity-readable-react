import React, { Component } from 'react';
import PropTypes from 'prop-types'

import VoteScore from 'components/voteScore/voteScore'

class CommentDisplay extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  render() {
    const { comment } = this.props

    return <div className="commentEntry well">
      <VoteScore type="comment" id={comment.id} score={comment.voteScore}></VoteScore>
      <div className="commentContent">
        <div className="commentBody">
          {comment.body}
        </div>
        <div className="info">
          <span className="date">
            {new Date(comment.timestamp).toString().substring(0, 15)}
          </span>,&nbsp;
          <span className="author">by {comment.author}</span><br />
          <div className="btn-group">
            <button className="btn btn-xs btn-default"><span className="glyphicon glyphicon-pencil"></span> Edit</button>
            &nbsp;&nbsp;
            <button className="btn btn-xs btn-default"><span className="glyphicon glyphicon-remove"></span> Delete</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default CommentDisplay