import styled from "styled-components";

const ContainerS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  flex-direction: column;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 100%;
  }
`;

export const ContainerHomeS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 100vh;
  }

  .logo {
    margin-bottom: 2rem;
  }
`;

export const ContainerCadstroS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  flex-direction: column;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 130vh;
  }

  .logo {
    margin-bottom: 2rem;
  }
`;

export const ContainerCadS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 430px) {
    background-color: #db496e;
    color: white;
    height: 100%;
  }

  .logo {
    margin-bottom: 2rem;
  }
`;

export const FormS = styled.form`
  background-color: #db496e;
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 2rem;
  border-radius: 0 4rem 0 4rem;
  align-self: center;
  text-align: center;

  @media (max-width: 420px) {
    background-color: transparent;
    width: 100%;
    placeholder-color: black;
  }

  label {
    color: black;
  }

  input,
  textarea {
    margin-bottom: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  select {
    margin-bottom: 1.5rem;
  }

  button {
    margin-bottom: 1rem;
  }
`;

export const H1s = styled.h1`
  align-self: center;
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;

  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    align-self: center;
    margin-right: 3rem;
    margin-top: 3rem;
    width: 38rem;
    text-align: center;
    background-color: #f29bab;
    padding: 1rem;
    border-radius: 1rem;
    opacity: 0.8;

    @media (max-width: 420px) {
      width: 100%;
      align-self: center;
      margin-right: 0;
      color: black;
      background-color: #f2c6ac;
    }
  }
`;
export default ContainerS;
