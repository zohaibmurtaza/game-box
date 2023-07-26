interface Prop {
  rating: number;
}
const Emoji = ({ rating }: Prop) => {
  if (rating < 3) return null;
  const emojiMap: {[key: number]: string} = {
    3: "😐",
    4: "🎯",
    5: "👍",
  };
  return emojiMap[rating];
};

export default Emoji;
