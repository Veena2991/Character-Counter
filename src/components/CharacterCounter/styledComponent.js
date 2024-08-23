import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LeftPanel = styled.div`
  background-color: #ffc533;
  min-height: 100vh;
  width: 50%;
  padding: 10px;
`

export const InfoCardContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffbf1f;
  color: #272c47;
  font-family: 'Roboto';
`

export const Info = styled.h1`
  font-size: 30px;
`
export const EmptyImage = styled.img``

export const UserInputsList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #ffc533;
  list-style-type: none;
  margin: 0;
`

export const UserInputItem = styled.li`
  color: #0f172a;
`

export const RightPanel = styled.div`
  background-color: #0f172a;
  min-height: 100vh;
  width: 50%;
  padding: 20px;
`
export const CounterHeading = styled.h1`
  color: #ffc533;
  font-family: 'Roboto';
  padding: 10px;
  text-align: center;
`
export const AddInputContainer = styled.form`
  display: flex;
  margin-top: 30px;
`

export const Input = styled.input`
  color: #334155;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  height: 40px;
  font-size: 12px;
`
export const AddInputButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: #ffc533;
  color: #475569;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  height: 40px;
  margin-left: 5px;
`
