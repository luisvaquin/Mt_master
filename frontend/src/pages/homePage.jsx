import React from 'react'
import { WaveComponent } from '../components/waveComponent'
import Navbar from '../components/navbarComponent'
import { ServicesPage } from './servicesPage'
import { AboutUsPage } from './aboutUsPage'
import 'animate.css/animate.min.css'


export const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="w-auto h-auto animate__animated animate__fadeInUp">

                <div className="w-full h-[100vh] bg-gray-600 relative overflow-hidden">
                    <div className="hidden md:block">
                        <img
                            className="absolute w-full h-full object-cover transition-all duration-700 ease-in-out transform opacity-50"
                            src="https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/495457741_695791952957318_8744095689192312131_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YgZdUbLwDfAQ7kNvwHs3umY&_nc_oc=AdntfAW7bbEndmL-geHWwackDdVS6xtVkVFIy-C6mVDkqRyEk-1HpkPFEi-KYb2DeLo1_ghqiTr2EUetNei3hNag&_nc_zt=23&_nc_ht=scontent.fgua2-2.fna&_nc_gid=hn7wgJbYbfiIepc9Thh-6g&oh=00_AfGIvUXIjpRfsed1baOGTESbyEm8ltjeh0orszEWIfS3vQ&oe=681DEA6F"
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

            </div>

        </>

    )
}
