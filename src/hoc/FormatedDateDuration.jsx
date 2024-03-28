const formatDuration = (duration) => {
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

export default formatDuration;
