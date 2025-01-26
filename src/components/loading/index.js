import styled from "styled-components";

const ContainerLoading = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 100vh;
    align-items: start;
  }

  img {
    width: 200px;

    @media (max-width: 420px) {
      margin-top: 2rem;
    }
  }
`;

const Loading = () => {
  return (
    <ContainerLoading>
      <img src="https://media.tenor.com/s7WHtFALjkIAAAAi/bubu-dudu-bubu.gif" />
    </ContainerLoading>
  );
};

export default Loading;
