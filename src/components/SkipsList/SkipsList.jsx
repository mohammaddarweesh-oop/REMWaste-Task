import React, { useState, useEffect } from "react";
import useSkips from "../../hooks/useSkips";
import NavigationBar from "../NavigationBar/NavigationBar";
import Carousel from "../Carousel";
import SelectedSkipSummary from "../SelectedSkipSummary";
import "./SkipsList.scss";

const SkipsList = () => {
  const { skips, loading, error } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {}, [skips]);

  if (loading) return <p>Loading skips...</p>;
  if (error) return <p>Error fetching skips: {error.message}</p>;

  const handleSelect = (skipId) => {
    const skip = skips.find((s) => s.id === skipId);
    if (skip && !skip.allowed_on_road) return;
    setSelectedSkip(skipId === selectedSkip ? null : skipId);
  };

  const selectedSkipData = selectedSkip
    ? skips.find((skip) => skip.id === selectedSkip)
    : null;

  const calculateTotalPrice = (price, vat) => {
    const vatAmount = (price * vat) / 100;
    return `£${(price + vatAmount).toFixed(2)}`;
  };

  const getSkipImage = (size) => {
    const skipImages = {
      4: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
      6: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg",
      8: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg",
      10: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg",
      12: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg",
      14: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg",
      16: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg",
      20: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg",
      20: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/18-yarder-skip.jpg",
      40: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg",
    };
    return (
      skipImages[size] ||
      `https://via.placeholder.com/300x200?text=Skip+${size}yd`
    );
  };

  return (
    <div className="skips-container">
      <NavigationBar />
      <header>
        <h1>Choose Your Skip Size</h1>
        <h3>Select the skip size that best suits your needs</h3>
      </header>
      <Carousel
        skips={skips}
        selectedSkip={selectedSkip}
        handleSelect={handleSelect}
        calculateTotalPrice={calculateTotalPrice}
        getSkipImage={getSkipImage}
      />
      <SelectedSkipSummary
        selectedSkipData={selectedSkipData}
        calculateTotalPrice={calculateTotalPrice}
        getSkipImage={getSkipImage}
      />
    </div>
  );
};

export default SkipsList;
