const defaults: { [key: string]: string } = {
  INSTAGRAM: "#e13465",
  TWITTER: "#1c99e6",
  YOUTUBE: "#f10002",
  TWITCH: "#8942f2",
  TIKTOK: "#fe2c55",
  TELEGRAM: "#338be1",
  DISCORD: "#525de9",
  LINKEDIN: "#0e76a8",
};
const suggested: { [key: string]: string } = {
  one: "#0e4057",
  two: "#067ad4",
  three: "#ff645d",
  four: "#ffee53",
  five: "#fffbcf",
};

export const recomendedColor = (name: string): string => {
  return name.toUpperCase() in defaults
    ? defaults[name.toUpperCase()]
    : "#ffffff";
};
export const colorsSuggested = (): string[] => Object.values(suggested);
export const calculateTextColor = (color: string): string => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  const result = Math.round((r * 299 + g * 587 + b * 114) / 1000);
  return result > 127 ? "#000000" : "#ffffff";
};
