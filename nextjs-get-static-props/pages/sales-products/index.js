import { useEffect, useState } from "react";
import useSWR from "swr";

export default function SalesProductsPage(props) {
  //   const [isLoading, setIsLoading] = useState(false);
  const [sales, setSale] = useState(props.sales);
  const { data, error } = useSWR(
    "https://sales-proj-default-rtdb.firebaseio.com/sales.json", Fetcher
  );

  useEffect(() => {
    if (data) {
      const salesList = [];
      for (const key in data) {
        //   console.log(key);
        salesList.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      // setIsLoading(false);
      setSale(salesList);
    }
  }, [data]);

  if (error) {
    return <h1>Error Occured</h1>;
  }

  if (!data && !sales) {
    return <h1>Loading ... </h1>;
  }

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://sales-proj-default-rtdb.firebaseio.com/sales.json")
  //       .then((responce) => responce.json())
  //       .then((data) => {
  //         const salesList = [];
  //         for (const key in data) {
  //           console.log(key);
  //           salesList.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setIsLoading(false);
  //         setSale(salesList);
  //         console.log(salesList);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return <h1>Loading ...</h1>;
  //   }

  //   if (!sales) {
  //     return <h1>No data to show</h1>;
  //   }

  return (
    <>
      <h1>Sales List</h1>
      <ul>
        {/* {console.log(sales)} */}
        {sales.map((saleItem) => (
          <li key={saleItem.id}>
            {saleItem.username} - ${saleItem.volume}
          </li>
        ))}
      </ul>
    </>
  );
}

function Fetcher(url) {
    return fetch(url, {
     headers: {
      'Content-Type': 'application/json',
     },
    }).then(response => response.json());
   }
   
export async function getStaticProps(){
    return fetch("https://sales-proj-default-rtdb.firebaseio.com/sales.json")
          .then((responce) => responce.json())
          .then((data) => {
            const salesList = [];
            for (const key in data) {
              console.log(key);
              salesList.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume,
              });
            }
            return {props : {sales : salesList}, revalidate: 10}
            // console.log(salesList);
          });
        
}