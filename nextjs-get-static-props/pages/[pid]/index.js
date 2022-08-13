var fs = require("fs/promises");
var path = require("path");

export default function ProjectDetailPage(props) {
    var {loadedProps} = props
    if(!loadedProps){
        return(
            <h1>Loading ...</h1>
        )
    }
    var {id, prod_name, description} = loadedProps
  return (
    <>
      <h1>{prod_name}</h1>
      <h2>{id}</h2>
      <p>{description}</p>
    </>
  );
}

async function getData(){
  var filePath = path.join(process.cwd(), "data", "DUMMY_DATA.json");
  var jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  var { params } = context;
  var productId = params.pid;

  const data = await getData()
 
  var product = data.products.find((product) => product.id === productId);

  if (!product){
    return {notFound: true}
  }

  return {
    props: {
      loadedProps: product,
    },
  };
}

// since prerendering need to notify what are the paths to pre generate them
export async function getStaticPaths() {
  const data = await getData()
  const ids = data.products.map(product => product.id)
  const pathsWithParams = ids.map((id)=>({params : {pid : id}}))
    return {
        paths : pathsWithParams,
        // all the dynamic paths must be defined
        // fallback : false 
        // will gen the page dynamically need to handle 
        fallback : true

        // will wait till the page load dynamically. No need to handle
        // fallback : "blocking"
    }
}
