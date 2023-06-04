import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <section
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          My listings will show here
          {/* {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))} */}
        </section>
      </Container>
    </ClientOnly>
  );
}
