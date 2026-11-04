function UserGreetings(props) {
  return props.isLoggedIn ? (
    <h2 className="welcome-msg">Welcome {props.username}</h2>
  ) : (
    <h2 className="login-prompt">please log in to continue</h2>
  );
}

export default UserGreetings;
