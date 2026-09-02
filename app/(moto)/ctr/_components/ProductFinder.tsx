"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import {
  Package,
  Car,
  Search,
  LayoutGrid,
  Settings,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function ProductFinder() {
  const [activeTab, setActiveTab] = useState<"product" | "vehicle">("product");
  const [keyword, setKeyword] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const makes = [
    "Hyundai",
    "Kia",
    "Toyota",
    "Honda",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Ford",
    "Chevrolet",
    "Audi",
    "Volkswagen",
  ];

  const models = [
    "Elantra",
    "Sonata",
    "Tucson",
    "Santa Fe",
    "Sportage",
    "Sorento",
    "Camry",
    "Corolla",
    "Civic",
    "Accord",
    "CR-V",
  ];

  const vehicles = [
    "2024 - Present",
    "2020 - 2023",
    "2016 - 2019",
    "2012 - 2015",
    "2008 - 2011",
  ];

  const categories = [
    "Brake Pads",
    "Shock Absorber & Strut",
    "Tie Rod End",
    "Ball Joint",
    "Control Arm",
    "Stabilizer Link",
    "Rack End",
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="find-product">
      <div className="custom-container flex flex-col gap-10 lg:gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto gap-3.5 w-full" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <span className="sub-heading">
              Find The Right Product
            </span>
            <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
          </div>

          <Typography variant="h2" className="font-bold leading-tight mt-1 text-center">
            Search by Product or Vehicle
          </Typography>

          <Typography variant="p" className="text-center max-w-[80%] mx-auto leading-relaxed">
            Find the right parts quickly and accurately from our extensive catalogue, designed to simplify your search process and improve efficiency. With detailed product information and a wide selection of components, our catalogue helps you identify the exact parts you need with confidence and ease.
          </Typography>
        </div>

        {/* Search Card */}
        <div
          className="w-full max-w-[80%] mx-auto bg-white rounded-2xl border border-gray-300 p-6 sm:p-8 lg:p-10 flex flex-col gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Top Tabs: by Product / by Vehicle */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 border-b border-gray-100 pb-2">
            <button
              type="button"
              onClick={() => setActiveTab("product")}
              className={`flex items-center gap-2.5 pb-2 text-sm sm:text-base font-primary font-semibold transition-all relative cursor-pointer ${
                activeTab === "product"
                  ? "text-[var(--color-primary)]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Package className={`w-4 h-4 sm:w-5 sm:h-5 ${activeTab === "product" ? "text-[var(--color-primary)]" : "text-gray-400"}`} />
              <span>by Product</span>
              {activeTab === "product" && (
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--color-primary)] rounded-full" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("vehicle")}
              className={`flex items-center gap-2.5 pb-2 text-sm sm:text-base font-primary font-semibold transition-all relative cursor-pointer ${
                activeTab === "vehicle"
                  ? "text-[var(--color-primary)]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Car className={`w-4 h-4 sm:w-5 sm:h-5 ${activeTab === "vehicle" ? "text-[var(--color-primary)]" : "text-gray-400"}`} />
              <span>by Vehicle</span>
              {activeTab === "vehicle" && (
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--color-primary)] rounded-full" />
              )}
            </button>
          </div>

          {/* Option 1: Search Input Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
            {/* Search Icon Box */}
            <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-lg bg-gray-100/80 items-center justify-center text-gray-500">
              <Search className="w-5 h-5" />
            </div>

            {/* Input Field */}
            <div className="relative flex-1">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter a part name, product code or keyword..."
                className="w-full px-4 py-2.5 sm:py-3 text-sm text-gray-800 rounded-lg border border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder-gray-400 font-secondary transition-all"
              />
            </div>

            {/* Find the Product Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 text-sm sm:text-base font-primary font-semibold text-[var(--color-primary)] bg-white border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm cursor-pointer shrink-0"
            >
              <span>Find the Product</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Divider with 'Or' */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-200/80 w-full" />
            <span className="absolute bg-white px-4 text-xs sm:text-sm text-gray-400 font-medium font-secondary select-none">
              Or
            </span>
          </div>

          {/* Option 2: 4 Dropdowns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            
            {/* 1. Select Make */}
            <div className="relative flex items-center rounded-lg border border-gray-300 bg-white hover:border-gray-400 px-3.5 py-2.5 transition-colors">
              <Car className="w-4 h-4 text-[var(--color-primary)] shrink-0 mr-2.5" />
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-gray-700 focus:outline-none appearance-none cursor-pointer pr-6 font-primary"
              >
                <option value="">Select Make</option>
                {makes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
            </div>

            {/* 2. Select Model */}
            <div className="relative flex items-center rounded-lg border border-gray-300 bg-white hover:border-gray-400 px-3.5 py-2.5 transition-colors">
              <LayoutGrid className="w-4 h-4 text-[var(--color-primary)] shrink-0 mr-2.5" />
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-gray-700 focus:outline-none appearance-none cursor-pointer pr-6 font-primary"
              >
                <option value="">Select Modal</option>
                {models.map((mod) => (
                  <option key={mod} value={mod}>
                    {mod}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
            </div>

            {/* 3. Select Vehicle */}
            <div className="relative flex items-center rounded-lg border border-gray-300 bg-white hover:border-gray-400 px-3.5 py-2.5 transition-colors">
              <Settings className="w-4 h-4 text-[var(--color-primary)] shrink-0 mr-2.5" />
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-gray-700 focus:outline-none appearance-none cursor-pointer pr-6 font-primary"
              >
                <option value="">Select Vehicle</option>
                {vehicles.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
            </div>

            {/* 4. Select Category */}
            <div className="relative flex items-center rounded-lg border border-gray-300 bg-white hover:border-gray-400 px-3.5 py-2.5 transition-colors">
              <LayoutGrid className="w-4 h-4 text-[var(--color-primary)] shrink-0 mr-2.5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-gray-700 focus:outline-none appearance-none cursor-pointer pr-6 font-primary"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
            </div>

          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center pt-2">
            <Button
              text="Find the Product"
              href="#products"
              variant="outline"
              showIcon={true}
              className="px-8 py-2.5 text-sm sm:text-base font-semibold"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
