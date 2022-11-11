import desktop from './images/image-product-desktop.jpg';
import mobile from './images/image-product-mobile.jpg';

function App() {
	return (
		<>
			<div className="bg-secondary-cream h-screen">
				<div className="bg-white flex max-w-lg">
					<div>
						<img src={desktop}></img>
					</div>
					<div>
						<h2 className="uppercase font-montserrat text-neutral-darkgrayishblue">
							Perfume
						</h2>
						<h1 className="font-fraunces text-neutral-verydarkblue">
							Gabrielle Essence Eau De Parfum
						</h1>
						<h3 className="font-montserrat text-neutral-darkgrayishblue">
							A floral, solar and voluptous intrepretation composed by Olivier
							Polge, Perfumer-Creator for the house of CHANEL
						</h3>

						<div>$149.99</div>
						<div>$169.99</div>

						<button>Add to Cart</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
