import styled from "styled-components";

export const Chart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  padding: 7px;
  align-items: center;
  &:nth-child(odd) {
    background-color: #1f1f1f;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Counter = styled.div`
  position: relative;
  display: flex;
  font-size: 20px;
  font-weight: 400;
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(130, 130, 130, 1);
  color: rgba(130, 130, 130, 1);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const CounterOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 6px;
  width: 100%;
  height: 100%;
`;

export const EntryImg = styled.img`
  width: 110%;
  height: 100px;
`;

export const EntryInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-left: 12px;
`;

export const EntryHeader = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  color: grey;
  padding: 5px;
`;

export const EntryTxt = styled.div`
  padding: 5px;
  color: lightgrey;
  letter-spacing: 0.05rem;
`;
