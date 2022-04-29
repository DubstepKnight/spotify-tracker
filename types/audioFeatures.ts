export type AudioFeatures = {
  id?: string;
  acousticness?: number;
  analysis_url?: string;
  danceability?: number;
  duration_ms?: number;
  energy?: number;
  instrumentalness?: number;
  key?: number;
  liveness?: number;
  loudness?: number;
  mode?: number;
  speechiness?: number;
  tempo?: number;
  time_signature?: number;
  track_href?: string;
  type?: 'audio_features';
  url?: string;
  valence?: number;
}