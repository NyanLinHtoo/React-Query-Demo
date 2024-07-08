import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUsers(email));

  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId, // !! return boolean values depend on channelId exist or not.
  });
  return <div>DependentQueriesPage</div>;
};
