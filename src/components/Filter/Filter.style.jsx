import styled from "styled-components";

export const MakeContainer = styled.div`
  width: 125px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 125px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    width: 224px;
  }
`;
export const PriceContainer = styled.div`
  width: 125px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
export const HeaderContainer = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: var(--secondary-black);
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
`;
export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;
export const SelectorButton = styled.button`
  width: 136px;
  height: 35px;
  background-color: var(--primary-blue);
  border-radius: 12px;

  color: #fff;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
`;
