import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers/UserContext';
import { ReviewContext } from '../../providers/ReviewContext';

export const Modal = () => {
  const { setIsOpen } = useContext(UserContext);

  const { register, handleSubmit } = useForm<FormData>({});

  const token = localStorage.getItem('@TOKEN');
  const userId = Number(localStorage.getItem('@USERID'));
  const localMovieId = Number(localStorage.getItem('@LOCALMOVIEID'));

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  interface FormData {
    score: number;
    description: string;
  }

  const { createReview } = useContext(ReviewContext);

  const submit = (formData: FormData) => {
    createReview(formData);
  };

  return (
    <>
      <h2>Avaliação</h2>
      <form action="" onSubmit={handleSubmit(submit)}>
        <select id="" {...register('score')}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Deixe um comentário"
          {...register('description')}
        ></textarea>
        <button>Cadastrar avaliação</button>
      </form>

      <button onClick={() => [setIsOpen(false), { ...register('movieId') }]}>
        fechar
      </button>
    </>
  );
};
