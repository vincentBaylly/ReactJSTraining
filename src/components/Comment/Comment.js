function formatDate(date) {
  return date.toLocaleDateString("ko-KR");
}

function Comment(props) {
  return (
    <div className="row m-t-sm">
      <div className="col-lg-12">
        <div className="panel blank-panel">
          <div className="panel-body">
            <div className="tab-content">
              <div className="tab-pane active" id="tab-1">
                <div className="feed-activity-list">
                  <div className="feed-element">
                    <a href="/" className="pull-left disabled">
                      <img
                        alt={props.comment.author.name}
                        className="rounded-circle pull-left"
                        src={props.comment.author.avatarUrl}
                      />
                    </a>
                    <div className="media-body ">
                      <strong>{props.comment.author.name}</strong>
                      <small className="text-muted pull-right">
                        {formatDate(props.comment.date)}
                      </small>
                      <div className="well">{props.comment.text}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
