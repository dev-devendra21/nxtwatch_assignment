import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  VideoListElement,
  ChannelProfileImage,
  Container,
  ChannelName,
  Title,
  ChannelLogo,
  ViewCount,
  DateAndViews,
  PublishedAt,
  Dot,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {publishedAt, thumbnailUrl, title, viewCount, id} = videoDetails
  const {name, profileImageUrl} = videoDetails.channel
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <>
      <VideoListElement>
        <Link to={`/videos/${id}`}>
          <ChannelProfileImage src={thumbnailUrl} />
        </Link>
        <Container>
          <div>
            <ChannelLogo src={profileImageUrl} />
          </div>
          <div>
            <Title>{title}</Title>
            <ChannelName>{name}</ChannelName>
            <DateAndViews>
              <ViewCount>{viewCount} views</ViewCount>
              <Dot />
              <PublishedAt>{date.split(' ')[1]} years ago</PublishedAt>
            </DateAndViews>
          </div>
        </Container>
      </VideoListElement>
    </>
  )
}

export default VideoItem
