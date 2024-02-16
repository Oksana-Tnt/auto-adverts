import styled from "styled-components";

export const Overlay = styled.div`
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    overflow: auto;
    padding: 40px;
    border-radius: 24px;
    background-color: #fff;
    width: 541px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 26px;
    font-weight: 600;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background-color: transparent;
      border: none;

      transition: transform 350ms ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
      .modal-icon {
        width: 24px;
        height: 24px;
        stroke-width: 1.8px;
        stroke: #121417;
      }
    }
  }
`;
