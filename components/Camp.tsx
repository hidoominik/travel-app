import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 mt-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuran"
          peopleJoined="50+ joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Moutain Camp"
          subtitle="Somewhere in the wild"
          peopleJoined="50+ joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl-rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 captialize text-white">
            <strong>Feeling lost?</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl-regular-16 mt-5 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Image
            className="camp-quote"
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
