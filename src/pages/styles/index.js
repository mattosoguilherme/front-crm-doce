import styled from "styled-components";

export const ContainerS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  background-color: #f2e5bd;
  flex-direction: column;

  @media (max-width: 420px) {
    background-color: #f2508b;
    color: white;
  }
`;

export const FormS = styled.form`
  background-color: #f2508b;
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 2rem;

  input {
  margin-bottom: 0.5rem;
  }

  select {
    margin-bottom: 1.5rem;
  }
`;
