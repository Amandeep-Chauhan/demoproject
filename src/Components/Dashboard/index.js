import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import PopularStores from './PopularStores';
import TrendingOffers from './TrendingOffers';

const Dashboard = () => {
   const bannerData = [];
   const categoryData =[];
   const brandData = [];
   const storeData = [];

	return (
		<div>
			<Banner data={bannerData} />
			<Categories data={categoryData} />
			<PopularStores data={brandData} />
			<TrendingOffers data={storeData} /> 
		</div>
	);
}

export default Dashboard;
