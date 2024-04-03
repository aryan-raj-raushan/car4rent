export const formatDuration = (duration) => {
  const matches = duration.match(/PT(\d+H)?(\d+M)?/);

  let hours = 0;
  let minutes = 0;

  if (matches) {
    hours = matches[1] ? parseInt(matches[1]) : 0;
    minutes = matches[2] ? parseInt(matches[2]) : 0;
  }

  const formattedHours = hours > 0 ? `${hours}h` : "";
  const formattedMinutes = minutes > 0 ? `${minutes}m` : "";

  return formattedHours || formattedMinutes
    ? `${formattedHours} ${formattedMinutes}`
    : "0h";
};

export const getDurationInMinutes = (durationString) => {
  const match = durationString.match(/PT(\d+H)?(\d+M)?/);
  if (match) {
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    return hours * 60 + minutes;
  }
  return 0;
};
