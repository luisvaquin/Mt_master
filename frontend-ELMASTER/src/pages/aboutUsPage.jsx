import React from 'react'
import "../styles/animationStyle.css"

export const AboutUsPage = () => {
    return (
        <>
            <div className="p-5 appear">
                <section id="aboutMe" className="aboutMe">
                    <div className="container mx-auto mt-[1rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                            <div className="bg-white p-5 sm:p-10 rounded-md shadow-md">
                                <h3 className="text-2xl mb-5 font-bold max-sm:pl-[20%]">Sobre nosotros</h3>
                                <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px] ">
                                    Somos un taller mecánico especializado en la reparación y mantenimiento de vehículos. Contamos con un equipo de mecánicos altamente capacitados y con años de experiencia en la industria. Nos dedicamos a brindar un servicio de calidad y a satisfacer las necesidades de nuestros clientes. Nuestro objetivo es garantizar la seguridad y el rendimiento óptimo de su vehículo, utilizando tecnología avanzada y piezas de alta calidad.
                                </p>
                            </div>
                            <div className="flex justify-center appear">
                                <img className="max-w-full h-auto" src="/undraw1.svg" alt="Graphic Design" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
