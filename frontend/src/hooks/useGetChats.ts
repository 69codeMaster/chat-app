import { useCurrentUser } from "../context/currentUser";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { IUser } from "@shared/modelTypes";
import React from "react";

const useGetChats = () => {
  const [loading, setLoading] = useState<boolean>();
  const [sideBarUsers, setSideBarUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/users/`);
        const data = await res.json();
        if (data.error) {
          // throw new Error(data.error);
        }
        setSideBarUsers(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, []);

  return { sideBarUsers, loading };
};

export default useGetChats;
