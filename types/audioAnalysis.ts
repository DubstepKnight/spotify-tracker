export type AudioAnalysis = {
  bars: Bar[];
  beats: Beat[];
  meta: Meta;
  sections: Section[];
  segments: Segment[];
  tatums: Tatum[];
  track: {
    analysis_sample_rate: number;
    analysis_channels: number;
    end_of_fade_in: number;
    start_of_fade_out: number;
    loudness: number;
    tempo: number;
    tempo_confidence: number;
    time_signature: number;
    time_signature_confidence: number;
    key: number;
    key_confidence: number;
    mode: number;
    mode_confidence: number;
    codestring: string;
    code_version: number;
    echoprintstring: string;
    echoprint_version: number;
    synchstring: string;
    synch_version: number;
    rhythmstring: string;
    rhythm_version: number;
  };
};

export type Meta = {
  analyzer_version: string;
  platform: string;
  detailed_status: string;
  status_code: number;
  timestamp: number;
  analysis_time: number;
  input_process: string;
};

export type Bar = {
  start: number;
  duration: number;
  confidence: number;
};

export type Beat = {
  start: number;
  duration: number;
  confidence: number;
};

export type Segment = {
  start: number;
  duration: number;
  confidence: number;
  loudness_start: number;
  loudness_max_time: number;
  loudness_max: number;
  loudness_end: number;
  pitches: [number];
  timbre: [number];
};

export type Section = {
  start: number;
  duration: number;
  confidence: number;
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  mode_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
};

export type Tatum = {
  start: number;
  duration: number;
  confidence: number;
};
