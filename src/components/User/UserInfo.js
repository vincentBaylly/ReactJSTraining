import Avatar from "../Comment/Avatar";
import Photo from "./Photo";

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Photo />
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export default UserInfo;
