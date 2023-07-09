import { useForm } from "react-hook-form";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../providers/UserContext";
import { ReviewContext } from "../../providers/ReviewContext";
import { StyledModalOverlay } from "../../styles/Overlay";
import { CloseModal, StyledModalForm, StyledModalTitle } from "./ModalStyle";
import { Title2 } from "../../styles/typography";
import { StyledSelect, StyledTextArea } from "../../styles/Inputs";
import { SmallYellowButton } from "../../styles/Buttons";

export const Modal = () => {
  const { setIsOpen } = useContext(UserContext);
  const { register, handleSubmit } = useForm<FormData>({});
  const modalClose = useRef(null);

  useEffect(() => {
    const ClickOut = (e: any) => {
      if (!modalClose.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", ClickOut);
    return () => {
      window.removeEventListener("mousedown", ClickOut);
    };
  }, []);

  useEffect(() => {
    const PressOut = (e: any) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", PressOut);

    return () => {
      window.removeEventListener("keydown", PressOut);
    };
  }, []);

  interface FormData {
    score: number;
    description: string;
  }

  const { createReview } = useContext(ReviewContext);

  const submit = (formData: FormData) => {
    createReview(formData);
    console.log(formData)
  };

  return (
    <StyledModalOverlay>
      <StyledModalForm onSubmit={handleSubmit(submit)} ref={modalClose}>
        <StyledModalTitle>
          <Title2>Avaliação</Title2>
          <CloseModal onClick={() => setIsOpen(false)}>X</CloseModal>
        </StyledModalTitle>
        <StyledSelect id="" {...register("score")} required>
           <option value="">Selecionar nota</option>
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
        </StyledSelect>
        <StyledTextArea
          rows={10}
          cols={30}
          placeholder="Deixe um comentário"
          {...register("description")}
          required
        ></StyledTextArea>
        <div>
          <SmallYellowButton
            type="submit"
            buttonsize={12}
          >
            Cadastrar avaliação
          </SmallYellowButton>
        </div>
      </StyledModalForm>
    </StyledModalOverlay>
  );
};
