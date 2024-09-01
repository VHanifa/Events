import Header from "./layout/Header/Header";
import "./assets/styles/index.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./layout/Footer/Footer";
import PageSection from "./components/PageSection/PageSection";
import { events } from "./constants/data";
import SignupContainer from "./components/SignupContainer/SignipContainer";
import Destinations from "./components/Destinations/Destinations";

function App() {
  const popularEvents = events.sort(
    (a, b) => parseInt(b.applied) - parseInt(a.applied)
  );

  const today = new Date();

  const upcomingEvents = events
    .map((event) => ({
      ...event,
      dateObj: new Date(event.date),
    }))
    .filter((event) => event.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj)
    .map(({ dateObj, ...rest }) => rest);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PageSection title="Popular events near you" list={popularEvents} />
        <PageSection title="Upcoming events" list={upcomingEvents} />
        <Destinations />
        <SignupContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
