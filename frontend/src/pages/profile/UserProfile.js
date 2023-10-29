import { useParams } from 'react-router-dom';

function UserProfile() {
  const { fname } = useParams();

  // Now you can use `fname` to fetch the user's data and display it in the UserProfile component.
  // You can make an API request using `fname` to get user information.

  return (
    <div>
      <h1>User Profile for: {fname}</h1>
      {/* Display user's information here */}
    </div>
  );
}

export default UserProfile;
