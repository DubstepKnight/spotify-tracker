import { Image } from "./image";
import { Followers } from "./followers";
import { ExternalUrls } from "./external_urls";

type ExplicitContent = {
  filter_enabled: boolean;
  filter_locked: boolean;
};

export type Profile = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
};
