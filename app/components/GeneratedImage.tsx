import Image from "next/image";

interface GeneratedImageProps {
  imageUrl: string;
}

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
  return (
    <div className="mt-8">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image width={650} height={700} src={imageUrl} alt="Generated artwork" className="object-cover" />
      </div>
    </div>
  );
}
