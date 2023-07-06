import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export const Modal = ({ setIsOpen }) => {
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

  const createReview = async (formData: FormData) => {
    console.log(formData);
    if (userId == null) {
      alert('Cadastre-se');
    } else {
      try {
        console.log(`${token}`);
        await api.post(
          `/reviews`,
          {
            movieId: localMovieId,
            userId: userId,
            description: formData.description,
            score: Number(formData.score),
          },
          header
        );
        console.log('Sucesso');
        toast.success('Usuário cadastrado com sucesso');
      } catch (error) {
        console.log(error);
        toast.error('Erro ao cadastrar usuário');
      } finally {
        location.reload();
      }
    }
  };

  const submit = (formData: FormData) => {
    console.log(formData);
    console.log(`esse é o token ${token}`);
    createReview(formData);
    /* location.reload(); */
  };

  return (
    <>
      <h2>Avaliação</h2>
      <form action="" onSubmit={handleSubmit(submit)}>
        <select name="avaliação" id="" {...register('score')}>
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
        <button handle>Cadastrar avaliação</button>
      </form>

      <button onClick={() => [setIsOpen(false), { ...register('movieId') }]}>
        fechar
      </button>
    </>
  );
};
