import styled from "styled-components";

const MainContainer = styled.main`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 516px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.gray[800]};

  img:first-child {
    width: 103px;
    height: 45px;
    object-fit: contain;
  }
`;

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <img src="/bx-logo.svg" alt="Buildbox Web Challenge" />
      </Header>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
