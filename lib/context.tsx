/* eslint-disable react/prop-types */

import api from "@/utils/axiosInstance";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const UserContext = createContext<any>({});

export function useAppContext() {
  return useContext(UserContext);
}

const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userRefetch, setUserRefetch] = useState(false);
  const [appointmentRefetch, setAppointmentRefetch] = useState(false);
  const [usersRefetch, setUsersRefetch] = useState(false);
  const [articlesRefetch, setArticlesRefetch] = useState(false);
  const [reviewsRefetch, setReviewsRefetch] = useState(false);
  const [advertisementsRefetch, setAdvertisementsRefetch] = useState(false);
  const [advertisements, setAdvertisements] = useState([]);

  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [billings, setBillings] = useState([]);
  const [billingRefetch, setBillingRefetch] = useState(false);
  const [articles, setArticles] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [openReview, setOpenReview] = useState(false);
  const [openAdvertisement, setOpenAdvertisement] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggle = useCallback(() => {
    setIsMinimized((prevState) => !prevState);
  }, []);

  useEffect(() => {
    try {
      const getAllUsers = async () => {
        const response = await api.get(`/users`);

        setUsers(response?.data?.data);
      };
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  }, [user?.role, usersRefetch]);

  useEffect(() => {
    try {
      const getAllAppointments = async () => {
        const response = await api.get(`/appointment`);

        setAppointments(response?.data?.data);
      };
      getAllAppointments();
    } catch (error) {
      console.log(error);
    }
  }, [appointmentRefetch]);

  useEffect(() => {
    try {
      const getAllBillings = async () => {
        const response = await api.get(
          `/billing?userId=${user?._id}&role=${user?.role}`
        );

        setBillings(response?.data?.data);
      };
      if (user?._id) {
        getAllBillings();
      }
    } catch (error) {
      console.log(error);
    }
  }, [billingRefetch, user?._id, user?.role]);

  useEffect(() => {
    try {
      const getAllAppointments = async () => {
        const response = await api.get(`/article`);

        setArticles(response?.data?.data);
      };
      getAllAppointments();
    } catch (error) {
      console.log(error);
    }
  }, [articlesRefetch]);

  useEffect(() => {
    try {
      const getAllReviews = async () => {
        const response = await api.get(`/review`);

        setReviews(response?.data?.data);
      };
      getAllReviews();
    } catch (error) {
      console.log(error);
    }
  }, [reviewsRefetch]);

  useEffect(() => {
    try {
      const getAllAdvertisements = async () => {
        const response = await api.get(`/advertisement`);

        setAdvertisements(response?.data?.data);
      };
      getAllAdvertisements();
    } catch (error) {
      console.log(error);
    }
  }, [advertisementsRefetch]);

  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      try {
        const promise = await api.get(`/users/profile`);

        setUser(promise.data.data);
        setIsLoading(false);
      } catch (error: any) {
        console.log(error);
        setIsLoading(false);
        if (error.response.data.message === "Invalid Token!") {
          localStorage.removeItem("dmToken");
        }
      }
    };

    getProfile();
  }, [userRefetch]);

  const logout = () => {
    window.localStorage.removeItem("dmToken");
    setUser({});
  };

  const authInfo = {
    isLoading,
    userRefetch,
    setUserRefetch,
    setIsLoading,
    isMinimized,
    toggle,
    user,
    loading,
    setLoading,
    users,
    usersRefetch,
    setUsersRefetch,
    logout,
    appointmentRefetch,
    setAppointmentRefetch,
    appointments,
    doctors,
    setDoctors,
    articles,
    setArticles,
    articlesRefetch,
    setArticlesRefetch,
    billings,
    billingRefetch,
    setBillingRefetch,
    reviews,
    setReviews,
    reviewsRefetch,
    setReviewsRefetch,
    openReview,
    setOpenReview,
    openAdvertisement,
    setOpenAdvertisement,
    advertisements,
    setAdvertisements,
    advertisementsRefetch,
    setAdvertisementsRefetch,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
