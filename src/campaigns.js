import blueberry from './assets/blueberry.png'
import chocolate from "./assets/chocolate.png";
import brownie from "./assets/brownie.png";
import pumpkin from "./assets/pumpkin.png";
import cupcake from "./assets/cupcake.png";

const campaigns = [
    {
      title: "Blueberry Cake Campaign",
      createdOn: "Created on 14 july",
      date: "25 July 2020 - 01 Aug 2020",
      clicks: 300,
      price: 3400,
      city: "Chennai",
      button: "green",
      platform: 'facebook',
      toggle: true,
      src: blueberry
    },
    {
      title: "Chocolate Cake Campaign",
      createdOn: "Created on 20 Jan",
      date: "25 July 2020 - 01 Aug 2020",
      clicks: 210,
      price: 3400,
      city: "Coimbatore",
      button: "yellow",
      platform: 'facebook',
      toggle: false,
      src: chocolate
    },
    {
      title: "Brownie Cake Campaign",
      createdOn: "Created on 12 Jun",
      date: "25 July 2020 - 01 Aug 2020",
      clicks: 123,
      price: 3400,
      city: "Erode",
      button: "red",
      platform: 'facebook',
      toggle: false,
      src: brownie
    },
    {
      title: "Pumpkin Cake Campaign",
      createdOn: "Created on 28 Feb",
      date: "25 July 2020 - 01 Aug 2020",
      clicks: 435,
      price: 3400,
      city: "Coimbatore",
      button: "green",
      platform: 'youtube',
      toggle: true,
      src: pumpkin
    },
    {
      title: "Cupcake Campaign",
      createdOn: "Created on 10 Jan",
      date: "25 July 2020 - 01 Aug 2020",
      clicks: 123,
      price: 3400,
      city: "Coimbatore",
      button: "green",
      platform: 'google',
      toggle: true,
      src: cupcake
    },
  ];

  export default campaigns