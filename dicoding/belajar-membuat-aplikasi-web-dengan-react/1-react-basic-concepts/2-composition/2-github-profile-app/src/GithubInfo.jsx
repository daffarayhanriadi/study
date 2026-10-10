import "./App.css"; // Pastikan file CSS di-import di sini atau di App.jsx (tambahan css)

function ProfilePicture({ userId }) {
  return (
    <img
      className="github-profile-pic"      
      src={"https://avatars.githubusercontent.com/u/" + userId}
      alt="GitHub Profile"
    />
  );
}

function ProfileLink({ username }) {
  return (
    <a 
      className="github-profile-link"
      href={"https://github.com/" + username}
      target="_blank"
      rel="noreferrer"
    >
    {username}
    </a>
  )
}

function GithubInfo({ username, userId }) {
  return (
    <div className="github-info">
      <ProfilePicture userId={userId} />
      <ProfileLink username={username} />
    </div>
  );
}

export default GithubInfo;
