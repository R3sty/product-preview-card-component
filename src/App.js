import desktop from './images/image-product-desktop.jpg';
import mobile from './images/image-product-mobile.jpg';

function App() {
	return (
		<>
			<div className="bg-secondary-cream h-screen grid  place-items-center">
				<div className="flex flex-col md:grid md:grid-cols-2 rounded-md bg-white max-w-lg h-max items-center m-4">
					<img className="" src={mobile}></img>
					<img
						className="hidden md:rounded-tl-md md:rounded-bl-md"
						src={desktop}
					></img>
					<div className="p-6">
						<h2 className="uppercase font-montserrat text-neutral-darkgrayishblue tracking-widest text-xs">
							Perfume
						</h2>
						<h1 className="font-fraunces text-neutral-verydarkblue text-3xl mt-3 mb-4">
							Gabrielle Essence Eau De Parfum
						</h1>
						<p className="font-montserrat text-neutral-darkgrayishblue text-xs">
							A floral, solar and voluptous intrepretation composed by Olivier
							Polge, Perfumer-Creator for the house of CHANEL
						</p>
						<div className="flex justify-start items-center mt-4">
							<div className="font-fraunces text-secondary-darkcyan text-2xl mr-4">
								$149.99
							</div>
							<div className="text-xs text-neutral-darkgrayishblue line-through">
								$169.99
							</div>
						</div>
						<div className="flex justify-center mt-4">
							<button className="bg-secondary-darkcyan p-3 rounded text-montserrat text-white text-xs font-bold w-48 flex justify-center items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4 mr-2"
								>
									<path
										d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
										fill="#FFF"
									/>
								</svg>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
