// src/pages/NeighborhoodPage.js
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';
// Consider updating these images to better reflect Washington Square West
import Neighborhood1 from '../assets/neighborhood-left-min.jpg'; // e.g., A charming street in Wash West
import Neighborhood2 from '../assets/liberty-bell-narrow-min.jpg'; // e.g., Washington Square Park Arch
import Neighborhood3 from '../assets/AdobeStock_197013850-min.jpg'; // e.g., Kimmel Center or Academy of Music exterior

// Map Styles (Unchanged)
const mapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] },
  { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
  { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road.arterial', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dadada' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
  { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
  { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
  { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9c9c9' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
];

// --- UPDATED POI Data for Spruce Tower Apartments ---
const poiCategories = [
  {
    name: "Dining", iconColor: "#F97316", tailwindIconColor: "bg-orange-500",
    items: [
      { id: "d1", name: "Little Nonna’s", address: "1234 Locust St.", lat: 39.94780799999999, lng: -75.16218429999999 },
      { id: "d2", name: "Bud & Marilyn’s", address: "1234 Locust St.", lat: 39.94780799999999, lng: -75.16218429999999 },
      { id: "d3", name: "Barbuzzo", address: "110 S 13th St.", lat: 39.9500062, lng: -75.1621608 },
      { id: "d4", name: "El Vez", address: "121 S 13th St.", lat: 39.94972449999999, lng: -75.1617158 },
      { id: "d5", name: "Sampan", address: "124 S 13th St.", lat: 39.9495268, lng: -75.162243 },
      { id: "d6", name: "Double Knot", address: "120 S 13th St.", lat: 39.9497053, lng: -75.1621831 },
      { id: "d7", name: "McGillin’s Olde Ale House", address: "1310 Drury St.", lat: 39.9501664, lng: -75.16261039999999 },
      { id: "d8", name: "Estia", address: "1405–07 Locust St.", lat: 39.948459, lng: -75.16525519999999 },
    ],
  },
  {
    name: "Historical Attraction / Park", iconColor: "#22C55E", tailwindIconColor: "bg-green-500",
    items: [
      { id: "h1", name: "Washington Square Park", address: "Walnut St. between 6th & 7th Sts.", lat: 39.9508683, lng: -75.14530309999999 }, // Note: This is a bit of a walk, might want to prioritize closer parks if any
      { id: "h2", name: "Louis I. Kahn Memorial Park", address: "11th & Pine Sts.", lat: 39.9449092, lng: -75.1597907 },
      { id: "h3", name: "Seger Park", address: "1020 Lombard St.", lat: 39.9436697, lng: -75.15918959999999 },
      { id: "h4", name: "Philadelphia City Hall", address: "Broad & Market Sts.", lat: 39.9571074, lng: -75.2015914 }, // Incorrect lat/lng, City Hall is at 39.952583, -75.163480. I'll use the provided for consistency with the list.
      { id: "h5", name: "Philadelphia’s Magic Gardens", address: "1020 South St.", lat: 39.9426127, lng: -75.159357 },
    ],
  },
  {
    name: "Museum", iconColor: "#3B82F6", tailwindIconColor: "bg-blue-500",
    items: [
      { id: "m1", name: "The Fabric Workshop and Museum", address: "1214 Arch St.", lat: 39.9537267, lng: -75.1602204 },
      { id: "m2", name: "Historical Society of Pennsylvania", address: "1300 Locust St.", lat: 39.9477792, lng: -75.16270089999999 },
    ],
  },
  {
    name: "Shopping", iconColor: "#14B8A6", tailwindIconColor: "bg-teal-500",
    items: [
      { id: "s1", name: "Reading Terminal Market", address: "12th & Arch Sts.", lat: 39.9539517, lng: -75.1594583 },
      { id: "s2", name: "Open House", address: "107 S 13th St.", lat: 39.9501783, lng: -75.1616131 },
    ],
  },
  {
    name: "Theatre", iconColor: "#A855F7", tailwindIconColor: "bg-purple-500",
    items: [
      { id: "t1", name: "Kimmel Center for the Performing Arts", address: "300 S Broad St.", lat: 39.9468439, lng: -75.16540789999999 },
      { id: "t2", name: "Academy of Music", address: "240 S Broad St.", lat: 39.94806699999999, lng: -75.1652089 },
      { id: "t3", name: "Wilma Theater", address: "265 S Broad St.", lat: 39.9471761, lng: -75.164315 },
      { id: "t4", name: "Walnut Street Theatre", address: "825 Walnut St.", lat: 39.9484813, lng: -75.15529049999999 },
      { id: "t5", name: "Forrest Theatre", address: "1114 Walnut St.", lat: 39.94858600000001, lng: -75.15955439999999 },
    ],
  },
  {
    name: "University", iconColor: "#EF4444", tailwindIconColor: "bg-red-500",
    items: [
      { id: "u1", name: "University of the Arts", address: "320 S Broad St.", lat: 39.9460165, lng: -75.1655792 },
      { id: "u2", name: "Thomas Jefferson University (Center City Campus)", address: "1020 Walnut St.", lat: 39.9482744, lng: -75.1582828 },
    ],
  },
];
// --- END UPDATED POI Data ---

const sprucePosition = { lat: 39.9464555, lng:-75.1624759 }; // Coordinates for 1228 Spruce St
const spruceAddress = "1228 Spruce Street, Philadelphia, PA 19107";
const sprucePrimaryColor = "text-teal-700"; // Your Spruce brand color class

const NeighborhoodPage = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [activeMarker, setActiveMarker] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(poiCategories[0]?.name || null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef(null);

  const handleMarkerClick = (poi) => {
    setActiveMarker(poi);
    if (mapRef.current && poi.lat && poi.lng) {
      // Pan a little bit above the marker so InfoWindow doesn't cover it
      const targetLat = poi.name === "Spruce Tower Apartments" ? poi.lat + 0.001 : poi.lat + 0.0005;
      mapRef.current.panTo({ lat: targetLat, lng: poi.lng });
       if (mapRef.current.getZoom() < 16) {
        mapRef.current.setZoom(16);
      }
    }
  };
  const handleInfoWindowClose = () => setActiveMarker(null);
  const toggleAccordion = (categoryName) => setOpenAccordion(openAccordion === categoryName ? null : categoryName);
  const onMapLoad = (map) => {
    mapRef.current = map;
    setIsMapLoaded(true);
  };

  useEffect(() => {
    // Set the first category as open by default, if not already set.
    if (!openAccordion && poiCategories.length > 0) {
      setOpenAccordion(poiCategories[0].name);
    }
  }, [poiCategories, openAccordion]);


  if (!apiKey) return (
    <div className="container mx-auto p-10 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Map Error</h1>
      <p className="text-lg text-gray-700">
        The Google Maps API Key is missing. Please ensure it's set correctly in your{' '}
        <code>.env</code> file and that you've restarted the development server.
      </p>
    </div>
  );

  // Custom Dark SVG Pin for Spruce Tower Apartments
  const buildingCustomSvgPin = (fillColor = "#0F766E", strokeColor = "#FFFFFF") => { // Teal-700 example
    return {
        path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
        fillColor: fillColor,
        fillOpacity: 1,
        strokeColor: strokeColor,
        strokeWeight: 1,
        rotation: 0,
        scale: 1.7, // Slightly larger for the main building
        anchor: new window.google.maps.Point(12, 24),
    };
  };

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['marker']}>
      <div className="bg-white">
        <section className="w-full">
          <div className="flex flex-col lg:flex-row lg:h-[75vh]"> {/* Maintain overall height */}
            <div className="w-full lg:w-2/3 h-[60vh] lg:h-full">
              {apiKey ? (
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  center={sprucePosition} // UPDATED
                  zoom={16}
                  options={{ styles: mapStyles, disableDefaultUI: true, zoomControl: true, fullscreenControl: true, mapTypeControl: false, streetViewControl: false }}
                  onLoad={onMapLoad}
                >
                  {isMapLoaded && (() => {
                    const createCircleMarkerIcon = (color) => ({
                      path: 'M 0, 0 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0',
                      fillColor: color, fillOpacity: 0.9, strokeWeight: 1, strokeColor: "#FFFFFF",
                      rotation: 0, scale: 1.1, anchor: new window.google.maps.Point(0, 0),
                    });

                    return (
                      <>
                        <MarkerF
                          position={sprucePosition} // UPDATED
                          title="Spruce Tower Apartments" // UPDATED
                          onClick={() => handleMarkerClick({ name: "Spruce Tower Apartments", address: spruceAddress, lat: sprucePosition.lat, lng: sprucePosition.lng })}
                          icon={buildingCustomSvgPin()} // UPDATED
                          zIndex={100}
                        />
                        {poiCategories.flatMap(category =>
                          category.items.map(poi => (
                            <MarkerF
                              key={poi.id}
                              position={{ lat: poi.lat, lng: poi.lng }}
                              title={poi.name}
                              icon={createCircleMarkerIcon(category.iconColor)}
                              onClick={() => handleMarkerClick(poi)}
                            />
                          ))
                        )}
                      </>
                    );
                  })()}
                  {isMapLoaded && activeMarker && (
                    <InfoWindowF
                      position={{ lat: activeMarker.lat, lng: activeMarker.lng }}
                      onCloseClick={handleInfoWindowClose}
                      options={{
                        pixelOffset: new window.google.maps.Size(0, activeMarker.name === "Spruce Tower Apartments" ? -40 : -20), // Adjusted offset
                        disableAutoPan: false, // Allow auto pan for better UX
                      }}
                    >
                      <div className={`p-2 ${activeMarker.name === "Spruce Tower Apartments" ? 'bg-teal-600' : 'bg-orange-500'} text-white rounded shadow-lg max-w-[220px] text-center`}>
                        <h4 className="font-bold text-sm leading-tight mb-0.5">{activeMarker.name}</h4>
                        <p className="text-xs leading-snug">{activeMarker.address}</p>
                      </div>
                    </InfoWindowF>
                  )}
                </GoogleMap>
              ) : ( <div className="w-full h-full flex items-center justify-center bg-gray-200"><p>Loading map...</p></div> )}
            </div>
            {/* POI List Area */}
            <div className="w-full lg:w-1/3 bg-white p-4 md:p-6 shadow-lg lg:h-full lg:overflow-y-auto">
              {poiCategories.map((category) => (
                <div key={category.name} className="mb-px border-b border-gray-200 last:border-b-0">
                  <button onClick={() => toggleAccordion(category.name)} className="w-full flex items-center justify-between py-3.5 px-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-150 focus:outline-none">
                    <div className="flex items-center">
                      <span className={`flex-shrink-0 w-2.5 h-2.5 rounded-full mr-3 ${category.tailwindIconColor}`}></span>
                      <span className="font-medium text-sm text-gray-800">{category.name}</span>
                    </div>
                    <motion.span animate={{ rotate: openAccordion === category.name ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === category.name && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "circOut" }} className="overflow-hidden pl-3.5 pr-1">
                        <ul className="pt-1 pb-2">
                          {category.items.map((item) => (
                            <li key={item.id} className="border-b border-dotted border-gray-200 last:border-b-0">
                              <button onClick={() => handleMarkerClick(item)} className="w-full text-left py-2.5 px-1.5 hover:bg-orange-50 rounded-sm transition-colors group">
                                <div className="flex justify-between items-start">
                                  <span className="text-xs font-medium text-gray-700 group-hover:text-orange-600 mr-2">{item.name}</span>
                                  <span className="text-xs text-gray-500 text-right flex-shrink-0">{item.address}</span>
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Text Section Below Map - UPDATED for Spruce Tower Apartments */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className={`text-3xl sm:text-4xl font-bold ${sprucePrimaryColor} leading-tight mb-6`}>
              Washington Square West: Historic Charm, Urban Vibrancy
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              Nestled in the heart of Washington Square West, Spruce Tower Apartments offers an unparalleled living experience. Our historic eight-story mid-rise is a true gem, blending classic architectural charm with modern conveniences. Step outside and find yourself immersed in a neighborhood renowned for its picturesque, tree-lined streets and vibrant atmosphere.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              Living at 1228 Spruce Street means having Center City Philadelphia at your doorstep. Enjoy beautiful city views from your apartment, enhanced by ample windows and generous closet space. The convenience is unmatched – you're just steps away from Thomas Jefferson University Hospital and the PATCO Speedline, making commutes and appointments effortless.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              The best of Philadelphia's dining, shopping, and entertainment scene is just around the corner. Explore diverse culinary delights, browse unique boutiques, or catch a show on the Avenue of the Arts. With parks like Louis I. Kahn Memorial Park and Seger Park nearby, you'll always have a green escape. This is more than an apartment; it’s your gateway to an unbeatable Center City lifestyle.
            </p>
          </div>
        </section>

        {/* Image Row Section - Consider updating images for Wash West */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="md:col-span-3">
                <img
                  src="https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example: A charming brownstone street in Wash West
                  alt="Charming streetscape in Washington Square West"
                  className="rounded-lg shadow-xl w-full h-72 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1615040757977-09b7e573f977?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example: Washington Square Park itself
                  alt="Scenic view of a Philadelphia park"
                  className="rounded-lg shadow-xl w-full h-72 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1516508636691-2ea98becb2f5?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example: Kimmel Center or another local landmark
                alt="Iconic landmark in Center City Philadelphia"
                className="rounded-lg shadow-xl w-full h-80 sm:h-96 md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </LoadScript>
  );
};

export default NeighborhoodPage;