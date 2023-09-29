import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { thumbnails, title, channelId, publishedAt } = video.snippet;
  return (
    <li>
      <img className='w-full' src={thumbnails.medium.url}></img>
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelId}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
