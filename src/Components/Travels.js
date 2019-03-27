import React from 'react'
import Travel from './Travel'

const travels = [
    {
        destination: "Hobbiton",
       country: "Nouvelle-Zelande",
       photo: "https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-NOUVELLE-ZELANDE.jpg",
       distance: "18 942 km"
    },

    {
        destination:"Petra",
       country: "Jordanie",
       photo: "https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-jordanie.jpg",
       distance: "4 713 km"
    },
    {
        destination: "Budva",
        country:"Montenegro",
        photo: "https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-MONTENEGRO.jpg",
        distance: "2 051 km"
    },
    {
        destination: "Salvador de Bahia",
        country: "Bresil",
        photo: "https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-BRESIL.jpg",
        distance: "8 802km"
    },
    {
        destination: "Vigan",
        country: "Philippines",
        photo:"https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-PHILIPPINES.jpg",
        distance: "10 942 km"
    },
]

const Travels = () => (
    <div>
      {travels.map(travel => (
        <Travel {...travel} />
      )
      )}
    </div>
  );

  export default Travels
