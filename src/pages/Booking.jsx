import { useState } from 'react'

function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pickupLocation: '',
    destination: '',
    travelDate: '',
    pickupTime: '',
    serviceType: '',
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const currentDate = new Date()
  const today = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setErrors((currentErrors) => {
      const updatedErrors = { ...currentErrors, [name]: '' }

      if (name === 'pickupLocation' || name === 'destination') {
        updatedErrors.pickupLocation = ''
        updatedErrors.destination = ''
      }

      return updatedErrors
    })
    setSuccessMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}
    const pickupLocation = formData.pickupLocation.trim()
    const destination = formData.destination.trim()

    if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.'
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter exactly 10 digits.'
    }

    if (!pickupLocation) {
      newErrors.pickupLocation = 'Please enter a pickup location.'
    }

    if (!destination) {
      newErrors.destination = 'Please enter a destination.'
    }

    if (
      pickupLocation &&
      destination &&
      pickupLocation.toLowerCase() === destination.toLowerCase()
    ) {
      newErrors.pickupLocation = 'Pickup and destination must be different.'
      newErrors.destination = 'Pickup and destination must be different.'
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select a travel date.'
    } else if (formData.travelDate < today) {
      newErrors.travelDate = 'Travel date cannot be in the past.'
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Please select a pickup time.'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      setSuccessMessage('')
      return
    }

    setSuccessMessage('Your ride has been booked successfully!')
  }

  return (
    <main>
      <h1>Book a Ride</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'full-name-error' : undefined}
          />
          {errors.fullName && <p id="full-name-error" role="alert">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            id="phone-number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.phoneNumber)}
            aria-describedby={errors.phoneNumber ? 'phone-number-error' : undefined}
          />
          {errors.phoneNumber && <p id="phone-number-error" role="alert">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label htmlFor="pickup-location">Pickup Location</label>
          <input
            id="pickup-location"
            name="pickupLocation"
            type="text"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.pickupLocation)}
            aria-describedby={errors.pickupLocation ? 'pickup-location-error' : undefined}
          />
          {errors.pickupLocation && <p id="pickup-location-error" role="alert">{errors.pickupLocation}</p>}
        </div>

        <div>
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            name="destination"
            type="text"
            value={formData.destination}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.destination)}
            aria-describedby={errors.destination ? 'destination-error' : undefined}
          />
          {errors.destination && <p id="destination-error" role="alert">{errors.destination}</p>}
        </div>

        <div>
          <label htmlFor="travel-date">Travel Date</label>
          <input
            id="travel-date"
            name="travelDate"
            type="date"
            min={today}
            value={formData.travelDate}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.travelDate)}
            aria-describedby={errors.travelDate ? 'travel-date-error' : undefined}
          />
          {errors.travelDate && <p id="travel-date-error" role="alert">{errors.travelDate}</p>}
        </div>

        <div>
          <label htmlFor="pickup-time">Pickup Time</label>
          <input
            id="pickup-time"
            name="pickupTime"
            type="time"
            value={formData.pickupTime}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.pickupTime)}
            aria-describedby={errors.pickupTime ? 'pickup-time-error' : undefined}
          />
          {errors.pickupTime && <p id="pickup-time-error" role="alert">{errors.pickupTime}</p>}
        </div>

        <div>
          <label htmlFor="service-type">Service Type</label>
          <select
            id="service-type"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.serviceType)}
            aria-describedby={errors.serviceType ? 'service-type-error' : undefined}
          >
            <option value="" disabled>Select a service</option>
            <option value="city-ride">City Ride</option>
            <option value="airport-transfer">Airport Transfer</option>
            <option value="outstation-ride">Outstation Ride</option>
            <option value="hourly-rental">Hourly Rental</option>
          </select>
          {errors.serviceType && <p id="service-type-error" role="alert">{errors.serviceType}</p>}
        </div>

        <button type="submit">Book Ride</button>
      </form>
      {successMessage && <p role="status">{successMessage}</p>}
    </main>
  )
}

export default Booking
