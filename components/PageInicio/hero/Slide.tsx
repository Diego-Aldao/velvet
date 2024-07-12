import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
}

interface PropsFullImageSlide {
  imagenUrl: StaticImageData;
  children: React.ReactNode;
}
export function FullImageSlide({ imagenUrl, children }: PropsFullImageSlide) {
  return (
    <Slide>
      <div className="imagen relative h-full after:absolute after:inset-0 after:bg-main-black/0 bg-secondary rounded-md overflow-hidden before:absolute before:inset-0 before:from-main-black/75 before:bg-gradient-to-r before:to-transparent">
        <Image
          src={imagenUrl}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,0]"
        />
      </div>
      {children}
    </Slide>
  );
}

interface PropsGridSlide {
  children: React.ReactNode;
}

export function GridSlide({ children }: PropsGridSlide) {
  return (
    <Slide customStyles="grid grid-cols-2 grid-rows-3 gap-2 relative sm:grid-rows-5 sm:grid-cols-7 rounded-md ">
      {children}
    </Slide>
  );
}

interface PropsVideoSlide extends Pick<Props, "children"> {
  urlVideoMobile: string;
  urlVideoDesktop: string;
}

export function VideoSlide({
  children,
  urlVideoDesktop,
  urlVideoMobile,
}: PropsVideoSlide) {
  return (
    <Slide>
      <div className="video relative after:absolute after:inset-0 after:bg-main-black/25 w-full h-full rounded-xl overflow-hidden">
        <video
          autoPlay={true}
          loop={true}
          muted
          className="w-full object-cover h-full lg:hidden "
        >
          <source src={urlVideoMobile} type="video/mp4" />
        </video>
        <video
          autoPlay={true}
          loop={true}
          muted
          className="w-full object-cover h-full hidden lg:block "
        >
          <source src={urlVideoDesktop} type="video/mp4" />
        </video>
      </div>

      {children}
    </Slide>
  );
}

function Slide({ children, customStyles }: Props) {
  return (
    <div
      className={`h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] relative rounded-xl ${customStyles}`}
    >
      {children}
    </div>
  );
}
