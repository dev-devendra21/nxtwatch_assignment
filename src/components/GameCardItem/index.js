import {Link} from 'react-router-dom'
import ToggleTheme from '../../Context/ToggleTheme'

import {GameCardList, GameImage, Name, Watching} from './styledComponents'

const GameCardItem = props => {
  const {gameList} = props
  const {id, thumbnailUrl, title, viewCount} = gameList
  return (
    <>
      <ToggleTheme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <GameCardList>
                <Link to={`/videos/${id}`}>
                  <GameImage src={thumbnailUrl} />
                </Link>
                <Name isdark={isDark}>{title}</Name>
                <Watching isdark={isDark}>
                  {viewCount} Watching Worldwide
                </Watching>
              </GameCardList>
            </>
          )
        }}
      </ToggleTheme.Consumer>
    </>
  )
}

export default GameCardItem
