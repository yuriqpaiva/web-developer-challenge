import styled from "styled-components";

export const PostFormContainer = styled.form`
  margin-top: ${({ theme }) => theme.spacing[10]};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[600]};
  border: solid 1px ${({ theme }) => theme.colors.gray[550]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: 3px;

  & #avatar-input {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  & #name-input {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  & .buttons {
    margin-top: ${({ theme }) => theme.spacing[8]};
    display: flex;
    gap: ${({ theme }) => theme.spacing[6]};
    justify-content: flex-end;
    width: 100%;
    font-size: 0.875rem;

    & .cancel-btn {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    & .submit-btn {
      background-color: ${({ theme }) => theme.colors.green[500]};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray[700]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      border-radius: 8px;

      transition: background-color 0.3s;

      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.gray[600]};
        background-color: ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`;
