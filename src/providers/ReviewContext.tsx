import { ReactNode, createContext, useContext, useEffect } from "react";
import { api } from "../services/api";
import { MovieContext } from "./MovieContext";



interface ReviewProviderProps {
    children: ReactNode;
}

interface IReviewContext{
  createReview: (formData: any) => Promise<void>;
  attReview: (formData: any, reviewId: any) => Promise<void>;
  deleteReview: (reviewId: any) => Promise<void>
}

export const ReviewContext = createContext({} as IReviewContext);

export const ReviewProvider = ({ children }: ReviewProviderProps) => {
  
const { setReviews, reviews, setUserReview } = useContext(MovieContext)

const localMovieId = localStorage.getItem('@LOCALMOVIEID')

const token = localStorage.getItem('@TOKEN')

const userId = localStorage.getItem('@USERID')

const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };




const createReview = async (formData) => {
    try {
        const { data } = await api.post(
          `/reviews`,
          {
            movieId: Number(localMovieId),
            userId: Number(userId),
            description: formData.description,
            score: Number(formData.score),
          },
          header
        );
        setReviews(() => [...reviews, data])
      } catch (error) {
        console.log(error);
      }finally{
        window.location.reload()
      }
};


const attReview = async (formData,reviewId) => {
    try {
        await api.put(
          `/reviews/${reviewId}`,
          {
            movieId: localMovieId,
            userId: userId,
            description: formData.description,
            score: Number(formData.score),
          },
          header
        );
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
};

const deleteReview = async (reviewId) => {
    try {
        await api.delete(
          `/reviews/${reviewId}`,
          header
        );
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
}
  
    return (
      <ReviewContext.Provider
        value={{
          createReview,
          attReview,
          deleteReview
        }}
      >
        {children}
      </ReviewContext.Provider>
    );
  };