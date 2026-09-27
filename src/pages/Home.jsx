import { Link } from 'react-router'

function Home() {
  return (
    <main>
      <section>
        <h1>Your Reliable Ride, Anytime</h1>
        <p>Book a safe, reliable taxi in just a few simple steps.</p>
        <Link to="/booking">Book a Ride</Link>
      </section>

      <section>
        <h2>Why Choose Us?</h2>

        <article>
          <h3>Safe Rides</h3>
          <p>Travel with confidence on every ride.</p>
        </article>

        <article>
          <h3>Quick Booking</h3>
          <p>Arrange your ride quickly and easily.</p>
        </article>

        <article>
          <h3>24/7 Availability</h3>
          <p>Book a ride whenever you need one.</p>
        </article>
      </section>
    </main>
  )
}

export default Home
