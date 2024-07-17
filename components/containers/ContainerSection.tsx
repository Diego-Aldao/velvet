import React from "react";

interface Props {
  children: React.ReactNode;
  titulo: string;
  headerStyles?: string;
  containerStyles?: string;
}

interface PropsFullWidthNoHeader extends Pick<Props, "children"> {}

export function ContainerSectionFullWidthNoHeader({
  children,
}: PropsFullWidthNoHeader) {
  return (
    <ContainerSection
      titulo=""
      headerStyles="hidden"
      containerStyles="lg:px-4 xl:px-12 2xl:px-12 md:max-w-full"
    >
      {children}
    </ContainerSection>
  );
}

export default function ContainerSection({
  children,
  titulo,
  headerStyles,
  containerStyles,
}: Props) {
  return (
    <section
      className={`px-4 md:px-10 lg:px-12 my-20 mx-auto md:max-w-[1440px] w-full 2xl:px-0 flex flex-col gap-8 ${containerStyles}`}
    >
      <header className={headerStyles}>
        <h2 className="uppercase text-xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] italic">
          {titulo}
        </h2>
      </header>
      {children}
    </section>
  );
}
