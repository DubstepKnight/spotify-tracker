import { useRouter } from "next/router";
import { Stack, Text } from "@mantine/core";
// import Cookies from "js-cookie";
import React from "react";
import { getTrackAudioAnalysis } from "../../../requests/getTrackAudioAnalysis";
import { AudioAnalysis } from "../../../types/audioAnalysis";
// import BarsChart from "./BarsChart";
// import BeatsChart from "./BeatsChart";
// import SectionsChart from "./SectionsChart";
// import SegmentsChart from "./SegmentsChart";
// import TatumsChart from "./TatumsChart";

interface ITrackAnalysis {
  token: string;
}

const TrackAnalysis: React.FC<ITrackAnalysis> = ({ token }) => {
  const router = useRouter();

  const [trackAnalysis, setTrackAnalysis] = React.useState<AudioAnalysis>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const query = router.query;
    const getStuff = async () => {
      const trackAnalysis = await getTrackAudioAnalysis(
        token,
        query.id as string
      );
      setTrackAnalysis(trackAnalysis);
      setIsLoading(false);
    };
    getStuff();
  }, [token, router]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (trackAnalysis) {
    return (
      <Stack spacing='md'>
        {/* <BarsChart bars={trackAnalysis.bars} />
        <BeatsChart beats={trackAnalysis.beats} />
        <SectionsChart sections={trackAnalysis.sections} />
        <SegmentsChart segments={trackAnalysis.segments} />
        <TatumsChart tatums={trackAnalysis.tatums} /> */}
      </Stack>
    );
  }

  return (
    <div>
      <Text color={"white"}>Track Analysis</Text>
    </div>
  );
};

export default TrackAnalysis;
