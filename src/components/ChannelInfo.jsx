import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className='flex items-center my-4 mb-8'>
      {url && <img className='rounded-full w-10 h-10' src={url} alt={name} />}
      <p className='font-medium text-lg ml-2'>{name}</p>
    </div>
  );
}
