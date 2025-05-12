import { WaveComponent } from '../components/waveComponent'
import Navbar from '../components/navbarComponent'
import { AboutUsPage } from './aboutUsPage'
import 'animate.css/animate.min.css'
import DemoComponent from '../components/demoComponent'
import { Demmo } from '../components/demoComponentt'
import { SectionServices } from '../components/sectionServices'


export const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="w-auto h-auto animate__animated animate__fadeInUp">

                <div className="w-full h-[100vh] bg-gray-600 relative overflow-hidden">
                    <div className="hidden md:block">
                        <img
                            className="absolute w-full h-full object-cover transition-all duration-700 ease-in-out transform opacity-50"
                            src="https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/495457741_695791952957318_8744095689192312131_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qoziDiR_0c8Q7kNvwFpARO0&_nc_oc=AdktEFw8ZcJHPnsrpLmwIja3mj-ZIa7bO4dK9UGFf1_-J1ouPLSWC2ve3xNIfXqkDt0&_nc_zt=23&_nc_ht=scontent.fgua9-2.fna&_nc_gid=dRBk_KegMxfawvcr7FxrBA&oh=00_AfJXg7MKjw465E264OKSY18y_L5OBWXjGTDP_A_9Ty5H0g&oe=682562EF"
                            alt="Fondo escritorio"
                        />
                    </div>
                    <div className="block md:hidden">
                        <img
                            className="absolute w-full h-full object-cover transition-all duration-700 ease-in-out transform opacity-50"
                            src="https://scontent.fgua2-1.fna.fbcdn.net/v/t39.30808-6/495125970_695791826290664_4051862188455919439_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MWwq1iaJ4LUQ7kNvwEL08wL&_nc_oc=AdkoPS89xrgzbQCf1FPzQddkcRHv14dPLKnTpHXuU1pzJodu8JPUmwgoCvyvhrebZS3MIKheCN-wP-lS9PCdALhv&_nc_zt=23&_nc_ht=scontent.fgua2-1.fna&_nc_gid=hn7wgJbYbfiIepc9Thh-6g&oh=00_AfGvX57emNVDFupZFDMHssPSjrWMrzIbU6dBR_z_hoP4zQ&oe=681DDAF9"
                            alt="Fondo móvil"
                        />
                    </div>
                    <div>
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center animate-bounce">
                            BIENVENIDO A TALLER EL MASTER
                        </h1>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full">
                        <WaveComponent />
                    </div>
                </div>
                <AboutUsPage />
                <SectionServices />

            </div>

        </>

    )
}
