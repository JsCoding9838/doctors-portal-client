import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teath whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          our services
        </h3>
        <h2 className="text-center text-3xl md:text-4xl">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="hero min-h-screen mt-12">
        <div className="hero-content flex justify-between flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <h1 className="text-4xl font-bold ">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 pr-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              hic accusamus ut iste soluta voluptatem assumenda inventore ab
              sapiente voluptate quis fugiat deleniti nulla excepturi officiis
              id quas culpa perferendis, in et. Inventore natus asperiores
              dolorum nisi laboriosam odio tempore?
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
          <div className="flex-1">
            <div className="text-center">
              <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
