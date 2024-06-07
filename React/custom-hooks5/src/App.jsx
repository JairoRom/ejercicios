

function App() {
  function getCurrentLocation() {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
        },
        (err) => {
          setError(err);
          setLoading(false);
        }
      );
}

  return (
    getCurrentLocation()
    
  )
}

export default App
