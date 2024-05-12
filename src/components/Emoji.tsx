import meh from "../assets/neutral-face.256x256.png";
import thumbsUp from "../assets/thumbs-up-emoji.228x256.png";
import bullsEye from "../assets/bullseye.256x256.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "excetional", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
