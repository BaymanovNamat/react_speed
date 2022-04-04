import Alert from "./components/Alert/Alert";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {

  const example1 = ["Apple", "red", "big"];

  const [name, color, size] = example1;


  const example2 = ["toyota", "camry", "black", "expensive"];

  const [make, modal, carColor, price] = example2;

  const example3 = {mersname: "Mers", model: "Benz", merscolor: "silverful", mersprice: "expensive", };

  const {mersname, model, merscolor, mersprice,} = example3;

  return (
    <div className="App">
      <div>This {name} is {color} and {size}.</div>

      <div>
        This {make} {modal} is {carColor}  and {price}.
      </div>

      <div>
        This {mersname} {model} is {merscolor}  and {mersprice}.
      </div>


      <div>
        <Alert size="25px" color="green">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione maxime id voluptas perspiciatis accusantium, a nesciunt eos dicta, reprehenderit veniam aperiam illum omnis, nemo hic. Sed, architecto modi? Porro.
        </Alert>

        
      </div>

      <article>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione maxime id voluptas perspiciatis accusantium, a nesciunt eos dicta, reprehenderit veniam aperiam illum omnis, nemo hic. Sed, architecto modi? Porro.
        </Paragraph>
      </article>
    </div>
  );
}

export default App;
