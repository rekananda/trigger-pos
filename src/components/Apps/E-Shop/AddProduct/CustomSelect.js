"use client";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import 'select2';

const CustomSelect = ({options}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    const $selectElement = $('.category-select');
    $selectElement.select2({
      placeholder: "Select a category",
      allowClear: false,
    });
    
    $selectElement.on('change', handleSelectChange);

    return () => {
      if ($selectElement.data('select2')) {
        $selectElement.select2('destroy');
      }
    };
  }, []);

  return (
    <select className="category-select w-100">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
