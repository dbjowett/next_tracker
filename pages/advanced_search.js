import Button from '../components/Button';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function AdvancedSearch() {
  const router = useRouter();

  const shipCodeInputRef = useRef();
  const countryOriginInputRef = useRef();
  const countryDestinationInputRef = useRef();

  //Handle Submissions from form
  function submitHandler(e) {
    e.preventDefault();
    const enteredShipCode = shipCodeInputRef.current.value;
    const enteredOriginCode = countryOriginInputRef.current.value;
    const enteredDestinationCode = countryDestinationInputRef.current.value;

    // This is a default JavaScript Object (JSON.stringify would make it JSON)
    const shippingInfo = {
      shipCode: enteredShipCode,
      origin: enteredOriginCode,
      destination: enteredDestinationCode
    };

    // Post configuration
    const URL = 'https://practice-e7eb9-default-rtdb.asia-southeast1.firebasedatabase.app/packages.json';
    const config = {
      method: 'POST',
      body: JSON.stringify(shippingInfo),
      // Makes it clear what type of data is incoming
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(URL, config).then(() => router.push('/'));
  }

  return (
    <>
      <h1>Advanced Search</h1>
      <form action='' onSubmit={submitHandler}>
        <label htmlFor='shippingCode'>Type Shipping Code</label>
        <input required type='text' name='' id='shippingCode' ref={shipCodeInputRef} /> <br />
        <label htmlFor='countryOrigin'>Type Origin Country</label>
        <input type='text' id='countryOrigin' ref={countryOriginInputRef} /> <br />
        <label htmlFor='countryDestination'>Type Destination Country</label>
        <input type='text' id='countryDestination' ref={countryDestinationInputRef} /> <br />
        <Button text='Search' />
      </form>
    </>
  );
}
