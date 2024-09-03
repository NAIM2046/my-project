
import PriceOption from "../priceOption/priceOption";
const Gymeprice = () => {
    const gyms = [
        {
          name: "FitNation",
          location: "123 Fitness Blvd, Cityville",
          membership: {
            monthly: 49.99,
            annually: 499.99
          },
          
          facilities: [
            "Weight Lifting",
            "Cardio Machines",
            "Swimming Pool",
            "Sauna"
          ] ,
          price: 100
          
        },
        {
          name: "PowerHouse Gym",
          location: "456 Strength Ave, Metropolis",
          membership: {
            monthly: 39.99,
            annually: 399.99
          },
         
          facilities: [
            "Weight Lifting",
            "Cardio Machines",
            "Basketball Court",
            "Hot Tub"
          ] , 
          price:200 
        },
        {
          name: "Wellness Center",
          location: "789 Health Rd, Townsville",
          membership: {
            monthly: 59.99,
            annually: 599.99
          },
         
          facilities: [
            "Weight Lifting",
            "Cardio Machines",
            "Swimming Pool",
            "Spa",
            "Swimming Pool",
            "Swimming Pool",
          ],
          price:300 

        }
      ];
      
    return (
        <div>
            <h3>best price list</h3>
            <div className=" md:grid grid-cols-3 ">
            {
                gyms.map(option =><PriceOption option={option}></PriceOption> )
            }
            </div>
                
           
        </div>
    );
};

export default Gymeprice;