var fs = require("fs/promises");
var path = require("path");

export default function ProjectDetailPage(props) {
    var {loadedProps} = props
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
