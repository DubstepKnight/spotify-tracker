import { ExternalUrls } from "./external_urls";
import { Followers } from "./followers";
import { Image } from "./image";

export type Artist = {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: "artist";
  url: string;
};

export type FollowingArtists = {
  href: string;
  items: Artist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  cursors: {
    after: string;
  };
};
