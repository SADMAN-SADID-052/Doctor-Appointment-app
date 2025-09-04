import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosSecure
        .get(`/users/role/${user.email}`)
        .then((res) => {
          setRole(res.data.role);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching role:", err);
          setLoading(false);
        });
    }
  }, [user, axiosSecure]);

  return [role, loading];
};

export default useRole;
