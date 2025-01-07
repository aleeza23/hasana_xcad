import React from 'react'

export const Error = () => {
    return (
        <section className="flex justify-center items-center h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl gradient-text">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something's missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-200 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <a href="/" className="inline-flex text-white bg-primary-600 bg-gradient-to-tr from-[#814E00] to-[#C07F00]  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
                </div>
            </div>
        </section>
    )
}
