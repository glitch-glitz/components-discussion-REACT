import { Avatar } from './components/Avatar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Profile } from './components/Profile';

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			<Header title={'Evening checkout'} />
			<main className="p-4">
				<Profile
					name={'Godwin'}
					title={'React dev'}
					location={'Nairobi, Kenya'}
					avatar={
						'https://preview.redd.it/i-dont-remember-if-it-was-ever-mentioned-but-how-did-iroh-v0-tnt0gpu0xhy81.jpg?width=640&crop=smart&auto=webp&s=a97415b1f36a10f31bfb66a0b85d7da124b3a583'
					}
				/>
				<Avatar
					src={
						'https://upload.wikimedia.org/wikipedia/en/1/12/Azula.png'
					}
					alt={'Azula'}
				/>
			</main>
			<Footer message={'Copyright ©️'} />
		</div>
	);
}

export default App;
