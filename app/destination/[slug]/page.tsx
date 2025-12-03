import { destination } from "@/components/destinations/destination-data";
import Banner from "@/components/common/Banner";
import PopularItineraries from "@/components/home/PopularItineraries";
import DestinationsOverview from "@/components/destinations/DestinationsOverview";
import DestinationThingsToDo from "@/components/destinations/DestinationThingsToDo";
import BestVisitTime from "@/components/destinations/BestVisitTime";
import IntrestingFacts from "@/components/destinations/IntrestingFacts";

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
      <div className="main-container bg-[url('/images/bg-dindividual.webp')] bg-cover bg-center bg-no-repeat ">
        <DestinationsOverview />
        {/* <DestinationThingsToDo />
        <BestVisitTime />
        <IntrestingFacts />
        <PopularItineraries
          title="Popular Itineraries"
          subtitle="Safari Itineraries Curated just for you"
        /> */}
        <section id="things-to-do">
          <DestinationThingsToDo />
        </section>

        <section id="when-to-go">
          <BestVisitTime />
        </section>

        <section id="interesting-facts">
          <IntrestingFacts />
        </section>

        <section id="itineraries">
          <PopularItineraries
            title="Popular Itineraries"
            subtitle="Safari Itineraries Curated just for you"
          />
        </section>
      </div>
    </div>
  );
}

export default Page;
