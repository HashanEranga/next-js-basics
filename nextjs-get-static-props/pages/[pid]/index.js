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

export async function getStaticProps(context) {
  var { params } = context;
  var productId = params.pid;

  var filePath = path.join(process.cwd(), "data", "DUMMY_DATA.json");
  var jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  var product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProps: product,
    },
  };
}

// since prerendering need to notify what are the paths to pre generate them
export async function getStaticPaths() {
    return {
        paths : [
            {params : {pid : "p1"}},
            {params : {pid : "p2"}},
            {params : {pid : "p3"}},
            // {params : {pid : "p4"}},
            // {params : {pid : "p5"}},
            // {params : {pid : "p6"}},
        ],
        // all the dynamic paths must be defined
        // fallback : false 
        // will gen the page dynamically need to handle 
        fallback : true

        // will wait till the page load dynamically. No need to handle
        // fallback : "blocking"
    }
}
