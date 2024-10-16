import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [dataLoading, setDataLoading] = useState(true)
  const baseUrl = `http://localhost:1111`;

  useEffect(() => {
    checkAuthFromCookies();
  }, []);

  const checkAuthFromCookies = () => {
    const token = Cookies.get("authToken");
    const loggedInUser = Cookies.get("user");
    const loggedInAdmin = Cookies.get("admin");
  
    if (token && (loggedInUser || loggedInAdmin)) {
      try {
        const userObject = loggedInUser && JSON.parse(loggedInUser);
        const adminObject = loggedInAdmin && JSON.parse(loggedInAdmin);
        setAuthToken(token);
        setUser(userObject);
        setAdmin(adminObject);
      } catch (error) {
        console.error("Error parsing user data from cookies:", error);
      }
    }
    setDataLoading(false);
  };  

  const login = async (credentials) => {
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        Cookies.set("authToken", data.access_token, { expires: 7 });
        Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
        setUser({ user: data.user });
        setAuthToken(data.access_token);

        checkAuthFromCookies()
        return data.user;
      } else {
        toast.error(data.error.message)
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const loginAdmin = async (credentials) => {
    try {
      const response = await fetch(`${baseUrl}/auth/login-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error("Failed to login"); 
      }
  
      const data = await response.json(); 
  
      
      if (data.access_token && data.admin) {
        Cookies.set("authToken", data.access_token, { expires: 7 });
        Cookies.set("admin", JSON.stringify(data.admin), { expires: 7 });
        setAdmin({ admin: data.admin });
        setAuthToken(data.access_token);
        console.log({ data });

        checkAuthFromCookies();
        return data.admin;
      } else {
        throw new Error("Invalid response data"); 
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed"); 
    }
  };
  

  const signup = async (userData) => {
    try {
      const response = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        Cookies.set("authToken", data.access_token, { expires: 7 });
        Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
        setUser({ user: data.user });
        setAuthToken(data.access_token);

        checkAuthFromCookies()
        return data.user;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    Cookies.remove("user");
    Cookies.remove("admin");
    setUser(null);
    setAdmin(null);
  };

  const updateProfile = async (updatedProfile) => {
    try {
      console.log({updatedProfile})
      const response = await fetch(
        `${baseUrl}/${admin ? "admin/update-admin" : "user/update"}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProfile),
        }
      );

      const data = await response.json();
      if (response.ok) {
        if (admin) {
          Cookies.set("admin", JSON.stringify(data.admin), { expires: 7 });
          setAdmin({ admin: data.admin });
          return data.admin;
        } else {
          Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
          console.log({user: data.user})
          setUser({ user: data.user });
          return data.user;
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const updateUserPassword = async ({ user_id, password }) => {
    try {
      const response = await fetch(`${baseUrl}/user/update-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${authToken}`
          },
          body: JSON.stringify({ user_id, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Password Updated Successfully!");
        return data.user;
      } else {
        toast.success("Password update failed! Please try again!")
        throw new Error(data?.error?.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const updateAdminPassword = async ({ admin_id, password }) => {
    try {
      const response = await fetch(`${baseUrl}/admin/update-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${authToken}`
          },
          body: JSON.stringify({ admin_id, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Password Updated Successfully!");
        return data.admin;
      } else {
        toast.success("Password update failed! Please try again!")
        throw new Error(data.error?.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const addHotel = async (formData) => {
    try {
      const response = await fetch(`${baseUrl}/hotel/add-hotel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const getHotels = async () => {
    try {
      const response = await fetch(`${baseUrl}/hotel/get-hotels`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log({ hotels: data.hotels });
        return data.hotels;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const getHotel = async (hotel_id) => {
    try {
      console.log({hotel_id})
      const response = await fetch(`${baseUrl}/hotel/get-hotel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({hotel_id})
      });

      const data = await response.json();
      console.log({data})
      if (response.ok) {
        console.log({ hotel: data.hotel });
        return data.hotel;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}/dashboard/get-users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        return data.users;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const getBookings = async () => {
    try {
      const response = await fetch(`${baseUrl}/dashboard/get-bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log({bookings: data.bookings})
        return data.bookings;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const bookHotel = async (bookingDetails) => {
    try {
      const response = await fetch(`${baseUrl}/hotel/book-hotel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(bookingDetails)
      });

      const data = await response.json();
      if (response.ok) {
        console.log({booking: data.booking})
        return data.booking;
      } else {
        toast.error(data.error.message)
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  const getUserBookings = async (user_id) => {
    try {
      const response = await fetch(`${baseUrl}/user/get-user-bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({user_id})
      });

      const data = await response.json();
      if (response.ok) {
        console.log({bookings: data.bookings})
        return data.bookings;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  const updateHotel = async ({hotelData}) => {
    try {
      console.log({hotelData})
      const response = await fetch(`${baseUrl}/hotel/update-hotel`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotelData),
      });

      const data = await response.json();
      if (response.ok) {
        return data.hotel;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const updateUserStatus = async ({userId, status}) => {
    try {
      console.log({userId, status})
      const response = await fetch(`${baseUrl}/admin/update-user-status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({userId, status}),
      });
      const data = await response.json();
      console.log({data})
      if(response.ok) {
        return data.user
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  const updateBookingStatus = async ({booking_id, status}) => {
    try {
      const response = await fetch(`${baseUrl}/admin/update-booking-status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({booking_id, status}),
      });
      const data = await response.json();
      console.log({data})
      if(response.ok) {
        return data.booking
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  const updateUserBookingStatus = async ({booking_id, status}) => {
    try {
      const response = await fetch(`${baseUrl}/admin/update-booking-status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({booking_id, status}),
      });
      const data = await response.json();
      console.log({data})
      if(response.ok) {
        return data.booking
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };


  const deleteHotel = async ({email, hotel_id}) => {
    try {
      console.log({email, hotel_id})
      const response = await fetch(`${baseUrl}/hotel/delete-hotel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({email, hotel_id}),
      });
      const data = await response.json();
      if(response.ok) {
        toast.erorr(data.message)
        return true
      } else {
        toast.error(data.error.message)
        throw new Error(data.error.message)
      }
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        setAdmin,
        setUser,
        login,
        signup,
        logout,
        loginAdmin,
        updateProfile,
        updateUserPassword,
        updateAdminPassword,
        addHotel,
        getHotels,
        getHotel,
        getUsers,
        getBookings,
        bookHotel,
        updateHotel,
        updateUserStatus,
        updateBookingStatus,
        updateUserBookingStatus,
        getUserBookings,
        deleteHotel,
        dataLoading
      }}
    >
      {!dataLoading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
