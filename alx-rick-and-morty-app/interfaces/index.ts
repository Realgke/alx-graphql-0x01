interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
//   info: InfoProps
}
export interface EpisodesData {
  info: InfoProps;
  results: EpisodeProps[];
}

export interface EpisodesQueryResult {
  episodes: EpisodesData;
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name'| 'air_date' | "episode">