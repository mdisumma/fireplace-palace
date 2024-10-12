import Image from "next/image";

export function ImageCard(props) {
  return (
    <Image
      onClick={props.onClick}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
}
