import React from 'react';
import styled from 'styled-components';

import Youtube from '@/public/assets/icons/youtube.svg';
import Balancer from 'react-wrap-balancer';

interface YoutubeVideoProps {
  title?: string;
  url: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const { title, url } = props;
  const videoHash = extractVideoHashFromUrl(url);
  const srcDoc = `<style>
  * {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  
  html,
  body {
    height: 100%
  }
  
  img,
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .thumbnail {
    object-fit: cover;
  }
  
  .Youtube {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10vw;
    width: 30%;
  }
  </style>
  <a style="color: rgb(var(--primary))" href=https://www.youtube.com/embed/${videoHash}?autoplay=1>
    <img class="thumbnail" src="https://img.youtube.com/vi/${videoHash}/hqdefault.jpg" alt='${title || ''}'>
    <img class="Youtube" src="assets/icons/youtube.svg" alt="Play the video">
  </a>`;
  
    
        
  
  return (

    <section
    id="pricing-section"
    aria-label="video section"
    className="w-full"
  >
    <div className="container grid max-w-6xl gap-4 md:gap-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>
            <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            UAE Corporate Tax Registration
            </span>
          </Balancer>
        </h2>
        <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
          Step by Step
          </Balancer>
        </h3>
      </div>
      </div>
    <VideoContainer>
      <VideoFrame
        className=""
        width="100%"
        height="100%"
        src=""
        srcDoc={srcDoc}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        loading="lazy"
      />
    </VideoContainer>
    
    </section>

  );
}

function extractVideoHashFromUrl(url: string) {
  const videoHashQueryParamKey = 'v';
  const searchParams = new URL(url).search;
  return new URLSearchParams(searchParams).getAll(videoHashQueryParamKey);
}

export const VideoContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

    