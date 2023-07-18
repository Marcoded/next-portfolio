import React from 'react';

interface GitHubLogoProps {
  url: string;
}

export default function GitHubLogo(props: GitHubLogoProps) {
  const { url } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer">View on GitHub</a>
  );
}