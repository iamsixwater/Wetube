import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <iframe
        id='player'
        type='text/html'
        width='100%'
        height='640'
        src={`http://www.youtube.com/embed/${video.id}`}
        style={{ border: 'none' }}
      />
      <div>
        <h1>{title}</h1>
        <ChannelInfo id={channelId} name={channelTitle}></ChannelInfo>
        <pre>{description}</pre>
      </div>
    </section>
  );
}
