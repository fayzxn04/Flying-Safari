/* eslint-disable @next/next/no-img-element */
export default function DestinationsOverview() {
  return (
    <div className="section-container main-container">
      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-4 px-4 lg:px-20 justify-items-start py-4 lg:py-15">
        {/* First Grid */}
        <div className="space-y-3">
          <p className="text-secondary uppercase text-sm md:text-lg font-light">
            MAASAI MARA NATIONAL RESERVE
          </p>
          <h2 className="text-[28px] lg:text-5xl font-light">
            Step Into the Wild Heart of Kenya
          </h2>
          <p className="text-dark-grey leading-relaxed text-base">
            The Masai Mara National Reserve, located in southwest Kenya, is a
            breathtaking expanse of gently rolling savannah stretching across
            1,510 square kilometers. Bordering Tanzania&apos;s Serengeti
            National Park to the south, the Mara forms part of one of the
            world&apos;s most celebrated ecosystems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voted as one of the New Seven Wonders of the World, the Masai Mara
            attracts visitors from across the globe, eager to witness its
            unmatched beauty and the spectacle of the Great Migration.
          </p>
        </div>
        {/* Second Grid */}
        <div className="mx-auto">
          <img
            src="/images/destination-individual-picture.png"
            alt="picture"
            className="lg:size-[450px] size-80 "
          />
        </div>
        {/* Third Grid */}
        <div className="space-y-3 lg:items-center flex flex-col lg:justify-center">
          <p className="text-gray-700 leading-relaxed">
            Renowned as Kenya&apos;s premier safari destination, the reserve is
            a sanctuary of incredible wildlife diversity. Here, lions, cheetahs,
            elephants, rhinos, buffalo, wildebeest, giraffes, zebras, and
            countless other species roam freely across the plains, offering
            visitors to every safari an every game drive an unforgettable
            experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The name of the reserve reflects its heritage. &apos;Mara&apos;
            honors the Maasai people, the region&apos;s indigenous inhabitants,
            while &quot;Mara&quot; means &quot;spotted&quot; in their language,
            a tribute to the acacia trees, shrubs, and bushes that scatter the
            sweeping landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
