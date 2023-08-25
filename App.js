import React from "react";
import ReactDOM from "react-dom/client";

/*   
    1) Header
        - Logo
        - Nav Items(right side)
        - Cart
    2) Body
        - Search bar
        - Restaurants List
            - Restaurant card
                - Image
                - Name
                - Rating
    3) Footer
        - Links
        - Copyrights

*/

const Title = () => (
  <h1 id="title" key="t1">
    Food Villa
  </h1>
);

// composing components
const Header = () => {
  return (
    <div className="header">
      <Title></Title>
      <div className="nav-iteams">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//config driven UI
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Domino's Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410476",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
      city: "21",
      area: "althan bhatar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ldtibwymvzehvmdwl8la",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
      locality: "Adajan FC",
      parentId: 236673,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "410476",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81094",
      name: "Richie Rich Juices & Shakes",
      uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
      locality: "Parle Point",
      parentId: 771,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "81094",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311443",
      name: "Siddhi Icecream & Thick Shake",
      uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "spd3y5gok3vvwqulgmda",
      cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "siddhi-icecream-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
      locality: "Athwa",
      parentId: 387846,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311443",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const burgerKing = {
  name: "Burger King",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/myqxncmpuipwvxytc80k",
  cousines: ["Burger", "American"],
  rating: "4.2",
};

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <img
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${props.restaurant.data?.cloudinaryImageId}`}
//       />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.data?.avgRating} stars</h4>
//     </div>
//   );
// };
// const RestaurantCard = ({ restaurant }) => {
//   const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
//   return (
//     <div className="card">
//       <img
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{avgRating} stars</h4>
//     </div>
//   );
// };
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      {/* {RestaurantCard(restaurantList[0])} */}
      {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} /> */}
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
//react.Fragment - component exported by react- it is like a empty tag
//jsx can only have one parent
// const jsx = () => {
//   <React.Fragment>
//     <h1>jsx</h1>
//     <h2>jsx22</h2>
//   </React.Fragment>;
// };
// const jsx = () => {
//   <>
//     <h1>jsx</h1>
//     <h2>jsx22</h2>
//   </>;
// };
// const styleObj = {
//   backgroundColor: "red",
// };
// const Jsx = () => (
//   <div style={styleObj}>
//     <h1>jsx</h1>
//     <h2>jsx22</h2>
//   </div>
// );
//OR

const jsx = (
  <div
    style={{
      backgroundColor: "red",
    }}
  >
    <h1>jsx</h1>
    <h2>jsx22</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);
root.render(<AppLayout />);
