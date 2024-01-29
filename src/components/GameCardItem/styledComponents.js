import styled from 'styled-components'

export const GameCardList = styled.li`
  width: 180px;
  height: 280px;
  margin: 20px;
`

export const GameImage = styled.img`
  width: 180px;
  height: 200px;
  border-radius: 15px;
`

export const Name = styled.h1`
  font-size: 20px;
  color: ${props => (props.isdark ? '#F7F6E9' : '#343B4B')};
`

export const Watching = styled.p`
  font-size: 16px;
  color: ${props => (props.isdark ? '#cbd5e1' : '#7e858e')};
`
