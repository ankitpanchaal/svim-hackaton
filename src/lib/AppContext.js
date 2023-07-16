
'use client'
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [product, setProduct] = useState(null);
    const [hero, setHero] = useState(null);
    const [category, setCategory] = useState(null);

    // Define functions to update the states
    const updateProduct = (newProduct) => setProduct(newProduct);
    const updateCategory = (newCategory) => setCategory(newCategory);
    const updateHero = (value) => setHero(value);

    // Create the context value object
    const contextValue = {
        product,
        category,
        updateHero,
        hero,
        updateProduct,
        updateCategory,
    };

    // Provide the context value to the children components
    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};
