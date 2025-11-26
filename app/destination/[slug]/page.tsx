import { destination } from "@/components/destinations/destination-data";
import Banner from "@/components/common/Banner";
import PopularItineraries from "@/components/home/PopularItineraries";
import DestinationsOverview from "@/components/destinations/DestinationsOverview";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const getSlugBasedDestination = (slug: string) => {
    return destination.find((item) => item.bannerdetail.slug === slug);
  };

  const currentDestination = getSlugBasedDestination(slug);

  if (!currentDestination) {
    return <div className="text-center py-20">Destination Not Found</div>;
  }

  return (
    <div>
      <Banner
        image={currentDestination.bannerdetail.bannerimage}
        title={currentDestination.bannerdetail.bannertitle}
      />
      <div>
        <DestinationsOverview />
        <PopularItineraries
          title="Popular Itineraries"
          subtitle="Safari Itineraries Curated just for you"
        />
      </div>
    </div>
  );
}

export default Page;
