import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const baseUrl = `http://localhost:1111`;

  useEffect(() => {
    (async () => {
      const token = Cookies.get("authToken");
      const loggedInUser = Cookies.get("user");
      const loggedInAdmin = Cookies.get("admin");
      console.log(token);

      if (token && (loggedInUser || loggedInAdmin)) {
        try {
          const userObject = loggedInUser && JSON.parse(loggedInUser); // Safely parse the JSON
          const adminObject = loggedInAdmin && JSON.parse(loggedInAdmin); // Safely parse the JSON
          setAuthToken(token);
          setUser(userObject);
          setAdmin(adminObject);
        } catch (error) {
          console.error("Error parsing user data from cookies:", error);
        }
      }
    })();
  }, []);

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
        return data;
      } else {
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

      const data = await response.json();
      if (response.ok) {
        Cookies.set("authToken", data.access_token, { expires: 7 });
        Cookies.set("admin", JSON.stringify(data.admin), { expires: 7 });
        setAdmin({ admin: data.admin });
        setAuthToken(data.access_token);
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
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
        return data;
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
        } else {
          Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
          setUser({ user: data.user });
        }
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const updatePassword = async ({ email, updatedPassword }) => {
    try {
      const response = await fetch(
        `${baseUrl}/${
          admin ? "admin/update-password" : "user/update-password"
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, updatedPassword }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        if (admin) {
          Cookies.set("admin", JSON.stringify(data.admin), { expires: 7 });
          setAdmin({ admin: data.admin });
        } else {
          Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
          setUser({ user: data.user });
        }
        alert("Password Updated Successfully!");
        return data;
      } else {
        throw new Error(data.message);
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
        return data.booking;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        login,
        signup,
        logout,
        loginAdmin,
        updateProfile,
        updatePassword,
        addHotel,
        getHotels,
        getUsers,
        getBookings,
        bookHotel
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
